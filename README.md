# Svelte Boilerplate

---

_A Svelte boilerplate that gets some of the PITA junk with Svelte out of the way. Includes webpack SASS/SCSS support, hash routing via [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router#readme), and [bulma](https://bulma.io/) for basic styling._

---

## How to Install
You're going to need NodeJS and the package manager of your choice. Clone the repository. Use `yarn install` or `npm i` to install dependencies.

## How to Use
Type `yarn start` or `npm start` in your console to start up a development server. Type `yarn run build` or `npm run build` to build the application to publish.

## The Breakdown
Entry point to the application is `src/index.js`. `src/App.svelte` is where you can find the Svelte entry point. `src/Layout.svelte` includes the general layout of the application, including references to a navbar, routes for the application, and a footer. `src/routes.js` allows for import of Svelte pages, and lets you setup routes appropriately. See the [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router#readme) documentation for more information here. `src/styles.scss` includes a basic bulma setup. Remove it if you're using something else, or keep it for a nice base to play with.

`dist` includes all files that will be served to the client. Webpack will automatically bundle JS/Svelte files and SCSS/CSS files. 


