# ADR 0002: Estratégia de Regressão Visual e Comparação de Pixels

## Status
Aceito (Fevereiro de 2026)

## Contexto
A plataforma exige validação estética em múltiplos sistemas operacionais. No entanto, o render de fontes e elementos varia entre Windows e Linux, gerando falsos positivos que travam o pipeline de CI/CD.

## Decisão
Implementamos a **Regressão Visual Nativa do Playwright** com as seguintes diretrizes:

1. **Docker/Linux-First**: Todas as baselines de produção são geradas em ambiente Linux (GitHub Actions) para garantir consistência, tratando o Windows apenas como ambiente de desenvolvimento.
2. **Threshold de Percepção**: Configuramos um `maxDiffPixelRatio` de 0.2. Isso permite ignorar variações irrelevantes de anti-aliasing enquanto captura mudanças reais de layout.
3. **Armazenamento Interno**: Optamos por versionar as baselines no Git (LFS) em vez de serviços externos SaaS, reduzindo o TCO (Total Cost of Ownership) e mantendo a auditabilidade total dentro do repositório.

## Consequências
* **Positivas**: Custo zero de licenciamento, total controle sobre o fluxo de aprovação de snapshots e redução de falsos positivos no CI/CD.
* **Negativas**: Aumento do tamanho do repositório devido ao armazenamento de imagens (mitigado pelo uso de snapshots otimizados).

---
*Decisão documentada por Eduardo Sousa para consolidar a governança de Visual AI do projeto.*
