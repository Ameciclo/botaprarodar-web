[![Deploy - DEV](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/dev_netlify.yml/badge.svg?branch=main)](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/dev_netlify.yml)

[![Deploy - PROD](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/production_netlify.yml/badge.svg?branch=production)](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/production_netlify.yml)

# Bota pra Rodar - Web

A self-managed bike sharing system like alternative to socio-spatial inequalities.

<img width="1648" alt="Captura de Tela 2021-08-10 às 13 41 50" src="https://user-images.githubusercontent.com/31252524/128899506-b49bcebb-a7c0-403d-ae99-535aaddc0a56.png">

## Project structure

```
├── public/                  - Contains the main page that will handle the react build and the font imports.
├── src/                     - Contains main web app.
|   ├── assets/              - Images and icons that are rendered inside the app.
|   ├── components/          - Contains all the components that are used separately from page contexts.
|   ├── pages/               - Contains the pages files and styles.
|   ├───── components/       - Contains all components related to a specific page.
|   ├── routes/              - Router configurations for pages
|   ├── services/            - Firebase connection functions and external handling tools
|   ├── styles/              - Holds the main global styles.
|   ├── utils/               - Contains funtions and variable attributions that works with the components.
|   ├── App.js               - File that holds all pages and driver data together.
|   ├── index.js             - Render the App component.
├── .editorconfig            - Editor compatible configurations.
├── .gitignore               - Git config to exclude folders that don't need to be in git.
├── LICENSE                  - MIT license.
├── package.json             - NPM file that scructure project dependencies.
```

---

## Tecnologies used

- ReactJS
- Typescript
- Material UI
- Firebase Realtime Database
- Jest
- React Testing Library

---

## Tecnologies required

- Node 14 or above
- NPM Package manager

---

## NPM Important commands

- `npm test` - Runs unit tests
- `npm run e2e:local` - Runs end-to-end tests
- `npm run build` - Builds the application
- `npm start` - Start applications

## End-to-end tests

Update your `.env`

```
REACT_APP_E2E_BASE_URL
REACT_APP_E2E_USER
REACT_APP_E2E_PASS
```

Install dependencies

```
npm install
```

Start application

```
npm start
```

Runs tests

```
npm run e2e:local
```

## Check-in dance

1. Run tests `npm test`
1. Commit to local
   1. Add files to git stage `git add <filename> -A` or `git add -p`
   1. Commit files `git commit -m "Your commit message"`
1. Check Git Actions
1. Pull recent changes `git pull --rebase`
   1. Fix files if there are merge conflicts
      1. `git add <fixed files>`
      1. `git rebase --continue`
   1. Re-run tests if there are new changes `npm test`
1. Push `git push`
1. Check Git Action
   1. RED? Fix immediately or git revert

## Important informations

`main` branch ├── [DEV Environment](https://dev-botaprarodar.netlify.app/login)
`production` branch ├── [PROD Environment](https://botaprarodar.netlify.app/login)

We are developing and integrating code using feature branch. Our `main` branch is the development branch. This means that every new code you may want to integrate to the project should have a PR point towards the `main` branch. Once the PR is validated and integrated into the `main` branch, the project will decide when is the time to integrate on the `production` branch, which is the branch used for deploying on the production environment.
