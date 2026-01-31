# 🤖 AI-Driven UI Quality Platform

[![Playwright Tests](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml/badge.svg)](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml)

Plataforma de QA orientada a IA para regressão visual e automação End-to-End (E2E). Este framework integra conceitos avançados de Engenharia de Software e Gestão de Negócios Digitais para garantir entregas resilientes e de alta qualidade.

## 🚀 Tecnologias e Pilares
* **Playwright & TypeScript**: Automação robusta e tipada para múltiplos motores de renderização (Chromium, Firefox, WebKit).
* **Visual AI Testing**: Screenshots automatizados com comparação de baseline para detecção de regressões visuais.
* **CI/CD Profissional**: Integração total com GitHub Actions para execução distribuída e coleta de evidências.
* **Métricas de Negócio**: Foco em fluxos críticos (Checkout, Login, Carrinho) para redução de risco operacional.

## 🏗️ Estrutura do Projeto
O framework está organizado de forma modular para escalabilidade:
* `e2e/smoke-tests`: Contém os 10 Casos de Teste (CTs) principais que cobrem o fluxo crítico do sistema.
* `.github/workflows`: Pipeline automatizado que gera relatórios com vídeos e prints de cada execução.

## 📊 Como visualizar os resultados
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Execute os testes: `npx playwright test`.
4. Abra o relatório interativo: `npx playwright show-report`.

---
*Projeto desenvolvido como parte do aprimoramento contínuo em Master de Gestão de Negócios Digitais (ESPM) e MBA em Engenharia de Software (USP).*
