# React boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using [2people](https://2people.io) team usual project architecture.

[![2people logo](https://2people.io/assets/logo.svg)](https://2people.io)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Runs `eslint` on all files

## Directory structure

Project has default [CRA](https://github.com/facebook/create-react-app) structure after running `eject` script. Main difference is in `src` folder, which structure will be described below more detailed.

### Overview

```
src/
├─ assets/
│  └─ ...
├─ components/
│  ├─ blocks
│  │  └─ ComplexComponent.tsx
│  ├─ buttons
│  │  └─ BasicButton.tsx
│  ├─ forms
│  └─ ...
├─ consts/
│  ├─ someConst.ts
│  └─ ...
├─ helpers/
│  ├─ someHelper.ts
│  └─ ...
├─ hooks/
│  ├─ api/
│  │  ├─ useSomeApi.ts
│  │  └─ ...
│  └─ ...
├─ middlewares/
├─ queries/
│  ├─ someService/
│  │  ├─ getSomething.ts
│  │  ├─ postSomething.ts
│  │  └─ ...
│  └─ ...
├─ reducers/
├─ schemas/
├─ screens/
├─ validators/
├─ App.tsx
├─ configureStore.ts
└─ index.ts
```

### src/assets

Directory where all assets must be placed. Usually has _fonts_ and _img_ subdirectories.

### src/components

Directory with all React components. Has many subdirectories (blocks, buttons, forms, modals, etc.).

#### src/components/blocks

Example of subdirectory in components. Can have more subdirectories (e.g. components/blocks/auth - here must be all specific auth blocks placed).

### src/consts

Directory with project constants.

### src/consts/endpoints

File for api endpoints. All endpoints are created as functions which return strings and can get url parts or query params as arguments.

### src/consts/routes

File for all routes in project. They are created as functions, which return route strings. Can get arguments, e.g. for routes with id's.

### src/helpers

Directory with helper functions. There should be all functions placed, which are reused/can be reused in project. Every helper has single js file (e.g. _someHelper.ts_).

### src/hooks

Directory with React hooks. Every hook has single js file (e.g. _someHook.ts_).

#### src/hooks/api

Subdirectory with api hooks. Api hook is a pattern for building api interactions. From such a hook developer can get:
* Action: query to server. Actions are made from [redux-query](https://github.com/amplitude/redux-query) query configs (more info in **queries** paragraph).
* Different info about query, such as _isFetching_, _isFinished_, _lastUpdated_, _queryCount_.
* Query result from redux store, which came from server after query. Example: query _getUser_ gives us as result user entity, which should be available in _useUserApi_ hook in field _user_.

### src/middlewares

Directory with Redux middlewares. Every middleware has single js file (e.g. _someMiddleware.ts_).

### src/queries

Directory with configs for api queries. All query config files are in subdirectories by resource they get (e.g. _user_) or by project global sections (e.g. _settings_). Subdirectory has many query config files, which names starts with query type (e.g. _getUser.ts_). Config documentation can be found in [redux-query](https://github.com/amplitude/redux-query) library documentation.

Query config file in this project architecture is more than just config - it is a function, which gets arguments and makes action (e.g. _requestAsync_). All action types can be also found in redux-query documentation.

### src/reducers

Directory with Redux reducers.

### src/screens

Directory with all screens in project. 

### src/validators (_optional, if redux-form or smthg similar is used in project_)

Directory with validators for [redux-form](https://redux-form.com/8.1.0/docs/api/reduxform.md/).

### src/App.ts

Main file with all global routes and other stuff.

### src/configureStore.ts

File with Redux configuration. Exporting Redux _store_ and React Router _history_.

### src/index.ts

Project entrypoint.
