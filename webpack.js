const { resolve } = require('path')
module.exports = {
    mode: 'production',
    entry: {
        "doc-search": './assets/doc-search.js'
    },
    devtool: 'source-map',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, './assets/js/'),
        library: 'docSearch'
    },
    optimization: {
        minimize: true
    }
}