## Needs of the SNARK

90년대에 성능이 느린 개인 컴퓨터 대신 성능이 좋은 슈퍼컴퓨터가 연산을 처리하도록 위임해야했는데, 이때 슈퍼컴퓨터가 올바른 연산을 수행했는지 검증하기 위해 proof system에 대한 필요성이 언급되었다. 하지만 개인 컴퓨터 능력의 향상으로 인해 연산을 위임할 필요성이 없어졌다.

현재 다시 proving system이 주목받는 이유는 이더리움 L1과같은 연산이 느린 네트워크의 연산을 unreliable한 GPU에 연산을 위임할 때 해당 연산의 유효성을 판단하기 위함이다.

이때 데이터의 익명성을 보장하는 것은 ZK의 역할이고, 빠르고 효율적으로 검증하는 것이 SNARK의 역할이다.

zk-SNARK use cases

- Scalability: Outsourcing computation → 여러 트렌젝션들을 오프체인에서 연산한 결과를 succinct한 proof로 전달하면 L1은 해당 proof를 검증하는 것으로 비용을 줄일 수 있다.(zkRollup)
- Privacy: Private transactions on public blockchain(Tornado cash, Zcash, Iron Fish, Aleo)

## Arithmetic circuit
![[snark(1).png]]
**Arithmetic circuit :** **directed acyclic graph(DAG) where internal nodes(gates) have operators(+,-,*) with inputs**

The arithmetic circuit can do what polynomial time computations can do

→ Fix a finite field $𝔽 = \{0,...,p-1\}$ for some prime p>2.

→ |C| = # gates in C

Type of Circuit

- Unstructured circuit: a circuit with arbitrary wires
- Structured circuit: input → M → M → … → M → output (M is often called a virtual machine, VM - one step of a processor)

## Completeness and Soundness

- Completeness: Proof가 참일 때 Verifier가 참이라는 것을 확신할 수 있는 성질
- Soundness: Prover가 거짓 Proof를 생성하려고 시도할 때 유효한 proof를 생성할 수 없도록 하는 성질 → Extractor

## NARK: Non-interactive Argument of Knowledge
Before making the proof succinct, we gotta make it non-interactive. Basically a NARK is applied to an arithmetic circuit C
![[snark(2).png]]
### Preprocessing NARK

$$ (S, P, V) $$

Public arithmetic circuit:

$$ C(x,w) \rightarrow 𝔽 $$

- $x:$ Public statement in $𝔽^n$
- $w:$ Secrete witness in $𝔽^n$

**Preprocessing(setup):**

$$ S(C) \rightarrow (pp, vp) $$

- Input: Description of the circuit
- Output: Public parameters for prover and verifier

**Proving Algorithm → proof:**

$$ P(pp,x,w) \rightarrow \pi $$

**Verifying Algorithm → accept or reject:**

$$ V(vp, x, \pi) \rightarrow Boolean $$

## Types of preprocessing Setup

- Trusted setup per circuit: $S(C; r)$ random $r$ must be kept secret from prover

- Trusted but universal (updatable) setup: secrete $r$ is independent of $C$

    $$ S = (S_{init}, S_{index}): \; S_{init}(\lambda;r) \rightarrow gp, \; S_{index}(gp, C) \rightarrow (pp, vp) $$

- Transparent setup: $S(C)$ does not use secrete data (no trusted setup)
