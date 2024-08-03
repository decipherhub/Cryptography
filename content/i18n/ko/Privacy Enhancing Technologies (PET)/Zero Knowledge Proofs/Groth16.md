## Intro

_**Groth16**_은 Pinocchio protocol에 비해 성능을 향상시킨 시스템이다. [[Pinocchio protocol]]에 비해 훨씬 적은 수의 페어링으로도 검증이 가능하고 CRS도 더 짧다. 다만 두번의 Trusted setup을 해야한다는 치명적인 단점이 있다.

## CRS

- Toxic waste: $\alpha, \beta, \gamma, \delta, \tau \in F_p$
- $Q(x) = A(x)*B(x)-C(x) =H(x)*Z(x)$ → R1CS로부터 생성된 QAP polynomial Q(x)
- $n$개의 constraints가 있고, $Z(x) = (x-1)(x-2)...(x-n)$ 이다.
- computation에 $m$개의 variable을 사용하고, 그중 public input은 $l$개이다.
- $L_i(x) = \beta *A_i(x) + \alpha *B_i(x) + C_i(x)$

**Proving Key:**

$G_1$ elements: $g_1, g_1^\alpha, g_1^\beta, g_1^\delta, \{g_1^{\tau^i},g_1^{\alpha\tau^i},g_1^{\beta\tau^i}\}_{i=0}^{n-1}, \{g_1^{L_i(\tau)/\delta}\}_{i=l+1}^m, \{g^{\tau^iZ(x)/\delta}\}_{i=0}^{n-2}$

$G_2$ elements: $g_2, g_2^\beta, g_2^\delta, \{g_2^{\tau^i}\}_{i=0}^{n-1}$

**Verification Key:**

$G_1$ elements: $g_1, \{g_1^{L_i(\tau)/\gamma}\}_0^l$

$G_2$ elements: $g_2, g_2^\gamma, g_2^\delta$

$G_T$ element: $g_1^\alpha * g_2^\beta$

## Proof Generation

- witness vector $w = (1, w_1,...,w_m)$
- 랜덤값 $r,s$
- Proof는 세개의 점 $A, B, C$로 이루어진다.

※ 아래 식에서 아래첨자 1 또는 2는 $G_1, G_2$를 의미한다. (e.g. $\alpha_1 = \alpha * g_1$)

$A$는 $G_1$ 위의 점이고 다음식을 만족한다.

$A_1 = \alpha_1 + w_0*A_0(\tau)_1 + w_1*A_1(\tau)_1+ ...+ w_m*A_m(\tau)_1+r*\delta_1$

$B$는 $G_2$ 위의 점이고 다음식을 만족한다.

$B_2 = \beta_2 + w_0*B_0(\tau)_2 + w_1*B_1(\tau)_2 + ... + w_m*B_m(\tau)_2 +s*\delta_2$

$C$는 $G_1$ 위의 점이고 다음식을 만족한다.

$C_1 = w_{l+1}*(L_{l+1}(\tau)/\delta)_1 +...+ w_m*(L_m(\tau)/\delta)_1 + H(\tau)*(Z(\tau)/\delta)_1 + s*A_1 + r*B_1-r_s*\delta_1$

## Verification

아래 식이 성립하는지 확인함으로써 위에서 생성한 Proof를 검증할 수 있다.

$A_1*B_2 = \alpha_1 * \beta_2 + (w_0*L_0(\tau)/\gamma+...+ w_l*L_l(\tau)/\gamma)_1 * \gamma_2 + C_1 *\delta_2$

이 식에서 $\alpha_1*\beta_2$는 이미 verification key 로 주어져있으므로 3개의 paring만 연산하면 된다.

- 좌변 $A_B = (\alpha+A(\tau) +r*\delta)*(\beta+B(\tau)+s*\delta) = A(\tau)*B(\tau) + \alpha*\beta+\alpha*B(\tau)+ \beta*A(\tau) + s*\alpha*\delta+s*A(\tau)*\delta+ r*\beta*\delta+ r*B(\tau)*\delta +s*r*\delta*\delta$
- 우변 $\alpha*\beta + L(\tau) + H(\tau)*Z(\tau) + s*\alpha*\delta + s*A(\tau)*\delta + s*r*\delta*\delta+ r*\beta*\delta + r*B(\tau)*\delta +s*_*r*_*\delta*\delta -s*_*r*_*\delta*\delta \\ = α*_*β + β*_*A(τ) + α*_*B(τ) + C(τ) + H(τ)*_*Z(τ) + s*_*α*_*δ + s*_*A(τ)*_*δ + s*_*r*_*δ *_*δ + r*_*β*_*δ + r*_*B(τ)* δ \\ = C(τ) + H(τ)*_*Z(τ) + α*_*β + α *_*B(τ) + β*_*A(τ) + s*_*α*_*δ + s*_*A(τ)*_*δ + r*_*β*_*δ + r*_*B(τ)*_* δ + s*_*r*_*δ *δ$

위 좌변과 우변을 전개한 결과에서 공통 인수들을 소거해보면 $A(\tau)*B(\tau) = C(\tau) +H(\tau)*Z(\tau)$ 임을 알 수 있고, 결론적으로 증명하고자 했던 식을 검증할 수 있게 된다.
