/**
 * This Webpack config is used for bundling files for the demo.
 */

const webpack = require("webpack");
const path = require('path');

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

module.exports = {
    // devtool: "source-map",
    entry: {
        "fd-buttons": ["./src/fd-buttons.tsx"]
    },
    output: {
        path       : path.join(__dirname, '/dist'),
        filename   : '[name].js',
        chunkFilename   : '[name].chunk.js',
        publicPath : ''
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader', {loader: 'astroturf/loader', options: { extension: '.module.scss' }}]
            },
            {
                test: /\module\.scss$/,
                use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
            },
        ]
    }
};