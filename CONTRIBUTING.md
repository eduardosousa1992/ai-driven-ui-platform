# 🤝 Engenharia de Qualidade: Guia de Contribuição

Para garantir a **escalabilidade e previsibilidade** desta plataforma, todas as contribuições devem aderir a este manifesto de engenharia.

## 🚫 Quando NÃO contribuir
Para manter o repositório enxuto e eficiente, **não serão aceitos** Pull Requests que:
* **Dupliquem Testes**: Cenários que já possuam cobertura em outras camadas (ex: testar via UI algo já coberto por API).
* **Omitam Evidências**: Commits sem vídeos, traces ou logs de execução auditáveis.
* **Gerem Instabilidade (Flakiness)**: Testes com locators frágeis ou dependência de estado de outros scripts.

## ✅ Definição de Pronto (DoR) para Code Review
Toda contribuição deve atender a estes critérios mínimos antes da solicitação de review:
1. **Evidência Obrigatória**: O pipeline deve gerar o vídeo da execução e o Visual Diff.
2. **Impacto de Regressão**: Se houver alteração de layout, a justificativa técnica do novo snapshot deve estar no PR.
3. **Idempotência**: O novo teste não pode quebrar os testes existentes em execução paralela.

---
*Governança mantida por Eduardo Sousa - QA Lead | SDET.*
