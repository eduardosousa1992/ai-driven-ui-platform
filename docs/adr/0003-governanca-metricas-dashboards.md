# ADR 0003: Implementação de Dashboard de Tendências via GitHub Pages

## Status
Aceito (Fevereiro de 2026)

## Contexto
A visibilidade da saúde do projeto para stakeholders não-técnicos era limitada a logs de terminal, dificultando a análise de regressão histórica e tendências de falhas.

## Decisão
Implementamos a publicação automática de relatórios HTML via **GitHub Pages**. Esta abordagem permite:
1. **Histórico de Execução**: Visualização da evolução da taxa de sucesso (KPIs).
2. **Acesso Público/Auditável**: Recrutadores e gestores acessam as evidências sem necessidade de autenticação no repositório.
3. **Custo Zero**: Aproveitamento da infraestrutura gratuita do GitHub para BI de Qualidade.

## Consequências
* **Positivas**: Aumento da transparência e facilitação do processo de "Go/No-Go" para deploys.
* **Negativas**: Exposição pública das evidências (mitigado por tratar-se de um projeto de portfólio).

---
*Decisão documentada por Eduardo Sousa para garantir a transparência da governança de dados.*
