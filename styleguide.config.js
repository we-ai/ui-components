module.exports = {
  components: 'src/components/**/[A-Z]*.{jsx,tsx}',
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/index.{js,jsx,ts,tsx}',
  ],
  sections: [
    {
      name: 'Buttons',
      components: ['src/components/Button/*.tsx'],
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
};
