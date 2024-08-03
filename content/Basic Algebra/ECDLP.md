The Elliptic Curve Discrete Logarithm Problem (ECDLP) is defined similarly to the [[Discrete Logarithm Problem]] in $Z_p^*$ but on the structure of [[Elliptic Curves]].

-   Given an elliptic curve $E: y^2 = x^3 + ax + b$ and a generator $G \in E$, we form a cyclic subgroup $H = <G>$.
-   For any element $Q$ in $H$, the problem is to find $a$ $(0 \le a < |G| )$ such that $aG = Q$.

Reasons to use ECDLP:

-   It provides security with much shorter key sizes compared to the general DLP.
    
-   While there are algorithms (like the Index Calculus Algorithm) to solve the DLP defined in $Z_p^*$, for ECDLP only generic algorithms are known. No specific algorithms for ECDLP have been discovered to date. Attacks like Baby-step Giant-step and Pollard's rho algorithm require $O(\sqrt{p})$ operations.
