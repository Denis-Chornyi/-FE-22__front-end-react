const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'review_build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
        },
        {
          test: /.js$/,
          use: ['babel-loader']
        },
        {
          test: /.(jpg|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      port: 9000,
      hot: true
    }
  };
  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    );
  }
  return config;
};
