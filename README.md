# 🤖 Plataforma de Qualidade de UI Orientada por IA

Plataforma de QA de alta performance para regressão visual, contratos de API e automação End-to-End (E2E). Este framework integra conceitos avançados de **Engenharia de Software (USP)** e **BI (ESPM)** para garantir entregas resilientes e auditáveis.

## 📊 Painel de Resultados (Fases 1 e 2)

| Categoria | Testes Realizados | Status | Ambiente |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ✅ **Passed** | Desktop e Mobile |
| **Contrato de API** | 05 | ✅ **Passed** | REST / HTTP |
| **IA Visual** | 05 | ✅ **Passed** | Multi-SO (Win/Linux) |
| **Cobertura Total** | **70** | 🚀 **100%** | **CI/CD Integrado** |

## 🖼️ Resultados Visuais (Visual AI em Ação)

O framework utiliza comparação de pixels para garantir a integridade da interface em diferentes resoluções. Abaixo, exemplificamos como a IA detecta desvios:

| Linha de Base (Referência) | Atual (Execução) | Diferença (Visual Diff) |
| :---: | :---: | :---: |
| ![Referência](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Atual](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Exemplo de Diff](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

> **Nota Técnica**: O campo de "Diferença" utiliza IA para destacar em vermelho qualquer desvio de layout superior ao *threshold* de 0.2 configurado no pipeline de CI/CD.

## 🏗️ Arquitetura e Engenharia de Software
* **CI/CD Interno**: Pipeline automatizado no GitHub Actions com auto-fix para snapshots de Linux.
* **Auditabilidade de Execução**: Gravação de 100% dos fluxos em vídeo e **Trace Viewer** detalhado para análise de causa raiz.
* **Integridade de Dados**: Testes de contrato de API que validam os dados antes mesmo da interface ser carregada.

## 🚀 Como Executar Localmente
1. `git clone https://github.com/eduardosousa1992/ai-driven-ui-platform.git`
2. `npm install`
3. `npx playwright install`
4. `npx playwright test`

---
*Projeto desenvolvido por Eduardo Lima de Sousa como parte do aprimoramento contínuo em Gestão de Negócios Digitais (ESPM) e Engenharia de Software (USP).*
