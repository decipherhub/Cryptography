> [!Info]
> Our project focuses on cryptography related to blockchain. Therefore, if you need additional information about the EVM, please refer to this external link: [Ethereum EVM Documentation](https://ethereum.org/ko/developers/docs/evm/)

# fhEVM: Confidential Smart Contract Execution on Blockchain

Blockchain has always faced a dilemma: keeping applications and user data on-chain for everyone to see or off-chain to preserve privacy but lose contract composability. This issue has been a significant barrier in areas requiring high privacy, such as finance and healthcare. However, thanks to [[Fully Homomorphic Encryption]], Zama’s fhEVM allows confidential smart contract execution on encrypted data, ensuring both privacy and composability.

## Why Apply FHE to Blockchain

Blockchains provide high security based on decentralization and transparency. However, due to this transparency, all information is publicly disclosed, limiting the data that can be used on the blockchain. When transactions require sensitive user information, using blockchain means that sensitive information is recorded on-chain, compromising privacy. This presents limitations for blockchain applications in fields where privacy is crucial, such as finance and healthcare. For example, users accustomed to traditional financial markets may find it burdensome that the amount of assets they hold is publicly visible. Furthermore, financial transactions exposed prematurely can be at risk of front-running and back-running by builders looking to exploit MEV (Miner Extractable Value).

## Limitations of Existing Solutions

To address privacy issues, some information is recorded off-chain, or [[Zero-Knowledge Proofs]] are used. However, these methods are not perfect solutions. Both approaches have limitations as they require computations to be performed off-chain, which does not guarantee transaction atomicity and undermines the composability of smart contracts. Therefore, a method that can keep all data on-chain while maintaining privacy is necessary, and FHE offers that solution.

## How FHE Solves Privacy Issues

By using FHE, on-chain data is recorded in an encrypted form, so personal transaction records are not publicly disclosed. However, it guarantees that computations are performed fairly, allowing the blockchain to retain its advantages while protecting personal information. For example, it can ensure that no one knows how much you transferred to whom, except for the transaction parties, and make it impossible to search the balance of a particular wallet.

## Introduction to Zama's fhEVM

Zama is a leading company applying FHE to blockchain and has developed the fhEVM. Zama currently offers four main products: TFHE-rs, Concrete, Concrete ML, and fhEVM. Among these, fhEVM implements all functions possible on the EVM using FHE. Developed using TFHE-rs based on Evmos, fhEVM allows the use of Solidity as is. As of July 2024, fhEVM has been released up to version 0.4.

### How fhEVM Works

1. **Global Public Key**: fhEVM uses a global public key to encrypt data and perform computations using FHE. By using the public key, advantages are gained in interactions with other users and smart contracts. The private key used for decryption requires the approval of multiple validators, ensuring security.

2. **Submission Requirements**: To use fhEVM, users need to submit two things:
   - Encrypted data.
   - A Zero-Knowledge Proof (ZKP) demonstrating the existence of the data before encryption.

3. **Decryption Methods**:
   - **Public Decryption**: After submitting encrypted data and ZKP, validators verify and upload the encrypted data on-chain. Validators decrypt and reveal the computation results.
   - **Private Decryption**: If you wish to view the results privately, generate a new key pair, provide the public key, and validators will encrypt the result data with the new public key and deliver it. The user can decrypt it with their private key to check.

### Use Cases

#### Encrypted ERC-20 Tokens

Existing ERC-20 tokens have publicly visible wallet balances and transaction histories. By leveraging FHE, such information can remain private while retaining easy transfer functionality. In fhEVM, data can be encrypted and stored using the `euint` data type.

##### Code Example

```solidity
pragma solidity ^0.8.0;

import "TFHE.sol"; // Import Zama's TFHE contract

contract EncryptedERC20 {
    euint public totalSupply;
    euint public burnable;
    mapping(address => euint) public balance;

    function transfer(address to, euint amount) public {
        require(balance[msg.sender].lte(amount), "Insufficient balance");
        balance[msg.sender] = balance[msg.sender].sub(amount);
        balance[to] = balance[to].add(amount);
    }

    function checkBalance(address owner) public {
        euint encryptedBalance = balance[owner];
        // Process for re-encryption and decryption
    }
}
```

#### Blind Auctions

In a blind auction, bid amounts are kept private from everyone except the bidder. This process ensures fair competition and prevents premature disclosure of bid amounts.

##### How It Works

1. **Bid Submission**: Users submit encrypted bid amounts along with a ZKP.
2. **Reveal Phase**: After all bids are submitted, the highest bid amount is determined using `dIhaveHighest()`. The highest bidder claims the item, and others receive their bids back.
3. **Conclusion**: The auction host receives the highest bid amount. 