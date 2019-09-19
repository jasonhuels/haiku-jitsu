const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const syllable = require('syllable');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new Dotenv(),
    new UglifyJsPlugin({ sourceMap: true }),
    new HtmlWebpackPlugin({
      title: 'haiku-jitsu',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      //new
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader'
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
        },
        {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        // {
        //     test: /\.(png|jp(e*)g|svg)$/,
        //     use: [{
        //       loader: 'url-loader',
        //       options: {
        //         limit: 8000, // Convert images < 8kb to base64 strings
        //         name: 'images/[hash]-[name].[ext]'
        //       }
        //     }]
        //   }
        ]
      }
    };
