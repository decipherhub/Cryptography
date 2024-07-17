---
title: Discrete Fourier Transform
---

# Definition
The Discrete Fourier Transform (DFT) refers to the Fourier transform applied to discrete values (discrete time to discrete frequency). When computed using the Fast Fourier Transform (FFT), the DFT can be calculated quickly in O(nlogn) time for n values. Therefore, it can be used to efficiently compute polynomial multiplication or vector convolution, which would otherwise require $O(n^2)$ time (where n is the degree of the polynomial).

# n-th root of unity

^1735c9

The **n-th root of unity** is a concept that plays a crucial role in the computation of the DFT. Mathematically, an n-th root of unity is a complex number $\omega$ that satisfies $\omega^n=1$. Therefore, there can be n such $\omega$, each of which can be expressed as $\omega^k = e^{-2\pi ik/n}$, where k is an integer ranging from 0 to n−1, and i is the imaginary unit. These roots are uniformly distributed on the unit circle.
![[root of unity.png]]
[Image source](https://homepages.math.uic.edu/~jan/mcs472/discretefourier.pdf)

# Discrete Fourier Transfrom
Let x = $[x_0, x_1, ..., x_{n-1}]^T$ be an n-dimensional vector, the discrete fourier transform of x is y = $[y_0, y_1, ..., y_{n-1}]^T$ where ^8ba133

$$y_k = \sum_{j=0}^{n-1} x_j \omega^{jk},\quad w=e^{-i2\pi/n}, k=0,1,2, ..., N-1$$ The inverse transform can be defined as

$$x_n= {1\over N} \sum_{j=0}^{n-1} y_j \omega^{-jk}$$