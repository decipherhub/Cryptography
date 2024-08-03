[[ZK-SNARK]]는 특정 다항식을 알고있음을 비대화형 영지식증명방식으로 증명하는 것인데, 증명 과정에서 Quadratic Arithmetic Program을 사용해 증명에 필요한 제약사항들을 생성할 수 있다.

## Computation

우선 증명하려는 computational problem을 정의해야하는데, 다음과 같은 문제를 예시로 들어보자.
$$x^3 + x + 5 = 35$$
Prover가 이 문제의 정답을 알고 있다는 것을 증명한다고 하자. (참고로 이 문제의 정답은 3으로, 3차방정식을 풀 수 있으면 쉽게 답을 구할 수 있는 문제이지만 이해를 위해 간단한 예시를 이용한다.) 이 문제를 코드로 나타내면 다음과 같다.
```python
def qeval(x):
	y = x**3
	return x + y + 5
```

## Arithmetic circuit
첫 번째로 Flattening 이라는 작업을 통해 복잡한 원본 코드(computational problem)를 한번의 연산(두개의 변수와 `+, -, *` 중에 하나의 연산자)으로 구성된 순차적인 조각들로 나누게 되는데, 각각의 조각들을 **gate**라고 한다. 위 예시를 circuit으로 변환하면 다음과 같다.

## R1CS

다음으로 위의 circuit을 rank-1 matrix로 나타내는 R1CS(Rank-1 Constraint System)로 변환해야한다. R1CS는 세개의 벡터 그룹 `(a, b, c)` 와 솔루션 벡터 `s`로 이루어진 방정식 `s･a * s･b - s･c = 0` 이다.

각 벡터(a, b, c)에는 circuit에서 생성된 변수들을 원소로 할당한다. 위 예시에서는 `'~one', 'x', 'out', 'sym_1', 'y', 'sym_2'` 이렇게 6개의 원소로 변수를 매핑한다.(’~one’은 상수 1)

그리고 솔루션 벡터에는 이 조건식을 만족시키는 assignment로 구성된다.

`sym_1 = x * x` 를 예로 들면 `x * x - sym_1 = 0` 로 a * b - c = 0 꼴로 바꿀 수 있고 a = x, b = x, c = sym_1 이다. 따라서 다음과 같이 변환할 수 있다.

```jsx
a = [0, 1, 0, 0, 0, 0] // x
b = [0, 1, 0, 0, 0, 0] // x
c = [0, 0, 0, 1, 0, 0] // sym_1
```

예를들어 벡터를 `['~one', 'x', 'out', 'sym_1', 'y', 'sym_2']` 로 매핑하면 a는 1x에 해당하므로 [0, 1, 0, 0, 0, 0]으로 나타낼 수 있다.

같은 방식으로 위의 gate들을 변환하면 다음과 같다:

1. `sym_1 = x * x`
    
    ```jsx
    a = [0, 1, 0, 0, 0, 0] // x
    b = [0, 1, 0, 0, 0, 0] // x
    c = [0, 0, 0, 1, 0, 0] // sym_1
    ```
    
2. `y = sym_1 * x`
    
    ```jsx
    a = [0, 0, 0, 1, 0, 0] // sym_1
    b = [0, 1, 0, 0, 0, 0] // x
    c = [0, 0, 0, 0, 1, 0] // y
    ```
    
3. `sym_2 = y + x`
    
    ```jsx
    a = [0, 1, 0, 0, 1, 0] // y + x
    b = [1, 0, 0, 0, 0, 0] // 1
    c = [0, 0, 0, 0, 0, 1] // sym_2
    ```
    
4. `~out = sym_2 + 5`
    
    ```jsx
    a = [5, 0, 0, 0, 0, 1] // sym_2 + 5
    b = [1, 0, 0, 0, 0, 0] // 1
    c = [0, 0, 1, 0, 0, 0] // ~out
    ```
    

최종적으로 R1CS는 다음과 같다.

```jsx
**A // 'a' vectors
[0, 1, 0, 0, 0, 0]
[0, 0, 0, 1, 0, 0]
[0, 1, 0, 0, 1, 0]
[5, 0, 0, 0, 0, 1]

**B // 'b' vectors
[0, 1, 0, 0, 0, 0]
[0, 1, 0, 0, 0, 0]
[1, 0, 0, 0, 0, 0]
[1, 0, 0, 0, 0, 0]

**C // 'c' vectors
[0, 0, 0, 1, 0, 0]
[0, 0, 0, 0, 1, 0]
[0, 0, 0, 0, 0, 1]
[0, 0, 1, 0, 0, 0]
```

그리고 A,B,C 행렬에 대해 다음을 만족하는 $s$가 적절한 assignment가 된다. (○으로 표시된 연산은 Hadamard product이다.)

$(A･s) ◦(B･s)-(C･s) = \begin{bmatrix}0\\0\\0\\0\end{bmatrix}$

$s$가 될 수 있는 경우의 수는 많지만 `~out` 이 35가 되게 하려면 $s = \begin{bmatrix}1\\3\\35\\9\\27\\30\end{bmatrix}$이다.

## QAP

위에서 살펴본 예시는 R1CS로도 간단한 연산이 가능하지만 circuit의 크기가 커지면 constraint의 개수도 그만큼 증가하게 되고 연산이 복잡해지게 된다.

Quadratic Arithmetic Program(QAP)은 R1CS의 각각의 constraint들을 한번에 다룰수 있는 다항식을 생성한다. 즉, R1CS의 변수들로 매핑된 각각의 함수에 $n$을 대입하면 n번째 gate의 해당 값이 나오는 다항식들로 변환하는 것이다. R1CS를 QAP로 변환하면 다음과 같다.

```python
A = [A_1(x), A_2(x), A_3(x), A_4(x), A_5(x), A_6(x)]
B = [B_1(x), B_2(x), B_3(x), B_4(x), B_5(x), B_6(x)]
C = [C_1(x), C_2(x), C_3(x), C_4(x), C_5(x), C_6(x)]
```

예를들어 $A_2(x)$ 라는 다항식에 3을 대입하면 두번째 값(`x`)의 세번째 gate의 값인 1이 나오게 되고 4를 대입하면 네번째 값인 0이 나오게 된다.($A_2(3) = 1, A_2(4)= 0$)

따라서 $A･s = A(x), \; B･s = B(x), \; C･s =C(x)$ 라고 하면, $x = 1,2,3,4$ 일때 $A(x)*B(x) -C(x) = 0$ 을 만족한다.

여기서 주목할 점은 $Q(x) = A(x)*B(x) -C(x)$ 라고 하면, $Q(x)$의 해가 1,2,3,4라는 것은 다항식$Q(x)$에 $Z(x) = (x-1)(x-2)(x-3)(x-4)$ 가 인수로 포함되어있다는 것이다.

따라서 R1CS의 constraint들을 각각 확인하는 문제에서 $Z(x)|Q(x)$ 를 확인하는 것으로 훨씬 간결하게 바뀌었다.

위의 일련의 과정들이 QAP를 통해 R1CS 형태의 생성하는 프로세스이다.

>Lagrange interpolation
$n$개의 점을 지나는 $d<n$ 인 $d$차 다항식이 유일하게 한개 존재한다