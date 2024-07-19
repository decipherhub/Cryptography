# Post-Quantum Cryptography

## 양자 컴퓨팅과 암호학
현재 널리 사용되는 공개키 암호 시스템들은 양자 공격에 취약하다. 예를 들어, [[RSA]]는 정수 분해에 의존하는데, 이는 쇼어 알고리즘(Shor’s algorithm)을 사용하여 쉽게 계산할 수 있다.

## 포스트-양자 암호학 (Post-Quantum Cryptography)
포스트-양자 암호학은 양자 암호 분석 공격에 대해 안전한 암호 알고리즘을 개발하는 것을 목표로 한다.

## NIST 포스트-양자 암호 표준화 프로그램
NIST 포스트-양자 암호 표준화 프로그램과 경쟁은 NIST 표준을 포스트-양자 암호학을 포함하도록 업데이트하기 위한 것이다. 이 프로그램은 디지털 서명과 키 캡슐화 메커니즘에 대한 공모를 진행하고 있다.

## 2020년 NIST의 첫 번째 수상자 발표
2020년에 NIST는 첫 번째 수상자를 발표했다:
- **CRYSTALS-Kyber (PKE/KEM)**
- **CRYSTALS-Dilithium**
- **FALCON**
- **SPHINCS (Signature)**

이 중 SPHINCS를 제외한 모든 알고리즘은 lattice-based이다. SPHINCS는 hash-based 알고리즘이다.