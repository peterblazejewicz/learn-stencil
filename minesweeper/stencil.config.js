exports.config = {
  bundles: [
    { components: ['mine-sweeper', 'game-grid', 'grid-cell'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
