## Introduction
Schnorr signatures are a type of [[Digital Signature|digital signature]] scheme that provides a secure method for signing and verifying messages. They were proposed by Claus-Peter Schnorr and are known for their simplicity, efficiency, and strong security properties. Schnorr signatures are widely regarded for their compact size and the computational efficiency they offer compared to other signature schemes.

## Design
The design of Schnorr signatures is based on the difficulty of solving the [[Discrete logarithm problem|discrete logarithm problem]] in [[Cyclic Group|cyclic groups]], a common hard problem in cryptography. The scheme involves three key components: a private key, a public key, and a signature generation and verification process. The private key is a randomly chosen number, while the public key is derived from the private key using a predefined base point on an elliptic curve or a large prime number in a finite field.

### Global parameters $(g, p, q)$
Schnorr signatures work with the **prime modulo p** such that p-1 has a **prime factor q**. Usually, the appropriate size of p and q is **1024 bits and 160 bits**, respectively. Both parties should agree on a group $Z_p^*$ and its cyclic subgroup $Z_p^*$, whose generator is $g$ such that $g ^ q ≡ 1 \mod p$.

## How it works

### Interactive version (Schnorr Identification Protocol)
![[schnorr_signature(1).png]]
1. **Key Generation**: A prover generates a private key $\omega$ by selecting a random integer. The corresponding public key $x$ is computed as $x = g^\omega\mod p$.
2. **Commitment**
    - The prover selects a random value $r$ and computes $a = g^r \mod p$ and sends $a$ to the verifier.
3. **Challenge**
    - The verifier sends a random challenge number $c$ to the prover.
    - The prover calculates the response $z = r + c\omega \mod q$.
    - $q$ is the order of the [[Cyclic Subgroup|cyclic subgroup]] and divides $p-1$. ($q$ is a prime number)
4. **Verification**
    - The verifier checks if $g^z \mod p$ is equal to $a \cdot x^c \mod p$.
    - Here, $a \cdot x^c = g^r \cdot x^c = g^r \cdot g^{\omega c} = g^{r + \omega c} = g^z \mod p$ holds.
    - Therefore, if the equality holds, the signature is valid; otherwise, it is invalid.

This verification ensures that the prover has knowledge of the private key $x$, without revealing the private key itself. That is why this protocol can be regarded as one of the [[Zero Knowledge Proofs|zero-knowledge protocols]].

### Non-interactive version (Schnorr Signature)
The interactive version of the Schnorr protocol can be revised to a non-interactive version using the Fiat-Shamir transform. This is what is called the Schnorr signature, whose process involves the following steps:
![[schnorr_signature(2).png]]
1. **Key Generation**: A prover generates a private key $\omega$ by selecting a random integer. The corresponding public key $x$ is computed as $x = g^\omega\mod p$.
2. **Signature Generation**: To sign a message $m$, the signer:
    - Selects a random value $r$ and computes $a = g^r \mod p$.
    - Computes the hash $e = H(m \| a)$, where $H$ is a cryptographic hash function.
    - Calculates the signature $z = r + c\omega \mod q$.
    The signature on the message $m$ is the pair $(r, s)$.
3. **Signature Verification**: To verify the signature $(r, s)$ on a message $m$:
    - The verifier computes $e = H(m \| a)$.
    - Checks if $g^z \mod p$ is equal to $a \cdot x^c \mod p$.
    - If the equality holds, the signature is valid; otherwise, it is invalid.

This ensures that the signature could only have been produced by someone with knowledge of the private key $x$.
