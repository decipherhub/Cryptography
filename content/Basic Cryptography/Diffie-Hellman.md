Diffie-Hellman 시스템은 두 사용자가 공개적으로 키를 교환하여 공통의 비밀 키를 생성할 수 있도록 하는 키 교환 프로토콜이다. Whitfield Diffie와 Martin Hellman이 1976년에 개발한 시스템으로 대칭키 암호 시스템에서 키 교환 문제를 해결하기 위해 고안되었다. 두 사용자는 서로의 공개 키를 사용하여 비밀 키를 생성하지만, 이 과정에서 비밀 키 자체는 교환되지 않는다. Diffie-Hellman은 [[Discrete logarithm problem]](DLP)에 기반한 보안성을 가지고 있다.

다음은 Diffie-Hellman 프로토콜의 키 교환 방식을 나타내는 그림이다.
![[diffie_hellman(1).png]]
1. Alice와 Bob의 프라이빗키는 각각 $Z_p^*$의 원소(Alice: a, Bob: b)이고 퍼블릭키는 사전에 공유된 generator $g$에 각각 $g^a, g^b$ 연산을 한 결과이다.
2. 서로의 퍼블릭키를 교환하고 각자의 프라이빗키를 위 그림과 같이 적용하면 서로 같은 $g^{ab}$라는 결과가 나오고 이것이 Alice와 Bob의 SHK(공유키)가 된다. (KDF: Dey Derivation Function으로서 해싱과 비트연산을 적용하여 암호키를 생성하는 함수)
3. 여기서 Eve가 $A,B$ 값을 알아도 SHK를 알아낼 수 없다. 즉, $a$를 알면 공유받은 $B$로부터 $B^a = g^{ab}$ 를 쉽게 구할 수 있지만 $g^a, g^b$값을 안다고 해도 이것으로부터 $g^{ab}$값을 알아내는 것은 매우 어렵다.