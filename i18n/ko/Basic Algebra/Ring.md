# 정의
Ring(환)은 집합과 덧셈, 곱셈 연산을 가지는 대수구조를 의미한다. 어떤 집합 $R$에 대해 아래와 같은 덧셈($+$) 및 곱셈($\cdot$) 연산이 잘 정의되어 있으면 $(R, +, \cdot)$을 **ring**이라 부른다.
1) $(R, +)$이 [[Commutative Group]]을 이룬다.
	- 결합법칙이 성립한다. $a+(b+c)=(a+b)+c$
	- 교환법칙이 성립한다. $a+b = b+a$
	- 항등원이 존재한다. $a+0_R = a$
	- 역원이 존재한다. $a + x = 0_R$, $x \in R$
2) $(R, \cdot)$은 [[Monoid]]이다.
	- 결합법칙이 성립한다. $a \cdot (b \cdot c) = (a \cdot b) \cdot c$
	- 항등원이 존재한다. $a \cdot 1_R = a$
3) 분배 법칙이 성립한다.
	- $(a+b)\cdot c =a \cdot c + b \cdot c$
	- $c \cdot (a+ b) =a \cdot c + b \cdot c$

# 종류
- [[Commutative Ring]]
- [[Unit Ring]]
- [[Division Ring]]
- [[Quotient Ring]]
- [[Pseudoring]]
