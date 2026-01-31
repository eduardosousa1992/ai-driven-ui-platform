# 🤖 AI-Driven UI Quality Platform

[![Playwright Tests](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml/badge.svg)](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml)

Plataforma de QA orientada a IA para regressão visual, contratos de API e automação End-to-End (E2E). Este framework integra conceitos avançados de Engenharia de Software e Gestão de Negócios Digitais para garantir entregas resilientes.

## 📊 Dashboard de Resultados (Fase 1 & 2)

| Categoria | Testes Realizados | Status | Ambiente |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ✅ Passou | Desktop & Mobile |
| **Contrato de API** | 05 | ✅ Passou | REST / HTTP |
| **IA Visual** | 05 | ✅ Passou | Multi-OS (Win/Linux) |
| **Total de Cobertura** | **70** | 🚀 **100%** | **CI/CD Integrado** |

## 🎥 Evidências de Execução
Para garantir a transparência e auditabilidade (conceitos de BI da ESPM), cada execução gera evidências automáticas:

1. **Relatório HTML Interativo**: [Acesse a aba Actions do GitHub](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions) para baixar o `playwright-report`.
2. **Vídeos das Sessões**: Gravei 100% dos fluxos críticos para análise de bugs.
3. **Snapshots de IA**: Comparações de pixel-perfect entre Windows (Desenvolvimento) e Linux (Produção).

## 🏗️ Estrutura do Projeto
* `e2e/smoke-tests`: 10 CTs principais de interface.
* `e2e/api-contract.spec.ts`: Validação de integridade de dados e assets.
* `.github/workflows`: Pipeline automatizado com auto-commit de snapshots.

---
*Projeto desenvolvido como parte do aprimoramento contínuo em Master de Gestão de Negócios Digitais (ESPM) e MBA em Engenharia de Software (USP).*
## 🔍 Prova de Valor: Visual AI em Ação

Para mitigar a falta de visibilidade, nossa plataforma expõe as camadas de decisão da IA:

### 1. Regressão Visual (Diff Analysis)
Quando ocorre uma falha visual, o framework gera automaticamente uma imagem de comparação:
* **Expected**: A imagem mestre (baseline) salva no repositório.
* **Actual**: O que o robô viu durante a execução no CI/CD.
* **Diff**: Uma sobreposição em vermelho destacando o erro exato de pixel ou layout.

### 2. Auditabilidade de Execução
Recrutadores podem validar o domínio técnico acessando:
* **[Artifacts]**: Relatórios HTML completos com o status de cada um dos 70 testes.
* **[Videos]**: Cada falha visual ou funcional possui um vídeo anexo para análise de causa raiz.
* **[Logs]**: Histórico detalhado de rede (API) e console do navegador.

> **Nota Técnica**: A IA Visual aqui atua na camada de "Percepção de Interface", garantindo que a integridade do design seja mantida em 5 navegadores simultâneos, algo impossível de validar manualmente com eficiência.
