## 정의 
$\Phi$가 차수 $d$인 기약 다항식이라고 하자. $a \in (\mathbb{Z}_q[X]/\Phi(X))^k$는 균등 랜덤 다항식이고, $e \in \mathbb{Z}_q[X]/\Phi(X)$는 작은 오류 다항식이며, $s \in (\mathbb{Z}_q[X]/\Phi(X))^k$는 작은 비밀 다항식이다. 쌍 $(as + e, a)$는 MLWE 쌍이다.

## Remarks on MLWE
[[Learning with Errors(LWE)]]는 $d = 1$인 MLWE이다. RLWE는 $k = 1$인 MLWE이다. NIST PQC 1차 라운드 수상자 중 유일한 PKE/KEM인 CRYSTALS-Kyber는 MLWE 기반 키 캡슐화 스킴이다.