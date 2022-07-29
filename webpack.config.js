const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

process.env.PUBLIC_URL = process.env.PUBLIC_URL || '/';

const isProd = process.env.NODE_ENV !== 'development';

module.exports =  {
    devtool: 'source-map',
    // devtool: false,
    mode: isProd ? 'production' : 'development',
    entry: {
      'static/bundle': './src/client.tsx',
    },
    target: 'web',
    output: {
      pathinfo: true,
      filename: '[name].js',
      publicPath: process.env.PUBLIC_URL,
      path: path.resolve('./build/public'),
      // sourceMapFilename: "[name].[hash].js.map",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: false,
      compress: true,
      port: 3000,
      open: ['/demo.html'],
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
      fallback: {
        "url":  require.resolve("url/"),
      },
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        PUBLIC_URL: '/',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve('./public'),
            to: path.resolve('./build/public'),
          },
        ]
      }),
      new ZipPlugin({
        // OPTIONAL: defaults to the Webpack output path (above)
        // can be relative (to Webpack output path) or absolute
        path: path.resolve(__dirname, './build'),

        // OPTIONAL: defaults to the Webpack output filename (above) or,
        // if not present, the basename of the path
        filename: 'wp-solar-calculator.zip',
      }),
    ]
  };
