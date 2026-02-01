# ADR 0004: Investimento em Observabilidade e BI de Qualidade (Q1 2026)

## Status
Proposto (Fevereiro de 2026)

## Contexto
Atualmente, as falhas são analisadas de forma reativa e isolada. Falta uma visão consolidada de tendências (Trends) que permita identificar "testes flaky" e gargalos de performance no pipeline.

## Decisão
A estratégia para o Q1/2026 foca em:
1. **Histórico de Métricas**: Utilizar o diretório `allure-history` para persistir dados entre execuções do CI.
2. **Alertas Contextuais**: Implementar webhooks que enviem evidências diretamente para os stakeholders responsáveis.

## Consequências Esperadas
* **Positivas**: Redução no tempo de análise de falhas e maior previsibilidade para o time de Gestão e BI.
* **Negativas**: Pequeno aumento na complexidade de configuração do pipeline de CI/CD.

---
*Planejamento Estratégico por Eduardo Sousa.*
