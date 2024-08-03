ECDLP(Elliptic Curve Discrete Logarithm Problem)는 $Z_p^*$에서의 [[Discrete logarithm problem]]와 같은 방식을 [[Elliptic Curves]](타원곡선) 상에서 정의한 문제이다.

- $E: y^2 = x^3 + ax + b$ 일때 $G \in E$ 를 generator로 하는 cyclic subgroup $H = <G>$ 라고하자.
- $H$의 임의의 원소 $Q$에 대해, $aG = Q$ 인 $a$ $(0 \le a < |G| )$ 를 찾는 문제이다.

ECDLP를 사용하는 이유

- 일반적인 DLP보다 훨씬 짧은 키 사이즈로도 안전성을 확보할수 있다.
    
- $Z_p^*$ 에서 정의된 DLP의 해를 구하는 알고리즘(Index Calculus Algorithm)이 존재하는반면, EC-DLP의 경우 Generic 알고리즘만 알려져있고 ECDLP에 특화된 알고리즘은 현재까지 발견되지 않았다. (Baby-step Giant -step, Pollard $p$ → $O(\sqrt{p})$의 공격량이 필요)
