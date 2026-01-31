# AI-Driven UI Quality Platform
### Visual Regression & End-to-End Test Automation with Playwright

![CI](https://img.shields.io/badge/CI-GitHub%20Actions-blue)
![Playwright](https://img.shields.io/badge/Playwright-UI%20Automation-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong%20Typing-blue)

## 📌 Visão Geral
Plataforma de automação projetada para garantir qualidade funcional e visual, integrando conceitos de **Engenharia de Software (USP)** e **Digital Business (ESPM)**.

## 📊 Métricas de Execução (Painel Real)
| Categoria | Testes Realizados | Status | Ambiente |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ✅ Passed | Desktop/Mobile |
| **Contrato de API** | 05 | ✅ Passed | REST / HTTP |
| **IA Visual** | 05 | ✅ Passed | Multi-SO |
| **Cobertura Total** | **70** | 🚀 **100%** | **CI/CD Integrado** |

## 🖼️ Evidências Visuais (Visual AI)
| Baseline (Referência) | Versão Atual | Diferenças (Diff) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Current](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Visual Diff](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

## 🏗️ Arquitetura e Pipeline
* **GitHub Actions**: Pipeline com auto-fix para snapshots de Linux.
* **Auditabilidade**: Gravação de 100% dos fluxos em vídeo e Trace Viewer.
* **Relatórios**: HTML Report interativo gerado em cada execução.

---
*Projeto desenvolvido por Eduardo Sousa como parte do portfólio técnico para QA Engineering.*
