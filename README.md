# React Typescript Starter

Using TypeScript with React, including React-Router, Redux and Ant Design UI library

## Features

+ React full stack
+ Use TypeScript write React components
+ Use Sass write css
+ Beautify UI library with Ant Design
+ Support dynamic import
+ Optimized build

## Technology Stacks

+ [TypeScript](https://www.typescriptlang.org/)
+ [React](https://reactjs.org)
+ [React Router](https://reacttraining.com/react-router/)
+ [Redux](https://redux.js.org/)
+ [And Design UI](https://ant.design/)

## Usage

Clone the project then run the following commands

```shell
npm i
npm run dev
```

Build and preview

```shell
npm run build
npm start
```

Then visit `http://localhost:9002` in your browser

If you want to use js or jsx, you can do it like this:

add loader in `webpack.base.config.js`

```js
{
  test: /\.jsx?$/,
  use: 'babel-loader',
  exclude: /node_modules/
}
```

add presets in `.babelrc`

```js
{
  "presets": ["@babel/env", "@babel/react"]
}
```

## License

[MIT License](./LICENSE)
