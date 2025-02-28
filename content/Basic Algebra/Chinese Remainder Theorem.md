## Intro 
Chinese remainder theorem states that if one knows remainders of the Euclidean division of an integer n by several integers which are pairwise coprime, one can uniquely determine the remainder of the division of n.  

 >Simple example is as follows.
 >If one knows that the remainder of n divided by 3 is 2 ($n \equiv 2 \pmod{3}$), and that remainder divided by 7 is 2 ($n \equiv 2\pmod{7}$), one can determine that remainder of n divided by $105(=3*5*7)$ has a unique value, 23. 

## Theorem
>If the integers \(m_1, m_2, \dots, m_n\) are pairwise coprime, then the following system of simultaneous congruences: 
\[
    x\equiv
    \begin{cases}
    a_1 \pmod{m_1} \\
    a_2 \pmod{m_2} \\
    a_3 \pmod{m_3} \\
    \vdots \\
    a_n \pmod{m_n}
    \end{cases}
\]
    has a unique solution modulo
    \[
        M=\prod_{i=1}^{n} m_i=m_1 m_2 \cdots m_n.
    \]

Such formula could be otherwise expressed as written in section "Ring Isomorphism" below, according to ring isomorphism.(definition can be checked from [[Ring Homorphism]].)

## Computation
Though its existence can be checked using CRT, derivation of value $x$ using pure computation requires long time. 

### 1. Systematic Search
Systematic Search is the simplest method available to find the solution, which checks every possible value for $x$. 
It suffices to check all the possible values from 0 to $N$, computing the remainder of the Euclidean division of $x$ by each $n_i$. 

Although such method is very simple, it is very inefficient. This algorithm is an exponential time algorithm, as the size of the input is the number of digits of $N$, and the average number of operation is of the order of $N$. 

### 2. Search by Sieving
Searching of the solution can be made faster by using "sieving" algorithm.

**1. Concept**
Given the system of congruences:

\[
x \equiv a_1 \pmod{n_1}
\]

\[
x \equiv a_2 \pmod{n_2}
\]

\[
\vdots
\]

\[
x \equiv a_k \pmod{n_k}
\]

the **sieving method** finds the solution by iteratively filtering values that satisfy each congruence.


**2. Step-by-Step Process**
1. **Generate the sequence from the first congruence**  
   - The numbers satisfying \( x \equiv a_1 \pmod{n_1} \) form an arithmetic sequence:
     \[
     a_1, a_1 + n_1, a_1 + 2n_1, \dots
     \]
   
2. **Filter by the second modulus \( n_2 \)**  
   - Test values from the sequence modulo \( n_2 \) until finding the first \( x_2 \) such that:
     \[
     x_2 \equiv a_2 \pmod{n_2}
     \]
   - Once found, construct a new sequence:
     \[
     x_2, x_2 + n_1 n_2, x_2 + 2 n_1 n_2, \dots
     \]

3. **Repeat the process for \( n_3, n_4, \dots, n_k \)**  
   - Continue filtering each sequence by the next modulus \( n_3 \), forming a new arithmetic sequence each time.
   - The final step yields the unique solution \( x \).

---
### **Mathematical Representation: Ring Isomorphism**
This can be mathematically formulated by defining the following function \( f \):

\[
f: \mathbb{Z}/N\mathbb{Z} \to \mathbb{Z}/n_1\mathbb{Z} \times \mathbb{Z}/n_2\mathbb{Z} \times \cdots \times \mathbb{Z}/n_k\mathbb{Z}
\]

This function operates as follows:

\[
x \mod N \mapsto (x \mod n_1, x \mod n_2, \dots, x \mod n_k)
\]

That is, the function takes an integer \( x \) modulo \( N \) and transforms it into a tuple of its remainders when divided by \( n_1, n_2, \dots, n_k \). 

The key point is that this function \( f \) is a **ring isomorphism**, meaning that the following holds:

\[
\mathbb{Z}/N\mathbb{Z} \cong \mathbb{Z}/n_1\mathbb{Z} \times \cdots \times \mathbb{Z}/n_k\mathbb{Z}
\]

This implies that the ring of integers modulo \( N \) has a structure equivalent to the direct product of the rings of integers modulo \( n_i \). In other words, for doing sequence of arithmetic operations in \(\mathbb{Z}/N\mathbb{Z}\), one can do the same computation independently in each \( \mathbb{Z}/n_i\mathbb{Z}\), and then get the result by applying the isomorphism. This can work way faster than the direct computation of $N$.

## Example: Direct Calculation

Consider the system of congruences for \( N = 15 \), where \( n_1 = 3 \) and \( n_2 = 5 \):

\[
x \equiv 2 \pmod{3}
\]

\[
x \equiv 3 \pmod{5}
\]

Using the Chinese Remainder Theorem (CRT), we find \( x \) as follows:

\[
x \equiv 8 \pmod{15}
\]

Thus, \( x = 8 \) is the unique solution.

However, using **ring isomorphism**, we can take a different approach:

1. **Perform independent computations**  
   - \( x_1 \equiv 2 \pmod{3} \)  
   - \( x_2 \equiv 3 \pmod{5} \)  

2. **Combine the results**  
   - \( x \equiv 8 \pmod{15} \)  

By extending this method, we can optimize computations involving a large number \( N \) by performing calculations on smaller values \( n_i \) and then recombining the results. This approach significantly improves efficiency in modular arithmetic.


Rather than simply solving a system of congruences, the Chinese Remainder Theorem possesses the remarkable property that a unique solution exists, making it an extremely powerful tool.

