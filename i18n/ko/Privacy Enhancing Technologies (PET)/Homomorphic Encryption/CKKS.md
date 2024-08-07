# CKKS 암호화 기법
## 정의
CKKS (Cheon-Kim-Kim-Song)는 복잡한 실수 계산을 효율적으로 수행할 수 있도록 설계된 완전 동형 암호화(FHE) 기법입니다. 이는 고정밀 실수 연산을 지원하고, 다수의 데이터 요소를 한 번에 처리할 수 있는 병렬 연산 기능(SIMD)을 제공합니다. CKKS는 기계 학습과 통계학에서 주로 사용되며, 이들 분야에서의 많은 연산이 근사 연산이기 때문에 다른 암호화 방식보다 더 유리합니다.

## CKKS의 주요 특징
### 인코딩과 디코딩
- CKKS에서는 메시지를 암호화하기 전에 메시지를 복소수 벡터 형태로 인코딩합니다. 이 인코딩 과정은 메시지를 복소수 공간($CN/2$)에서 다항식 공간($R[X]/(X^N+1)$)으로 변환합니다. 인코딩 함수는 $Ecd(z) = \lfloor \Delta \cdot iDFT(z) \rceil$이며, 디코딩 함수는 $Dcd(p(X)) = \frac{1}{\Delta} \cdot DFT(p(X))$입니다. 여기서 $\Delta$는 스케일링 팩터입니다.
- 인코딩 과정 중에는 rounding errors가 발생할 수 있으며, 이를 줄이기 위해 적절한 $\Delta$ 값을 선택합니다.

### 암호화와 복호화
- CKKS의 암호화는 [[Ring Learning with Errors(RLWE)]] 문제를 기반으로 합니다. 메시지를 다항식 공간에서 암호화하여 사이퍼텍스트를 생성합니다. 암호화된 사이퍼텍스트는 $(b, a)$ 형태로 표현되며, 여기서 $b$와 $a$는 각각 랜덤 다항식과 에러를 포함합니다.
- 복호화는 이 사이퍼텍스트를 사용하여 원래 메시지를 복원하는 과정입니다. 복호화 함수는 $[b + a \cdot s]_{q0}$로 정의되며, 여기서 $s$는 비밀 키입니다.

### 기본 연산
- CKKS는 덧셈과 곱셈과 같은 기본적인 동형 연산을 지원합니다. 두 사이퍼텍스트 $(b1, a1)$와 $(b2, a2)$의 덧셈은 $(b1 + b2, a1 + a2)$로 정의되며, 곱셈은 $(b1b2, a1b2 + a2b1, a1a2)$로 정의됩니다. 이러한 연산은 암호화된 상태에서 직접 수행되며, 결과는 여전히 암호화된 상태로 유지됩니다.

### Key Switching과 Relinearization
- Key Switching은 암호화된 메시지를 다른 비밀 키로 다시 암호화하는 과정입니다. 이를 통해 비밀 키의 변경 없이도 암호화된 데이터를 안전하게 공유할 수 있습니다.
- Relinearization은 사이퍼텍스트의 길이를 줄이는 과정으로, 이는 연산 중 키의 크기 증가 문제를 해결하는 데 사용됩니다. 이를 통해 연산 효율성을 유지하면서 동형 연산을 계속 수행할 수 있습니다.

### Rescaling
- Rescaling은 곱셈 연산 후 증가한 스케일링 팩터를 줄이는 과정입니다. 이는 $\Delta^2$로 증가한 스케일링 팩터를 다시 $\Delta$ 수준으로 낮추어 계산 정확도를 유지합니다.

## 응용 분야
- **기계 학습:** CKKS는 기계 학습에서 사용되는 다수의 연산이 근사 연산이라는 점에서 매우 적합합니다. 다수의 데이터 포인트를 병렬로 처리할 수 있어 효율성을 극대화할 수 있습니다.
- **통계 분석:** 통계학에서도 대규모 데이터셋에 대한 복잡한 실수 연산을 안전하게 수행할 수 있어 유용합니다. CKKS는 이러한 연산을 암호화된 상태에서 수행함으로써 데이터 프라이버시를 보장합니다.