# Change Log

Qualquer mudança significativa no código do projeto estará presente neste change logs.

## [2.0.1](https://github.com/Ameciclo/botaprarodar-web/releases/tag/2.0.1) (24-8-2022)


Esta release contempla apenas correções menores e falhas na UI. São elas:

### Bug Fixes

- [Contador de bikes emprestadas agora mostra o valor correto.](https://github.com/Ameciclo/botaprarodar-web/pull/47)
- [Estilização da tela de Home foi corrigida.](https://github.com/Ameciclo/botaprarodar-web/pull/46)

## [2.0](https://github.com/Ameciclo/botaprarodar-web/releases/tag/2.0) (23-8-2022)


Esta release contempla uma completa remodelção no fluxo do usuário e apresenta um MVP do que será a plataforma WEB do Bota pra Rodar.

### Features

- Seletor de comunidades no qual o usuário logado pode selecionar qual comunidade gerenciar.
- Cadastro de usuários por comunidade.
- Remoção da dashboard como tela principal pós-login.
- Tela de comunidade não é mais acessível via barra lateral.
- Gerenciamento dos dados da comunidade agora é feito pela tela inicial pós seleção da comunidade.
- Exibição de informações sobre bicicletas emprestadas e disponiveis na tela inicial da comunidade.
- Refatoração da tela de login tornando-a responsiva.
- Remoção de dados sensíveis da tela de usuários, tornando a plataforma web de acordo com a LGPD.

### Melhorias
- Implementação de CI/CD em PRs e em merges integrado ao Netlify.
- Implementação de uma cobertura de teste mais robusta.
- Melhoria na organização das dependências.
- Implementação do lint durante o pré-commit.
