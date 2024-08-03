## 정의

$q$가 소수이고 $\Phi(X) \in \mathbb{Z}_q[X]$는 $Z_q$ 위의 기약 다항식이라고 하자. $a_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$는 균등한 랜덤 알려진 다항식 집합이고, $e_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$는 작은 랜덤 미지수 다항식 집합이며, $s(X) \in \mathbb{Z}_q[X]/\Phi(X)$는 작은 미지수 다항식이고, $b_i(X) = a_i(X) \cdot s(X) + e_i(X) \in \mathbb{Z}_q[X]/\Phi(X)$이다. 다항식 개수만큼의 쌍 $(b_i, a_i)$가 주어졌을 때, $s$를 찾아라.
## RLWE를 사용한 Symmetric key cryptography 스킴

RLWE 샘플을 사용하여 [[Symmetric key cryptography]] 스킴을 정의할 수 있다.
### 암호화 (RLWE Encryption)

메시지 $m \in R_q = \mathbb{Z}[X]/(X^N + 1)$가 주어졌을 때, $m$의 암호화는 다음과 같이 정의된다:

$\text{Enc}(m) = (-as + e + m, a) \in R_q^2$

여기서 $a$는 균등 랜덤 다항식이고, $s$는 작은 비밀 다항식이며, $e$는 작은 오류 다항식이다.

### 복호화 (RLWE Decryption)

RLWE 암호문 $(b, a) \in R_q^2$가 주어졌을 때, $m$의 복호화는 다음과 같이 정의된다:

$\text{Dec}(m) = b + a \cdot s$

암호화 스킴의 보안은 RLWE의 보안에서 비롯된다.