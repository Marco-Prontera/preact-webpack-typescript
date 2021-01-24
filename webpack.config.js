const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.html', '.txt', ".css", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" },
                    { loader: "css-modules-typescript-loader"},
                ]
            },
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentBase: './dist',
        compress: true,
        port: 3030,
        historyApiFallback: true,
    },
    optimization: {
        mergeDuplicateChunks: true,
        usedExports: true,
        concatenateModules: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Preact template',
            template: './src/index.html'
        })
    ]
};
