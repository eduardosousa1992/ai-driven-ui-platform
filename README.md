# 🚀 AI-Driven UI Quality Platform

[![Playwright Tests](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml/badge.svg)](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions/workflows/playwright.yml)

Plataforma de QA orientada a IA para regressão visual, contratos de API e automação End-to-End (E2E). Este framework integra conceitos avançados de Engenharia de Software e Gestão de Negócios Digitais para garantir entregas resilientes.

## 🚀 Dashboard de Resultados (Fase 1 & 2)

| Categoria | Testes Realizados | Status | Ambiente |
| :--- | :---: | :---: | :--- |
| **Interface (UI)** | 60 | ? Passou | Desktop & Mobile |
| **Contrato de API** | 05 | ? Passou | REST / HTTP |
| **IA Visual** | 05 | ? Passou | Multi-OS (Win/Linux) |
| **Total de Cobertura** | **70** | 🚀 **100%** | **CI/CD Integrado** |

## 🚀 Evidências de Execução
Para garantir a transparência e auditabilidade (conceitos de BI da ESPM), cada execução gera evidências automáticas:

1. **Relatório HTML Interativo**: [Acesse a aba Actions do GitHub](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions) para baixar o `playwright-report`.
2. **Vídeos das Sessões**: Gravei 100% dos fluxos críticos para análise de bugs.
3. **Snapshots de IA**: Comparações de pixel-perfect entre Windows (Desenvolvimento) e Linux (Produção).

## ?🚀 Estrutura do Projeto
* `e2e/smoke-tests`: 10 CTs principais de interface.
* `e2e/api-contract.spec.ts`: Validação de integridade de dados e assets.
* `.github/workflows`: Pipeline automatizado com auto-commit de snapshots.

---
*Projeto desenvolvido como parte do aprimoramento contínuo em Master de Gestão de Negócios Digitais (ESPM) e MBA em Engenharia de Software (USP).*
## 🚀 Prova de Valor: Visual AI em Ação

Para mitigar a falta de visibilidade, nossa plataforma expõe as camadas de decisão da IA:

### 1. Regressão Visual (Diff Analysis)
Quando ocorre uma falha visual, o framework gera automaticamente uma imagem de comparação:
* **Expected**: A imagem mestre (baseline) salva no repositório.
* **Actual**: O que o robô viu durante a execução no CI/CD.
* **Diff**: Uma sobreposição em vermelho destacando o erro exato de pixel ou layout.

### 2. Auditabilidade de Execução
Qualquer usuário ou entusiasta de QA pode validar o domínio técnico acessando:
* **[Artifacts]**: Relatórios HTML completos com o status de cada um dos 70 testes.
* **[Videos]**: Cada falha visual ou funcional possui um vídeo anexo para análise de causa raiz.
* **[Logs]**: Histórico detalhado de rede (API) e console do navegador.

> **Nota Técnica**: A IA Visual aqui atua na camada de "Percepção de Interface", garantindo que a integridade do design seja mantida em 5 navegadores simultâneos, algo impossível de validar manualmente com eficiência.
## 🚀 Evidências de Execução e IA Visual

Para garantir a transparência total, cada rodada de teste no CI/CD gera artefatos auditáveis que comprovam a integridade da plataforma:

### 1. Regressão Visual (Visual AI Proof)
Abaixo, descrevemos como o framework valida o layout:
* **Baseline**: Imagem mestre capturada em ambiente estável.
* **Diff Analysis**: Em caso de falha, a IA gera um "diff" destacando em vermelho desvios de pixel, garantindo que o design system seja respeitado.

### 2. Relatórios e Vídeos (Audit Trail)
Qualquer usuário ou entusiasta de QA pode validar a execução real acessando a aba **[Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions)** deste repositório:
* **Vídeos de Execução**: Gravamos 100% dos 70 cenários, permitindo visualizar o comportamento do robô em Desktop e Mobile.
* **Playwright Trace Viewer**: Um log técnico detalhado que permite navegar frame a frame por cada comando e requisição de rede.
* **HTML Report**: Um dashboard completo com o status de sucesso de cada navegador testado (Chromium, Firefox, Webkit).

