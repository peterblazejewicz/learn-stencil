exports.config = {
  bundles: [
    { components: ['shop-app', 'app-header', 'app-toolbar'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
