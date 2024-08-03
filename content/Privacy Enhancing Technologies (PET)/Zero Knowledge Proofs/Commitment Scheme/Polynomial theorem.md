 **Alice wants to prove:**
$$ u,v,w \in 𝔽_p,\; u_i * v_i = w_i \ \forall i \in [0, n) $$
Intuitive approach: Show all computations of each cases in every $i$
→Not succinct

### 1. Lagrange Interpolation

>**Lagrange Interpolation :** For $x_i, y_i$ with $i \in [0, n)$ and $x_i \ne x_j \; \forall \; i\ne j$, there is a unique polynomial $f$ of degree less than $n$ such that $f(x_i) = y_i \; \forall \; i \in [0,n)$
>
→ In general case, takes $O(n\log^2n)$ via Divide & Conqure + FFT

Let’s make Interpolated polynomials of each variables:

$$ U(x_i) = u_i,\; V(x_i) = v_i,\; W(x_i) = w_i $$

In $𝔽_p$, we can use the case of $x_i = \omega^i, \; \omega^n = 1$. (→ $O(n\log n)$ via FFT)

We can make each polynomials $U, V,W$:

$$ U(\omega^i)= u_i,\; V(\omega^i)= u_i,\; W(\omega^i)= w_i $$

Now, what we gotta prove is : $U(\omega^i)*V(\omega^i)-W(\omega^i) = (x^n-1)Q(x)$

$\because U(\omega^i)*V(\omega^i) = W(\omega^i)$
$U(\omega^i)*V(\omega^i)-W(\omega^i) \equiv 0 \mod{ (x-\omega^0)(x-\omega^1)...(x-\omega^{n-1})}$
$U(\omega^i)*V(\omega^i)-W(\omega^i) \equiv 0 \mod{(x^n-1)}$
$U(\omega^i)*V(\omega^i)-W(\omega^i) = (x^n-1)Q(x)$

### 2. Schwartz-Zippel Lemma
$P \in 𝔽[x_1,...,x_n]$ is a non-zero polynomial with total degree $d$ over finite field $𝔽$. If $r_1,r_2, ..., r_n$ are i.i.d. randomly selected from $𝔽$, then
$$ P_r[P(r_1,r_2,...,r_n) = 0] \le {d\over |𝔽|} $$

Therefore, it suffices to select random $t \in 𝔽$ and check :
$$ U(t)*V(t)-W(t) = (t^n-1)Q(t) $$
By the way, we don’t want interactions between the prover and verifier. So, the prover gotta give the $t$ value with polynomials at once, but the prover may modify the equation which can hold the $t$ value even if it is not the identical equation.

The verifier can convince when the prover make the $t$ value with the hash of the polynomials.
→ The probability of cheating with hash value is negligible : Fiat-Shamir heuristic

### 3. Polynomial Commitment Schemes (PCS)

- Commit: $f \rightarrow C(f)$ (binding and hiding, so that the verifier cannot know the exact $f$ and prover cannot change the $f$)
- Prove: Generate proof $\pi$ such that $f(x) = y$
- Verify: Verify $f(x) =y$ given $x,y,C(f), \pi$.

### 4. Adding ZK

Adding random points to interpolate $U,V,W$ on, or adding random multiples of $x^n-1$ works in PLONKish. It depends on which SNARK system to use.