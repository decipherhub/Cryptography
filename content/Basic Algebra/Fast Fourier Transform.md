# Definition
Fast Fourier Transform (FFT) is a technique that utilizes the periodicity of the root of unity to perform the [[Discrete Fourier Transform]] in \(O(n \log n)\) time. [Root of Unity]([[Discrete Fourier Transform#^1735c9]]) has the following property: $$\omega^{n/2+j}=-\omega^j$$ Using this property, we can divide the DFT calculation of length \(N\) into two DFT calculations of length \(N/2\). This is known as the Danielson-Lanczos Lemma and forms the basis of the FFT.

# Danielson-Lanczos Lemma
The DFT of length \(N\) (where \(N\) is even) can be expressed as the sum of two DFTs of length \(N/2\). One is formed from the even-indexed terms, and the other from the odd-indexed terms. [The DFT formula]([[Discrete Fourier Transform#^8ba133]]) can be expressed, according to the Danielson-Lanczos Lemma, as follows: 

$$ 
\begin{align} 
y_k &= \sum_{j=0}^{n-1} x_j \omega^{jk} \\ & = x_0\omega^0 + x_2\omega^{2k} + x_4\omega^{4k} + \ldots + x_{n-2}\omega^{k(n-2)} \\ & \quad + \omega^k (x_1\omega^0 + x_3\omega^{2k} + x_5\omega^{4k} + \ldots + x_{n-1}\omega^{k(n-2)}) \\ &= \sum_{j=0}^{n/2-1} x_{2j} \omega^{2kj} + \omega^k \sum_{j=0}^{n/2-1} x_{2j+1} \omega^{2kj} \\ &= y^E_k + \omega^k y_k^O 
\end{align}
$$

# Algorithm: Cooley-Tukey Algorithm
Cooley-Tukey algorithm is designed for Fast Fourier Transform (FFT) algorithm. This algorithm significantly reduces the time complexity of computing the DFT from $O(N^2)$ to $O(N \log N)$.

The Cooley-Tukey algorithm uses a divide-and-conquer method to break down the input signal into smaller parts. Cooley-Tukey algorithm then performs the Fourier transform on each part, and combines the results to obtain the final transform. It is particularly effective for input lengths that are powers of two.

**Pseudo code**
```
function FFT(A, ω)
  Input: Coefficient representation of a polynomial A(x) of degree ≤ n − 1, where n is a power of 2
  Output: Value representation A(ω^0), . . . , A(ω^n−1)

  if ω = 1: return A(1)
  express A(x) in the form Ae(x^2) + xAo(x^2)
  call FFT(Ae, ω^2) to evaluate Ae at even powers of ω
  call FFT(Ao, ω^2) to evaluate Ao at odd powers of ω
  for j = 0 to n − 1:
    compute A(ω^j) = Ae(ω^2j) + ω^jAo(ω^2j)
  return A(ω^0), . . . , A(ω^n−1)

```