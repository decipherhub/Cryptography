The Residue Number System (RNS) is a number system used for representing and performing arithmetic operations on integers, with the advantage of supporting parallel computations. In RNS, an integer is represented using multiple distinct coprime integers (referred to as the base set). The underlying principle of RNS is based on the [[Chinese remainder theorem]], which states that given a set of pairwise coprime integers, a unique solution exists for a system of simultaneous congruences, allowing the representation of a single integer using multiple coprime integers.

## RNS Representation
In RNS, an integer XXX can be represented as a set of kkk integers:
$$X \equiv \{x_1, x_2, x_3, ..., x_k\} \quad (mod \space \{m_1, m_2, m_3, m_4, ..., m_k\})$$
where ${m_1, m_2, m_3, …, m_k}$ is the base set of the RNS.

For example, in an RNS with the base set {3,5,7}\{3, 5, 7\}{3,5,7}, the integer 23 is represented as (2,3,2)(2, 3, 2)(2,3,2):
$$

\begin{align} 23 \equiv 2 \quad& (mod \space 3) \\ 23 \equiv 3 \quad& (mod \space 5) \\ 23 \equiv 2 \quad& (mod \space 7) \\ \end{align}

$$

## Arithmetic operations
### Add
Addition in RNS is performed by simply adding the corresponding residues:
$$ 
\begin{align} 
\{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 +y_1 (mod \space m_1), \\ & x_2 +y_2 (mod \space m_2), \\ &..., \\ &x_k +y_k (mod \space m_k)\} 
\end{align} 
$$

### Subtract
Subtraction in RNS is performed by subtracting the corresponding residues:
$$ 
\begin{align} 
\{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 -y_1 (mod \space m_1), \\ & x_2 -y_2 (mod \space m_2), \\ &..., \\ &x_k -y_k (mod \space m_k)\} 
\end{align} 
$$

### Multiply
Multiplication in RNS is performed by multiplying the corresponding residues:
$$ 
\begin{align} 
\{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 \cdot y_1 (mod \space m_1), \\ & x_2 \cdot y_2 (mod \space m_2), \\ &..., \\ &x_k \cdot y_k (mod \space m_k)\} 
\end{align} 
$$

### Divide
Division in RNS is performed using the modular multiplicative inverse of the divisor. This is calculated as follows:

$$ 
\begin{align} \{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 \cdot y_1^{-1} (mod \space m_1), \\ & x_2 \cdot y_2^{-1} (mod \space m_2), \\ &..., \\ &x_k \cdot y_k^{-1} (mod \space m_k)\} 
\end{align} 
$$

### Comparison

For equality, two numbers are considered equal if all their residues are equal. Direct comparison for greater than or less than is not straightforward in RNS and typically requires reconstructing the full value for the comparison.