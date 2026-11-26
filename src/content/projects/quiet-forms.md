---
title: "Quiet Forms"
description: "关于长表单错误提示的可用性研究：8 场访谈、3 轮原型、一份 9 页的小册子。"
pubDatetime: 2026-08-18
modDatetime: 2026-11-06
status: finished
featured: true
cover: tangerine
stack: [Figma, Maze, Interviewing]
links:
  - label: "研究小册子（PDF）"
    url: "https://github.com/hellothankyousorry/garden"
relatedNotes: [form-errors-field-notes, buttons-people-miss]
tags: [研究, 表单, 可用性]
draft: false
---

## 为什么做

旅行预订重构上线后，「填错日期」的工单下降了 38%，但「不知道哪里错了」的工单没有动。我想知道原因。

## 方法

- 8 位受访者，来自 3 个不同的出行场景；
- 第一轮：只观察他们填一份真实表单，不提示；
- 第二轮：把错误提示移到字段下方，只显示一条；
- 第三轮：去掉所有主动提示，只在提交后一次性标出。

## 结论

最有效的是第二轮。第三轮看起来更「安静」，但 8 人中有 5 人提交了两次以上才通过，其中一位说：「我宁愿它早点告诉我。」

这直接推翻了我原来的偏好——我一直以为更少的提示就是更好的设计。研究记录在 [[form-errors-field-notes|Form Errors, Field Notes]]，相关的按钮问题见 [[buttons-people-miss|Buttons People Miss]]。

## 传播

小册子印了 60 份，只有 4 个人告诉我读过。后来改成一张 A1 海报贴在会议室，反而被拍进群里两次。这件事让我写了 [[documentation-nobody-reads|Why Documentation Nobody Reads]]。
