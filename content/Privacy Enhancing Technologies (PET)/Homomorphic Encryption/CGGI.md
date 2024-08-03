## CGGI (Cheon-Gentry-Goldwasser-Ishai) Scheme

The CGGI scheme, proposed by Cheon, Gentry, Goldwasser, and Ishai, is a homomorphic encryption scheme that enhances efficiency through [[bootstrapping]].

### Key Components

1. **Secret Key Generation**: The secret key is generated based on the LWE (Learning with Errors) problem.
2. **Public Key Generation**: The public key is composed of the secret key and LWE samples.
3. **Encryption**: Encrypts messages to generate LWE ciphertexts.
4. **Decryption**: Decrypts the ciphertexts to restore the original message.

### Homomorphic Operations

The CGGI scheme supports complex operations efficiently through effective bootstrapping.

- **Homomorphic Addition**: Performed through the addition of LWE samples.
- **Homomorphic Multiplication**: Executed through the multiplication of LWE samples while maintaining efficiency via bootstrapping.