# Post-Quantum Cryptography

## Quantum Computing and Cryptography
The public key cryptosystems currently in widespread use are vulnerable to quantum attacks. For example, [[RSA]] relies on integer factorization, which can be easily computed using Shor's algorithm.

## Post-Quantum Cryptography
Post-quantum cryptography aims to develop cryptographic algorithms that are secure against quantum cryptanalysis attacks.

## NIST Post-Quantum Cryptography Standardization Program
The NIST Post-Quantum Cryptography Standardization Program and competition are intended to update the NIST standards to include post-quantum cryptography. This program is conducting a call for proposals for digital signatures and key encapsulation mechanisms.

## NIST's Announcement of the First Winners in 2020
In 2020, NIST announced the first winners:
- **CRYSTALS-Kyber (PKE/KEM)**
- **CRYSTALS-Dilithium**
- **FALCON**
- **SPHINCS (Signature)**

Among these, all algorithms except SPHINCS are lattice-based. SPHINCS is a hash-based algorithm.