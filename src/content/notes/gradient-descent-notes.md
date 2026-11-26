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

如果把它画出来，$f(\theta)=\theta^2$ 上的轨迹是一条指数衰减的曲线：

$$
\theta_t = 2 \cdot (1 - 2\eta)^t
$$

当 $\eta = 0.01$ 时，每 35 步左右误差减半；当 $\eta = 0.6$ 时，$(1-2\eta)=-0.2$，符号每轮翻转——这就是震荡的来源。

## 和写作的相似之处

理解一个概念也像梯度下降：每次只修正一点点，方向比速度更重要。这与 [[slow-ideas|缓慢的想法]] 中的判断意外地一致。

## 为什么现在才看懂

我 2019 年上过一门机器学习课，当时能默写公式，却始终说不清「为什么学习率会影响收敛」。真正让我看懂的，是在一次设计评审里听同事说：「不要一次改三个变量，先只改一个。」

那句话和公式是同一件事。我花了五年才把它们连起来——这也说明，理解并不是沿着课程顺序发生的。相关讨论见 [[a-garden-of-thoughts|A Garden of Thoughts]]。
