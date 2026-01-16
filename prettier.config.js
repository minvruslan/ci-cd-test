export default {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  arrowParens: 'always',
  singleAttributePerLine: false,
  overrides: [
    {
      files: ['*.vue'],
      options: {
        singleAttributePerLine: true,
      },
    },
  ],
}
