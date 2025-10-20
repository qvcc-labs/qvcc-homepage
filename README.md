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
*English positioning first—grouped by White-Paper chapter.*

### A. Constitutional Layer 宪章层
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-spec](https://github.com/qvcc-labs/qvcc-spec) | Versioned protocol specification (Markdown + auto-docsify) | `make spec-serve` → localhost:3000 | ![last-commit](https://img.shields.io/github/last-commit/qvcc-labs/qvcc-spec) |

### B. Core Implementation 技术实现
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-node](https://github.com/qvcc-labs/qvcc-node) | Reference Go node (Cosmos-SDK + native Dilithium) | `docker compose up` (4-node test-net) | ![docker-pulls](https://img.shields.io/docker/pulls/qvcc-labs/node) |
| [pqscale-circuit](https://github.com/qvcc-labs/pqscale-circuit) | PQScale zk circuits & trusted-setup ceremony | `make mvp-proof` (64 sig → 160 B) | ![circom](https://img.shields.io/badge/circom-2.1.6-blue) |

### C. SDK & Tooling 开发者工具
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-sdk-js](https://github.com/qvcc-labs/qvcc-sdk-js) | JS/TS SDK—one-line install: `npm i @qvcc/sdk` | `npm i @qvcc/sdk` one-line transfer | ![npm](https://img.shields.io/npm/v/@qvcc/sdk) |
| [qvcc-cli](https://github.com/qvcc-labs/qvcc-cli) | Command-line wallet & node operator toolkit | `go install github.com/qvcc-labs/qvcc-cli@latest` | ![go-version](https://img.shields.io/github/go-mod/go-version/qvcc-labs/qvcc-cli) *(optional)* |

### D. Governance & Compliance 治理与合规
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-governance](https://github.com/qvcc-labs/qvcc-governance) | Off-chain & on-chain governance templates, calculators, contracts | `go run cmd/qv-gov` proposal-new | ![gov](https://img.shields.io/badge/governance-active-blue) |
| [qvcc-compliance](https://github.com/qvcc-labs/qvcc-compliance) | FATF/ESG encryption layer + ISO 20022 transformer + carbon API | `go run cmd/fatf-report` encrypted XML | ![go-version](https://img.shields.io/github/go-mod/go-version/qvcc-labs/qvcc-compliance) |

### E. Test-net & Frontend 测试网与前端
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-testnet](https://github.com/qvcc-labs/qvcc-testnet) | Public test-net genesis, seeds, how-to-join docs | `curl -sL testnet.qvcc-labs.io/join.sh | bash` | ![testnet](https://img.shields.io/badge/testnet-online-green) |
| [qvcc-faucet](https://github.com/qvcc-labs/qvcc-faucet) | Anti-bot test-token faucet (GitHub OAuth) | GitHub OAuth faucet | ![oauth](https://img.shields.io/badge/oauth-github-green) |
| [qvcc-explorer](https://github.com/qvcc-labs/qvcc-explorer) | Real-time block explorer showing PQScale proof size | [explorer.qvcc-labs.io](https://explorer.qvcc-labs.io) | ![uptime](https://img.shields.io/uptimerobot/ratio/m789055207-8c9a456c7e5afbea8) |

### F. Security & Community 安全与社区
| Repo | English Positioning (One-liner) | Tonight's Command | Badge |
|---|---|---|---|
| [qvcc-security](https://github.com/qvcc-labs/qvcc-security) | Vulnerability disclosure & bug-bounty program (from 10 k USDC) | PVR enabled | ![PVR](https://img.shields.io/badge/PVR-enabled-red) |
| [qvcc-community](https://github.com/qvcc-labs/qvcc-community) | Governance archives, meeting minutes, grant templates | Discussions active | ![community](https://img.shields.io/badge/community-active-blue) |
| [qvcc-brand](https://github.com/qvcc-labs/qvcc-brand) | Logo kit, color palette, slide deck, brand guide | Download kit | ![brand](https://img.shields.io/badge/brand-kit-orange) |

---

## 4. 30分钟体验 / 30-min Quick Path  
① 领水 Faucet → ② 发PQScale交易 → ③ 浏览器验证160 B证明 → ④ 对提案点「人类否决」→ ⑤ 查看节点碳排曲线  
**一条命令 / One-liner**:  
```bash
curl -sL https://raw.githubusercontent.com/qvcc-labs/qvcc-node/main/scripts/demo.sh | bash
```

---

## 5. 加入宪章 / Join the Covenant  
- **开发者&密码学家** → 提PR；你的代码将成为新海之渠  
- **机构&监管伙伴** → 共建全球量子安全标准  

[![Read Whitepaper](https://img.shields.io/badge/Read-Whitepaper-%23004d99)](https://github.com/qvcc-labs/qvcc-whitepaper)
[![GitHub Org](https://img.shields.io/badge/GitHub-org-%23181717)](https://github.com/qvcc-labs)
[![Twitter](https://img.shields.io/badge/Twitter-@qvcc_labs-%231da1f2)](https://twitter.com/qvcc_labs)

&gt; **"The covenant is code—come pull the steel."**  
&gt; **代码即宪章，欢迎来拉取钢铁。**

---

## 6. 生态路线图 / Ecosystem Roadmap

| Quarter | Milestone | Deliverable Repo | Status |
|---|---|---|---|
| Q4 2025 | PQScale ZK open-source | `pqscale-circuit` v1.0 | 🔄 |
| Q2 2026 | Main-net V1.0 (crypto-agile) | `qvcc-node` v1.0 | 📦 |
| Q4 2026 | AI-security model beta | `qvcc-node` + `qvcc-governance` | 🔮 |
| Q2 2027 | Human-AI maturity report | `qvcc-community` report | 🔮 |

---

## 7. 许可证与贡献 / License & Contributing  
[MIT License](https://github.com/qvcc-labs/.github/blob/main/LICENSE)  
除非额外说明，所有仓库默认使用 MIT 许可证。  
贡献请遵循 [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) 与 [Security Policy](https://github.com/qvcc-labs/qvcc-security/blob/main/SECURITY.md)。

---

## 8. 联系 / Contact  
- 安全漏洞 → 使用 [qvcc-security Private Vulnerability Reporting](https://github.com/qvcc-labs/qvcc-security/security/advisories)  
- 一般讨论 → [Discussions · qvcc-community](https://github.com/qvcc-labs/qvcc-community/discussions)  
- 推特快讯 → [@qvcc_labs](https://twitter.com/qvcc_labs)

---

**© 2025 qvcc-labs**  
*Polaris Covenant · 北极星誓言*
