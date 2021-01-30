# preact-webpack-typescript
 An empty project configured to develop with preactjs using webpack 5, typescript and other useful tools.
 There's also docker-compose for those who don't want to manage node versions locally.

* [Preactjs](https://github.com/preactjs/preact)
* [Webpack 5](https://github.com/webpack/webpack)
* [Typescript](https://github.com/microsoft/TypeScript)

Versions used to build the project:
* Node: v14.15.4
* Typescript: 4.1.3

Optional usage of docker-compose to develop locally:
* [Docker](https://docs.docker.com/compose/)
* [Node.js](https://nodejs.org/)

#Setup with docker-compose
Before using the following commands,
make sure you have properly installed docker-compose on your machine.

## Start the application
```
make start
```

## Stop
```
make stop
```

## Destroy the container
```
make destroy
```

## Open terminal
```
make terminal
```

#Setup without docker-compose
The following commands are useful to setup and starts
without the usage of docker-compose.

## Node setup
Use the last Node lts version.
```
nvm use --lts
```

## setup
```
npm install
```

## start dev server
```
npm start
```

## build the application
```
npm build
```