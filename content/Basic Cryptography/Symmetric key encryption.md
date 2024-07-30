## Intro
Symmetric encryption is a method of encryption that uses the same key for both encryption and decryption. Since encryption and decryption are performed with a single key, it is crucial that this key is not exposed to anyone outside. For this reason, it is also known as secret key encryption.
An important aspect of symmetric encryption is key management. This includes generating keys securely, distributing them safely, and ensuring they are stored in a manner that prevents unauthorized access.

## Types
Symmetric encryption can be divided into block cipher and stream cipher.
- [[Block cipher]]: Encrypts plaintext in fixed-size blocks.
- [[Stream cipher]]: Encrypts plaintext bit by bit or byte by byte.

## Examples
The most well-known example of symmetric encryption is [[AES]](Advanced Encryption Standard). There are also methods like DES(Data Encryption Standard), which has known vulnerabilities.

## Use cases
Symmetric encryption is used in various real-world applications such as TLS/SSL for secure web communication, file encryption, and database encryption. For example, in TLS 4.0, symmetric encryption schemes such as [[ChaCha20]] or AES256 are used for encryption.

## Comparison with [[Asymmetric key encryption]]
|                  | Symmetric key encryption                      | [[Asymmetric key encryption]]                                                            |
| ---------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Key type         | Single key for both encryption and decryption | Public key for encryption, private key for decryption                                    |
| Speed            | Faster                                        | Slower                                                                                   |
| Key distribution | Requires secure channel                       | No need for secure channel (Public key can be shared openly, secret key remains private) |
| Non-repudiation  | X                                             | O                                                                                        |
| Example          | [[AES]], DES                                  | [[RSA]], [[ElGamal]], [[ECDSA]]                                                          |
| # of keys        | $N\choose 2$ for $N$ people                   | $2N$ for $N$ people                                                                      |








