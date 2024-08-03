# Bootstrapping in Homomorphic Encryption

**Bootstrapping** is the process of converting a noisy ciphertext into a less noisy ciphertext using a secret key while it remains encrypted. This process allows the noise in encrypted data to be reduced through homomorphic decryption, enabling further homomorphic operations. Bootstrapping is a resource-intensive process and is a crucial component of fully homomorphic encryption (FHE) technology.

## Problem: Modulus Exhaustion

In FHE, each homomorphic multiplication consumes some of the modulus, which is a limited resource. Once the modulus is exhausted, no further multiplications are possible. Bootstrapping solves this issue by "lifting" the modulus.

## Definition of Bootstrapping

Given a CKKS ciphertext $ct = (b, a) \in R_q^2$ that encrypts a plaintext $m \in R$, bootstrapping $BTS : R_q^2 \to R_Q^2$ increases the modulus of the ciphertext while approximately maintaining the original plaintext. Thus, $BTS(ct) \in R_Q^2$ encrypts a plaintext $pt' \approx pt$.

## Steps of Bootstrapping

1. **Slots-to-Coefficients (StC):**
   - Convert ciphertext slots into polynomial coefficients.
   - Output: $ct' = Enc(\Delta \cdot z(X)) \in R_{q0}^2$.

2. **Modulus Raising (ModRaise):**
   - Increase the modulus by adding small multiples of the original modulus $q0$.
   - Output: $ct'' = Enc(\Delta \cdot z(X) + q0 \cdot I(X))$, where $I(X) \in R$ is a small value.

3. **Coefficients-to-Slots (CtS):**
   - Convert polynomial coefficients back into slots.
   - Output: $ct''' = Enc \circ Ecd(z + (q0/\Delta) \cdot I)$.

4. **Homomorphic Modular Reduction (EvalMod):**
   - Remove the added multiples $I$ to obtain the desired result.
   - Output: $Enc \circ Ecd(z) \in R_Q^2$.

## Modulus Raising

Suppose $ct = (b, a) \in R_q^2$ encrypts a plaintext $pt \in R$. Let $[b]_q$ and $[a]_q$ be the representatives of $b$ and $a$. The following relationship holds:
- $ [b]_q + [a]_q \cdot s \equiv_q pt $
- Thus, $ [b]_q + [a]_q \cdot s = pt + q \cdot I $
- $I \in R$, and $\|I\|_\infty \leq (h + 1)/2$.

Through Modulus Raising, $ct$ is regarded as encrypting $pt + q \cdot I$.

## Homomorphic Discrete Fourier Transform (DFT)

The DFT matrix $U$ can be decomposed as:
- $ U = D_{\log(N)-1} D_{\log(N)-2} \cdots D_1 P $

Where $D_i$ is a butterfly matrix, and $P$ is a permutation matrix. For efficiency, the bit-reversed DFT $U P^{-1}$, excluding $P$, is used instead of the exact DFT.

## Approximate Modular Reduction

Polynomials are used to approximate the modular reduction function. A common approach is to use trigonometric functions and polynomial approximation algorithms. For example:
- **Modular Reduction by 1 and** $\sin(2\pi x)/2\pi$

These functions operate similarly near integer points, helping to close the gap between Modular 1 and the sine function.