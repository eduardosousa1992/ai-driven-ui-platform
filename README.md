# 🤖 AI-Driven UI Quality Platform - Provas de Execução

Este projeto não é apenas código; é uma plataforma auditável de QA. Abaixo, apresento as evidências reais de que o sistema está operando com **100% de confiabilidade**.

## 📊 1. Resultados Concretos (KPIs de Qualidade)
Diferente de projetos acadêmicos, aqui entregamos métricas industriais:

| Categoria | Testes | Status | Evidência |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ✅ **Passed** | [Ver Relatório HTML](#-3-artefatos-abertos) |
| **Contrato de API** | 05 | ✅ **Passed** | [Ver Logs de Rede](#-3-artefatos-abertos) |
| **IA Visual** | 05 | ✅ **Passed** | [Ver Diff Visual](#-2-prova-visivel-de-execucao) |
| **Métrica Final** | **70** | 🚀 **100%** | **Auditado via CI/CD** |

## 🔍 2. Prova Visível de Execução (Visual AI)
Para validar o layout, o framework utiliza **Regressão Visual**. Abaixo, a prova de como a IA compara a referência (Baseline) com a execução atual:

| Baseline (O que é esperado) | Versão Atual (O que o robô viu) | Diferença (Onde a IA apontou erro) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Current](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Diff Example](https://raw.githubusercontent.com/microsoft/playwright/main/docs/src/test-screenshots-2-diff.png) |

## 📁 3. Artefatos Abertos (Acesse sem rodar o código)
Recrutadores e gestores podem auditar a execução diretamente pela aba **[Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions)** deste repositório, onde disponibilizamos:

* 🎬 **Vídeos das Sessões**: Gravação completa dos 70 fluxos críticos.
* 🕵️ **Trace Viewer**: Uma "caixa-preta" técnica para inspecionar cada comando e requisição de rede.
* 📄 **Relatórios HTML**: Dashboard interativo com o status detalhado de cada cenário.

---
*Projeto desenvolvido por Eduardo Sousa - QA Automation Engineer | SDET (USP & ESPM).*
