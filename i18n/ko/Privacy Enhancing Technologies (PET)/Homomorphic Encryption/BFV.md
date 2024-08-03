## BFV (Brakerski-Fan-Vercauteren) 스킴

BFV 스킴은 [[BGV]]와 유사하지만, [[Learning with Errors(LWE)]] 문제에 기반하고 있습니다. Fan과 Vercauteren이 BGV 스킴을 개선하여 제안한 것입니다.

### 주요 구성 요소

1. **비밀키 생성 (Secret Key Generation)**: 비밀키 $s$는 다항식 링 $\mathbb{Z}_q[X]/(X^N + 1)$에서 선택됩니다.
2. **공개키 생성 (Public Key Generation)**: 공개키는 $(a, b = -a \cdot s + e)$로 구성됩니다.
3. **암호화 (Encryption)**: 메시지 $m \in \mathbb{Z}_t[X]/(X^N + 1)$을 암호화하기 위해 랜덤 다항식 $r$을 선택하고, $c = (a \cdot r + e_1, b \cdot r + e_2 + \Delta \cdot m)$로 암호문을 생성합니다.
4. **복호화 (Decryption)**: 암호문 $c$를 복호화하여 $m' = \left\lceil \frac{c_2 + s \cdot c_1}{\Delta} \right\rfloor \pmod{t}$를 계산합니다. 여기서 $\Delta$는 스케일링 인자입니다.

### 동형 연산

BFV 스킴도 덧셈과 곱셈에 대해 동형성을 가집니다.

- **동형 덧셈**: $c = c' + c'' = (c'_1 + c''_1, c'_2 + c''_2)$
- **동형 곱셈**: $c = c' \cdot c''$
