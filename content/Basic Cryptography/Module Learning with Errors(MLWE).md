## Definition

Let $\Phi$ be an irreducible polynomial of degree $d$. Let $a \in (\mathbb{Z}_q[X]/\Phi(X))^k$ be a uniformly random polynomial, $e \in \mathbb{Z}_q[X]/\Phi(X)$ be a small error polynomial, and $s \in (\mathbb{Z}_q[X]/\Phi(X))^k$ be a small secret polynomial. The pair $(as + e, a)$ is an MLWE pair.

## Remarks on MLWE

[[Learning with Errors (LWE)]] is MLWE with $d = 1$. RLWE is MLWE with $k = 1$. CRYSTALS-Kyber, the only PKE/KEM among the NIST PQC round 1 winners, is an MLWE-based key encapsulation scheme.