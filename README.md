# Notice
This is a personal configuration that I learnt and extended from [a blog](https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg) written by [Lewis Lloyd](https://dev.to/tao). For further details and configurations, please visit his page.
# Package Installation
```sh
# ESLint
npm i -D eslint

# Prettier
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Typescript support
npm i -D typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```
# .eslintrc.cjs file configuration
```js
//projectName/.eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],

  // Ignore eslint rules in file(s) of a specific directory
  ignorePatterns: ['components/ui/', 'tailwind.config.js'],

  rules: {
    'vue/multi-word-component-names': 'off',
    
    'vue/require-default-prop': 0,

    '@typescript-eslint/consistent-type-imports': 'error',
  },
}
```
# .prettierignore file configuration
```
#projectName/.prettierignore

node_modules
*.log*
.nuxt
.nitro
.cache
.output
.env
dist

#Ignore prettier rules in files of a specific directory
components/ui/
```
# .prettierrc file configuration
Modify the file "*projectName*/.prettierrc"
```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```
# VSCode settings.json
```json
"prettier.requireConfig": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```
# Nuxt Tailwind

Reference: [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/getting-started/setup)

```sh
npm install -D @nuxtjs/tailwindcss
```

```ts
//nuxt.config.ts

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

```sh
npx tailwindcss init
```

```css
/*./assets/css/tailwind.css*/

@tailwind base;
@tailwind components;
@tailwind utilities;
```
# Automatic Sorting Tailwind class with Prettier in Nuxt
Reference: [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

```sh
npm install -D prettier prettier-plugin-tailwindcss
```

Modify the file "*projectName*/.prettierrc"
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
