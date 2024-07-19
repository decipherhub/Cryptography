RSA는 공개키 암호 시스템 중 가장 대표적인 방식으로 Rivest, Shamir, Adelman이 1978년에 제안했다. RSA 시스템은 IFP(Integer Factorization Problem, 합성수의 소인수분해 문제)를 이용한다. 암호화 과정에서 백 자리 크기 이상의 두 개의 소수를 선택하고 두 수의 곱을 계산하면 매우 큰 합성수가 되어, 두 소수를 알고 있지 않는 한 소인수분해를 하는 것은 매우 어렵다.

- RSA 시스템에서 공개키와 비밀키는 다음과 같이 생성한다.
    1. 백 자리 크기 이상의 두개의 소수 $p, q$ 를 선택하고 $n = p * q$ 를 계산한다.
    2. $\phi(n) = (p-1)(q-1)$ 과 서로소인 $e$를 선택한다.
    3. $e ･ d \equiv 1 \pmod{\phi(n)}$ 을 만족하는 $K_d$ 를 계산한다.
    4. $e$ 와 $n$ 은 공개하고 $d$ 는 비밀키로 보관한다. ($e$: Public key, $d$: Private key)
- 송신자가 수신자에게 암호문을 전달하는 방법은 다음과 같다.
    1. 송신자는 수신자의 퍼블릭키 $e_B$ 를 이용하여 암호문 $C \equiv M^{e_B} \pmod{n_B}$ 를 계산하여 수신자에게 암호문 $C$를 전송한다.
    2. 수신자는 $d_B$를 이용하여 $M\equiv C^{d_B} \pmod{n_B}$ 를 계산하면 평문을 복원할 수 있다.
- 복호화 과정:

1. $e ･ d \equiv 1 \pmod{\phi(n)}$, 즉, 서로 역수 관계이므로 임의의 $t$ 에 관하여 $e ･d = t\;\phi(n) +1$ 으로 나타낼 수 있다.
2. 암호문 $C \equiv M^{e} \pmod{n}$ 에서 복호화과정을 적용하면 다음과 같다 (단, $gcd(M, n) = 1$ 이라고 가정한다.)

$C^{K_d} \equiv (M^{K_e})^{K_d} \pmod{n} \\ \qquad \equiv M^{t\phi(n) + 1} \pmod{n} \\ \qquad \equiv (M^{\phi(n)})^t ･ M \pmod{n} \\ \qquad \equiv 1^t･M \pmod{n} \\ \qquad \equiv M \pmod{n}$

### Example
 $p = 53, q= 59$ 일때 RSA 시스템 통해 메시지 “HI” 를 암호화하면 다음과 같다.

- 키 생성

1. $n= p･q = 3127$
2. $\phi(n) = (p-1)(q-1) = 3016$
3. Public key: $K_e = 3$ 으로 선택
4. Private key: $K_e ･ K_d \equiv 1 \pmod{3016} → K_d ={t･\phi(n) +1\over K_e}={t･3016 +1\over 3} = 2011$

- 암호화

1. 메시지 “HI”의 각 문자를 숫자로 대응시킨다. → “H”: 8, “I”: 9
2. 암호문 $C \equiv 89^{K_e} \pmod{n}$ 을 계산한다. → $C \equiv 89^3 \pmod{3127} = 1394$

- 복호화

$M \equiv C^{K_d} \pmod{n}$ 을 계산한다 → $M \equiv 1394^{2011}\pmod{3127} \\ \qquad \; \equiv 89 \pmod{3127}$
