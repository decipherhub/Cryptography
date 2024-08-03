# Fully Homomorphic Encryption (FHE)

## Definition

Fully Homomorphic Encryption (FHE) is a cryptographic technique that allows computations to be performed on data while it is still encrypted.

## Use Cases

Performing computations on sensitive data and executing operations with encrypted models.

## Advantages

### 1. Security

- Homomorphic encryption is one of the most secure privacy-enhancing technologies, as it keeps data completely encrypted from start to finish.
- Almost all existing FHE schemes rely on well-established lattice-based cryptography, which is part of [[Post-Quantum Cryptography]].

### 2. Communication Costs

- Most [[Privacy Enhancing Technologies (PET)]], including [[Secure Multiparty Computation]], incur significant communication costs, whereas HE requires communication only after encryption and before decryption.

## Disadvantages

### 1. Computational Cost

- The computational cost of FHE is typically 100 to 10,000 times more expensive than regular plaintext computations.

## History of FHE Technology

### Early HE

- The concept of homomorphic encryption was first proposed by Rivest, Edleman, and Dertouzous in 1978, but its existence remained uncertain until Gentry implemented the first plausible scheme in 2009.
- Gentry's blueprint includes [[Bootstrapping]], a key element that refreshes the noise in HE operations through homomorphic encryption.

### Improvements

- Second-generation schemes such as [[BGV]] and [[BFV]] rely on a ring variant of [[Learning with Errors (LWE)]], specifically Ring Learning with Errors (RLWE), significantly improving efficiency.
- Craig Gentry, Amit Sahai, and Brent Waters proposed new building blocks with much slower noise growth than LWE. This led to the development of low-latency FHE schemes like [[DM]] and [[CGGI]].
- In 2016, the [[CKKS]] scheme was proposed, introducing efficient rescaling operations on RLWE to naturally support approximate arithmetic.

## Representative FHE Schemes

Currently, second-generation, third-generation, and fourth-generation FHE schemes are all popular, each with different strengths.

| Name            | Generation | Ciphertext Format | Message Type |
| --------------- | ---------- | ----------------- | ------------ |
| [[BGV]]/[[BFV]] | 2          | RLWE              | Integer      |
| [[CGGI]]/[[DM]] | 3          | LWE               | Bit(s)       |
| [[CKKS]]        | 4          | RLWE              | Real         |

- The base ciphertext format is an important characteristic of FHE schemes. LWE-based schemes and RLWE-based schemes excel in latency and throughput, respectively.

## Bootstrapping in FHE

All existing FHE schemes are based on LWE or its variants, which involve the concept of noise. As homomorphic operations progress, the noise accumulates and, if it becomes too large, further operations cannot be performed. Bootstrapping homomorphically decrypts the ciphertext to refresh the noise. Since bootstrapping includes many homomorphic sub-operations, it is generally the most time-consuming step in FHE.

| Scheme          | Number of Slots | Bootstrapping Time |
| --------------- | --------------- | ------------------ |
| [[BGV]]/[[BFV]] | 32768           | 35.5s              |
| [[CGGI]]/[[DM]] | 1               | 6.49ms             |
| [[CKKS]]        | 65536           | 13.0s              |

- Latest bootstrapping performance (based on single-threaded CPU).

### Index

- [[Bootstrapping]]
- [[BGV]]
- [[BFV]]
- [[CGGI]]
- [[DM]]
- [[CKKS]]
- [[fhEVM]] 