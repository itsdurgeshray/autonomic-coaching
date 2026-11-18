import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      ...jsxA11y.flatConfigs.strict.rules,
      /* Lists styled without bullets keep role="list" so Safari still announces them */
      'jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
      'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    },
  },
  { ignores: ['.next/**', 'node_modules/**', '_legacy/**', '_tools/**', 'next-env.d.ts'] },
];

export default config;
