exports.config = {
  bundles: [
    { components: ["shop-app", "app-header", "app-toolbar", "shop-analytics", "shop-category-data"] }
  ],
  collections: [{ name: "@stencil/router" }]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
