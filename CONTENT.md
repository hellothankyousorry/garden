# Content Guide

所有内容都与代码分离。你通常只需要编辑 Markdown 或 JSON，不需要改组件。

## 1. 个人资料（JSON）

`src/data/profile.json`

```json
{
  "name": "Your Name",
  "nameZh": "你的名字",
  "monogram": "Y",
  "role": "...",
  "taglineZh": "一个持续生长的数字空间",
  "intro": "...",
  "location": "...",
  "email": "...",
  "socials": [{ "label": "GitHub", "url": "..." }]
}
```

`src/data/resume.json` 控制履历分组、时间线条目和技能；`src/data/now.json` 控制「此刻」状态卡。

> 当前仓库中的姓名、邮箱、地点、履历与项目均为**明确占位示例**，不会自动推断为真实信息。上线前请逐项替换。

## 2. 笔记

目录：`src/content/notes/`，一个 `.md` 文件 = 一篇笔记 = `/notes/<文件名>/`。

```markdown
---
title: "标题"
description: "一句话摘要"
pubDatetime: 2026-11-25
modDatetime: 2026-11-26          # 可选
kind: seed                        # seed | note | evergreen
tags: [知识花园, 方法]
related: [another-note-slug]      # 可选，显式关联
featured: true                    # 可选
draft: false                      # true 时不发布
---

正文，可写 [[another-note-slug|显示文字]] 创建内部链接。
```

### 内容类型

- `seed`：尚未成熟的问题或灵感；
- `note`：正在整理的知识和思考；
- `evergreen`：反复修订、长期有效的判断。

### 内部链接

使用 Obsidian 风格的 `[[slug]]` 或 `[[slug|显示文字]]`。构建时会自动转换为正确的站内链接（包含 GitHub Pages 的 `/garden` 前缀）。`slug` 是目标 Markdown 文件名。

### 反向链接与相关内容

- 反向链接在构建时扫描所有笔记的 `[[...]]` 自动生成；
- 相关内容 = 显式 `related` > 共同标签 > 反向链接；
- 项目详情页会显示 `relatedNotes` 中列出的笔记。

### 数学与代码

行内公式：`$f(x)=x^2$`；块级公式：`$$ ... $$`。代码块使用标准 Markdown 围栏，支持复制按钮。

## 3. 项目

目录：`src/content/projects/`。

```markdown
---
title: "项目名称"
description: "一句话介绍"
pubDatetime: 2026-11-25
status: ongoing                   # ongoing | finished | paused
featured: true
cover: coral                      # coral|violet|tangerine|teal|sky|rose
stack: [Astro, TypeScript]
links:
  - label: "源码"
    url: "https://github.com/..."
relatedNotes: [a-garden-of-thoughts]
tags: [Web, 设计]
draft: false
---

## 背景 / 过程 / 成果
```

正文支持与笔记相同的 Markdown、内部链接和数学公式。

## 4. 关于页

正文在 `src/content/pages/about.md`。侧栏的个人字段来自 `profile.json`。

## 5. 标签与搜索

- 标签由 frontmatter 自动汇总，无需维护单独列表；
- 搜索由 Pagefind 在 `npm run build` 后生成索引，新增内容后重新构建即可。

## 6. 中文手写字体子集

中文手写字体只包含当前展示文案用到的字符。若新增了展示型中文标题，请同步更新 `scripts/fetch-fonts.py` 中的 `ZH_HEADINGS`，然后运行：

```bash
python scripts/fetch-fonts.py
```
