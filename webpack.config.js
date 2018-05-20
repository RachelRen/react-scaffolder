const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        // app: ['whatwg-fetch', './src/index.js'],
        index: ['react-hot-loader/patch', './src/index.js'],
        // vendor: ['react', 'react-dom','react-router', 'react-router-dom','react-router-config']
    },
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, './build'),
    },
    devServer: {
	    contentBase: path.join(__dirname, './build'),
	    // publicPath: '/',
	    historyApiFallback: true,
	    inline: true,
	    port: 2000,
	    host: '0.0.0.0',
	    // disableHostCheck: true,
	    hot: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=babel'],
            /* use: {
				loader: 'babel-loader',
				options: {
					presets: ["react", "env", "stage-2"],
					//plugins: ["transform-runtime"]
				}
			} */
        }, {
            test: /\.scss?$/,
            use: [
                'style-loader',
          		'css-loader',
          		'sass-loader',
          	],
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
	        use: {
	          	loader: 'url-loader',
	        },
        }, {
            test: /\.(png|gif|jpg)$/,
	        use: {
	          	loader: 'url-loader',
	          	options: {
	            	name: './assets/images/[name].[ext]',
	            	limit: 100,
	          	},
	        },
        }],
    },
    optimization: {
	    splitChunks: {
	      	chunks: 'all',
	     	name: 'common',
	    },
	    runtimeChunk: {
	     	name: 'runtime',
	    },
    },
    resolve: {
        alias: {
            Src: path.resolve(__dirname, './src'),
            Page: path.resolve(__dirname, './src/page'),
            Components: path.resolve(__dirname, './src/components'),
            Util: path.resolve(__dirname, './src'),
            Redux: path.resolve(__dirname, './src/redux'),
            Images: path.resolve(__dirname, './src/assets/images'),
            // Src: path.resolve(__dirname, './src'),
        },
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.json'],
    },
    devtool: 'source-map',
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
        new CleanWebpackPlugin(['build'], {
            exclude: ['polyfill.dll.js', 'polyfill.manifest.json', 'vendor.dll.js', 'vendor.manifest.json'],
        }),
        // new BundleAnalyzerPlugin(),
        new HappyPack({
	      	id: 'babel',
	      	loaders: ['babel-loader?cacheDirectory'],
	    }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            // chunks: ['vendor.dll', 'index'],
            title: 'My index',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
	      	filename: '[name].css',
	      	disable: true,
	    }),

	    new DllReferencePlugin({
	    	context: __dirname,
	      	manifest: require('./build/vendor.manifest.json'),
	    }),
	    new DllReferencePlugin({
	    	context: __dirname,
	      	manifest: require('./build/polyfill.manifest.json'),
	    }),
    ],
};
module.exports = config;
