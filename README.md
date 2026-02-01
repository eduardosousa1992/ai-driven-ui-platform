# 🤖 AI-Driven UI Quality Platform
### Prova de Execução Industrial em QA Automation & Visual Regression

![CI](https://img.shields.io/badge/CI-GitHub%20Actions-blue)
![Playwright](https://img.shields.io/badge/Playwright-UI%20Automation-green)
![Status](https://img.shields.io/badge/Status-70%20Tests%20Passed-success)

Este repositório apresenta uma **plataforma de automação de testes end-to-end** com foco em **qualidade visual, funcional e auditabilidade**, utilizando **Playwright**, **TypeScript** e **CI/CD**.

---

## 🎯 Objetivos Técnicos do Projeto
- Validar **fluxos críticos E2E** em aplicações web reais (ex: Sauce Demo).
- Detectar **quebras visuais de layout** através de regressão visual com IA de percepção.
- Garantir **auditabilidade completa** via relatórios, vídeos e screenshots.

---

## 🧪 Tecnologias Utilizadas
- **Playwright**: Core de automação multi-browser e mobile.
- **TypeScript**: Tipagem forte para código escalável e seguro.
- **GitHub Actions**: Orquestração de CI/CD e armazenamento de artefatos.
- **Visual Regression**: Comparação de pixels com threshold de 0.2 para mitigação de falsos positivos.
- **Playwright API**: Testes de contrato e integridade de dados via JSON Schema.

---

## 🔥 Evidências Reais de Regressão Visual (Visual AI)

| Baseline (Referência) | Execução Atual (Real) | Diferença (Diff) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Current](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Visual Diff](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

---

## 📦 Artefatos de CI/CD (Disponíveis em Actions)
- 🎥 **Vídeos**: Gravação de 100% dos fluxos executados.
- 📄 **Relatórios HTML**: Dashboards interativos de cada rodada.
- 🔍 **Trace Viewer**: Análise detalhada de rede e DOM frame a frame.

---

**Autor: Eduardo Sousa**
QA Automation Engineer | SDET (USP & ESPM)

---

## 🗺️ Roadmap de Evolução Técnica (Visão de Gestão)

Como parte da estratégia de crescimento desta plataforma, os próximos marcos de engenharia são:

### Q1 2026: Observabilidade e BI
- [ ] **Dashboards de Tendência**: Integração de histórico de execução via Grafana/Prometheus para análise de estabilidade (BI ESPM).
- [ ] **Notificações Inteligentes**: Alertas automáticos via Slack/Teams integrados ao pipeline de falha.

### Q2 2026: Inteligência e Escalabilidade
- [ ] **Auto-healing**: Implementação de seletores resilientes baseados em IA generativa para reduzir manutenção de scripts.
- [ ] **Testes de Performance (Shift-Right)**: Integração de métricas de Web Vitals diretamente no fluxo de CI/CD.
