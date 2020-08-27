const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'public'),
    port: 3001,
    host: '0.0.0.0',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' } // compiles SCSS to CSS
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src', 'static', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BACKEND_URL: process.env.CALCULATOR_BACKEND_URL || JSON.stringify('http://0.0.0.0:3000'),
      }
    })
  ]
})
