# 🤝 Guia de Contribuição - AI-Driven UI Platform

Bem-vindo ao projeto! Como gestor deste framework, prezo pela padronização e excelência técnica. Siga estas diretrizes para contribuir:

## 📂 Estrutura de Pastas
Para manter a organização, novos testes devem seguir este padrão:
* `e2e/smoke-tests/`: Apenas fluxos críticos de negócio (Smoke Tests).
* `docs/adr/`: Novas decisões de arquitetura devem ser documentadas aqui.
* `tests/`: Testes funcionais detalhados e regressões específicas.

## 📝 Padrões de Código (Clean Code)
* **Page Object Model (POM)**: Obrigatório para qualquer nova funcionalidade de UI.
* **Nomenclatura**: Arquivos de teste devem terminar em `.spec.ts`.
* **Commits**: Utilize mensagens semânticas (ex: `feat:`, `fix:`, `docs:`).

## 📸 Regressão Visual
Ao adicionar um novo teste visual, certifique-se de que a Baseline seja gerada no ambiente de CI (Linux) para evitar falsos positivos de renderização entre SOs.

## 🚀 Fluxo de Pull Request
1. Crie uma branch com o nome da feature/bug.
2. Garanta que o pipeline de CI/CD esteja **100% verde**.
3. Solicite o Code Review (focado em escalabilidade e manutenção).

---
*Gerenciado por Eduardo Sousa - QA Automation Engineer | SDET.*
