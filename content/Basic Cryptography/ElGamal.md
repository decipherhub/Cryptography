The ElGamal system utilizes the [Discrete Logarithm Problem].

Key Generation in ElGamal Encryption:

	•	A large prime number  p  is selected, and a primitive root  g  on  Z_p  and  p  are made public.
	•	An arbitrary element  d  on  Z_p  is chosen, and \( e \equiv g^d \mod p \) is calculated. ( e  is the public key, and  d  is the private key)

Encryption Process of Message  M :

	•	 r \in_R Z_p  (Generate a random number  r  on  Z_p )
	•	Calculate \( K \equiv e^r \mod p \) using the recipient’s public key  e .
	•	Compute \( C_1 \equiv g^r \mod p \) and \( C_2 \equiv KM \mod p \).
	•	The ciphertext is  C = (C_1, C_2) .

Decryption Process:

	•	Use the private key  d  to calculate \( K \equiv {C_1}^d \mod p \).
	•	Using the  K  obtained above, decrypt by calculating \( M \equiv C_2/K \mod p \).

	In RSA, encrypting the same message always produces the same ciphertext, whereas the ElGamal system uses random numbers, resulting in different ciphertexts for the same message each time it is encrypted. Therefore, RSA-OAEP is used in commercial systems. Additionally, the ElGamal system offers security with smaller private key sizes compared to RSA.