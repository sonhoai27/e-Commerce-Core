const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const path = require('path');
const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');
const ENV = 'development';
module.exports = webpackMerge(commonConfig({ env: ENV }), {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    './src/main/webapp/app/index'
  ],
  output: {
    path: utils.root('target/www'),
    filename: 'app/[name].bundle.js',
    chunkFilename: 'app/[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'react-hot-loader/webpack',
        },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true
            }
          }],
        include: [utils.root('./src/main/webapp/app')],
        exclude: ['node_modules']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats: {
      children: false
    },
    hot: true,
    contentBase: './target/www',
    proxy: [{
      context: [
        '/api'
      ],
      target: 'http://localhost:7000/',
      secure: false
    }],
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new writeFilePlugin(),
    new webpack.WatchIgnorePlugin([
      utils.root('src/test'),
    ])
  ]
});
