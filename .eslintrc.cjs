module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@unocss',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'quotes': ['error', 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }]
  },

  overrides: [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs,ts}',
        '*.config.{js,cjs,ts}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    },
    {
      files: ['*.{js,ts}x'],
      rules: {
        'react/react-in-jsx-scope': 'off'
      }
    }
  ]
}
