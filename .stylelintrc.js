module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss', 'stylelint-prettier/recommended'],
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
};
