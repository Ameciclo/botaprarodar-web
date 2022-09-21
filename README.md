[![Deploy - DEV](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/dev_netlify.yml/badge.svg?branch=main)](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/dev_netlify.yml)

[![Deploy - PROD](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/production_netlify.yml/badge.svg?branch=production)](https://github.com/Ameciclo/botaprarodar-web/actions/workflows/production_netlify.yml)

# Bota pra Rodar - Web

A self-managed bike sharing system like alternative to socio-spatial inequalities.

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
- Node 14 or above
- NPM Package manager

## Initial Configuration

1. Clone this repository: `git clone git@github.com:Ameciclo/botaprarodar-web.git`
1. Have the Node 14 installed on your machine (Using brew: `brew install node@14`)
1. Put the node command on your bashrc: `echo 'export PATH="/usr/local/opt/node@14/bin:$PATH"' >> ~/.zshrc`
1. On project root folder install packages: `npm install`
1. Using the `.sample-env` as template ask the team for environment variables.
1. You are ready to go.

## Process for integration

1. Every feature or change **should go through a pull request and point to `main`. Every PR will trigger the CI to Test and Build the PR. Once the CI is finished and the PR approved, it can be merged into main.** 
**IMPORTANT:** Always squash your commits.
1. When merged into `main` the GitHub Action will trigger the CI/CD to deploy on the DEV environment(see link below).
1. If the team consider that there are enough code to justify a production deploy, a new PR should be created from `main` to `production`. The last commit for this PR - integrating `main` into `production` - should have the changelogs updated. A merge commit should be created in `production` for this PR. DO NOT SQUASH COMMITS ON THIS PR.
1. Once this PR is merged GitHub Actions will begin the deploy on PROD environment.(see link below)
1. After the merge between `main` into `production` a new tag should be created on the commit created from the step 3 using the following commands:
  >   `git checkout production && git pull && git tag <version_number> && git push --tags`

Once this whole process is finished the admin can create a release from the tag on the `tag` button above.


## NPM Important commands

- `npm run build` - Builds the application
- `npm start` - Start applications
- `npm test` - Runs unit tests
- `npm run test-coverage ` - Create coverage report [file path: `Users/<user_name>/<project_path>/botaprarodar-web/coverage/lcov-report/index.html`]

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

## Environments

`main branch ├──` [DEV Environment](https://dev-botaprarodar.netlify.app/login)

`production branch ├──` [PROD Environment](https://botaprarodar.netlify.app/login)
