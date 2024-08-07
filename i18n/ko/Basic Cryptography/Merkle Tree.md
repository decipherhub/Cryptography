## 소개

[[Merkle Tree]]는 이진 트리로, 각 리프 노드는 데이터 블록의 해시를 포함하고, 각 비리프 노드는 자식 노드의 해시를 포함합니다. 이 구조는 대규모 데이터 구조에서 효율적이고 안전한 내용 검증을 제공합니다.

## 예시

![[merkle_tree(1).png]]

네 개의 데이터 블록 $(L1, L2, L3, L4)$로 구성된 Merkle Tree를 고려해보겠습니다.

1. 각 데이터 블록의 해시를 계산합니다.
   - $H(L1)$
   - $H(L2)$
   - $H(L3)$
   - $H(L4)$
2. 리프 노드를 쌍으로 묶어 해시하여 다음 레벨을 형성합니다.
   - $H(L1L2)=H(H(L1)+H(L2))$
   - $H(L3L4)=H(H(L3)+H(L4))$
3. 비리프 노드를 해시하여 루트를 형성합니다.
   - $H(L1L2L3L4)=H(H(L1L2)+H(L3L4))$

## Merkle 포함 증명

Merkle 포함 증명은 특정 데이터 블록이 더 큰 집합의 일부인지 여부를 전체 집합에 접근하지 않고도 검증할 수 있는 암호학적 증명입니다. 이는 Certificate Transparency (CT) 또는 블록체인과 같이 효율적인 데이터 검증이 필요한 경우에 특히 유용합니다. 이 증명은 _Merkle 증명_ 또는 _Merkle 경로_ 라고도 합니다. 예를 들어, 위 시나리오에서 $L1$이 트리의 일부임을 확인하기 위한 포함 증명에는 다음이 포함됩니다:

1. $H(L1)$
2. $H(L2)$
3. $H(L3L4)=H(H(L3)+H(L4))$

검증을 위해서는 다음 단계가 필요합니다:

1. $H(L1L2)=H(H(L1)+H(L2))$를 계산합니다.
2. $H(L1L2L3L4)=H(H(L1L2)+H(L3L4))$를 계산합니다.
3. 계산된 Merkle Root를 주어진 Merkle Root와 비교합니다.

## Merkle 일관성 증명

Merkle 일관성 증명은 두 로그 버전이 일관성을 유지하는지, 즉 나중 버전이 이전 버전의 모든 내용을 동일한 순서로 포함하며, 모든 새로운 항목이 이전 버전의 항목 뒤에 오는지를 검증할 수 있는 방법입니다. 일관성 증명에는 마지막 루트 해시가 생성된 이후로 새로 완료된 서브트리의 루트 해시가 포함됩니다. 예를 들어, 아래 이미지에서 Merkle 일관성은 $h_{1,4}$, $h'_{5,6}$ 및 $h'_{7,8}$을 사용하여 증명할 수 있습니다.

![[merkle_tree(2).png]]