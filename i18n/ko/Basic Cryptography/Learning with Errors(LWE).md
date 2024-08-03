## Intuition

$y = sx$인 직선을 고려하자. 여기서 $s$는 비밀 키이다. 이 직선 위의 점 $(a_i, b_i)$가 주어지면, 비밀 $s$를 쉽게 복원할 수 있다. Learning With Errors (LWE) 문제는 세 가지 조건을 추가하여 이 문제를 확장한 것이다:

1. 유한체 $Z_q$ 위에서.

2. $a_i$와 $s$는 벡터이다 ($s \cdot x$는 내적이다).

3. 오류가 있는 직선 ($b_i = a_i \cdot s + e_i$).

LWE는 몇 가지 격자 문제(예: GapSVP 및 SIVP)의 난이도를 가정할 때 계산하기 어렵다.

## 정의 

$q$가 소수이고 $n \in \mathbb{Z}_{>0}$라고 하자. $a_i \in \mathbb{Z}_q^n$는 균등한 랜덤 벡터 집합이고, $e_i \in \mathbb{Z}_q$는 작은 랜덤 미지수 집합이며, $s \in \mathbb{Z}_q^n$는 작은 미지수 벡터이고, $b_i = a_i \cdot s + e_i \in \mathbb{Z}_q$이다. 다항식 개수만큼의 쌍 $(b_i, a_i)$가 주어졌을 때, $s$를 찾아라.

LWE의 보안은 $q$, $n$, $e$와 $s$의 분포에 의존한다. $q$가 작고, $n$이 크고, $e$와 $s$가 클수록 더 나은 보안을 제공한다. 보안을 측정하기 위해 lattice-estimator를 사용할 수 있다.