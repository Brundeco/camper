const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StylelintBarePlugin = require('stylelint-bare-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng');
const imageminZopfli = require('imagemin-zopfli');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const settings = require('./webpack.settings');

const {
  basePath,
  devServerContentBase,
  devServerOpenBrowser,
  isDev,
  isStatic,
  paths,
  dist,
  nunjucksOptions,
  pages,
  useFontsDirectory,
  useVideosDirectory,
} = settings;

const copy = [
  { from: `./${paths.images}`, to: (isDev) ? `${dist.images}[path][name].[ext]` : `${dist.images}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  { from: `./${paths.manifest}`, to: `${dist.manifest}[name].[ext]`, ignore: ['*.DS_Store'] },
];

if (useFontsDirectory) {
  copy.push(
    { from: `./${paths.fonts}`, to: (isDev) ? `${dist.fonts}[path][name].[ext]` : `${dist.fonts}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  );
}

if (useVideosDirectory) {
  copy.push(
    { from: `./${paths.videos}`, to: (isDev) ? `${dist.videos}[path][name].[ext]` : `${dist.videos}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  );
}

module.exports = {
  devtool: (isDev) ? 'source-map' : 'nosources-source-map',
  entry: {
    app: [
      `./${paths.js}app.js`,
    ],
    style: [
      `./${paths.sass}style.scss`,
    ],
    sprite: glob.sync(`./${paths.svgSprite}*.svg`),
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
        exclude: {
          test: path.resolve(__dirname, 'node_modules'),
          exclude: [
            path.resolve(__dirname, 'node_modules/hyperform')
          ]
        },
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
                shippedProposals: true,
              },
            ],
          ],
        },
      },
      {
        test: require.resolve('jquery'), // expose jQuery globally
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
          {
            loader: 'expose-loader',
            options: '$',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: !isDev,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|webp)$/,
        exclude: [
          path.resolve(__dirname, paths.svgSprite),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.images}[name].[ext]` : `${dist.images}[name].[hash:8].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.*\.svg$/,
        include: [
          path.resolve(__dirname, paths.svgSprite),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: `${dist.svgSprite}icons.svg`,
              symbolId: (filePath) => `icon-${path.basename(filePath, '.svg')}`,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.fonts}[name].[ext]` : `${dist.fonts}[name].[hash:8].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.videos}[path][name].[ext]` : `${dist.videos}[path][name].[hash:8].[ext]`,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(basePath, dist.root),
    filename: `${dist.js}[name].[contenthash].js`,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    namedChunks: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new StylelintBarePlugin({
      files: `./${paths.sass}**/*.s?(a|c)ss`,
    }),
    new FixStyleOnlyEntriesPlugin({
      extensions: ['less', 'scss', 'sass', 'css', 'svg'],
    }),
    new MiniCssExtractPlugin({
      filename: `${dist.css}[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin(copy),
    new ImageminPlugin({
      disable: isDev,
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminPngquant({
          strip: true,
        }),
        imageminOptipng({
          optimizationLevel: 5,
        }),
        imageminZopfli({
          more: true,
        }),
        imageminJpegRecompress({
          accurate: true,
          quality: 'low',
          min: 45,
          max: 85,
          strip: true,
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 80,
        }),
        imageminGifsicle({
          interlaced: true,
          optimizationLevel: 3,
        }),
        imageminSvgo({
          removeViewBox: false,
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin(),
    new ManifestPlugin({
      fileName: `${dist.revManifest}rev-manifest.json`,
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new WebpackNotifierPlugin({
      title: process.env.npm_package_description,
      contentImage: path.join(basePath, 'notification.png'),
      excludeWarnings: true,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: devServerContentBase,
    open: devServerOpenBrowser,
    watchContentBase: true,
    stats: {
      children: false, // Suppress "Entrypoint undefined" warnings
    },
  },
  stats: {
    children: false, // Suppress "Entrypoint undefined" warnings
  },
};

if (isStatic) {
  module.exports.module.rules.push({
    test: /\.(njk|nunjucks)$/,
    use: [
      {
        loader: 'html-srcsets-loader',
        options: {
          attrs: [
            'audio:src',
            'img:src',
            'img:srcset',
            'video:src',
            'source:src',
            'source:srcset',
          ],
          interpolate: true,
        },
      },
      {
        loader: `nunjucks-html-loader?${nunjucksOptions}`,
      },
    ],
  });

  module.exports.plugins.push(...pages);

  // Static webp extension fix
  module.exports.plugins.push({
    apply: (compiler) => {
      compiler.hooks.compilation.tap('ReplaceWebpExtensionPlugin', (compilation) => {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'ReplaceWebpExtensionPlugin',
          (data, cb) => {
            data.html = data.html.replace( // eslint-disable-line no-param-reassign
              /.(png|jpg)" type="image\/webp"/,
              '.webp" type="image/webp"',
            );
            cb(null, data);
          },
        );
      });
    },
  });
}

if (isDev) {
  module.exports.plugins.push(
    new CleanWebpackPlugin([
      path.join(dist.root, dist.css),
      path.join(dist.root, dist.js),
    ]),
  );
} else {
  module.exports.plugins.push(
    new CleanWebpackPlugin([
      path.join(dist.root, dist.assets),
    ]),
    new BundleAnalyzerPlugin(),
  );
}
