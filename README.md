# 🤖 Plataforma de Qualidade de UI Orientada por IA

Plataforma de QA de alta performance para regressão visual, contratos de API e automação End-to-End (E2E). Este framework integra conceitos avançados de **Engenharia de Software (USP)** e **BI (ESPM)** para garantir entregas resilientes.

## 📊 Resultados e Métricas (Painel de Execução)

| Categoria | Testes Realizados | Status | Ambiente |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ✅ **Passed** | Desktop e Mobile |
| **Contrato de API** | 05 | ✅ **Passed** | REST / HTTP |
| **IA Visual** | 05 | ✅ **Passed** | Multi-SO (Win/Linux) |
| **Cobertura Total** | **70** | 🚀 **100%** | **CI/CD Integrado** |

## 🔍 Evidências Visuais (IA em Ação)

Abaixo, a prova técnica da comparação de pixels realizada pelo framework:

| Baseline (Referência) | Current (Atual) | Visual Diff (Diferença) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Current](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Diff Example](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

> **Nota Técnica**: O campo **Diff** mostra em vermelho qualquer desvio de layout superior ao *threshold* de 0.2. Como o projeto atingiu 100% de sucesso, utilizamos um exemplo oficial para demonstrar a sensibilidade da IA.

## 🎬 Artefatos e Auditabilidade (CI/CD)
Cada execução no **GitHub Actions** gera evidências auditáveis acessíveis na aba [Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions):
* **Vídeos de Execução**: Gravação completa de 100% dos fluxos críticos.
* **Trace Viewer**: Relatório "caixa-preta" para análise frame a frame de rede e DOM.
* **HTML Report**: Painel interativo com o detalhamento técnico de cada um dos 70 testes.

---
*Projeto desenvolvido por Eduardo Lima de Sousa como parte do aprimoramento contínuo em Gestão de Negócios Digitais (ESPM) e Engenharia de Software (USP).*
