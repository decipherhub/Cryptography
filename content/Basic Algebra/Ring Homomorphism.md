## Definition
For two [[Rings]] $R$ and $S$, a mapping $f: R \to S$ is called a ring homomorphism if it satisfies the following conditions:
1. For any $(a, b) \in R$, $f(a + b) = f(a) + f(b)$.
2. For any $(a, b) \in R$, $f(ab) = f(a) \cdot f(b)$.
3. $f(1_R) = 1_S$.

Here, the operations on the left-hand side of each condition are those defined in $R$, and the operations on the right-hand side are those defined in $S$. 

###  Ring Isomorphism
If addition $f$ above is bijection, then its inverse $f^{-1}$ is also a ring homomorphism. In such cases, $f$ is called a ring isomorphism, and the rings R and S are called isomorphic. 
Such isomorphism is noted as $R \cong S$

## Properties
Below are useful properties derived from ring homomorphism.
- \( f(0_R) = 0_S \).
- \( f(-a) = -f(a) \) for all \( a \in R \).
- For any **unit** \( a \) in \( R \), \( f(a) \) is a unit element such that  
  \[
  f(a)^{-1} = f(a^{-1})
  \]
  In particular, \( f \) induces a **group homomorphism** from the (multiplicative) group of units of \( R \) to the (multiplicative) group of units of \( S \) (or of \( \operatorname{im}(f) \)).
- The **image** of \( f \), denoted \( \operatorname{im}(f) \), is a subring of \( S \).
- The **kernel** of \( f \), defined as  
  \[
  \ker(f) = \{ a \in R \mid f(a) = 0_S \}
  \]
  is a **two-sided ideal** in \( R \). Every two-sided ideal in a ring \( R \) is the kernel of some ring homomorphism.
- A homomorphism is injective if and only if the kernel is the **zero ideal**.
- The **characteristic** of \( S \) **divides** the characteristic of \( R \). This can sometimes be used to show that between certain rings \( R \) and \( S \), no ring homomorphism \( R \to S \) exists.
- If \( R_p \) is the smallest **subring** contained in \( R \) and \( S_p \) is the smallest subring contained in \( S \), then every ring homomorphism \( f: R \to S \) induces a ring homomorphism \( f_p: R_p \to S_p \).
- If \( R \) is a **field** (or more generally a **skew-field**) and \( S \) is not the **zero ring**, then \( f \) is injective.
- If both \( R \) and \( S \) are **fields**, then \( \operatorname{im}(f) \) is a subfield of \( S \), so \( S \) can be viewed as a **field extension** of \( R \).
- If \( I \) is an ideal of \( S \), then \( f^{-1}(I) \) is an ideal of \( R \).
- If \( R \) and \( S \) are commutative and \( P \) is a **prime ideal** of \( S \), then \( f^{-1}(P) \) is a prime ideal of \( R \).
- If \( R \) and \( S \) are commutative, \( M \) is a **maximal ideal** of \( S \), and \( f \) is surjective, then \( f^{-1}(M) \) is a maximal ideal of \( R \).
- If \( R \) and \( S \) are commutative and \( S \) is an **integral domain**, then \( \ker(f) \) is a prime ideal of \( R \).
- If \( R \) and \( S \) are commutative, \( S \) is a field, and \( f \) is surjective, then \( \ker(f) \) is a **maximal ideal** of \( R \).
- If \( f \) is surjective, \( P \) is a prime (maximal) ideal in \( R \) and \( \ker(f) \subseteq P \), then \( f(P) \) is a prime (maximal) ideal in \( S \).
