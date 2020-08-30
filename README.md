<h1 align="center">welcome to fastify-typescript-generator 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/open-devs/fastify-typescript-generator" />
  <a href="https://www.npmjs.com/package/fastify-typescript-generator" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/fastify-typescript-generator">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/fastify-typescript-generator">
  <img alt="npm" src="https://img.shields.io/npm/dm/fastify-typescript-generator">
  <a href="https://github.com/open-devs/fastify-typescript-generator#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-blue.svg" />
  </a>
  <a href="https://github.com/open-devs/fastify-typescript-generator/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-blue.svg" />
  </a>
  <a href="https://github.com/open-devs/fastify-typescript-generator/blob/master/LICENSE" target="_blank">
  <img alt="License: MIT" src="https://img.shields.io/npm/l/fastify-typescript-generator" />
  <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/fastify-typescript-generator">
  </a>
</p>

> generates new [fastify](https://www.fastify.io/) applications in everyone's favourite language [typescript](https://github.com/microsoft/TypeScript) with various options to choose from based on your project needs

### 🏠 [homepage](https://github.com/open-devs/fastify-typescript-generator#readme)

### 📰 [npm](https://www.npmjs.com/package/fastify-typescript-generator)

## install

```sh
npm i -g fastify-typescript-generator
```

## usage

Run anyone of following commands:

```sh
fastify-gen
# or
fastify-typescript-generator
# or
fastify-ts-gen
```

## ❓ what is it

creates a new fastify application similar to the fastify-cli module. except this new application is configured to use typeScript instead of plain javascript and provides various options such as, kind of project structure to use with focus on plugin structure for fastify developers and express structure for developers with experience in developing with express, it also provides options for typeorm or mongoose.

## 🤔 why fastify-typescript-generator

nodejs is great for the rapid development of web-projects, but is often neglected because of the lack of type safety. typescript solves this issue and (along with its linter file) can even make your code more robust than some other static languages like java.

there are some other tools out there to generate fastify apps with javascript such as fastify-cli, but these either haven't been updated in a while or don't support typescript or don't support various development patterns.

in this application you have two options to setup a project in fastify plugin architecture or express architecture, we have setup mongoose/typeorm integration, routes, swagger (in plugin structure only) for you.

## 📜 different options available explained

<table>
<caption>description of various options available</caption>
<thead>
<tr>
<th>name</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>plugin-structure-mongoose</td>
<td>this type of structure includes fastify plugin structure which relies on modules described as reusable plugins that contain their own entities, routes & schemas, additionally paired with swagger and mongoose for connection with mongodb</td>
</tr>
<tr>
<td>plugin-structure-typeorm</td>
<td>this type of structure includes fastify plugin structure which relies on modules described as reusable plugins that contain their own entities, routes & schemas, additionally paired with swagger and typeorm for connection with various sql (like postgresql, mysql) and no-sql databases (like mongodb)</td>
</tr>
<tr>
<td>express-structure-mongoose</td>
<td>this type of structure includes express generator structure which relies on models, routes, dao, services, additionally paired with swagger and mongoose for connection with mongodb</td>
</tr>
<tr>
<td>express-structure-typeorm</td>
<td>this type of structure includes express generator structure which relies on models, routes, services, additionally paired with swagger and typeorm for connection with various sql (like postgresql, mysql) and no-sql databases (like mongodb)</td>
</tr>
</tbody>
</table>
<br>

happy app-deving 😊

## 👤 author

 **open devs (open.devs.github@gmail.com)**

* website: https://opendevs.in/
* github: [@open-devs](https://github.com/open-devs)
* core members: [@alok722](https://github.com/alok722), [@mikr13](https://github.com/mikr13)

## 🚀 future scope

* adding docker & container configurations
* adding template support
* more template structures

## 🤝 contributing

contributions, issues and feature requests are welcome!<br />feel free to check [issues page](https://github.com/open-devs/fastify-typescript-generator/issues). you can also take a look at the [contributing guide](https://github.com/open-devs/fastify-typescript-generator/blob/master/CONTRIBUTING.md).

## 🙌 show your support

give a ⭐️ if this project helped you!
<style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5F7FFF !important;border-radius: 8px !important;border: 1px solid transparent !important;font-size: 24px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/opendevs"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a chai"><span style="margin-left:5px;font-size:24px !important;">Buy me a chai</span></a>

## 📝 license

copyright © 2020 [open devs (open.devs.github@gmail.com)](https://github.com/open-devs).<br />
This project is [MIT](https://github.com/open-devs/fastify-typescript-generator/blob/master/LICENSE) licensed.

***
_this README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_