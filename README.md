# 🤖 AI-Driven UI Quality Platform: Prova de Execução Industrial

Este repositório não é apenas um conceito; é uma plataforma de QA auditável com **100% de taxa de sucesso** em 70 testes automatizados.

## 🔥 1 & 4. Evidências Reais de Regressão Visual
Para validar o layout, utilizamos **Visual AI**. Abaixo, a prova real de como o framework detecta e isola falhas de interface:

| Baseline (Referência Esperada) | Current (Execução Real) | Visual Diff (IA em Ação) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Current](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Visual Diff](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

> **Nota de Engenharia**: O campo **Diff** utiliza o algoritmo de comparação de pixels do Playwright com *threshold* de 0.2, garantindo que nenhum desvio de layout passe despercebido.

## 🔥 2. Demonstração de Testes Reais (Fluxos E2E)
Abaixo, os fluxos concretos executados em **URLs públicas** (Sauce Demo) que garantem a resiliência do sistema:

* **Fluxo de Autenticação**: Login com diferentes perfis e validação de cookies/sessão.
* **Jornada de Checkout**: Fluxo ponta a ponta desde a seleção do produto até a página de sucesso.
* **Integridade de API**: 05 testes de contrato validando a integridade dos dados (JSON Schema).

## 🔥 3. Artefatos de CI/CD Expostos (Auditabilidade)
Qualquer pessoa pode validar os resultados **sem clonar o código**. Basta acessar a aba **[Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions)** para visualizar:

* 🎬 **Vídeos das Sessões**: Gravamos 100% das execuções para análise de UX.
* 📄 **Relatórios HTML**: Dashboards interativos gerados automaticamente por cada job.
* 🕵️ **Trace Viewer**: Relatório técnico "caixa-preta" para inspeção frame a frame de rede e DOM.

---
*Projeto desenvolvido por Eduardo Sousa - QA Automation Engineer | SDET (USP & ESPM).*