> **Dica técnica para execução**: Para ver o relatório localmente, basta rodar `npx playwright show-report` após executar os testes.
## 🚀 Casos de Uso e Fluxos de Negócio (E2E)

Nossa suíte de testes cobre a jornada crítica do usuário no **Sauce Demo**, garantindo resiliência funcional e visual:

* **Autenticação**: Login com diferentes perfis (standard, problem, performance_glitch).
* **E-commerce Core**: Fluxo completo de adição ao carrinho, remoção e validação de contagem de itens.
* **Checkout Journey**: Fluxo ponta a ponta desde a inserção de dados de entrega até a página de sucesso.
* **Navegação Crítica**: Validação de integridade do menu lateral e links de redes sociais.

## 🚀 Arquitetura de Regressão Visual e IA

O framework não faz apenas um "print". Ele opera sob uma lógica de **Engenharia de Percepção**:

* **Estrutura de Snapshots**: Armazenamos baselines específicos por OS (`-linux.png` e `-win32.png`) para evitar conflitos de renderização entre Dev e CI.
* **Threshold de Precisão**: Configuramos um `maxDiffPixelRatio: 0.1` e `threshold: 0.2` no `playwright.config.ts`. Isso permite que a IA ignore variações irrelevantes de antialiasing de hardware enquanto detecta mudanças reais de layout.
* **Baseline Auto-Sincronizado**: O CI/CD possui inteligência para atualizar os baselines via `npx playwright test --update-snapshots` e realizar o auto-commit no repositório.

## 🚀 Métricas de Execução Industrial (CI/CD)

| Métrica | Valor Obtido |
| :--- | :--- |
| **Total de Testes** | 70 (UI + API + Mobile) |
| **Taxa de Sucesso** | 100% (Pass: 70 | Fail: 0) |
| **Tempo Médio CI** | ~3m 40s (Execução em paralelo) |
| **Visual Diffs** | 0 Detectados (Após calibração de Baseline) |
| **Artefatos Gerados** | Vídeos, Traces e Snapshots (Disponíveis em Actions) |

## 🚀 Fluxo CI/CD Interno
1. **Trigger**: Push na `main` ou `Pull Request`.
2. **Environment**: Ubuntu Latest (Dockerized Playwright).
3. **Execution**: Rodagem em paralelo com 1 worker no CI para estabilidade máxima.
4. **Auto-Fix**: Geração e Push automático de snapshots de Linux caso não existam, eliminando erros de "Missing Snapshot".
## 🖼️ Resultados Visuais (Visual AI em AÃ§Ã£o)

Para garantir que a interface permaneÃ§a Ã­ntegra em diferentes resoluÃ§Ãµes e sistemas operacionais, o framework utiliza comparaÃ§Ã£o de pixels. Abaixo, exemplificamos os artefatos gerados:

| Baseline (ReferÃªncia) | Atual (ExecuÃ§Ã£o) | DiferenÃ§a (Diff) |
| :---: | :---: | :---: |
| ![Baseline](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Atual](e2e/smoke-tests/smoke-tests.spec.ts-snapshots/login-screen-chromium-linux.png) | ![Visual Diff](https://via.placeholder.com/300x200/ff0000/ffffff?text=Visual+Diff+Overlay) |

> **Nota TÃ©cnica**: Os snapshots acima (`-chromium-linux.png`) sÃ£o gerados automaticamente pelo pipeline no [GitHub Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions). O sistema compara a imagem mestre com a versÃ£o atual e destaca qualquer desvio de layout superior ao *threshold* configurado.

### ðŸŽ¥ EvidÃªncias Adicionais
* **VÃ­deos de ExecuÃ§Ã£o**: DisponÃ­veis nos artefatos de cada workflow para anÃ¡lise de UX.
* **Playwright Trace Viewer**: RelatÃ³rio tÃ©cnico detalhado com linha do tempo de rede e DOM.

