require('babel-polyfill');

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoPrefixer = require('autoprefixer');

const isDev = (process.env.NODE_ENV === 'development');
const basePath = process.cwd();

const nunjucksOptions = JSON.stringify({
  searchPaths: `${basePath}/resources/nunjucks/`,
});

const pages = glob.sync('**/*.nunjucks', {
  cwd: path.join(basePath, 'resources/nunjucks/pages/'),
  root: '/',
}).map(page => new HtmlWebpackPlugin({
  filename: page.replace('nunjucks', 'html'),
  template: `resources/nunjucks/pages/${page}`,
}));

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './resources/assets/js/esign.js',
      './resources/assets/sass/style.scss',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${basePath}/static/assets/css`,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(njk|nunjucks)$/,
        loader: ['html-loader', `nunjucks-html-loader?${nunjucksOptions}`],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: (isDev) ? '[name].[ext]' : 'assets/images/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  output: {
    path: `${basePath}/static`,
    filename: 'assets/js/bundle.js',
  },
  plugins: [
    ...pages,
    new StyleLintPlugin({ syntax: 'scss' }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: `${basePath}/static`,
    hot: true,
    // open: true,
    watchContentBase: true,
  },
};

// if (!isDev) {
//   module.exports.plugins.push(
//     new CleanWebpackPlugin(['static/build']),
//     new webpack.optimize.UglifyJsPlugin(),
//   );
// }
