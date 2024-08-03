>[!Info]
> 저희 프로젝트는 블록체인과 관련된 암호학을 다루는 범위로 하고 있습니다. 따라서 EVM에 대한 추가적인 자료가 필요하다면, 외부 링크를 참고해주세요: https://ethereum.org/ko/developers/docs/evm/

# fhEVM: 블록체인에서 기밀 스마트 계약 실행

블록체인에는 항상 딜레마가 있었습니다: 애플리케이션과 사용자 데이터를 온체인에 두어 모두가 볼 수 있게 하거나, 오프체인에 두어 프라이버시는 지키지만 계약 조합성을 잃는 것입니다. 이 문제는 금융과 의료처럼 높은 프라이버시가 요구되는 영역에서 큰 장애물로 작용해왔습니다. 그러나 [[Fully Homomorphic Encryption]] 기술 덕분에 Zama의 fhEVM은 암호화된 데이터에서 기밀 스마트 계약을 실행할 수 있게 해주며, 프라이버시와 조합성을 모두 보장합니다.

## 블록체인에 FHE가 적용되어야 하는 이유

블록체인은 탈중앙성과 투명성을 바탕으로 높은 보안을 제공합니다. 그러나 이러한 투명성 때문에 모든 정보가 퍼블릭하게 공개되므로, 블록체인에서 사용할 수 있는 정보는 제한적입니다. 사용자의 민감한 정보가 필요한 거래 내역이 있다면, 블록체인을 이용할 때 사용자들이 원치 않더라도 민감 정보가 온체인에 기록되어 프라이버시를 지키지 못합니다. 이 때문에 금융, 의료 등의 프라이버시 보호가 중요한 영역에서 블록체인의 활용에 한계가 있습니다. 예를 들어, 전통 금융시장을 이용하던 사용자 입장에서는 자신이 보유한 자산의 양이 누구에게나 공개된다는 것이 부담이 될 수 있습니다. 또한, 금융 거래가 미리 노출되어 MEV를 노리는 빌더들에게 프런트 러닝, 백러닝의 위험에 노출될 수 있습니다.

## 기존 솔루션의 한계

프라이버시 문제를 해결하기 위해 일부 정보는 오프체인에 기록하거나, [[Zero-Knowledge Proofs]] 를 사용하기도 합니다. 그러나 이 방법들은 완벽한 해결책이 될 수 없습니다. 두 방법 모두 오프체인에서 연산을 해야 한다는 한계가 있으며, 이는 트랜잭션의 원자성을 보장하지 않고 스마트 계약의 조합성을 해치게 됩니다. 따라서 온체인에 모든 데이터를 기록하면서도 프라이버시를 지킬 수 있는 방법이 필요하며, 그 답이 바로 FHE입니다.

## FHE가 프라이버시 문제를 해결하는 방법

FHE를 사용하면 온체인 데이터가 암호화되어 기록되기 때문에 개인의 거래 기록이 퍼블릭하게 공개되지 않습니다. 그러나 연산 자체는 공정하게 이루어졌음을 보장하기 때문에, 블록체인의 장점을 그대로 유지하면서도 개인정보를 보호할 수 있습니다. 예를 들어, 내가 얼마를 누구에게 송금했는지 모두가 알 수 없고, 거래 당사자만 알 수 있게 할 수 있으며, 특정 지갑의 잔고를 검색하는 것도 불가능하게 됩니다.

## Zama의 fhEVM 소개

Zama는 블록체인에 FHE를 적용하는 선도 기업으로, fhEVM을 개발했습니다. Zama는 현재 TFHE-rs, Concrete, Concrete ML, fhEVM 등 4개의 주요 제품을 보유하고 있습니다. 그 중 fhEVM은 EVM에서 가능한 모든 기능을 FHE를 사용하여 구현한 제품입니다. fhEVM은 evmos 기반으로 TFHE-rs를 활용하여 개발되었으며, Solidity를 그대로 사용할 수 있습니다. 현재 fhEVM은 버전 0.4(2024.07 기준)까지 출시되었습니다.

### fhEVM의 작동 원리

1. **Global Public Key**: fhEVM은 글로벌 Public Key를 사용하여 데이터를 암호화하고, FHE를 이용해 연산을 수행합니다. Public Key를 사용함으로써 다른 사용자 및 스마트 계약과의 상호작용에서 이점을 얻습니다. 복호화에 사용되는 Private Key는 여러 Validator들의 승인이 필요하여 보안을 유지할 수 있습니다.

2. **제출 요구 사항**: fhEVM을 사용하기 위해 사용자는 두 가지를 제출해야 합니다:
   - 암호화된 데이터.
   - 암호화되기 전 데이터의 존재를 증명하는 Zero-Knowledge Proof (ZKP).

3. **복호화 방법**:
   - **Public Decryption**: 암호화 및 ZKP 제출 후 Validator들이 검증하고 암호화된 데이터를 온체인에 올립니다. 연산 결과는 Validator들이 복호화하여 공개합니다.
   - **Private Decryption**: 결과를 혼자 확인하고 싶을 때는 새로운 키 쌍을 생성하여 Public Key를 제공하고, Validator들이 결과 데이터를 새로운 Public Key로 암호화하여 전달합니다. 사용자는 Private Key로 이를 복호화하여 확인합니다.

### 사용 사례

#### Encrypted ERC-20 토큰

기존 ERC-20 토큰은 지갑 잔액과 거래 내역이 공개됩니다. FHE를 활용하면 이러한 정보가 비공개로 유지되면서도 간편한 송금 기능을 유지할 수 있습니다. fhEVM에서는 `euint` 데이터 타입을 사용하여 데이터를 암호화하여 저장할 수 있습니다.

##### 코드 예시

```solidity
pragma solidity ^0.8.0;

import "TFHE.sol"; // Zama의 TFHE 컨트랙트 가져오기

contract EncryptedERC20 {
    euint public totalSupply;
    euint public burnable;
    mapping(address => euint) public balance;

    function transfer(address to, euint amount) public {
        require(balance[msg.sender].lte(amount), "Insufficient balance");
        balance[msg.sender] = balance[msg.sender].sub(amount);
        balance[to] = balance[to].add(amount);
    }

    function checkBalance(address owner) public {
        euint encryptedBalance = balance[owner];
        // 재암호화 및 복호화 과정
    }
}
```

#### Blind Auctions

Blind Auction에서는 입찰 금액이 입찰자 외에는 비공개됩니다. 이 과정을 통해 공정한 경쟁을 보장하고 입찰 금액의 조기 노출을 방지합니다.

##### 작동 방식

1. **입찰 제출**: 사용자는 암호화된 입찰 금액과 ZKP를 제출합니다.
2. **2단계 - 공개**: 모든 입찰이 완료되면, `dIhaveHIghest()`를 통해 가장 높은 입찰 금액을 확인합니다. 가장 높은 입찰자는 상품을 클레임하고, 나머지는 입찰 금액을 반환받습니다.
3. **마무리**: 경매 주최자는 가장 높은 입찰 금액을 가져갑니다.

### Reference
Crypto meets Crypto: FHE for Blockchain (하) 편