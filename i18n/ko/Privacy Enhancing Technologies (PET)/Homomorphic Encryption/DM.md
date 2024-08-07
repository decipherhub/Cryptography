## DM (Dijk-Meyer) 스킴

DM 스킴은 Dijk와 Meyer가 제안한 스킴으로, [[Learing with Errors(LWE)]] 문제를 기반으로 한 동형암호 스킴입니다.

### 주요 구성 요소

1. **비밀키 생성 (Secret Key Generation)**: 비밀키는 정수 집합에서 선택됩니다.
2. **공개키 생성 (Public Key Generation)**: 공개키는 비밀키와 LWE 샘플로 구성됩니다.
3. **암호화 (Encryption)**: 메시지를 정수로 간주하여 암호화합니다.
4. **복호화 (Decryption)**: 암호문을 복호화하여 원래 메시지를 복원합니다.

### 동형 연산

DM 스킴은 기본적인 동형 연산을 지원합니다.

- **동형 덧셈**: 정수 덧셈을 통해 수행됩니다.
- **동형 곱셈**: 정수 곱셈을 통해 수행됩니다.