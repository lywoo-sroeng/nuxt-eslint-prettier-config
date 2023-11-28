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
  ignorePatterns: ['components/ui/*', 'tailwind.config.js'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 0,
  },
}
