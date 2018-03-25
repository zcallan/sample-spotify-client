module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'security',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/imports-first': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'strict': 1,
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-target-blank': 1,
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-wrap-multilines': 'error',
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'space-in-parens': ['error', 'always', { exceptions: ['{}', '()', 'empty'] }],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'arrow-spacing': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': 'off',
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'eol-last': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'array-bracket-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'radix': ['error', 'always'],
    'new-cap': 'error',
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
};
