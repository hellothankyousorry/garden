"""Download and subset the licensed web fonts used by the site.

Fonts are served from Google Fonts and licensed under the SIL Open Font License
1.1. The Chinese display face is subset with the `text` parameter so only the
characters needed by display headings are shipped.

Run: python scripts/fetch-fonts.py
"""

from __future__ import annotations

import re
import urllib.parse
import urllib.request
from pathlib import Path

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)
OUT = Path(__file__).resolve().parent.parent / "public" / "fonts"
OUT.mkdir(parents=True, exist_ok=True)

ZH_HEADINGS = (
    "一个持续生长的数字空间此刻正在生长思想笔记项目履历关于种子常青手记灵感"
    "与创造之间生长的事物探索知识花园继续探索最近更新精选项目当前专注正在阅读"
    "正在学习正在构建关于我此刻教育经历工作经历研究成果技能与时间线回到首页"
    "查看全部笔记查看所有项目笔记常青树标签搜索写下让想法慢慢长成体系在这里"
    "思想彼此相遇自由流动未完成的想法持续完善的思考实践与作品关于这个空间"
    "正在发生的事情下一页返回全部相关内容引用了这些笔记被这些笔记引用相关项目"
    "用标签浏览按类型筛选所有类型没有找到内容请替换为你的名字请替换为你的"
    "自我介绍集合了散文式的实验性的和持续演化的欢迎来到这座尚未完成的花园"
    "今天明天昨天此刻现在未来阅读写作编码旅行摄影音乐艺术设计科学数学物理"
    "文学历史哲学心理学生物地理化学计算机人工智能机器学习深度学习语言"
)


def css(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as res:
        return res.read().decode("utf-8")


def download(url: str, name: str) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as res:
        data = res.read()
    (OUT / name).write_bytes(data)
    print(f"{name}: {len(data)} bytes")


def latin_url(text: str, family: str, style: str, weight: str) -> str:
    blocks = re.findall(r"@font-face\s*\{(.*?)\}", text, re.S)
    for block in blocks:
        if f"font-family: '{family}'" not in block:
            continue
        if f"font-style: {style}" not in block:
            continue
        if f"font-weight: {weight}" not in block:
            continue
        rng = re.search(r"unicode-range:\s*([^;]+);", block)
        if rng and "U+0000-00FF" not in rng.group(1):
            continue
        src = re.search(r"url\(([^)]+)\)", block)
        if src:
            return src.group(1)
    raise RuntimeError(f"No latin face for {family} {style} {weight}")


def main() -> None:
    families = (
        "Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Allura"
    )
    text = css(f"https://fonts.googleapis.com/css2?family={families}&display=swap")
    faces = [
        ("Playfair Display", "normal", "400", "playfair-variable.woff2"),
        ("Playfair Display", "italic", "400", "playfair-italic.woff2"),
        ("Allura", "normal", "400", "allura-regular.woff2"),
    ]
    for family, style, weight, filename in faces:
        url = latin_url(text, family, style, weight)
        download(url, filename)

    subset = urllib.parse.quote(ZH_HEADINGS)
    zh_css = css(
        f"https://fonts.googleapis.com/css2?family=Long+Cang&display=swap&text={subset}"
    )
    src = re.search(r"url\(([^)]+)\)", zh_css)
    if not src:
        raise RuntimeError("No Long Cang subset face returned")
    download(src.group(1), "longcang-subset.woff2")


if __name__ == "__main__":
    main()
