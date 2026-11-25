---
title: "Gradient Descent, Slowly"
description: "用尽量少的形式化语言，重新理解梯度下降的方向与步长。"
pubDatetime: 2026-11-12
modDatetime: 2026-11-23
kind: note
tags: [数学, 学习, 机器学习]
related: [slow-ideas]
featured: true
draft: false
---

梯度下降的核心直觉很简单：**沿着下降最快的方向，走一小步，然后重复。**

## 方向

对于可微函数 $f(\theta)$，梯度 $\nabla_\theta f(\theta)$ 指向上升最快的方向。因此下降方向是它的相反数：

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta f(\theta_t)
$$

其中 $\eta$ 是学习率。

## 步长

学习率太大，会在谷底两侧来回震荡；太小，则会走得很慢。一个用于演示的最小实现：

```python
def step(theta, grad, lr=0.01):
    return theta - lr * grad

theta = 2.0
for _ in range(100):
    theta = step(theta, grad=2 * theta)
print(theta)  # 逐渐接近 0
```

## 和写作的相似之处

理解一个概念也像梯度下降：每次只修正一点点，方向比速度更重要。这与 [[slow-ideas|缓慢的想法]] 中的判断意外地一致。
