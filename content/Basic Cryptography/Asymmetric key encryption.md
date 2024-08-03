## Introduction

Public key cryptography (also known as asymmetric key cryptography) is a system where each participant possesses a pair of keys: a public key and a private key. Encryption and decryption are possible using only the public keys, without sharing private keys.

Public key cryptography was developed to address the vulnerabilities of traditional symmetric key cryptography. In symmetric key cryptography, there is a risk of the key being intercepted during exchange, since both parties need to exchange keys. However, in public key cryptography, the risk is eliminated because private keys are not exchanged.

Moreover, the number of keys required in symmetric key cryptography increases exponentially as the number of participants increases. For instance, if there are \( n \) participants, symmetric key cryptography requires \(\frac{n(n-1)}{2}\) keys, as a key needs to be generated for each communication between participants. In contrast, in public key cryptography, each participant only needs one pair of keys, so only \( 2n \) keys are needed.

## Public Key System

Public key cryptography was an innovative concept that went beyond the traditional understanding of cryptography. It was first proposed in the 1976 paper [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf) by Diffie and Hellman.

The following is a metaphorical process to help understand public key cryptography.

![Public Key Process Step 1](public_key(1).png)

Alice wants to send a message to Bob using a public key cryptography system. Alice and Bob each have a pair of private and public keys. Let's think of the public key as a lock and the private key as a key.

![Public Key Process Step 2](public_key(2).png)

Alice puts the plaintext in a box, locks it with her lock (Alice’s public key), and sends it to Bob.

![Public Key Process Step 3](public_key(3).png)

Bob locks the box he received from Alice with his lock (Bob’s public key) and sends it back to Alice. (At this point, the box is locked with both Alice's and Bob's locks.)

![Public Key Process Step 4](public_key(4).png)

Alice uses her key (private key) to unlock her lock from the box and sends it back to Bob.

![Public Key Process Step 5](public_key(5).png)

Finally, Bob unlocks his lock and can see the plaintext inside the box.

Throughout this process, Alice and Bob securely exchanged plaintext without sharing their private keys. This concept is the foundation of public key cryptography. Unlike traditional cryptography, which involves a single lock and shared key, public key cryptography uses different locks and keys as demonstrated above.

This is a simplified example for understanding, and the public key cryptography used in actual communication involves various cryptographic protocols.

## Types of Public Key Systems

There are several types of protocols in public key cryptography.

1. **RSA**

   RSA is one of the most widely used public key cryptosystems. RSA generates keys using large prime numbers and is based on the security of the Integer Factorization Problem (IFP). It is mainly used for data encryption and digital signatures.

2. **Diffie-Hellman**

   The Diffie-Hellman key exchange is a protocol that allows two users to generate a shared secret key through public key exchange. Users generate the secret key using each other's public keys, but the secret key itself is not exchanged.

3. **ElGamal**

   ElGamal encryption is based on the Diffie-Hellman key exchange and can be used for message encryption and digital signatures. The security of ElGamal relies on the Discrete Logarithm Problem (DLP).

4. **Elliptic Curves / Elliptic Curve Cryptography (ECC)**

   ECC (Elliptic Curve Cryptography) is a system based on the Elliptic Curve Discrete Logarithm Problem (ECDLP), which is a type of discrete logarithm problem on elliptic curves. It provides a high level of security with relatively short key lengths compared to other protocols, making it popular in environments with limited resources, such as mobile devices and blockchain.

## Comparison with Symmetric Key Encryption

Refer to the section "Comparison with Asymmetric Key Encryption" under Symmetric Key Encryption.