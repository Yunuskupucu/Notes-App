import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect', // React sürümünü otomatik algılar
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Kullanıcı kuralları
      'react/jsx-no-target-blank': 'off', // target="_blank" hatalarını devre dışı bırakır
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // Eğer PropTypes kullanmıyorsanız bu kuralı devre dışı bırakır
      'react/jsx-props-no-spreading': 'off', // Props yayılımına izin verir
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Kullanılmayan değişkenler için uyarı, "_" ile başlayanları yoksayar
      'react/jsx-uses-react': 'off', // React 17+ için gerekli değil
      'react/react-in-jsx-scope': 'off', // React 17+ için gerekli değil
    },
  },
];
