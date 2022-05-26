const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';
if(process.env.NODE_ENV ==='production'){
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
      filename: '[name][contenthash].js',
      assetModuleFilename : "assets/[hash][ext][query]",
      clean : true,
      // path: path.resolve(__dirname, './dist'),
      // filename: '[name][contenthash].js',
    },
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename : '[name].[contenthash].css'
      }),
      // new HtmlWebpackPlugin({
      //   name: 'ColorsTypes.html',
      //   template: 'src/pug/ColorsTypes.pug'}),
      // new HtmlWebpackPlugin({
      //   name: 'forms.html',
      //   template: 'src/pug/forms.pug'})
       new HtmlWebpackPlugin({
        name: 'formElem.html',
        template: 'src/pug/formElem.pug'})
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader"
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader, 
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                    ]
                  ]
                }
              }
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type : 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/, //i
          type: 'asset/resource'
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          exclude: /(node_modules|bower_components)/
        }
      ],
  }
}

// module.exports = {
//     mode: mode,
//     plugins: [
//         new HtmlWebpackPlugin({
//         template: "./src/index.html"
//     })],
//     modules: {
//         rules:[]
//     }
// }