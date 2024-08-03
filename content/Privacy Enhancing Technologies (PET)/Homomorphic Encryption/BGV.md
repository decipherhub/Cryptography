## BGV (Brakerski-Gentry-Vaikuntanathan) Scheme

The BGV scheme, developed by Brakerski, Gentry, and Vaikuntanathan, is a homomorphic encryption scheme based on the [[Ring Learning with Errors (RLWE)]] problem.

### Key Components

1. **Secret Key Generation**: The secret key $s$ is chosen from the polynomial ring $\mathbb{Z}_q[X]/(X^N + 1)$.
2. **Public Key Generation**: The public key is generated using the secret key and consists of two polynomials $(a, b = -a \cdot s + e)$, where $a$ is a randomly chosen polynomial and $e$ is a small noise (error).
3. **Encryption**: To encrypt a message $m \in \mathbb{Z}_t[X]/(X^N + 1)$, a random polynomial $r$ is selected, and the ciphertext $c = (c_1, c_2) = (a \cdot r + e_1, b \cdot r + e_2 + m)$ is generated.
4. **Decryption**: To decrypt the ciphertext $c$, compute $m' = c_2 + s \cdot c_1 \pmod{q}$. Here, $m' \approx m$.

### Homomorphic Operations

The BGV scheme supports homomorphism for both addition and multiplication.

- **Homomorphic Addition**: For two ciphertexts $c' = (c'_1, c'_2)$ and $c'' = (c''_1, c''_2)$, addition is performed as $c = c' + c'' = (c'_1 + c''_1, c'_2 + c''_2)$, which corresponds to $m = m' + m''$.
- **Homomorphic Multiplication**: For two ciphertexts $c' = (c'_1, c'_2)$ and $c'' = (c''_1, c''_2)$, multiplication is performed as $c = c' \cdot c'' = (c'_1 \cdot c''_1, c'_2 \cdot c''_2)$, which corresponds to $m = m' \cdot m''$.