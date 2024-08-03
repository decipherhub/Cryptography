**Alice는 다음을 증명하고자 합니다:**

$$ u,v,w \in 𝔽_p,\; u_i * v_i = w_i \ \forall i \in [0, n) $$

직관적인 접근 방법: 모든 $i$에 대한 각 경우의 계산을 보여줍니다. → 간결하지 않음

### 1. 라그랑주 보간법

> **라그랑주 보간법 (Lagrange Interpolation):** $x_i, y_i$가 $i \in [0, n)$이고 $i \ne j$일 때 $x_i \ne x_j$인 경우, 차수가 $n$보다 작은 유일한 다항식 $f$가 존재하여 $f(x_i) = y_i \; \forall \; i \in [0,n)$입니다.
> 
> 일반적인 경우, 분할 정복과 FFT를 사용하여 $O(n\log^2n)$의 시간이 소요됩니다.

각 변수에 대해 보간 다항식을 만들어 보겠습니다:

$$ U(x_i) = u_i,\; V(x_i) = v_i,\; W(x_i) = w_i $$

$𝔽_p$에서는 $x_i = \omega^i, \; \omega^n = 1$인 경우를 사용할 수 있습니다. (→ FFT를 사용하여 $O(n\log n)$)

각 다항식 $U, V, W$를 만들 수 있습니다:

$$ U(\omega^i)= u_i,\; V(\omega^i)= v_i,\; W(\omega^i)= w_i $$

이제 우리가 증명해야 할 것은: $U(\omega^i)*V(\omega^i)-W(\omega^i) = (x^n-1)Q(x)$ 입니다.

$\because U(\omega^i)*V(\omega^i) = W(\omega^i)$

$U(\omega^i)*V(\omega^i)-W(\omega^i) \equiv 0 \mod{ (x-\omega^0)(x-\omega^1)...(x-\omega^{n-1})}$

$U(\omega^i)*V(\omega^i)-W(\omega^i) \equiv 0 \mod{(x^n-1)}$

$U(\omega^i)*V(\omega^i)-W(\omega^i) = (x^n-1)Q(x)$

### 2. 슈워츠-지펠 보조정리 (Schwartz-Zippel Lemma)

$P \in 𝔽[x_1,...,x_n]$는 유한 필드 $𝔽$에서 차수가 $d$인 비영 다항식입니다. $r_1,r_2, ..., r_n$이 $𝔽$에서 독립적으로 랜덤하게 선택된 경우,

$$ P_r[P(r_1,r_2,...,r_n) = 0] \le {d\over |𝔽|} $$

따라서, 랜덤 $t \in 𝔽$을 선택하고 다음을 확인하는 것으로 충분합니다:
$$ U(t)*V(t)-W(t) = (t^n-1)Q(t) $$

참고로, 증명자와 검증자 간의 상호작용을 원하지 않습니다. 따라서, 증명자는 다항식의 해시로 $t$ 값을 생성해야 하며, 증명자가 식을 수정하여 동일하지 않은 식이어도 $t$ 값을 유지할 수 있습니다.

검증자는 증명자가 다항식의 해시로 $t$ 값을 생성했을 때 설득될 수 있습니다.
→ 해시 값으로 속일 확률은 무시할 수 있습니다: 피아트-샤미르 휴리스틱 (Fiat-Shamir heuristic)

### 3. 다항식 커밋먼트 방식 (Polynomial Commitment Schemes, PCS)

- 커밋(Commit): $f \rightarrow C(f)$ (바인딩 및 숨김, 검증자가 정확한 $f$를 알 수 없고 증명자가 $f$를 변경할 수 없음)
- 증명(Prove): $f(x) = y$인 증명 $\pi$ 생성
- 검증(Verify): $x,y,C(f), \pi$가 주어졌을 때 $f(x) =y$ 검증

### 4. ZK 추가

PLONKish에서 $U, V, W$를 보간하는 데 랜덤 포인트를 추가하거나 $x^n-1$의 랜덤 배수를 추가합니다. 사용하려는 SNARK 시스템에 따라 다릅니다.