module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
};
