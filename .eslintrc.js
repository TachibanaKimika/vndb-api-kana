module.exports = {
  env: {
    es2021: true,
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: false,
        singleQuote: true,
        jsxSingleQuote: true,
        useTabs: false,
        semi: true,
        printWidth: 80,
        tabWidth: 2,
        endOfLine: 'auto',
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
  },
};
