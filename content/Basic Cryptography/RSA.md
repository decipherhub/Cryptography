RSA is the most representative method among public key cryptosystems, proposed by Rivest, Shamir, and Adelman in 1978. The RSA system uses the Integer Factorization Problem (IFP), which involves factoring a composite number into its prime factors. In the encryption process, two prime numbers of more than a hundred digits are selected, and their product is calculated to become a very large composite number, making it very difficult to factorize without knowing the two prime numbers.

- In the RSA system, the public and private keys are generated as follows:

  1. Choose two prime numbers $p$ and $q$, each with more than a hundred digits, and calculate $n = p \times q$.
  2. Choose an $e$ that is coprime to $\phi(n) = (p-1)(q-1)$.
  3. Calculate $K_d$ such that $e \cdot d \equiv 1 \pmod{\phi(n)}$.
  4. Publish $e$ and $n$ and keep $d$ as the private key. ($e$: Public key, $d$: Private key)

- The method for a sender to deliver an encrypted message to a receiver is as follows:

  1. The sender calculates the ciphertext $C \equiv M^{e_B} \pmod{n_B}$ using the receiver's public key $e_B$ and sends the ciphertext $C$ to the receiver.
  2. The receiver can restore the plaintext by calculating $M \equiv C^{d_B} \pmod{n_B}$ using $d_B$.

- Decryption process:

  1. Since $e \cdot d \equiv 1 \pmod{\phi(n)}$, they are multiplicative inverses, which means for any integer $t$, $e \cdot d = t \cdot \phi(n) + 1$ can be expressed.
  2. Applying the decryption process to the ciphertext $C \equiv M^{e} \pmod{n}$ gives the following (assuming $gcd(M, n) = 1$):

\[
C^{K_d} \equiv (M^{K_e})^{K_d} \pmod{n} \\ 
\qquad \equiv M^{t\phi(n) + 1} \pmod{n} \\ 
\qquad \equiv (M^{\phi(n)})^t  \cdot M \pmod{n} \\ 
\qquad \equiv 1^t \cdot M \pmod{n} \\ 
\qquad \equiv M \pmod{n}
\]

### Example

When $p = 53$ and $q= 59$, the encryption of the message “HI” through the RSA system is as follows.

- Key Generation

  1. $n= p \cdot q = 3127$
  2. $\phi(n) = (p-1)(q-1) = 3016$
  3. Select the public key: $K_e = 3$
  4. Private key: $K_e \cdot K_d \equiv 1 \pmod{3016} \rightarrow K_d = \frac{t \cdot \phi(n) +1}{K_e} = \frac{t \cdot 3016 +1}{3} = 2011$

- Encryption

  1. Convert each character of the message “HI” to numbers → “H”: 8, “I”: 9
  2. Calculate the ciphertext $C \equiv 89^{K_e} \pmod{n}$ → $C \equiv 89^3 \pmod{3127} = 1394$

- Decryption

Calculate $M \equiv C^{K_d} \pmod{n}$ → $M \equiv 1394^{2011}\pmod{3127} \\ \qquad \equiv 89 \pmod{3127}$