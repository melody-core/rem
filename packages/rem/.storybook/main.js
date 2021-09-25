const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    'storybook-readme',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-storysource',
  ],
};
