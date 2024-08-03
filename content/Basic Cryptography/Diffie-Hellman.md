The Diffie-Hellman system is a key exchange protocol that allows two users to generate a shared secret key by exchanging keys publicly. Developed by Whitfield Diffie and Martin Hellman in 1976, this system was designed to solve the key exchange problem in symmetric key cryptosystems. Although the users generate the secret key using each other's public keys, the secret key itself is never exchanged. The security of Diffie-Hellman is based on the [Discrete Logarithm Problem](DLP).

Below is a diagram illustrating the key exchange process of the Diffie-Hellman protocol.

![Diffie-Hellman Key Exchange Process](diffie_hellman(1).png)

1. **Private and Public Keys**: Alice and Bob each have private keys that are elements of \(Z_p^*\) (Alice's private key is \(a\), and Bob's private key is \(b\)). Their public keys are the results of computing \(g^a\) and \(g^b\) using a pre-shared generator \(g\).

2. **Exchange and Derivation of Shared Key**: They exchange their public keys. By applying their own private keys as shown in the diagram, both arrive at the same result, \(g^{ab}\), which becomes their shared secret key (SHK). The Key Derivation Function (KDF) is used to apply hashing and bit operations to generate the cryptographic key from the shared key.

3. **Security Against Interception**: Even if Eve, a potential eavesdropper, knows the values of \(A\) and \(B\), she cannot deduce the SHK. While knowing \(a\) allows one to easily compute \(B^a = g^{ab}\) from the shared \(B\), it is extremely difficult to compute \(g^{ab}\) from just knowing \(g^a\) and \(g^b\) without the private keys.