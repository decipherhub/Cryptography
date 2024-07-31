## Intro
A [[Merkle Tree]] is a binary tree where each leaf node contains the hash of a data block, and each non-leaf node contains the hash of its child nodes. This structure provides efficient and secure verification of the contents in large data structures.

## Example
![[Pasted image 20240731134705.png]]
Consider a Merkle Tree with four data blocks $(L1, L2, L3, L4)$.
1. Compute the hash of each data block.
    - $H(L1)$
    - $H(L2)$
    - $H(L3)$
    - $H(L4)$
2. Pair and hash the leaf nodes to form the next level.
    - $H(L1L2)=H(H(L1)+H(L2))$
    - $H(L3L4)=H(H(L3)+H(L4))$
3. Hash the non-leaf nodes to form the root.
    - $H(L1L2L3L4)=H(H(L1L2)+H(L3L4))$

## Merkle inclusion proof
A Merkle inclusion proof is a cryptographic proof that allows one to verify whether a specific data block is part of a larger set, without needing to access the entire set. This is particularly useful where efficient data verification is necessary, such as in Certificate Transparency (CT) or blockchain. This proof is also called a _Merkle proof_ or _Merkle path_. For example, in the scenario above, the inclusion proof to verify that $L1$ is part of the tree includes:
1. $H(L1)$
2. $H(L2)$
3. $H(L3L4)=H(H(L3)+H(L4))$
For verification, following steps are needed:
1. Compute $H(L1L2)=H(H(L1)+H(L2))$
2. Compute $H(L1L2L3L4)=H(H(L1L2)+H(L3L4))$
3. Compare the computed Merkle Root with the given Merkle Root.

## Merkle consistency proof
A Merkle consistency proof is a method that enables one to verify that any two versions of a log are consistent: that is, the later version includes everything in the earlier version in the same order, and all new entries come after the entries in the older version. The consistency proof includes the root hash of each newly completed subtree since the last root hash was generated. For example, in the image below, Merkle consistency can be proved using $h_{1,4}$, $h'_{5,6}$ and $h'_{7,8}$.

![[Pasted image 20240731140027.png]]
