# ADR 0001: Escolha do Framework de Automação de UI

## Status
Aceito (Fevereiro de 2026)

## Contexto
Precisávamos de uma solução de automação que suportasse regressão visual complexa, testes de API integrados e execução paralela nativa para reduzir o tempo de feedback no pipeline de CI/CD.

## Decisão
Escolhemos o **Playwright** em vez do Cypress por três pilares estratégicos:

1. **Performance e Paralelismo**: O Playwright executa testes em múltiplos contextos de browser simultaneamente, reduzindo o tempo de execução em até 60% comparado ao Cypress.
2. **Suporte Multi-Browser Nativo**: Diferente de outros frameworks, ele utiliza protocolos nativos dos navegadores (CDP), garantindo maior fidelidade nos testes de WebKit (Safari) e Firefox.
3. **Visão de Engenharia (Shift-Left)**: A integração nativa com APIs e a facilidade de gerar artefatos (vídeos e traces) sem custos adicionais de licença (SaaS) reduzem o TCO (Total Cost of Ownership).

## Consequências
* **Positivas**: Redução de custos de infraestrutura no GitHub Actions, facilidade de manutenção com TypeScript e suporte robusto para Visual AI.
* **Negativas**: Curva de aprendizado ligeiramente superior para desenvolvedores acostumados estritamente com o ecossistema JavaScript purista.

---
*Decisão documentada por Eduardo Sousa para garantir a governança técnica do projeto.*
