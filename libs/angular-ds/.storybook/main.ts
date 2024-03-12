import * as path from 'path';
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/addon-styling-webpack'
    // 'storybook-addon-sass-postcss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     rule: {
    //       sideEffects: true,
    //     }
    //   }
    // }
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@agensea-design-systems/styles': path.resolve(__dirname, '../../styles/styles'),
      };
    }

    return config;
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
