const { merge } = require('webpack-merge');
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const common = require('../common/config/webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://localhost:3000/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "main",
            library: {type: "var", name: "main"},
            remotes: {
                about: "about",
            },
        }),
    ]
});
