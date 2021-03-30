'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			// {
			// 	test: /\.css$/,
			// 	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			// },
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			// {
			// 	test: /\.(png|jpg)$/,
			// 	use: [{ loader: 'url-loader' }]
			// },
			// {
			// 	test: /\.(png|jpe?g|svg|gif)$/i,
			// 	use: [{ loader: 'file-loader' }]
			// }
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	// watch: true,
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon.ico'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
		historyApiFallback: true,
		proxy: {
			'/api': 'http://localhost:5000'
		}
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	}
};
