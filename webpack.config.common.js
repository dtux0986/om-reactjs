const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: [
		'./src/App.js'
	],

	output: {
		filename: "[name].index.js",
		path: path.resolve(__dirname, "build")
	},

	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					emitWarning: true,
					configFile: "./.eslintrc.js"
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images/'
						}
					}
				]
			}
		]
	},

	plugins: [

		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Cactus Gradient',
			template: "./src/index.html",
		}),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
};