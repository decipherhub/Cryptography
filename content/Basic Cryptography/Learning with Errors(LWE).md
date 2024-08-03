## Intuition

Consider a line  y = sx , where  s  is the secret key. If a point (a_i, b_i) on this line is given, it is easy to recover the secret  s . The Learning With Errors (LWE) problem extends this problem by adding three conditions:

	1.	Over a finite field  \mathbb{Z}_q .
	2.	Both  a_i  and  s  are vectors ( s \cdot x  denotes the dot product).
	3.	A line with errors ( b_i = a_i \cdot s + e_i ).

LWE is computationally difficult, assuming the hardness of certain lattice problems (e.g., GapSVP and SIVP).

## Definition

Let  q  be a prime, and  n \in \mathbb{Z}_{>0} . Let  a_i \in \mathbb{Z}_q^n  be a set of uniformly random vectors,  e_i \in \mathbb{Z}_q  be a set of small random errors, and  s \in \mathbb{Z}_q^n  be a small secret vector. Then,  b_i = a_i \cdot s + e_i \in \mathbb{Z}_q . Given polynomially many pairs (b_i, a_i), find  s .

The security of LWE depends on the parameters  q ,  n , and the distributions of  e  and  s . Smaller  q , larger  n , and larger  e  and  s  provide better security. The lattice-estimator can be used to measure security.