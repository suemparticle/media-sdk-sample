const path = require('path');
module.exports = {
    entry: './test.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false
    },
    resolve: {
        symlinks: false
    },
    mode: 'production',
    performance: { hints: false },
    // sourceMaps: true
    // devtool: 'source-map',
    // devServer: {
    // },
};
