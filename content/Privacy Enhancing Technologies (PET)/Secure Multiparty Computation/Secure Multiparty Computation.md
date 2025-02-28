# Secure Multiparty Computation (MPC)

## Definition
Secure Multiparty Computation (MPC) is a cryptographic protocol that allows multiple parties to perform joint computations using their individual inputs while keeping these inputs completely private. In MPC, each participant's data remains confidential, and no party can access the data of another. This protocol ensures the accuracy of the computation results by revealing only the final outcome without disclosing any intermediate steps.

## Use Cases
One of the primary applications of MPC is the secure aggregation of data from different data owners. For example, when multiple organizations need to perform joint data analysis or derive insights from various datasets, MPC can be used to ensure that each party's data remains private throughout the process. This is particularly useful in scenarios where data privacy is crucial, such as healthcare, finance, and collaborative research. By using MPC, organizations can collaborate and derive valuable insights without compromising data privacy and security.

## Advantages
1. **Privacy Assurance:** MPC ensures that sensitive data remains private, with computations carried out without exposing individual inputs.
2. **Data Security:** As data is not exposed in plaintext, it helps prevent data breaches and leaks.
3. **Regulatory Compliance:** MPC aids in complying with data protection regulations, ensuring that sensitive data is not shared or exposed.
4. **Collaborative Analysis:** Multiple entities can collaborate on data analysis projects without compromising their proprietary data.

---
## Scheme
Let's check out how MPC works in more formal manner. Given a set of \( N \) parties \( P_1, P_2, \dots, P_N \) with respective private inputs \( d_1, d_2, \dots, d_N \), the goal of MPC is to compute a function:

\[
F(d_1, d_2, \dots, d_N)
\]

such that:
- No party learns any information about another party’s private input beyond what can be inferred from their own input and the output.
- The function is correctly computed even in the presence of adversarial behavior.

### **Motivation and Example**
Consider three participants: Alice, Bob, and Charlie, each holding a private salary \( x, y, z \), respectively. They wish to compute:

\[
F(x, y, z) = \max(x, y, z)
\]

without revealing their individual salaries to each other. A naïve solution would involve a trusted third party who collects the inputs, computes the result, and returns the output. However, MPC aims to achieve this functionality **without relying on any trusted third party**—ensuring that the computation is performed securely through direct interaction between the parties.

For instance, if the output is \( z \), then:
- Charlie learns that his salary is the maximum.
- Alice and Bob learn that their salary is not the maximum and that the maximum salary is \( z \).

MPC protocols can be generalized to handle multiple inputs and outputs, ensuring privacy-preserving computations across various scenarios.

### **Properties of MPC**
An MPC protocol must satisfy two fundamental properties:

**1. Input Privacy**
- No information about any participant's private input should be revealed through protocol execution beyond what is deducible from the function output.
- The only knowledge gained by a party should be whatever they could infer from knowing their own input and seeing the final result.

**2. Correctness**
- A subset of colluding adversarial participants should not be able to manipulate the computation to produce incorrect results.
- There are two types of correctness guarantees:
  - **Robust MPC:** The honest parties are always guaranteed to receive the correct result.
  - **MPC with Abort:** If an error is detected, the protocol terminates without outputting any result.

---
## Protocols
As we were able to check above, MPC protocols enable multiple parties to collaboratively compute a function over their private inputs while ensuring that no individuals party's input is disclosed to others. In this section, we are going to check out how MPC is implemented in real-life protocols. 

### 1. Secure Two-Party Computation
Two-party computation (2PC) is a fundamental subset of **Secure Multi-Party Computation (MPC)** that allows two parties to collaboratively compute a function over their private inputs without revealing those inputs to each other. It is particularly interesting because special cryptographic techniques can be applied in this setting that do not necessarily extend to the multi-party case.

The concept of secure two-party computation was first formalized in the 1980s, particularly through the work of Andrew Yao. The original motivation came from **Yao’s Millionaires’ Problem**, where two individuals wish to determine who is wealthier without disclosing their actual net worth. This led to the development of **Yao’s Garbled Circuits**, which remains one of the most efficient protocols for secure two-party computation.

Check out [[Garbled Circuit]] for more information! 

### 2.Multi-Party Computation 

Unlike two-party computation (2PC) protocols, most **multi-party computation (MPC) protocols** rely on **secret sharing** as their fundamental mechanism, particularly when operating under unconditional security assumptions with private channels. In MPC, participants do not have predefined roles such as creator and evaluator (as in Yao’s Garbled Circuit). Instead, each party holds a **share of the secret data**, and a protocol is executed to evaluate the desired function securely.

In contrast to Yao’s binary circuits, multi-party computation operates on **arithmetic circuits** defined over **finite fields**. An **arithmetic circuit** consists of:
- **Addition gates** and **multiplication gates**, 
- Where the operands are elements of a finite field.

This shift from Boolean circuits to arithmetic circuits enables a broader range of cryptographic computations, making MPC suitable for complex secure computations across multiple parties.


**[Secret Sharing in MPC]**
Secret sharing is a technique that **distributes a secret among multiple parties** by assigning each party a **random share** of the secret. The secret can only be reconstructed when a sufficient number of shares are combined.

The two most widely used **secret sharing schemes** in MPC are:
1. **Shamir Secret Sharing**
2. **Additive Secret Sharing**

In both schemes:
- Each party receives a **random share**.
- The sum (or reconstruction function) of these shares within a finite field **yields the original secret**.
- Security is achieved because **any unauthorized subset of shares appears as a random distribution**.

**[Security and Adversary Models]**
Secret sharing schemes are designed to **tolerate adversarial behavior** based on:
- **The total number of parties** (\( n \))
- **The number of adversarial parties** (\( t \))
- **Whether adversaries are passive or active**

| Secret Sharing Scheme | Passive Adversary Threshold \( t \) | Active Adversary Threshold \( t \) | Security Type |
|----------------------|----------------------------------|---------------------------------|---------------|
| **Shamir Secret Sharing** | \( t < \frac{n}{2} \) | \( t < \frac{n}{3} \) | **Information-theoretic security** (secure against computationally unbounded adversaries) |
| **Additive Secret Sharing** | \( t < n \) | \( t < n \) | **Computational security** (requires additional assumptions for active adversaries) |

**[Computing on Secret Shares]**
A fundamental goal in MPC is to **perform secure computation over secret shares**. The **BGW protocol (Ben-Or, Goldwasser, Wigderson)** is a widely used scheme that enables:
- **Secure addition and multiplication on Shamir secret shares**.
- **Fault tolerance against adversarial behavior**.

Some MPC protocols require an **initial setup phase**, which may introduce security assumptions (e.g., assuming adversaries have bounded computational power).
