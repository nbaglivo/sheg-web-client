var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

/*config.output.publicPath = "http://" + "0.0.0.0" + ":" + '3000/' + config.output.publicPath;*/

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  stats: { colors: true },
  historyApiFallback: true
}).listen(3000);
