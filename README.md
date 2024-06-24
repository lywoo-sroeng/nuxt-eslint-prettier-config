# Package Installation
```sh
# ESLint
npm i -D eslint

# Prettier
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Typescript support
npm i -D typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript

#or
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```
# .eslintrc.cjs file configuration
```js
//projectName/.eslintrc.cjs

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],

  // Ignore eslint rules in file(s) of a specific directory
  ignorePatterns: ['components/ui/', 'tailwind.config.js'],

  rules: {
    'no-lonely-if': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': ['error', { printWidth: 95 }],
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
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```
# Nuxt Tailwind
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
```sh
npm install -D prettier prettier-plugin-tailwindcss
```

Modify the file "*projectName*/.prettierrc"
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

# References
- https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/getting-started/setup)
- [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
