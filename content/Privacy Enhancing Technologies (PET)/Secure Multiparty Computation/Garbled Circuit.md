# **Garbled Circuit**

**Garbled Circuit** is a cryptographic protocol that enables two untrusted parties to jointly compute a function over their private inputs without revealing the inputs to each other. This is achieved without relying on a trusted third party, ensuring secure computation.

## **Background**

### **Oblivious Transfer (OT)**
Garbled Circuit protocols rely on **Oblivious Transfer (OT)**, a cryptographic primitive where:
- The sender has two messages \( S_0 \) and \( S_1 \).
- The receiver selects one message \( S_b \) (where \( b \in \{0,1\} \)) without revealing their choice to the sender.
- The sender remains unaware of which message was received.

Oblivious Transfer ensures that private inputs remain hidden, a crucial requirement for secure computation.

---

## **The Garbled Circuit Protocol**

Yao’s Garbled Circuit protocol consists of the following steps:

### **1. Circuit Representation**
The function to be computed is expressed as a **Boolean circuit**, composed of:
- **Input wires** (holding input values).
- **Output wires** (holding final results).
- **Intermediate wires** (connecting gates).

Each **gate** in the circuit:
- Has **two input wires** and **one output wire**.
- Implements a Boolean function (e.g., AND, XOR).
- Can be represented using a **truth table**.

### **2. Garbling the Circuit**
The sender (Alice) garbles the circuit as follows:
- Assigns **two random labels** to each wire (representing 0 and 1).
- Encrypts the output labels for each gate using its input labels as encryption keys.
- The **garbled truth table** is shuffled to hide gate information.

### **3. Data Transmission**
- Alice sends the **garbled circuit** and her input labels to the receiver (Bob).
- Bob obtains his input labels via **1-out-of-2 Oblivious Transfer (OT)**.

### **4. Circuit Evaluation**
- Bob evaluates the circuit **obliviously**, decrypting only the correct output labels.
- The correct row in each gate’s garbled truth table is found and decrypted, obtaining new labels for the next layer of computation.

### **5. Output Recovery**
- Bob sends his garbled output labels to Alice.
- Alice maps the labels to actual bits and sends the final output mapping to Bob.

---

## **Optimizations in Garbled Circuit Protocols**
Several techniques improve the efficiency of Garbled Circuit protocols:

### **1. Point-and-Permute**
- Assigns **select bits** to wire labels, allowing Bob to find the correct ciphertext row efficiently.
- Reduces the number of comparisons, improving circuit evaluation speed.

### **2. Row Reduction**
- Reduces the garbled truth table size from **4 rows to 3 rows**, minimizing communication overhead.

### **3. Free XOR**
- Eliminates encryption overhead for XOR gates by leveraging a global random value \( R \), significantly reducing computational costs.

### **4. Fixed-Key Blockcipher**
- Uses a **fixed-key block cipher** to efficiently encrypt the gate outputs, optimizing performance.

### **5. Half AND**
- Reduces the garbled truth table for AND gates to **2 rows**, minimizing storage requirements.

---

## **Security Considerations**
### **Semi-Honest Security**
- Yao’s protocol is **secure against semi-honest adversaries**, who follow the protocol but may attempt to infer information from received messages.

### **Malicious Security**
- A malicious sender could construct a garbled circuit that leaks the receiver’s input.
- Since the receiver cannot inspect the garbled circuit, additional **Zero-Knowledge Proofs (ZKP)** are required for security against malicious adversaries.

---

## **Conclusion**
Garbled Circuit is a powerful cryptographic protocol that allows secure function evaluation between two untrusted parties. It is widely used in privacy-preserving computation, including:
- **Secure auctions**
- **Privacy-preserving machine learning**
- **Secure electronic voting**
- **Anonymous data analysis**

Despite its efficiency improvements, Garbled Circuit protocols still require optimizations for practical large-scale applications. Continued research in cryptographic techniques ensures better efficiency and stronger security guarantees.
