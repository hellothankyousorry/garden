# A Living Garden

一个持续生长的个人数字空间：笔记、项目、履历、此刻与关于我。基于成熟开源项目 [AstroPaper](https://github.com/satnaing/astro-paper)（MIT）深度改造，部署在 GitHub Pages。

线上地址：<https://hellothankyousorry.github.io/garden/>

## 快速开始

需要 Node.js **>= 22.23.4**。

```bash
npm ci
npm run dev          # 本地开发
npm run build        # 类型检查 + 构建 + Pagefind 索引
npm run preview      # 预览 dist
```

> 本机 Node 版本不足时，可用 `npx node@22.23.4 node_modules/astro/bin/astro.mjs dev` 临时运行。

## 页面

- `/` 首页：身份表达、入口、最近笔记、精选项目、关系图
- `/notes/` 笔记：Seeds / Notes / Evergreen 筛选、标签、关键词过滤
- `/notes/[slug]/` 笔记详情：Markdown、数学公式、代码、目录、反向链接、相关内容
- `/projects/` 与 `/projects/[slug]/` 项目展览与详情页
- `/resume/` 履历时间线（支持打印 / 保存 PDF）
- `/about/` 关于
- `/now/` 此刻
- `/tags/` 与 `/tags/[tag]/` 标签漫游
- `/search/` 静态全文搜索（Pagefind）

## 内容在哪里改

| 想改什么             | 编辑位置                                        |
| -------------------- | ----------------------------------------------- |
| 名字、简介、社交链接 | `src/data/profile.json`                         |
| 履历                 | `src/data/resume.json`                          |
| 当前状态             | `src/data/now.json`                             |
| 关于页正文           | `src/content/pages/about.md`                    |
| 笔记                 | `src/content/notes/*.md`                        |
| 项目                 | `src/content/projects/*.md`                     |
| 视觉设计系统         | `src/styles/theme.css`、`src/styles/global.css` |
| 站点 URL / base path | `src/site.config.ts`                            |

详见 [CONTENT.md](./CONTENT.md)。

## 技术栈

Astro 7 · TypeScript · Markdown / MDX · CSS 设计变量 · Pagefind · KaTeX · GitHub Actions。

保留自 AstroPaper：内容集合、类型校验、SEO/OG 基础、Pagefind 搜索、可访问性基础、构建流程。
重构部分：完整视觉系统、页面结构、笔记/项目内容模型、知识关联、字体与图形语言。详见 [ARCHITECTURE.md](./ARCHITECTURE.md) 与 [CHANGELOG.md](./CHANGELOG.md)。

## 许可

- 本站改造代码：MIT（继承上游许可，见 [LICENSE](./LICENSE)）
- 上游 AstroPaper：MIT，Copyright © 2023 Sat Naing
- 字体：SIL OFL 1.1，见 `licenses/fonts/OFL.txt`

## 文档

[DESIGN.md](./DESIGN.md) · [CONTENT.md](./CONTENT.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [DEPLOYMENT.md](./DEPLOYMENT.md) · [CHANGELOG.md](./CHANGELOG.md)
