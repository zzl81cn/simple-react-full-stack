# simple-react-full-stack

[![Build Status](https://travis-ci.org/crsandeep/simple-react-full-stack.svg?branch=master)](https://travis-ci.org/crsandeep/simple-react-full-stack)
[![Greenkeeper badge](https://badges.greenkeeper.io/crsandeep/simple-react-full-stack.svg)](https://greenkeeper.io/)

[note-link](https://app.yinxiang.com/shard/s27/nl/6509927/06ddfbe7-58e7-4835-8a01-ec15a02dfe11?title=Full%20Stack%20Web%20Application%20using%20React%2C%20Node.js%2C%20Express%20and%20Webpack)

这是使用React，Node.js，Express和Webpack构建完整堆栈Web应用程序的样板。 它还配置了webpack-dev-server，eslint，prettier和babel。


- [简单react的全栈](#simple-react-full-stack)
  - [介绍](#introduction)
    - [开发模式](#development-mode)
    - [生产模式](#production-mode)
  - [快速开始](#quick-start)
  - [文档](#documentation)
    - [文档结构](#folder-structure)
    - [Babel转换器](#babel)
    - [ESLint代码风格](#eslint)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [VSCode + ESLint + Prettier](#vscode--eslint--prettier)
      - [Installation guide](#installation-guide)

## Introduction

[Create React App](https://github.com/facebook/create-react-app) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express backend application.
创建React App是一种快速开始使用React开发的方法，它不需要构建配置。 但它完全隐藏了构建配置，这使得难以扩展。 它还需要一些额外的工作来将它与现有的Node.js / Express后端应用程序集成。
This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/).
这是一个带有Node.js和Express后端的简单的完整堆栈React应用程序。 客户端代码用React编写，后端API用Express编写。 此应用程序配置了Airbnb的ESLint规则，并通过更漂亮的格式进行了格式化。

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.
在开发模式中，我们将运行2台服务器。 前端代码将由[webpack开发服务器](https://webpack.js.org/configuration/dev-server/)提供，它有助于热重和实时重新加载。 服务器端Express代码将由节点服务器使用[nodemon](https://nodemon.io/)提供服务 ，这有助于在服务器端代码更改时自动重新启动服务器。

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.
在生产模式中，我们只有1台服务器在运行。 所有客户端代码都将使用webpack捆绑到静态文件中，它将由Node.js / Express应用程序提供。

## Quick Start

```bash
# 克隆存储库
git clone https://github.com/crsandeep/simple-react-full-stack

# 进入目录
cd simple-react-full-stack

# 安装依赖项
yarn (or npm install)

# 启动开发服务器
yarn dev (or npm run dev)

# 生产构建
yarn build (or npm run build)

# 启动生产服务器
yarn start (or npm start)
```

## 文档

### 文件夹结构

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.
所有源代码都在src目录下。 在src里面，有客户端和服务器目录。 所有前端代码（react，css，js和任何其他资产）都将位于客户端目录中。 后端Node.js / Express代码将位于服务器目录中。

### Babel

[Babel](https://babeljs.io/) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel. Below is the .babelrc file which I am using.

```javascript
{
    "presets": ["env", "react"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.
Babel需要插件才能进行转换。 预设是Babel定义的插件集。 预设env允许使用babel-preset-es2015，babel-preset-es2016和babel-preset-es2017，它会将它们转换为ES5。 预设react允许我们使用JSX语法，它将JSX转换为Javascript。

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
ESLint是一个可插入且可配置的linter工具，用于识别和报告JavaScript中的模式。

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which I am using.
.eslintrc.json文件（或者我们用Javascript或YAML编写的配置）用于描述ESLint所需的配置。 下面是我正在使用的.eslintrc.json文件。

```javascript
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off"
  }
}
```

[I am using Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide. Since we are going to write both client (browser) and server side (Node.js) code, I am setting the **env** to browser and node. Optionally, we can override the Airbnb's configurations to suit our needs. I have turned off [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules.
我正在使用Airbnb的Javascript风格指南 ，该指南被全球许多JavaScript开发人员使用。 由于我们要编写客户端（浏览器）和服务器端（Node.js）代码，因此我将env设置为浏览器和节点。 或者，我们可以覆盖Airbnb的配置以满足我们的需求。 我已经关闭了无控制台 ， 逗号和反应/ jsx-filename-extension规则。

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
Webpack是一个模块打包器。 其主要目的是打包JavaScript文件以便在浏览器中使用。
[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack. Below is the webpack.config.js file which I am using.
webpack.config.js文件用于描述webpack所需的配置。 下面是我正在使用的webpack.config.js文件。

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
```

1.  **entry:** Here the application starts executing and webpack starts bundling <entry：这里应用程序开始执行，webpack开始>
2.  **output path and filename:** the target directory and the filename for the bundled output <输出路径和文件名：目标目录和捆绑输出的文件名>
3.  **module loaders:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://github.com/babel/babel-loader) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://github.com/webpack-contrib/css-loader) and [style-loaders](https://github.com/webpack-contrib/style-loader) to load and bundle CSS files. Fonts and images are loaded through url-loader. <模块加载器：模块加载器是应用于模块源代码的转换。 我们通过babel-loader传递所有js文件，将JSX转换为Javascript。 CSS文件通过css-loader和样式加载器传递，以加载和捆绑CSS文件。 字体和图像通过url-loader加载。>
4.  **Dev Server:** Configurations for the webpack-dev-server which will be described in coming section. <开发服务器： webpack-dev-server的配置>
5.  **plugins:** [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle. <插件： clean-webpack-plugin是一个webpack插件，用于在构建之前删除构建文件夹。 html-webpack-plugin简化了HTML文件的创建，以便为您的webpack包提供服务。 它加载模板（public / index.html）并注入输出包。>

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.
Webpack dev服务器与webpack一起使用。 它提供了一个开发服务器，为客户端代码提供实时重新加载。 这应该仅用于开发。
webpack.config.js的devServer部分包含运行webpack-dev-server所需的配置，如下所示。

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**Port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to true, it will automatically open the home page on startup. [Proxying](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to.
Port指定Webpack dev服务器监听此特定端口（在本例中为3000）。 当open设置为true时，它将在启动时自动打开主页。 当我们有一个单独的API后端开发服务器并且我们想要在同一个域上发送API请求时， 代理 URL非常有用。 在我们的例子中，我们有一个Node.js / Express后端，我们希望将API请求发送到。
### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.
Nodemon是一个实用程序，它将监视服务器源代码中的任何更改，并自动重新启动服务器。 这仅用于开发。

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which I am using.
nodemon.json文件用于描述Nodemon的配置。 下面是我正在使用的nodemon.json文件。

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.
在这里，我们告诉nodemon监视服务器端代码所在的目录src/server中的文件。 只要修改了src/server目录下的文件，Nodemon就会重新启动节点服务器。

### Express

Express is a web application framework for Node.js. It is used to build our backend API's.
Express是Node.js的Web应用程序框架。 它用于构建我们的后端API。

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file
src/server/index.js是服务器应用程序的入口点。 下面是src/server/index.js文件

```javascript
const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(8080, () => console.log("Listening on port 8080!"));
```

This starts a server and listens on port 8080 for connections. The app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.
这将启动服务器并侦听端口8080以进行连接。 应用程序以{username: <username>}响应URL请求（/api/getUsername）。 它还配置为从dist目录提供静态文件。

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.
Concurrently用于同时运行多个命令。我正在使用它在开发环境中同时运行webpack dev服务器和后端节点服务器。 以下是使用的npm/yarn脚本命令。

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.
VSCode 是一个轻量级但功能强大的源代码编辑器。 ESLint 负责代码质量。 Prettier 负责所有格式化。

#### Installation guide

1.  Install [VSCode](https://code.visualstudio.com/)
2.  Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3.  Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4.  Modify the VSCode user settings to add below configuration

    ```javascript
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
    ```

Above, we have modified editor configurations. Alternatively, this can be configured at the project level by following [this article](https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99).
