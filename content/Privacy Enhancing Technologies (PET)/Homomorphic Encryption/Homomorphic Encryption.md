# Homomorphic Encryption (HE)
## 정의
암호화된 상태에서 연산을 수행할 수 있는 암호학 기법을 의미한다.

## 사용 용도
민감한 데이터에 대한 연산, 암호화된 모델과 함께 연산 수행.

## 장점
### 1. 보안성
- 동형 암호화는 가장 안전한 프라이버시 강화 기술 중 하나로, 처음부터 끝까지 데이터를 완전히 암호화한다.
- 현재 존재하는 거의 모든 FHE 스킴들은 잘 확립된 lattice-based cryptography에 의존하며, 이는 [[Post-Quantum Cryptography]]임

### 2. 커뮤니케이션 비용
- [[Secure Multiparty Computation]]를 포함한 대부분의 [[Privacy Enhancing Technologies (PET)]]들은 막대한 커뮤니케이션 비용이 발생하는 반면, HE는 암호화 후와 복호화 전의 통신만 필요하다.

## 단점
### 1. 연산 비용
- FHE의 연산 비용은 일반적인 평문 연산에 비해 보통 100배에서 10,000배 더 비싸다.

## FHE 기술의 역사
### 초기 HE
- 동형 암호화의 개념은 1978년 Rivest, Edleman, Dertouzous에 의해 처음 제안되었으나, Gentry가 2009년에 최초로 그럴듯한 스킴을 구현하기 전까지는 존재 여부가 불확실했다.
- Gentry의 구성 청사진에는 동형 암호화를 통해 HE 연산에서 발생하는 노이즈를 새로 고치는 핵심 요소인 [[Bootstrapping]]이 포함된다.

### 개선
- [[BGV]] 및 [[BFV]]와 같은 2세대 스킴은 [[Learning with Errors(LWE)]]의 링 변형(Ring Learning with Errors(RLWE))에 의존하며, 효율성을 크게 향상시켰다.
- Craig Gentry, Amit Sahai, Brent Waters는 노이즈 성장이 LWE보다 훨씬 느린 새로운 빌딩 블록을 제안했다. 이는 [[DM]] 및 [[CGGI]]와 같은 low-latancy FHE 스킴을 탄생시켰다.
- 2016년에 [[CKKS]] 스킴이 제안되었으며, 이는 RLWE 위에서 효율적인 재스케일링 연산을 도입하여 근사 연산을 본질적으로 지원한다.

## 대표적인 FHE 스킴
현재, 2세대, 3세대, 4세대 FHE 스킴이 모두 인기를 끌고 있으며, 각각 다른 강점을 가지고 있다.

| Name            | Generation | Ciphertext Format | Message Type |
| --------------- | ---------- | ----------------- | ------------ |
| [[BGV]]/[[BFV]] | 2          | RLWE              | Integer      |
| [[CGGI]]/[[DM]] | 3          | LWE               | Bit(s)       |
| [[CKKS]]        | 4          | RLWE              | Real         |
- 기본 암호문 형식은 FHE 스킴의 중요한 특성이다. LWE 기반 스킴과 RLWE 기반 스킴은 각각 지연 시간과 처리량 측면에서 우수하다.

## FHE에서의 부트스트래핑 (Bootstrapping in FHE)

모든 기존 FHE 스킴은 LWE 또는 그 변형에 기반하며, 이는 노이즈 개념을 가지고 있다. 동형 연산을 진행할수록 노이즈가 누적되어 너무 커지면 추가 연산을 수행할 수 없게 된다. 부트스트래핑은 암호문을 동형으로 복호화하여 노이즈를 새로 고친다. 부트스트래핑은 많은 동형 서브 연산을 포함하므로, 일반적으로 FHE의 가장 시간이 많이 소요되는 단계이다.

| Scheme          | Number of slots | Bootstrapping time |
| --------------- | --------------- | ------------------ |
| [[BGV]]/[[BFV]] | 32768           | 35.5s              |
| [[CGGI]]/[[DM]] | 1               | 6.49ms             |
| [[CKKS]]        | 65536           | 13.0s              |
- 최신 부트스트래핑 성능 (1 스레드 CPU 기준).

### Index
- [[Bootstrapping]]
- [[BGV]]
- [[BFV]]
- [[CGGI]]
- [[DM]]
- [[CKKS]]
- [[fhEVM]]