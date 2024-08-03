## BFV (Brakerski-Fan-Vercauteren) Scheme

The BFV scheme is similar to the [[BGV]] scheme but is based on the [[Learning with Errors (LWE)]] problem. It was proposed by Fan and Vercauteren as an improvement to the BGV scheme.

### Key Components

1. **Secret Key Generation**: The secret key $s$ is chosen from the polynomial ring $\mathbb{Z}_q[X]/(X^N + 1)$.
2. **Public Key Generation**: The public key is composed of $(a, b = -a \cdot s + e)$.
3. **Encryption**: To encrypt a message $m \in \mathbb{Z}_t[X]/(X^N + 1)$, a random polynomial $r$ is selected, and the ciphertext $c = (a \cdot r + e_1, b \cdot r + e_2 + \Delta \cdot m)$ is generated.
4. **Decryption**: To decrypt the ciphertext $c$, compute $m' = \left\lceil \frac{c_2 + s \cdot c_1}{\Delta} \right\rfloor \pmod{t}$. Here, $\Delta$ is the scaling factor.

### Homomorphic Operations

The BFV scheme also supports homomorphism for addition and multiplication.

- **Homomorphic Addition**: $c = c' + c'' = (c'_1 + c''_1, c'_2 + c''_2)$
- **Homomorphic Multiplication**: $c = c' \cdot c''$
