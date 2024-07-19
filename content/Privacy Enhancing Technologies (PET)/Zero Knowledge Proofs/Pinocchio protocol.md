## Intro
이 아티클은 [[ZK-SNARK]] 시스템 중 가장 먼저 실용화된 **Pinocchio protocol**에서 proof를 생성하고 검증하는 기본적인 과정을 서술하였다.

## Homomorphic Hidings

영지식증명 시스템에서 Prover가 증명하는 것은 보통 특정 다항식을 알고있다는 것이다. 다만, 알고있다는 사실 외에 다항식에 대한 어떠한 정보도 노출되면 안된다.

 zk-SNARK에서 다항식을 이용하는 이유 [[Polynomial theorem#2. Schwartz-Zippel Lemma]]에 의해 최대 차수가 $d$인 서로 다른 두 다항식의 교점은 최대 $d$개이다. 즉, Prover와 Verifier가 서로 다른 다항식을 가지고 있을 때 두 다항식이 겹치는 점은 최대 $d$개인 것이다. 예를들어 최대차수가 $d$인 두 다항식의 정의역의 범위가 $1<x<10^{77}$ 이라면 두 다항식이 임의의 $x$에서 교점을 가질 확률은 $d \over 10^{77}$로 negligible하다. 이러한 성질을 이용해 다항식을 SNARK시스템에서 활용할 수 있다.

Prover가 다항식을 공개하지 않고, Verifier가 지정한 $x$ 좌표에서 다항식을 계산해서 Verifier가 이를 검증할 수도 있다. 그런데 Verifier가 선택한 $x$좌표를 Prover가 알게된다면, 해당 x좌표에서만 문제의 조건을 만족하게끔 다항식을 조작할 여지가 있다. 선택된 x값을 Prover에게 공개하지 않으면서 Prover가 해당 x좌표에서 다항식을 계산할 수 있는 방법이 필요한데 여기서 Homomorphic Hiding이라는 수학적 방법이 사용된다.

Homomorphic Hiding(HH)은 다음 조건을 만족해야한다.

1. Homomorphic Hiding $E(x)$의 값이 주어질 때, hiding 이전의 값 x를 알아내는 것은 매우 어렵다.
2. $x\ne y$ 이면, $E(x) \ne E(y)$
3. $E(x), E(y)$ 의 값을 통해 x, y의 산술 연산 표현식에 대한 hiding 값을 계산할 수 있다.

HH 함수는 주로 $Z_p^*$에서의 DLP(Discrete Logarithm Problem)를 이용한다. 따라서 $Z_p^*$의 generator $g$에 대해 $E(x) = g^x \pmod p$ 라고 하면 위의 특성들을 모두 만족한다.

## Blind Evaluation of Polynomials

Verifier는 자신이 선택한 $x$좌표 $s$의 Homomorphic Hiding값을 Prover에게 전달할 수 있다. 단, Homomorphic Hiding은 linear computation만 가능하다. 즉, $E(x)$와 $E(y)$를 이용하여 $E(x+y)$는 쉽게 계산할 수 있지만 $E(x*y)$는 계산이 불가능하다는 것이다. 따라서 Prover의 $d$차 다항식 $P$에 대하여 Verifier는 각 계수에 대한 hiding값 $E(s^0), E(s^1), ...,E(s^d)$값을 모두 Prover에게 전달해야한다. 그러면 Prover는 자신이 가진 coefficient를 이용해 각 차수의 hiding값에 대한 linear computation 값들의 hiding 값을 계산해낼 수 있다.

이를 Blind Evaluation of Polynomial이라고 한다. 하지만 Verifire 입장에서는 Prover를 통해 전달받은 값이 반드시 $E(P(s))$를 계산하여 전달한 값이라는 보장을 할 수 없다. 즉, Prover가 우연히 맞췄을 가능성도 존재하므로 Prover가 반드시 $P(s)$의 hiding값만을 전달할 수 있도록 강제할 방법이 필요하다.

## The Knowledge of Coefficient Test and Assumption

DLP는 $Z_p^*$에서 $p$가 충분히 클 경우 $a,b$값을 알아도 $b= a^x$를 만족하는 $x$를 찾아내는 것은 매우 어렵다는 문제이다. 편의를 위해 $b=a^\alpha$를 $b=\alpha * a$로 표현하고, 이를 만족하는 $(a,b)$를 $\alpha-pair$라고 한다. 여기서 Bob이 임의의 $\alpha$를 선택해 $(a,b)$쌍을 Alice에게 전달하고, Alice는 $(a,b)$가 아닌 또다른 $\alpha-pair$ $(a',b')$를 생성해서 Bob에게 전달한다면, Bob은 Alice가 어떤 상수 $\alpha$에 대해 $a'= a^\alpha, b'= b^\alpha$를 계산했음을 확신할 수 있다. 왜냐하면 Alice는 $(a,b)$만으로는 $\alpha$를 알아내는 것이 매우 어렵기 때문에 Alice가 이외의 방법으로 계산할 확률은 negligible하다. 따라서 $a',b'$가 $a,b$로부터 동일한 비율로 계산되었다고 가정할 수 있고, 이것이 _**Knowledge of Coefficient Assumption**_이다.

KCA를 좀더 확장해보면 다음과 같다.

- Bob이 $n$개의 $\alpha-pair$ $(a_1,b_1),(a_2,b_2),...,(a_n,b_n)$을 Alice에게 전달한다.
- Alice는 또 다른 임의의 $c_1,c_2,...,c_n$을 이용해 $(a',b')$을 계산한다: $a' = c_1*a_1+ ... + c_n*a_n$ $b' = c_1*b_1+ ... + c_n*b_n$ $a'_\alpha = {c_1}_\alpha * a_1 +...+ c_n*\alpha * a_n \\ \qquad = c_1 * b_1 + ... + c_n * b_n = b'$
- Bob은 Alice가 위와같은 계산을 통해 값을 구했다고 가정할 수 있다.

이러한 과정을 이용하여 Blind Evaluation에 적용하면, Bob이 임의의 값$\alpha$와 $s$를 선택하여 Alice에게 $(E(s^0),E(\alpha *s^0)),...,(E(s^n),E(\alpha *s^n))$ pair들을 보내고, Alice는 전달받은 pair들로부터 또 다른 $\alpha-pair$ $(a',b')$를 생성한다면, Bob은 Alice가 어떤 상수 $c_0, c_1,...,c_n$을 이용해 $a'= E(\sum^d_{i=0} c_i * s_i)$을 통해 계산되었음을 KCA를 통해 확신할 수 있고, 이를 $d-KCA$라고 한다.

## How to make Blind Evaluation of Polynomials Verifiable

위 과정을 이용하여 _**Verifiable Blind Evaluation**_을 정의할 수 있는데, 이는 Prover는 $s$를 모르고 Verifier는 $P$를 모른채로 Proof를 생성할 수 있는 ‘Blindness’와, 그 과정에서 Prover가 다른 방법이 아닌 자신의 다항식을 통해 $E(P(s))$를 생성했는지 검증할 수 있는 ‘Verifiability’의 속성을 가진다.

Verifiable Blind Evaluation을 생성하는 과정은 다음과 같다.

1. $E(x) = g^x\pmod{p}$라고 할때, Verifier는 $s$와 $\alpha$를 선택하고, $s$의 각 차수에 대한 hiding 값 $E(s^0), E(s^1),..., E(s^d)$와 $s$에 대한 $\alpha-pair$의 hiding 값 $E(\alpha_s^0), E(\alpha_s^1), ..., E(\alpha_s^d)$를 생성하여 Prover에게 전달한다. 즉, $(E(s^n), \alpha_E(s^n))$과 같은 $\alpha-pair$들을 보내는 것이다.
2. Prover는 위에서 전달받은 값을 통해 $a= P(s)*g =E(P(s))$와 $b= P(\alpha * s)_g= E(P(\alpha * s))$를 계산하고 Verifier에게 $\alpha-pair (a,b)$를 전달한다. 여기서 $E(P(s))$는 linear combination이므로 쉽게 계산할 수 있지만 다항식$P$의 각 계수들을 $c_0, c_1, ..., c_d$라고 하면 $b = E(c_0 * s^0) + E(c_1 * s^1) +...+ E(c_d * s^d)$ 이므로 Prover는 $P$를 통해 계산하지 않을 확률은 거의 없다.
3. Verifier는 Prover가 전달한 $\alpha-pair$를 $b= \alpha * a$ 를 통해 검증한다.

이렇게 KCA를 통해 Prover는 다항식$P$로 $\alpha-pair$를 만들 수 있고 Verifier는 그것이 Prover가 다항식$P$의 coefficient들로부터 $\alpha-pair$를 생성했다고 가정할 수 있다.

## From Computations to Polynomials
Constraint를 정의하기 위해 QAP([[Quadratic Arithmetic Program]])을 이용하여 다항식을 변환한다. 그 과정을 간단하게 서술하면 다음과 같다.

1. 다항식을 덧셈과 곱셈과 같은 산술연산 gate들로 구성된 Arithmetic Circuit으로 변환한다.
2. 각 gate들을 R1CS 형태의 constraint로 변환한다.
3. R1CS의 constraint들을 해당 assignment들에 대해 만족하는 QAP로 변환한다.

(구체적인 과정은 [[Quadratic Arithmetic Program]] 참고.)

예를들어 Prover가 다항식 $P$를 알고있음을 증명하는 것은 이를 QAP를 통해 각 gate들의 target point 에서

$Q(x) = A(x)_B(x) - C(x) = 0$ 을 만족하는 assignment $s$를 알고있음을 증명하는 것과 동일하다. ( A(x) = A_s, B(x) = B_s, C(x) = C_s )

이때 각 gate들에 대한 target point들에 대해서 위 등식이 성립하므로 $T(x)| Q(x)$ 이다. 즉, Prover는 $Q(x) = H(x)*T(x)$ 를 만족하는 $H(x)$가 존재한다는 것으로 증명할 수 있다.

## The Pinocchio Protocol

_**Pinocchio Protocol**_ 에서는 Prover가 자신이 QAP를 만족하는 assignment를 알고있음을 위에서 서술한 방식들을 활용해 증명한다.

### Homomorphic Hiding

Schwartz-Zippel Lemmal 를 이용하면 $A_B-C = H_T$ 에서 두 다항식이 같음을 확률적으로 확인할 수 있다. Verifier는 $s$를 선택하여 $E(T(s))$를 계산하고, Prover는 $E(A(s)), E(B(s)), E(C(s)), E(H(s))$를 계산하여 Verifier에게 보낸다. Verifier는 전달받은 값들로 $s$에서 $E(A(s)*B(s) -C(s)) = E(T(s)*H(s))$가 성립하는지 확인한다.

이 과정에서 Verifier는 Prover가 assignment로부터 값들을 생성했다고 확신할 수 없으므로 추가적인 과정이 필요하다.

### Verifiable Blind Evaluation

다항식 $A, B, C$를 하나의 다항식 $F$로 합친다. 여기서 A,B,C의 계수의 분리를 위해 서로 다른 차수의 변수를 곱하여 더해준다. → $F = A + X^{d+1}*B + X^{2(d+1)}$ (다항식의 최대 차수가 d이므로 각각 d+1, 2(d+1)의 차수를 적용) 그리고 $F$역시 QAP를 활용해 $F_i$의 linear combination으로 만들 수 있다. 이를 이용하여 다음과 같은 과정을 거친다.

1. Verifier는 임의로 $\beta$를 선택하여 Prover에게 $E(\beta), E(\beta s), ... , E(\beta s^d)$를 보낸다.
2. Prover는 $E(\beta*F(s))$를 계산하여 Verifier에게 보낸다.

Prover가 위 과정을 수행하면 Verifier는 d-KCA에 의해 $F$의 QAP를 만족하는 assignment를 알고있음을 확인할 수 있다.