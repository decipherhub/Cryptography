## Intro
Stream cipher is a method of encrypting data where each bit or byte of the plaintext is encrypted sequentially, one at a time, using a corresponding bit or byte from a key stream. This approach differs from block ciphers, which encrypt fixed-size blocks of data. Stream ciphers are often used in scenarios requiring high-speed encryption and where data is transmitted in a continuous stream.

## Design
![[Pasted image 20240730173718.png]]
TODO(yuki)

## Types of stream ciphers
### Synchronous Stream Ciphers
In synchronous stream ciphers, the key stream is generated independently of the plaintext and ciphertext. An internal state to generate the pseudorandom sequence(key stream) is maintained and used to generate new internal states. 
To decrypt the plaintext correctly, the sender and receiver must be synchronized to ensure the key streams match during encryption and decryption. If a bit is lost or an erroneous bit is added due to transmission errors, decryption will fail from that point onward and re-synchronization will be needed.

### Asynchronous Stream Ciphers
In synchronous stream ciphers, the key stream is generated based on the previous ciphertext bits, not on the previous internal state. Thus, if a bit is changed or lost during transmission, only a portion of the decryption will fail. 


## Comparison with [[Block cipher]]
Refer to [[Block cipher#Comparison with Stream cipher]]
