const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const config = {
	entry: {
		index: ['./src/index.js']
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: path.join(__dirname, './build'),
	    publicPath: '/',
	    chunkFilename:'js/[name].[chunkhash:8].chunk.js',
	},
	
	module: {
		rules:[{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['happypack/loader?id=babel']
		},{
			test: /\.scss?$/,
			use: [
				MiniCssExtractPlugin.loader,
          		'css-loader',
          		'sass-loader'
          	]
		},{
			test: /\.(woff|svg|eot|ttf)\??.*$/,
	        use: {
	          	loader: 'url-loader'
	        }
		},{
			test: /\.(png|gif|jpg)$/,
	        use: {
	          	loader: 'url-loader',
	          	options: {
	            	name: './assets/images/[name].[ext]',
	            	limit: 100
	          	}
	        }
		}]
	},
	optimization: {
	    splitChunks: {
	      	chunks: 'all',
	     	name: 'common',
	    },
	    runtimeChunk: {
	     	name: 'runtime',
	    },
	    minimizer: [
	      	new UglifyJsPlugin({
	        	cache: true,
	        	parallel: true,
	        	sourceMap: true // set to true if you want JS source maps
	      	}),
	      	new OptimizeCSSAssetsPlugin({})
	    ]
	},
	resolve: {
		alias: {
			Src: path.resolve(__dirname, './src'),
			Page: path.resolve(__dirname, './src/page'),
			Components: path.resolve(__dirname, './src/components'),	
			Util: path.resolve(__dirname, './src'),
			Redux: path.resolve(__dirname, './src/redux'),
			Images: path.resolve(__dirname, './src/assets/images'),
			//Src: path.resolve(__dirname, './src'),	
		},
		modules: [path.resolve(__dirname, 'node_modules')],
		extensions: ['.js', '.json']
	},
	devtool: 'source-map',
	plugins: [
		new HotModuleReplacementPlugin(),
		new NamedModulesPlugin(),
		/*new CleanWebpackPlugin(['build'], {
			exclude: ['polyfill.dll.js','polyfill.manifest.json','vendor.dll.js','vendor.manifest.json']
		}),*/
		//new BundleAnalyzerPlugin(),
		new HappyPack({
	      	id: 'babel',
	      	loaders: ['babel-loader?cacheDirectory'],
	    }),
		new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,    
            //chunks: ['vendor.dll', 'index'],        
            title: 'My index',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
	      	filename: "[name].[contenthash].css",
      		chunkFilename: "[id].[contenthash].css"
	    }),

	    new DllReferencePlugin({
	    	context: __dirname,
	      	manifest: require('./build/vendor.manifest.json'),
	    }),
	    new DllReferencePlugin({
	    	context: __dirname,
	      	manifest: require('./build/polyfill.manifest.json'),
	    }),
	]
}
module.exports = config;