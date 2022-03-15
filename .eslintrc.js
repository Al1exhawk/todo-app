module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'import', 'sonarjs'],
    rules: {
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/extensions': 0,
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'sonarjs/cognitive-complexity': 'error',
        'sonarjs/no-identical-expressions': 'error',

        // best practices
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        complexity: 'error',
        'consistent-return': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-div-regex': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-proto': 'error',
        'no-restricted-properties': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',
        radix: 'error',
        'require-await': 'error',
        'wrap-iife': 'error',
        yoda: 'error',

        // stylistic
        camelcase: 'warn',
        'consistent-this': ['warn', 'that'],
        'func-name-matching': 'error',
        'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-depth': 'warn',
        'max-lines': ['warn', 1000],
        'max-params': ['warn', 4],
        'no-array-constructor': 'warn',
        'no-bitwise': 'warn',
        'no-lonely-if': 'error',
        'no-multi-assign': 'warn',
        'no-nested-ternary': 'warn',
        'no-new-object': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unneeded-ternary': 'warn',
        'one-var': ['warn', 'never'],
        'operator-assignment': 'warn',
        'padding-line-between-statements': 'error',
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
        react: {
            version: 'detect',
        },
    },
};
