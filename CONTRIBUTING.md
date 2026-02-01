# 🤝 Engenharia de Qualidade: Guia de Contribuição

Para garantir a **escalabilidade, previsibilidade e integridade** desta plataforma, todas as contribuições devem aderir rigorosamente aos padrões de engenharia definidos abaixo. Este framework segue princípios de **Software Intelligence** para sustentar ambientes de missão crítica.

## 📂 Taxonomia do Repositório
A estrutura de diretórios é estritamente vinculada ao propósito do teste para mitigar dívida técnica:
* `tests/e2e/`: Fluxos de jornada de usuário e integração funcional.
* `tests/visual/`: Regressões baseadas em percepção visual (AI Visual).
* `docs/adr/`: Registro obrigatório de decisões arquiteturais que alterem o core do framework.

## 📝 Critérios de Aceite para Code Review (DoR)
Não aceitamos Pull Requests que não cumpram os seguintes requisitos de engenharia:
1. **Design Pattern**: Implementação mandatória de **Page Object Model (POM)** para abstração de UI.
2. **Evidências de Execução**: Todo novo teste deve gerar vídeo e trace auditável no pipeline.
3. **Regressão Visual**: Snapshots devem ser gerados em ambiente **Linux (CI)** para garantir paridade de renderização e evitar falsos positivos.
4. **Idempotência**: O teste deve ser capaz de rodar em paralelo sem dependência de estado de outros cenários.

## 🚀 Protocolo de Pull Request
1. Garanta que o pipeline de CI/CD esteja **100% verde**.
2. Descreva o impacto técnico da alteração e como ela contribui para os KPIs de qualidade do projeto.
3. O review será focado em **performance, manutenibilidade e baixo acoplamento**.

---
*Governança mantida por Eduardo Sousa - QA Automation Lead | SDET (USP & ESPM).*
