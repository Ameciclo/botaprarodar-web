# Change Log

Qualquer mudança significativa no código do projeto estará presente neste change logs.

## [2.1](https://github.com/Ameciclo/botaprarodar-web/compare/2.0.4...2.1) (02-9-2022)

Esta release contempla apenas uma correção no fluxo do usuário:

### Feature

- Agora os gestores que acessam a plataforma Web poderão visualizar apenas àquelas comunidades as quais os mesmos gerenciam.

## [2.0.4](https://github.com/Ameciclo/botaprarodar-web/compare/2.0.3...2.0.4) (02-9-2022)

Esta release contempla apenas uma correção no fluxo do usuário:

### UI Change

- Remoção da opção adicional sobre a motivação para o uso de bicicleta;
- Mudança na legenda do gráfico sobre a motivação do usuário;
- Substituição na exibição do tempo de uso: de minutos para horas;
- Inclusão do `R$` no cadastro de usuário;
- Mudança do gráfico "donut" para o gráfico horizontal;
- Mudança no icone das viagens para uma bicicleta.
- Ao cliclar no logo o usuário é redirecionado para a tela de seleção de comunidades.
- Gráfico Donuts exibe o valor `<1%` quando o valor é muito baixo.
- Adição de um seletor na motivação do uso das bicicletas
- Ajuste no seletor de renda para valores menores que 150
- Adição de legenda descrevendo 'Quantidade de usuários' nos gráficos horizontais

### Ajustes de código

- Template para PRs direcionados para Produção.
- Componente de exibição de comunidades agora possui somente o propósito de seleção.
  os que faltaram acho que seriam estes

## [2.0.3](https://github.com/Ameciclo/botaprarodar-web/compare/2.0.2...2.0.3) (26-8-2022)

Esta release contempla apenas uma correção no fluxo do usuário:

### Bug Fixes

- Remoção do botão de "Deletar Comunidade" da tela de edição de comunidades.

## [2.0.2](https://github.com/Ameciclo/botaprarodar-web/compare/2.0.1...2.0.2) (25-8-2022)

Esta release contempla apenas uma correção no fluxo do usuário:

### Bug Fixes

- Correção do botão de "Voltar" no form de criação e edição de comunidades que estava redirecionando o usuário para a tela `/comunidadades`.

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
