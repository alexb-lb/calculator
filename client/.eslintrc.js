module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:css-modules/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': { 'jsx': true },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': ['react', 'react-hooks', 'css-modules'],
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': [2, { ignore: ['children'] }],
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'no-var': 'error',
    'eol-last': ['error', 'always'],
    'no-invalid-this': 2,
    'object-curly-spacing': ['error', 'always'],
  },
}
