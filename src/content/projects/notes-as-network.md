---
title: "Notes as a Network"
description: "在团队内部试用双向链接组织设计决策记录，四个月后暂停。"
pubDatetime: 2026-11-21
modDatetime: 2026-11-23
status: finished
featured: true
cover: violet
stack: [Markdown, TypeScript, D3]
links:
  - label: "实验笔记（内部，已下线）"
    url: "https://github.com/hellothankyousorry/garden"
relatedNotes: [on-connections, note-taking-as-conversation]
tags: [知识管理, 协作, 实验]
draft: false
---

## 问题

Miles 的设计决策散落在 4 个工具里。当笔记超过 300 条，目录树基本失去了意义——没有人知道一条三年前的决策该放在哪个文件夹。

## 做了什么

- 用 `[[双链]]` 记录显式关系，所有决策条目都只有一个「理由」字段是必填的；
- 构建时生成反向链接，并给每个条目一个稳定的 slug，方便在 Slack 里引用；
- 用 D3 画了一张 300 节点的关系图，节点大小按被引用次数计算。

## 结果

前六周使用的人有 11 个，第四个月剩下 3 个。

真正被用起来的只有两件事：**反向链接**（「这个决定影响了谁」）和 **slug 引用**（在会议里直接贴链接）。关系图很好看，没有人用。

## 复盘

失败的原因不是工具，而是**记录成本**：写一条决策要填 4 个字段，而 Slack 里说一句话只要 5 秒。

如果重来一次，我会让第一条记录的成本降到接近零，再谈结构。相关思考见 [[on-connections|关于连接]] 和 [[note-taking-as-conversation|笔记作为对话]]。
