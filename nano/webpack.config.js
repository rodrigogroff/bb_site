const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ObfuscatorPlugin = require('webpack-obfuscator');

module.exports = (env) => {
  return {
    mode: 'production',
    target: 'web',
    devtool: 'source-map',
    context: path.resolve(__dirname, './'),
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/static/js')
      }
    },
    entry: {
      '/src/static/Dashboard': './src/static/js/pages/Dashboard/router.js',
      '/src/static/QualidadeAssessoria': './src/static/js/pages/QualidadeAssessoria/router.js'
    },
    output: {
      globalObject: "this",
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new Dotenv({
        path: env.production == true ? `.env.production` : `.env.dev`
      }),
      //new ObfuscatorPlugin()
    ]
  }
};
