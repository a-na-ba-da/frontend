const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      }, 
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
      {
        // 이미지 import 관련 웹팩 설정
        // 파일이 10k 보다 작을 경우 url-loader 문자열 번들링, 클 경우 file-loader로 파일 복사
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'asset/img/[name].[ext]',
            },
          },
        ],
      },
      // {
        // 폰트 import 관련 웹팩 설정
        // 파일이 10k 보다 작을 경우 url-loader 문자열 번들링, 클 경우 file-loader로 파일 복사
        // test: /\.(woff|woff2|eot|ttf|otf)$/,
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10000,
        //       fallback: 'file-loader',
        //       name: 'asset/font/[name].[ext]',
        //     },
        //   },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      env: process.env, // index.html에서 detenv 사용을 위한 설정
    }),
    // dotenv 사용을 위한 설정
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    })
  ],
  // devServer: {
  //   historyApiFallback: {
  //     index: 'index.html',
  //   },
  //   port: 3000,
  //   hot: true,
  // },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true
  }  
};
