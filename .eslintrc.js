module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'prettier'],
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.js',
    'public',
    'node_modules',
  ],
  rules: {
    'no-unused-vars': 'error',
  },
};
