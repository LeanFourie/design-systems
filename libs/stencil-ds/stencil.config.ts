import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ds',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
};
