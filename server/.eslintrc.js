module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'BigInt': true,
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'no-var': 'error',
    'eol-last': ['error', 'always'],
    'no-invalid-this': 2,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
  },
}
