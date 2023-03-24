const path = require('path')


//plugins y minificadores de css y sccs/sass
//para reducir el tamaño de las hojas de estilo del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

//configuracion del puerto
const port = process.env.PORT || 3000;

//exportar la configuracion de webPack
module.exports =  {
	entry: './src/index.jsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.[hash].js',
		publicPath: '/'
	},
	context: path.resolve(__dirname),
	devServer:{
		static: {
			directory: path.join(__dirname, '/dist'),
		},
		port,
		compress: true,
		historyApiFallback: true
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
		   {
		   	 enforce: 'pre',
		   	 test: /(\.js|\.jsx)$/,
		   	 exclude: /node_modules/,
		   	 use: [
		   	    'source-map-loader',
		   	 ]
		   },
		   {
		   	 test: /(\.js|\.jsx)$/,
		   	 exclude: /node_modules/,
		   	 use: {
		   	 	loader: 'babel-loader',
		   	 	options: {
		   	 		presets: [
			   	 	   '@babel/env',
			   	 	   '@babel/react'
			   	 	],
		   	 	},
		   	 },
		   },
		   {
		   	 test: /(\.css|\.scss)$/,
		   	 use: [
                {loader: MiniCssExtractPlugin.loader},
                {loader: 'css-loader'},
                {loader: 'sass-loader'},
		   	 ]
		   },
		   {
		   	 test: /(\.png|\.jpe?g|\.gif)$/,
		   	 use: [
		   	    {
		   	    	loader: 'file-loader'
		   	    }
		   	 ]
		   }
		]
	},
	plugins : [
	   new HtmlWebpackPlugin(
			{
				template: './public/index.html'
			}
		),
	    new MiniCssExtractPlugin(
	    	{
	    		filename: './css/styles.css'
	    	}
	    ),
	    new SourceMapDevToolPlugin(
	    	{
	    		filename: '[file].map'
	    	}
	    ),
	    new ESLintPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
		modules: [
		    'node_modules'
		]
	}
}