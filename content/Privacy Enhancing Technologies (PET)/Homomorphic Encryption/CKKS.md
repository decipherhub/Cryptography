# CKKS Encryption Scheme

## Definition

The CKKS (Cheon-Kim-Kim-Song) scheme is a fully homomorphic encryption (FHE) technique designed to efficiently perform complex real number computations. It supports high-precision real number operations and provides parallel processing capabilities (SIMD) that allow multiple data elements to be processed simultaneously. CKKS is primarily used in machine learning and statistics, where many operations are approximate, making it more advantageous than other encryption schemes.

## Key Features of CKKS

### Encoding and Decoding

- In CKKS, messages are encoded into complex vector form before encryption. This encoding process transforms messages from the complex space ($\mathbb{C}^{N/2}$) to the polynomial space ($R[X]/(X^N+1)$). The encoding function is given by $Ecd(z) = \lfloor \Delta \cdot iDFT(z) \rceil$, and the decoding function is $Dcd(p(X)) = \frac{1}{\Delta} \cdot DFT(p(X))$. Here, $\Delta$ is a scaling factor.
- Rounding errors can occur during the encoding process, and an appropriate $\Delta$ value is chosen to minimize these errors.

### Encryption and Decryption

- CKKS encryption is based on the [[Ring Learning with Errors (RLWE)]] problem. Messages are encrypted in the polynomial space to generate ciphertexts. The encrypted ciphertext is represented as $(b, a)$, where $b$ and $a$ include a random polynomial and an error, respectively.
- Decryption is the process of using this ciphertext to restore the original message. The decryption function is defined as $[b + a \cdot s]_{q0}$, where $s$ is the secret key.

### Basic Operations

- CKKS supports basic homomorphic operations such as addition and multiplication. The addition of two ciphertexts $(b1, a1)$ and $(b2, a2)$ is defined as $(b1 + b2, a1 + a2)$, and multiplication is defined as $(b1b2, a1b2 + a2b1, a1a2)$. These operations are performed directly on encrypted data, and the result remains encrypted.

### Key Switching and Relinearization

- Key Switching is the process of re-encrypting encrypted messages with a different secret key. This allows encrypted data to be safely shared without changing the secret key.
- Relinearization is the process of reducing the length of the ciphertext, which is used to address the problem of key size increase during operations. This allows for continued homomorphic operations while maintaining computational efficiency.

### Rescaling

- Rescaling is the process of reducing the increased scaling factor after multiplication operations. It reduces the scaling factor, which increased to $\Delta^2$, back to the $\Delta$ level to maintain computational accuracy.

## Applications

- **Machine Learning:** CKKS is very suitable for machine learning, where many operations are approximate. It maximizes efficiency by processing multiple data points in parallel.
- **Statistical Analysis:** It is also useful in statistics for securely performing complex real-number operations on large datasets. CKKS guarantees data privacy by performing these operations while the data remains encrypted.