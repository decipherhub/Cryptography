---
title: Residue Number System
---
Residue Number System(RNS)은 정수를 표현하고 연산하는 데에 사용되는 number system의 하나로, 병렬 연산에 유리하다는 특징이 있다. RNS에서는 정수를 여러 개의 서로 다른 서로소인 정수들(이후 기수 집합이라고 부르게 되는 것)으로 표현하며, 기반이 되는 원리에는 [[Chinese remainder theorem]]가 있다. 즉 서로소인 정수들이 주어졌을 때, 이들에 대한 연립 합동식의 해가 유일하다는 것에 기반하여 여러 서로소 정수들로 하나의 정수를 나타낼 수 있는 것이다.

## RNS Representation
RNS에서 정수 X는 다음과 같이 k개의 정수로 나타낼 수 있다.
$$X \equiv \{x_1, x_2, x_3, ..., x_k\} \quad (mod \space \{m_1, m_2, m_3, m_4, ..., m_k\})$$
여기서 ${m_1, m_2, m_3, …, m_k}$ 는 RNS의 기수(base) 집합이다.

예를 들어 기수 집합 {3, 5, 7}을 사용하는 RNS에서 정수 23은 (2, 3, 2)로 표현된다.
$$

\begin{align} 23 \equiv 2 \quad& (mod \space 3) \\ 23 \equiv 3 \quad& (mod \space 5) \\ 23 \equiv 2 \quad& (mod \space 7) \\ \end{align}

$$

## Arithmetic operations
### Add
RNS에서의 덧셈은 단순한 residue끼리의 덧셈을 수행하여 이루어진다. 뺄셈 및 곱셈도 마찬가지로 수행된다.
$$ \begin{align} \{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 +y_1 (mod \space m_1), \\ & x_2 +y_2 (mod \space m_2), \\ &..., \\ &x_k +y_k (mod \space m_k)\} \end{align} $$

### Subtract
$$ \begin{align} \{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 -y_1 (mod \space m_1), \\ & x_2 -y_2 (mod \space m_2), \\ &..., \\ &x_k -y_k (mod \space m_k)\} \end{align} $$

### Multiply
$$ \begin{align} \{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 \cdot y_1 (mod \space m_1), \\ & x_2 \cdot y_2 (mod \space m_2), \\ &..., \\ &x_k \cdot y_k (mod \space m_k)\} \end{align} $$

### Divide
나눗셈은 나누는 수의 모듈로 역원을 이용해 계산한다. 따라서 다음과 같이 수행된다.

$$ \begin{align} \{x_1, x_2, x_3, ..., x_k\} +\{y_1, y_2, y_3, ..., y_k\} =\{& x_1 \cdot y_1^{-1} (mod \space m_1), \\ & x_2 \cdot y_2^{-1} (mod \space m_2), \\ &..., \\ &x_k \cdot y_k^{-1} (mod \space m_k)\} \end{align} $$

### Comparison
동일성의 경우 두 수의 residue들이 동일하면 두 수도 동일하다고 판단한다.
대소비교의 경우 직접적으로 수행하기 어려우며 일반적으로는 전체 값을 복원하여 연산한다.