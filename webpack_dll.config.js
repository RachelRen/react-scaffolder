const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');


module.exports = {
    entry: {
        // 把 React 相关的放到一个单独的动态链接库
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 
        'react-router', 'react-router-config', 'react-router-dom', 'react-router-redux', 'classnames', 'history'],
        polyfill: ['babel-polyfill', 'whatwg-fetch'],
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, 'build'),
        library: '_dll_[name]',
    },
    plugins: [
        // 接入 DllPlugin
        new DllPlugin({
            context: __dirname,
            name: '_dll_[name]',
            path: path.join(__dirname, 'build', '[name].manifest.json'),
        }),
    ],
};