# Bootstrapping in Homomorphic Encryption
**Bootstrapping**은 암호화된 상태에서 시크릿 키를 사용하여 노이즈가 많은 암호문을 노이즈가 적은 암호문으로 변환하는 과정입니다. 이를 통해 암호화된 데이터를 동형적으로 복호화하여 노이즈를 줄이고, 추가적인 동형 연산을 가능하게 합니다. 부트스트래핑은 많은 계산 자원이 필요하며, 동형 암호화(FHE) 기술의 핵심적인 요소입니다.

## 문제: Modulus 감소
FHE에서는 각 동형 곱셈이 Modulus를 소모하며, Modulus는 한정된 자원입니다. 
Modulus가 소진되면 더 이상의 곱셈이 불가능해집니다. 
부트스트래핑은 Modulus를 "리프팅"하여 이 문제를 해결합니다.

## 부트스트래핑의 정의
$ct = (b, a) \in R_q^2$가 평문 $m \in R$을 암호화한 CKKS 암호문이라고 할 때, 부트스트래핑 $BTS : R_q^2 \to R_Q^2$는 암호문의 Modulus를 증가시키면서 기본 평문을 대략적으로 유지합니다. 
즉, $BTS(ct) \in R_Q^2$는 평문 $pt' \approx pt$를 암호화합니다.

## 부트스트래핑의 단계
1. **Slots-to-Coefficients (StC):**
- 암호문 슬롯을 다항식 계수로 변환합니다.
- 출력: $ct' = Enc(\Delta \cdot z(X)) \in R_{q0}^2$.

2. **Modulus Raising (ModRaise):**
- 기본 Modulus $q0$의 작은 배수를 추가하여 Modulus를 증가시킵니다.
- 출력: $ct'' = Enc(\Delta \cdot z(X) + q0 \cdot I(X))$ 여기서 $I(X) \in R$은 작은 값입니다.

3. **Coefficients-to-Slots (CtS):**
- 다항식 계수를 다시 슬롯으로 변환합니다.
- 출력: $ct''' = Enc \circ Ecd(z + (q0/\Delta) \cdot I)$.

4. **Homomorphic Modular Reduction (EvalMod):**
- 추가된 배수 $I$를 제거하여 원하는 결과를 얻습니다.
- 출력: $Enc \circ Ecd(z) \in R_Q^2$

## Modulus Raising
$ct = (b, a) \in R_q^2$가 평문 $pt \in R$을 암호화한다고 가정합니다. 
$[b]_q$와 $[a]_q$를 $b$와 $a$의 대표값으로 선택합니다. 
그러면 다음과 같은 관계가 성립합니다:
- $ [b]_q + [a]_q \cdot s \equiv_q pt $
- 따라서, $ [b]_q + [a]_q \cdot s = pt + q \cdot I $
- $I \in R$이며 $\|I\|_\infty \leq (h + 1)/2$입니다. 
Modulus Raising을 통해 $ct$는 $pt + q \cdot I$를 암호화한 요소로 간주됩니다.

## Homomorphic Discrete Fourier Transform (DFT)
DFT 매트릭스 $U$는 다음과 같이 분해할 수 있습니다:
- $ U = D_{\log(N)-1} D_{\log(N)-2} \cdots D_1 P $

여기서 $D_i$는 버터플라이 매트릭스이며, $P$는 순열 매트릭스입니다. 
효율성을 위해 정확한 DFT 대신 $P$를 제외한 비트 반전 DFT $U P^{-1}$를 사용합니다.

## Approximate Modular Reduction
모듈러 감소 함수를 근사하기 위해 다항식을 사용합니다. 
일반적인 접근 방식은 삼각 함수와 다항식 근사 알고리즘을 사용하는 것입니다. 예를 들어:
- $ \text{Modular Reduction by 1 and } \sin(2\pi x)/2\pi $
이 함수들은 정수 포인트 근처에서 유사하게 작동하여 Modular 1과 사인 함수 사이의 간극을 줄이는 데 도움이 됩니다.