module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:compat/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
  'plugins': ['prefer-object-spread', 'flowtype', 'react', 'import', 'compat'],
  'rules': {
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {'devDependencies': true, 'optionalDependencies': false, 'peerDependencies': true},
    ],
  },
};
