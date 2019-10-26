const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    // Set webpacks to run in DEV mode
    mode: 'development',

    target: 'web',

    // Source maps for debugging, see the original code
    devtool: 'cheap-module-source-map',

    // Apps entry point
    entry: './src/index',

    // Where we want webpack to output code (Normally in dev doesnot outputs code - serves from memory)
    output: {
        //__dirname gives us the current dir location
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // Configure to serve app via webpack (example: such as Express)
    devServer: {
        // Reduces the information that writes to the command line
        // Using this setup we dont get a lot of noise when its running
        stats: 'minimal',

        // Overlays any error that ocurrs on the browser
        overlay: true,

        // All requests will be sent to index.html
        // This way we can load deep links and all be handled by react-router
        historyApiFallback: true,

        // Last 3 entries are neccesary for webpack when working with the latest version of Chrome
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico"
        })
    ],

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ["babel-loader", "eslint-loader"]
            },
            {
              test: /(\.css)$/,
              use: ["style-loader", "css-loader"]
            }
          ]
     }
};
