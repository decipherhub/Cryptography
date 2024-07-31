## Intro
AES (Advanced Encryption Standard) is the most common [[Symmetric key encryption]] algorithm, which utilizes a block cipher. Unlike [[DES]], the AES algorithm does not use a [[Feistel network]], enabling more parallelization. The length of the key used in AES can be 128 bits, 192 bits, or 256 bits, and can be represented as AES-128, AES-192, and AES-256. Each version also has a different number of rounds, which are 10, 12, and 14 rounds, respectively. In addition, every version of AES uses the same block size, which is 128 bits. AES works on a $4 \times 4$ block array, where each $b_a$ represents 1 byte of the block.

$$
\left[ 
\begin{matrix} 
b_0 & b_1 & b_2 & b_3 \\ 
b_4 & b_5 & b_6 & b_7 \\ 
b_8 & b_9 & b_{10} & b_{11} \\ 
b_{12} & b_{13} & b_{14} & b_{15} \\ 
\end{matrix} 

\right]

$$

## Design
High-level description of AES is as following:
1. KeyExpansion
2. For the initial round 
	- AddRoundKey
3. For the other rounds(9, 11, 13 rounds)
	- SubBytes
	- ShiftRows
	- MixColumns
	- AddRoundKey
4. For the final round
	- SubBytes
	- ShiftRows
	- AddRoundKey

### KeyExpansion
The KeyExpansion step generates round keys to be used in each round. In the case of AES-128, KeyExpansion takes a 128-bit key as input and expands it into a 44-word array, with each word being 32 bits. Every 4 words(128 bits) are used as a round key in each round, which means that AES-128 uses 11 round keys. AES-192 and AES-256 uses 13 and 15 round keys respectively. Every round keys are also represented as below.
$$
\left[ 
\begin{matrix} 
k_0 & k_1 & k_2 & k_3 \\ 
k_4 & k_5 & k_6 & k_7 \\ 
k_8 & k_9 & k_{10} & k_{11} \\ 
k_{12} & k_{13} & k_{14} & k_{15} \\ 
\end{matrix} 

\right]

$$


### AddRoundKey
The AddRoundKey step is a simple bitwise XOR operation between the state array and a round key. The state array is a $4 \times 4$ plaintext array at the first round, which is manipulated during the encryption process. Each round key is derived from the original encryption key through the KeyExpansion process. This step is important because adding the key to the state provides the security of encryption.

### SubBytes
The SubBytes step substitutes each byte with another byte according to a 8-bit substitution box(Sbox). The S-box provides non-linearity properties, leveraging multiplicative inverse over [[Finite Field|GF]]($2^8$).  
![[AES(1).png]]

### ShiftRows
The ShiftRows step is a transposition step where the rows of the state array are shifted in certain offset cyclically to the left. The first row is left unchanged, the second row is shifted one byte to the left, the third row is shifted two bytes to the left, and the fourth row is shifted three bytes to the left. This step helps in **diffusion** by mixing the positions of the bytes in each row.
![[AES(2).png]]

### MixColumns
The MixColumns step is a mixing operation that operates on the columns of the state array. Each column is treated as a four-term polynomial and multiplied by a fixed polynomial   
$c(z)={03}_{16}\cdot z^{3}+{01}_{16}\cdot z^{2}+{01}_{16}\cdot z+{02}_{16}$ modulo $x^4 + 1$. More generally, this step can be represented as below.

![[AES(3).png]]

This step provides **diffusion** by mixing the bytes within each column, ensuring that the output bytes are influenced by multiple input bytes.

![[AES(4).png]]
