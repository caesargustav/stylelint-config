## WACG stylelint Config

stylelint configuration file for WACG projects

<!-- installing (start) -->
### Installing

npm
```sh
npm i -D stylelint @wacg/stylelint-config
```

yarn
```sh
yarn add -D stylelint @wacg/stylelint-config
```
<!-- installing (end) -->

<!-- configuration (start) -->
### Configuration
add `.stylelintrc.js` in the root dirictory of your project with following content:

```js
module.exports = {
  extends: [
    '@wacg/stylelint-config'
  ]
}
```
<!-- configuration (end) -->

<!-- tasks (start) -->
### Tasks
add the following task to the `scripts` section of your `package.json`

```json
"scripts": {
  "lint": "stylelint **/*.js",
  "lint:fix": "stylelint **/*.js --fix"
}
```
<!-- tasks (end) -->