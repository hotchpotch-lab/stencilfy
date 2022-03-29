import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'stencilfy',
  devServer: {
    port: 4000,
    reloadStrategy: 'pageReload',
    openBrowser: false
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: 'Built by Aperrix & Damokless'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    tailwind(),
    tailwindHMR()
  ],
};
