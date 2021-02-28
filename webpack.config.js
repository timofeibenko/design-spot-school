const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
        main: './js/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        favicon: "./img/aquamarine-stripes.svg",
        inject: 'body',
    }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '.',
                        },
                    },
                    'css-loader',
                ],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            { test: /\.svg/,
                use: { loader: "svg-url-loader",
                    options: {
                        // make loader to behave like url-loader, for all svg files
                        encoding: "base64",
                    }, }, },

            { test: /\.(png|jpe?g|gif)$/i,
                use: [ { loader: 'file-loader' },],},

            { test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [ { loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }, },],},
        ],
    },
};
