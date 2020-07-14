const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    mode:'development',
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [ 
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [
            {
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            use: {

                },
                plugins: [
                    new webpack.ProgressPlugin(),
                    new HtmlWebpackPlugin({template: './src/index.html'})
                ]
            },

            {
                test: /\.css$/,
                use: [
                  // style-loader
                  { loader: 'style-loader' },
                  // css-loader
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  // sass-loader
                  { loader: 'sass-loader' }
                ]
              },

            {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
            }
        ]
    }
}