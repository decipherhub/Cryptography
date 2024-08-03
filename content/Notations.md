> [!Info]
> The [[Notations]] section provides an overview of key mathematical concepts and notations essential for understanding advanced mathematical and cryptographic theories. This includes the definitions of various sets, operations, and properties that form the foundation for exploring complex algorithms and mathematical proofs.

## Sets and Number Systems

### Key Sets

- **$\mathbb{Z}$**: The set of integers, represented as $\{ \ldots, -2, -1, 0, 1, 2, \ldots \}$.
- **$\mathbb{N}$**: The set of natural numbers including zero, $\{ 0, 1, 2, \ldots \}$.
- **$[b]$**: A finite set of integers, $\{ 0, 1, \ldots, b-1 \}$.
- **$\mathbb{R}$**: The set of real numbers, which includes all rational and irrational numbers. Real numbers correspond to all the points on a continuous number line.

### Modular Arithmetic and Related Sets

- **$\mathbb{Z}_n$**: The set of integers modulo $n$, consisting of equivalence classes $\{ 0, 1, \ldots, n-1 \}$.
- **$\mathbb{Z}_n^*$**: The multiplicative group of integers modulo $n$, consisting of elements $e$ such that $\gcd(e, n) = 1$. When $n$ is prime, $\mathbb{Z}_n^* = \{ 1, \ldots, n-1 \}$.

### Finite Fields and Euler's Totient Function

- **$\mathbb{F}_p$**: A finite field of order $p$. When $p$ is a prime number, this corresponds to integers modulo $p$, $\mathbb{Z}_p$. For a prime power $q^k$, this refers to Galois fields.
- **$\phi(n)$**: Euler's totient function, which counts the number of integers in $\{ 1, \ldots, n \}$ that are coprime with $n$.

### Cardinality of Sets

- **$|S|$**: The order or cardinality of a set $S$, which is the number of elements in the set. For example, $|\mathbb{Z}_n^*| = \phi(n)$. If $n$ is prime, then $|\mathbb{Z}_n^*| = n-1$.

## Properties of Operations

### 1. Inverse Element

- **Definition**: For a given element $a$, the inverse element is one that, when combined with $a$ under a specific operation, results in the identity element.
- **Example**: In the context of addition, the inverse is the negative. In multiplication, the inverse is the reciprocal. For the real number set, the additive inverse of $a$ is $-a$, and the multiplicative inverse is $1/a$ (assuming $a \neq 0$).

### 2. Identity Element

- **Definition**: An element that, when combined with any element of a set under a specific operation, leaves the element unchanged.
- **Example**: The identity element for addition is 0, and for multiplication, it is 1. Thus, $a + 0 = a$ and $a \times 1 = a$.

### 3. Associative Law

- **Definition**: A property indicating that the way elements are grouped in an operation does not affect the result.
- **Formula**: $(a \star b) \star c = a \star (b \star c)$.
- **Example**: Both addition and multiplication are associative. For example, $(a + b) + c = a + (b + c)$ and $(a \times b) \times c = a \times (b \times c)$.

### 4. Commutative Law

- **Definition**: A property where the order of elements in an operation does not affect the result.
- **Formula**: $a \star b = b \star a$.
- **Example**: Both addition and multiplication are commutative. For example, $a + b = b + a$ and $a \times b = b \times a$.

### 5. Distributive Law

- **Definition**: Describes how one operation is distributed over another operation within an expression.
- **Formula**: $a \times (b + c) = (a \times b) + (a \times c)$.
- **Example**: Multiplication is distributive over addition. For instance, $2 \times (3 + 4) = (2 \times 3) + (2 \times 4)$.

## Number Theory Concepts

### Jacobi Symbol and Quadratic Residues

- **$J(w, n)$**: The Jacobi symbol for $w$ modulo $n$, defined only for positive odd $n$, and can take values of $-1, 0, 1$.
- **$J_n$**: The set of elements in $\mathbb{Z}_n^*$ with a Jacobi symbol of 1.
- **$QR_n$**: The set of quadratic residues modulo $n$, elements that have a square root, defined as $QR_n = \{ e \in \mathbb{Z}_n : \exists r, r^2 \equiv e \mod n \}$.