## BGV (Brakerski-Gentry-Vaikuntanathan) 스킴

BGV 스킴은 브라커스키, 젠트리, 바이쿤타나탄이 개발한 스킴으로, [[Ring Learning with Errors(RLWE)]] 문제에 기반한 동형암호 스킴입니다.

### 주요 구성 요소

1. **비밀키 생성 (Secret Key Generation)**: 비밀키 $s$는 다항식 링 $\mathbb{Z}_q[X]/(X^N + 1)$에서 선택됩니다.
2. **공개키 생성 (Public Key Generation)**: 공개키는 비밀키를 사용하여 생성되며, 두 개의 다항식 $(a, b = -a \cdot s + e)$로 구성됩니다. 여기서 $a$는 무작위로 선택된 다항식이고, $e$는 작은 잡음(오차)입니다.
3. **암호화 (Encryption)**: 메시지 $m \in \mathbb{Z}_t[X]/(X^N + 1)$를 암호화하기 위해 랜덤 다항식 $r$을 선택하고, 암호문 $c = (c_1, c_2) = (a \cdot r + e_1, b \cdot r + e_2 + m)$을 생성합니다.
4. **복호화 (Decryption)**: 암호문 $c$를 복호화하기 위해 $m' = c_2 + s \cdot c_1 \pmod{q}$을 계산합니다. 여기서 $m' \approx m$이 됩니다.

### 동형 연산

BGV 스킴은 덧셈과 곱셈 모두에 대해 동형성을 가집니다.

- **동형 덧셈**: 두 암호문 $c' = (c'_1, c'_2)$와 $c'' = (c''_1, c''_2)$에 대해 $c = c' + c'' = (c'_1 + c''_1, c'_2 + c''_2)$로 수행되며, 이는 $m = m' + m''$에 대응합니다.
- **동형 곱셈**: 두 암호문 $c' = (c'_1, c'_2)$와 $c'' = (c''_1, c''_2)$에 대해 $c = c' \cdot c'' = (c'_1 \cdot c''_1, c'_2 \cdot c''_2)$로 수행되며, 이는 $m = m' \cdot m''$에 대응합니다.