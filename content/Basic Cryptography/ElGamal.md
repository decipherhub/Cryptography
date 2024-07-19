ELGamal 시스템은 [[Discrete logarithm problem]]를 활용한다.

Elgamal 암호의 키생성:

- 큰 소수 $p$를 선정하고 $Zp$ 위의 원시원소 $g$와 $p$ 를 공개한다.
- $Zp$위의 임의의 원소 $d$를 선택하여 $e \equiv g^d \mod p$ 를 계산한다. ($e$ : 공개키, $d$ : 개인키)

메시지 $M$의 암호화 과정:

- $r \in _R Zp$ ($Zp$ 상에서 임의의 난수 $r$ 을 생성)
- 수신자의 공개키 $e$ 로 $K \equiv e^r \mod p$ 를 계산한다.
- $C_1 \equiv g^r \mod p, \; C_2 \equiv KM \mod p$ 를 계산한다.
- 암호문은 $C=(C_1, C2)$ 이다.

복호화 과정:

- 개인키 $d$ 를 이용하여 $K \equiv {C_1}^d \mod p$ 를 계산한다.
- 위에서 구한 $K$를 이용하여 $M \equiv C_2/K \mod p$ 를 계산하여 복호화한다.

> RSA는 같은 메시지를 암호화하면 항상 같은 암호문이 생성되는 반면, Elgamal 시스템은 난수를 이용하기 때문에 같은 메시지를 암호화해도 매번 다른 암호문이 생성된다. 따라서 상용시스템에서는 [_RSA-OAEP_](https://ko.wikipedia.org/wiki/OAEP)를 사용한다. 또한, Elgamal 시스템은 RSA보다 작은 개인키 사이즈로도 안전성이 보장된다는 장점이 있다.
