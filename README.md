# 🤖 AI-Driven UI Quality Platform (Nível SDET)

Plataforma de QA Industrial focada em **Regressão Visual Baseada em Percepção** e **Testes de Contrato**. Este framework implementa padrões de alta escalabilidade para ambientes corporativos.

## 🏗️ Arquitetura do Framework (Design Patterns)
Para garantir a manutenção e o baixo acoplamento, utilizamos:
* **Page Object Model (POM)**: Camada de abstração da UI separada da lógica de teste.
* **Service Layer**: Abstração para requisições de API, permitindo reuso em fluxos E2E.
* **Visual Baseline Strategy**: Snapshots versionados por SO (Linux/Win) para mitigar falsos positivos em CI/CD.

## 🧪 Estratégia de Testes (70 Cenários Auditáveis)

| Camada | Escopo Técnico | Ferramenta | Status |
| :--- | :--- | :---: | :---: |
| **Visual Regression** | Comparação de Pixel-Perfection (Threshold 0.2) | Playwright AI | ✅ 100% |
| **API / Contract** | Validação de JSON Schema e Status Codes | Playwright API | ✅ 100% |
| **Functional E2E** | Jornada crítica do usuário (Login ao Checkout) | Playwright UI | ✅ 100% |

## 📉 Prova de Falha (Fluxo Negativo Proposital)
Para demonstrar a eficácia da nossa **Visual AI**, o cenário `CT099-fail-visual` foi desenhado para falhar propositalmente em ambiente de Staging, gerando automaticamente o artefato de **Visual Diff** para análise de causa raiz.

## 🛣️ Roadmap Técnico (Evolução SDET)
- [ ] Integração de IA Generativa para Auto-healing de locators.
- [ ] Dashboard de métricas de qualidade via Grafana/Prometheus (Foco em BI ESPM).
- [ ] Implementação de Testes de Carga na camada de API.

---
*Auditabilidade Industrial: Vídeos, Logs e Traces disponíveis em [Actions](https://github.com/eduardosousa1992/ai-driven-ui-platform/actions).*
