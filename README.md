# QVCC Protocol  
**“后量子时代的全球信任层”**  
**"Post-Quantum Trust Layer for Global Digital Value"**  

&gt; 量子验证 · 宪章锚定 · 人机共治  
&gt; Quantum-Verified · Constitution-Anchored · Human-AI Co-Governed  

---

## 1. 一句话看懂 / One-liner  
**中文**：QVCC 是「全球数字价值交换的宪章层」，用后量子密码+AI治理+人类否决权，为CBDC、RWA、链上法币提供“可信、公平、持久”的T.E.S.底座。  
**EN**: QVCC is the constitutional layer for global digital-value exchange, integrating post-quantum crypto, AI governance and human final-veto to deliver a T.E.S. foundation—Trust, Equity, Sustainability.

---

## 2. 核心卖点 / Key Highlights  

| 宪章要求 Charter | 落地功能 Implementation | 验证方式 How to Verify |
|---|---|---|
| **后量子安全 PQC** | QRNG熵源+Dilithium签名+PQScale ZK压缩 | 区块头32 B量子熵实时显示 |
| **实时终局 T+0** | BFT ≤4 s 不可回滚 | Explorer绿色"Final"标签 |
| **人机共治 Co-Gov** | NHN投票≤10 %权重+平方根缩放+Tier-0 48 h否决 | Governance页"One-Click Veto" |
| **合规即插 Compliance** | FATF旅行规则自动加密上报(ISO 20022) | Tx详情显示"Compliance Sealed" |
| **ESG原生** | 节点24/7碳排溯源+技术博物馆节点 | 每验证者显示gCO₂/kWh曲线 |

---

## 3. 仓库地图 / Repo Map (qvcc-labs)

| 仓库 Repo | 今晚命令 Tonight's Command | 徽章 Badge |
|---|---|---|
| [qvcc-spec](https://github.com/qvcc-labs/qvcc-spec) | `make spec-serve` → localhost:3000 | ![last-commit](https://img.shields.io/github/last-commit/qvcc-labs/qvcc-spec) |
| [qvcc-node](https://github.com/qvcc-labs/qvcc-node) | `docker compose up` (4-node testnet) | ![docker-pulls](https://img.shields.io/docker/pulls/qvcc-labs/node) |
| [pqscale-circuit](https://github.com/qvcc-labs/pqscale-circuit) | `make mvp-proof` (64 sig → 160 B) | ![circom](https://img.shields.io/badge/circom-2.1.6-blue) |
| [qvcc-sdk-js](https://github.com/qvcc-labs/qvcc-sdk-js) | `npm i @qvcc/sdk` one-line transfer | ![npm](https://img.shields.io/npm/v/@qvcc/sdk) |
| [qvcc-explorer](https://github.com/qvcc-labs/qvcc-explorer) | [explorer.qvcc-labs.io](https://explorer.qvcc-labs.io) | ![uptime](https://img.shields.io/uptimerobot/ratio/m789055207-8c9a456c7e5afbea8) |
| [qvcc-faucet](https://github.com/qvcc-labs/qvcc-faucet) | GitHub OAuth faucet | ![oauth](https://img.shields.io/badge/oauth-github-green) |
| [qvcc-compliance](https://github.com/qvcc-labs/qvcc-compliance) | `go run cmd/fatf-report` encrypted XML | ![go-version](https://img.shields.io/github/go-mod/go-version/qvcc-labs/qvcc-compliance) |
| [qvcc-security](https://github.com/qvcc-labs/qvcc-security) | 10 k USDC+ bug bounty | ![PVR](https://img.shields.io/badge/PVR-enabled-red) |

---

## 4. 30分钟体验 / 30-min Quick Path  
① 领水 Faucet → ② 发PQScale交易 → ③ 浏览器验证160 B证明 → ④ 对提案点「人类否决」→ ⑤ 查看节点碳排曲线  
**一条命令 / One-liner**:  
```bash
curl -sL https://raw.githubusercontent.com/qvcc-labs/qvcc-node/main/scripts/demo.sh | bash
