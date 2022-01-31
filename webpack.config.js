const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports =  {
    entry: './src/index.ts',
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/
            },
            {
                loader: 'node-loader',
                test: /\.node$/,
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.js', '.node']
    },
    // externals: [nodeExternals()]
}