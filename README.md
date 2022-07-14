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

- NodeJS 10 or above
- Yarn package mannager

---

## NPM Important commands

- `npm test` - Runs unit tests
- `npm run build` - Builds the application
- `npm start` - Start applications

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
