const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
            rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                use: {
                  loader: "html-loader",
                },
            },
            {
                test: /\.(mp4|mpeg|png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource',
/*                 use: {
                    loader: "file-loader",
                    options: {
                      name: "[name].[hash].[ext]",
                    },
                }, */
            },
        ],
    },
};