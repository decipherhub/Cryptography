## Definition

Let $q$ be a prime number and $\Phi(X) \in \mathbb{Z}_q[X]$ be an irreducible polynomial over $\mathbb{Z}_q$. Let $a_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$ be a set of uniformly random known polynomials, and $e_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$ be a set of small random unknown polynomials, and $s(X) \in \mathbb{Z}_q[X]/\Phi(X)$ be a small unknown polynomial. We have $b_i(X) = a_i(X) \cdot s(X) + e_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$. Given pairs $(b_i, a_i)$ for the number of polynomials, find $s$.

## Symmetric Key Cryptography Scheme Using RLWE

A symmetric key cryptography scheme can be defined using RLWE samples.

### Encryption (RLWE Encryption)

Given a message $m \in R_q = \mathbb{Z}[X]/(X^N + 1)$, the encryption of $m$ is defined as follows:

$\text{Enc}(m) = (-as + e + m, a) \in R_q^2$

where $a$ is a uniformly random polynomial, $s$ is a small secret polynomial, and $e$ is a small error polynomial.

### Decryption (RLWE Decryption)

Given an RLWE ciphertext $(b, a) \in R_q^2$, the decryption of $m$ is defined as follows:

$\text{Dec}(m) = b + a \cdot s$

The security of the encryption scheme is derived from the security of RLWE.