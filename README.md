### Demo

https://pokemon-web-apps.vercel.app/

### About

This is a simple web-based project that contains a list of Pokemon. All of the data are retrieved from a public [PokeAPI](https://pokeapi.co/). The API is served using GraphQL, so I used Apollo Client to fetch the data.

### Features

There are 4 features (1 is unfinished)

- https://pokemon-web-apps.vercel.app/ - Home page
    - This page contains a list of Pokemon cards, you can scroll the page to show more data
    - Each of the Pokemon cards is clickable and should redirect you to the detail page
- https://pokemon-web-apps.vercel.app/detail/bulbasaur - Detail page
    - This page as it said, is the detail page. It contains some information about the current Pokemon
- https://pokemon-web-apps.vercel.app/compare - Compare page
    - You can compare two Pokemon at the same time on this page. Click the Select Pokemon dropdown, then pick 2 Pokemon to compare
- Advanced search
    - You can access it through the Home page → Advanced Search button
    - Although this feature is not ready yet, the idea is to filter Pokemon based on desired parameters displayed on the filter section

### Tech stack

- TypeScript
- React
- NextJS
- Apollo GraphQL Client
- CSS Modules
