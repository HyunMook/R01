const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', 'scss'],
    alias: {
      '@component': path.resolve(__dirname, 'src/component/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@assets': path.resolve(__dirname, 'assets/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
      // favicon: './assets/images/favicon.png',
    }),
  ],
};
