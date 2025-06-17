const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const prettier = require('eslint-config-prettier');

module.exports= [
    js.configs.recommended,

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
            globals: {
                ...require('globals').browser,
                ...require('globals').es2021,
                React: 'readonly',
                window: 'readonly',
                document: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...react.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-undef': 'error',
            'react/no-unknown-property': ['error', { ignore: ['cmdk-input-wrapper'] }], 
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
        },
    },

    prettier,
];