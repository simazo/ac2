/* コメントアウト ここから
const { environment } = require('@rails/webpacker')

module.exports = environment
コメントアウト ここまで */

// 追加 ここから
const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
);

module.exports = environment;
// 追加 ここまで
