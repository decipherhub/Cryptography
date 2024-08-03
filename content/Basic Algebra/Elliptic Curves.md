An elliptic curve, as shown in the figure below, differs significantly from the commonly known "elliptical" shape. The name "elliptic curve" originates from the type of curve derived from the integral used to calculate the circumference of an ellipse.
![[ec(1).png]]
> For the derivation process and more detailed information about elliptic curves, refer to: [J. Silverman, “The Arithmetic of Elliptic Curves” (Springer, 1986)](https://link.springer.com/book/10.1007/978-0-387-09494-6)

Elliptic curves are an important concept used in various fields of mathematics, including analysis, geometry, and algebra. This article focuses on their application in cryptography. As computing power increased, traditional public key cryptography methods such as [RSA](/be882d573c4c47a09ec80059c05f36d9?pvs=25) and [ElGamal](/2e89613d942f4f0ab69212e5505b5af4?pvs=25) required more computations to ensure security. By using elliptic curves, these issues can be mitigated, which is why elliptic curves are currently used in various cryptographic systems. Understanding elliptic curves is crucial for modern cryptography.

## Short Weierstrass Form

The general definition of an elliptic curve is in a complicated form:
$$Ax^3 + Bx^2y + Cxy^2 + Dy^3 + Ex^2 + Fxy + Gy^2 + Hx + Iy + J = 0$$
![[ec(2).png]]
However, the form commonly used in cryptography is the Short Weierstrass form:
$$y^2 = x^3 + ax + b \; (4a^3 + 27b^2 \ne 0)$$
>The second condition, $4a^3 + 27b^2 ≠ 0$, prevents the curve from having a double root, which would create a singular point on the curve.
![[ec(3).png]]

## Elliptic Curve Group

From the elliptic curve in the above form, we can define an [Abelian group](https://en.wikipedia.org/wiki/Abelian_group).

For a set to be defined as an Abelian group under addition, it must be closed under the addition operation and satisfy the following four conditions:

1. Associativity
2. Identity element
3. Inverse element
4. Commutativity

### Addition in the Elliptic Curve Group

To define an elliptic curve group, we need a set that is closed under the addition operation. The set of an elliptic curve group consists of all points on the elliptic curve. If we define addition of points on a general coordinate plane, the set of points on the elliptic curve is not closed under this operation. Therefore, a special addition operation is newly defined as follows:

![[ec(4).png]]
*Elliptic Curve Cryptography - Andrea Corbellini, 2015*

An elliptic curve has a unique property: a line passing through any two points on the curve intersects the curve at exactly one additional point. Given two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ on the elliptic curve, and a line $l$ passing through these points, let $R$ be the other point of intersection of $l$ with the curve. Then, $P+Q+R = O$, and $P + Q = -R$. Here, $-R$ is the point obtained by reflecting $R$ across the x-axis. This reflection is due to the definitions of the identity and inverse elements, which will be discussed shortly.

### Point at Infinity

There are cases where the set seems not closed under addition as defined above. For example, a line passing through points $R$ and $-R$, which are symmetric with respect to the x-axis, does not appear to intersect another point. Here, we define the identity element of the elliptic curve group, the point at infinity $O$. The point at infinity is an imaginary point at which all lines parallel to the y-axis meet. Thus, a line passing through points $R$ and $-R$ intersects the identity element $O$ at infinity. According to the definitions of the identity and inverse elements, $R + (-R) = O$, and $-R$ is the inverse of $R$ under addition.

Thus, an elliptic curve over the real numbers can be defined as:
$$\{(x,y) \in \mathbb{R}^2 \; | \; y^2 = x^3 + ax + b, 4a^3 + 27b^2 \ne 0 \} \; \cup \; \{O\}$$

### Algebraic Operations for Elliptic Curve Addition

$P(x_1, y_1) + Q(x_2,y_2)$ can be computed algebraically as follows:

The line passing through points $P$ and $Q$ intersects the elliptic curve $E$ at another point, which is then reflected across the x-axis to find the result. The calculations vary depending on the cases of $P$ and $Q$:

1. If $P, Q \ne O$ and $P \ne Q$:
   $$P + Q = (m^2-x_1-x_2, \; m(x_1-x_3)-y_1), \; m=\frac{y_2- y_1}{x_2-x_1}$$

2. If $P+Q = O$:
   The x-coordinates of $P$ and $Q$ are the same, so $P + Q = O$

3. If $P = Q$ (tangent to the curve at $P$, computed using partial derivatives):
   $$P + P = 2P = (m^2 - 2x_1, \; m(x_1-x_3) - y_1), \; m= \frac{3x_1^2 + a}{2y_1}$$

4. If $Q = O$:
   $$P+Q = P+O = P, \; O+O=O$$

## Elliptic Curves in $𝔽_p$ (Elliptic Curves Defined Over Finite Fields)

Elliptic curve groups over finite fields share the same concept as those over the real numbers but have a finite number of elements. When defined over a [finite field](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%95%9C%EC%B2%B4), an elliptic curve is given by:
$$\{(x,y) \in (𝔽_p)^2 \; | \; y^2 \equiv x^3 + ax + b \pmod{p}, 4a^3 + 27b^2 \not\equiv 0 \pmod{p} \} \; \cup \; \{O\}$$
>Order of an elliptic curve group: An elliptic curve defined over a finite field has a finite number of points, called the order of the set. The order can be computed using [Schoof’s Algorithm](https://en.wikipedia.org/wiki/Schoof%27s_algorithm). When visualized, elliptic curves over finite fields appear as in the following figure, different from those over the real numbers. Special cases with order 2 or 3 are not considered here.
![[ec(5).png]]

The figure shows elliptic curves of $y^2 \equiv x^3 -7x + 10 \pmod{p}$ for $p=19,\ 97,\ 127,\ 487$. Notably, these graphs are symmetric about $y = p/2$.

### Addition in Finite Field Elliptic Curves

The addition operations in elliptic curves over finite fields are similar to those over the real numbers, but the geometric interpretation differs slightly. The figure below illustrates the addition operation in the elliptic curve $y^2 \equiv x^3 -x+3 \pmod{127}$, where $P(16,20)$ and $Q(41,120)$ are added.
![[ec(6).png]]

The line passing through $P$ and $Q$ in the finite field is given by $y \equiv 4x + 83 \pmod{127}$.

### Scalar Multiplication

Scalar multiplication in elliptic curve groups defined over finite fields is performed as follows:
$$\underbrace{nP = P + P + ... + P}_{n \; times}$$
This operation repeatedly adds the same point according to the scalar value. For example, with $y^2 \equiv x^3 + 2x + 3 \pmod{97}$ and $P = (3, 6)$, the multiplication results are as follows:
![[ec(7).png]]
$OP = (0, 0)$
$OP = (0, 0)$ $1P = (3,6)$
$2P = (80, 10)$
$3P = (80,87)$
$4P = (3,91)$
$5P = O$
$6P = (3,6)$
$7P = (80,10)$
...

The set of points generated by scalar multiplication forms a cyclic subgroup, with the initial point $P$ as the generator. The period of repetition $n$ (5 in this example) is the order of the subgroup
