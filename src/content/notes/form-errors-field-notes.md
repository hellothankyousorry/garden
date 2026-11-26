---
title: "Form Errors, Field Notes"
description: "关于错误提示的长期观察，来自两轮原型测试和一次不太成功的上线。"
pubDatetime: 2026-10-28
modDatetime: 2026-11-17
kind: note
tags: [交互设计, 可用性, 表单]
related: [buttons-people-miss, a-garden-of-thoughts]
draft: false
---

「安静表单」研究收集的八场访谈里，有六个人提到同一件事：**他们不看错误提示。**

不是不想看，是看不懂看哪一条。

## 错误提示的三个常见失败

- **位置**：提示出现在字段上方，用户已经在字段下方找；
- **语言**：写的是「格式不正确」，而不是「日期不能早于出发日」；
- **时机**：全部在提交后才出现，一次给五条。

## 我们试过的做法

第二轮原型里，把提示放在字段**下方 8px**，并且只写一条、一次只说明一个错误。测试中 5 人中有 4 人能在第一次提交后改正。

代价是：错误多的表单会显得更慢。这个取舍还没有结论，记在这里等下次回来。

细节的按钮问题见 [[buttons-people-miss|Buttons People Miss]]；对于「少提示」这件事的完整立场，见 [[a-garden-of-thoughts|A Garden of Thoughts]] 里关于克制的部分。
