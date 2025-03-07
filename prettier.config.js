export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['twMerge', 'twJoin', 'twSort'],
};
