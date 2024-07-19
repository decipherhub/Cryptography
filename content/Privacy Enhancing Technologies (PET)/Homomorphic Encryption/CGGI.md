## CGGI (Cheon-Gentry-Goldwasser-Ishai) 스킴

CGGI 스킴은 Cheon, Gentry, Goldwasser, Ishai가 제안한 스킴으로, [[Bootstrapping]]을 통해 효율성을 높인 동형암호 스킴입니다.

### 주요 구성 요소

1. **비밀키 생성 (Secret Key Generation)**: 비밀키는 LWE 기반 문제에서 생성됩니다.
2. **공개키 생성 (Public Key Generation)**: 공개키는 비밀키와 LWE 샘플로 구성됩니다.
3. **암호화 (Encryption)**: 메시지를 암호화하여 LWE 암호문을 생성합니다.
4. **복호화 (Decryption)**: 암호문을 복호화하여 원래 메시지를 복원합니다.

### 동형 연산

CGGI 스킴은 효율적인 부트스트래핑을 통해 복잡한 연산을 지원합니다.

- **동형 덧셈**: LWE 샘플의 덧셈으로 수행됩니다.
- **동형 곱셈**: LWE 샘플의 곱셈으로 수행되며, 부트스트래핑을 통해 효율성을 유지합니다.