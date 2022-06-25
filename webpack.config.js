const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const prod = 'production';
const isDev = process.env.NODE_ENV !== prod;

module.exports = {
  mode: isDev ? 'development' : prod,
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: `[name]${isDev ? '' : '.[contenthash]'}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /url/,
            use: {
              loader: 'file-loader',
              options: { name: '[path][name].[ext]' },
            },
          },
          {
            use: ['@svgr/webpack'],
          },
        ],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      favicon: path.resolve(__dirname, './assets/favicon.ico'),
    }),
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
    ...[isDev && new ReactRefreshPlugin()].filter(Boolean),
    new DotenvPlugin({ systemvars: true }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },
};
