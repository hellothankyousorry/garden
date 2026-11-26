---
title: "Atlas Kit"
description: "为数据看板做的一套开源图表规范与组件，覆盖 9 种视图。"
pubDatetime: 2026-05-14
modDatetime: 2026-09-21
status: ongoing
featured: false
cover: sky
stack: [Svelte, D3, TypeScript, Figma]
links:
  - label: "GitHub repository"
    url: "https://github.com/hellothankyousorry/garden"
relatedNotes: [design-system-is-a-promise, a-garden-of-thoughts]
tags: [开源, 数据可视化, 设计系统]
draft: false
---

## 从哪里来

在云图做数据看板时，我们的 20 多个看板里出现了 40 多种图表变体，其中不少是同一个意思的两种画法。

Atlas Kit 是那套规范的公开版本：只保留 9 种视图（折线、柱状、堆叠、散点、热力、漏斗、分布、地图、明细表），其余的一律归入这 9 种。

## 设计原则

- **颜色不是装饰**：所有序列色都过了一遍色盲模拟；
- **数字优先**：每个图表必须提供一份可以复制的表格；
- **可以退出**：组件不锁定样式，团队可以覆盖，但要显式声明。

第三条来自一次教训，记在 [[design-system-is-a-promise|A Design System Is a Promise]] 里。

## 现状

目前在 2 个内部产品里使用，GitHub 上有 78 颗星。最常被提的需求是「能不能加桑基图」，我一直没加——不是不会，是我找不到它在这 9 种视图里属于哪一类。

这个犹豫本身，大概比组件更值得记录。
