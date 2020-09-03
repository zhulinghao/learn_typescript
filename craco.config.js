const CracoLessPlugin = require('craco-less');

// less loader
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ec7259',
              '@content-width': '1200px',
              '@font-color-title': '#3D4465',
              '@font-color-gray': '#B6B9C5',
              '@font-color-secondly': '#9296A8',
              '@bg-color': '#eee',
              '@border-color': '#EAEDF1'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};