module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/multi-word-component-names': 'off',
    'no-plusplus': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
  },
};
