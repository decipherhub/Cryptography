## Intro
A digital signature is an electronic signature used to verify the **authenticity and integrity** of electronic documents or data. It also ensures **non-repudiation**, meaning the digital signature's author cannot dispute its authorship. Based on these properties, the digital signature proves that specific data was created by a specific individual or organization and ensures that the data has not been altered during transmission.

## Design
Digital signatures are created using [[Asymmetric key encryption|public key cryptography]] and [[Hash function|hash]]. The high-level process is as follows:
1. **Key Generation**: The key generation process creates a public key and a corresponding private key. The generated public key is delivered to the verifier for the verification process, which can be facilitated by Public Key Infrastructure (PKI) or other methods.
2. **Signing**
    1. **Hashing**: The sender first hashes the original message to be signed and appends the digest to the message. (Padding can be added optionally)
    2. **Encryption**: The sender signs the (message || digest) using the sender's private key generated in step 1.
3. **Verifying**: The receiver checks the following:
    1. **Message Authenticity**: Decrypt the ciphertext message into (message || digest) using the sender's public key obtained in step 1.
    2. **Message Integrity**: Calculate the message digest and compare it to the received digest (Hash(message) == digest?).

This process describes the scenario when using the hash-then-sign method, which is the most commonly used in digital signatures. Performing simple signatures without hashing is not recommended as it is vulnerable to key-only existential forgery attacks.

### Why hash-then-sign? - Forgery attacks
Let $(𝑒,𝑁)$ be your public signature verification key of [[RSA]], then the attacker can randomly choose a signature $𝜎 \in \mathbb{Z}_N$ and compute the corresponding message as $𝑚 \equiv 𝜎^𝑒 \mod 𝑁$. Then, the attacker successfully generates your signature on a message you have never signed. However, if a hash (and padding) is appended to the plaintext, the attacker cannot easily generate a valid signature because they cannot control the message $m$.

## Digital Signature Algorithms
- [[RSA]] with [[SHA]] ([[Hash function|hash algorithm]])
- [[ECDSA]] with SHA
- [[ElGamal]]
- [[Schnorr Signature]]
- [[Rabin Signature]]
- [[BLS]] and other pairing-based schemes
