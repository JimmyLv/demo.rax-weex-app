# rax-demo-app

## Setup and Installation

```bash
git clone git@github.com:JimmyLv/rax-demo-app.git rax-demo && cd $_
yarn install
```

```bash
time yarn install
yarn install v0.21.3
warning rax-demo-app@0.0.0: No license field
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
✨  Done in 106.15s.
yarn install  13.75s user 8.51s system 20% cpu 1:46.53 total
```

## Getting Started

### `npm run start`

Runs the app in development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

### `npm run test`

You can run jest with test coverage.

### `npm run lint`

You will see the lint errors in the console.

### `npm run lint:fix`

And fix some of lint errors automatically. 

### `npm run stylelint`

You can also run the linter for styling. 

### `npm run build`

Builds the app for production to the `build` folder.

## Universal "Gotchas"

- DOM & DOM like **`window`** & **`document`** do not exist on the server - so using them, or any library that uses them (jQuery for example) will not work.
- If you need to use them, consider limiting them to wrapping them situationally with the imported *isWeb / isNode / isWeex* features from Universal. `import {isWeb, isWeex, isNode} from 'universal-env'`;
