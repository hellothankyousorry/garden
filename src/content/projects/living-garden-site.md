---
title: "Living Garden Site"
description: "用 Astro 搭的个人知识空间：笔记、项目与履历共用一套视觉语言。"
pubDatetime: 2026-11-25
modDatetime: 2026-11-26
status: ongoing
featured: true
cover: coral
stack: [Astro, TypeScript, Markdown, Pagefind]
links:
  - label: "GitHub repository"
    url: "https://github.com/hellothankyousorry/garden"
relatedNotes: [a-garden-of-thoughts, seed-to-evergreen]
tags: [Web, 设计, 知识管理]
draft: false
---

## 背景

2024 年底，我在一次设计评审上被问到：「这些决策记录，半年后谁看？」

当时的答案是没有人。团队有 Notion、有 Confluence、有 Figma 注释，但没有一个地方能让那些「为什么这样决定」的片段彼此靠近。于是我想自己做一个：一个只服务一个人的知识空间，可以公开，但不为流量而写。

## 过程

- **2025 年 3 月**：先用 Obsidian 写了一个月，确认问题不是工具，而是缺少可引用的结构；
- **2025 年 5 月**：选定 Astro，因为静态构建对 9 篇笔记来说已经足够，且不需要数据库；
- **2025 年 7 月**：把「种子 / 笔记 / 常青」做成内容类型，而不是标签——它们决定卡片的语气和颜色；
- **2025 年 9 月**：加入 `[[wikilinks]]` 与反向链接，构建时计算，不依赖客户端；
- **2026 年 11 月**：整体重排版面，把所有大写字母标签换成衬线体和手写体。

## 几个具体的取舍

| 决定                  | 原因                         | 代价                   |
| --------------------- | ---------------------------- | ---------------------- |
| 不使用数据库          | 9 篇内容不值得一套后台       | 想改数据要重新部署     |
| Pagefind 而非 Algolia | 索引在构建时生成，无外部依赖 | 搜索结果只有标题和摘要 |
| 保留修改日期          | 让「这件事变了」成为可见信息 | 每次改一个字都会更新   |

## 现在的问题

移动端的手写字标题会和正文抢注意力，目前靠把脚本字往下挪解决，但不算优雅。参考 [[a-garden-of-thoughts|A Garden of Thoughts]] 里关于「不完美的一致性」的想法。

下一步想做的是把项目与笔记之间的关系可视化——现在只有列表，缺少可以走的地图。
