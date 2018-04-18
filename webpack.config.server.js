const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	mode: "development",

	entry: [
		path.resolve(__dirname, 'src/App.js')
	],

	output: {
		filename: '[name].index.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},

	target: 'node',

	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				],
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

		/* Build the Index HTML  */
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Cactus Gradient',
			template: "./src/index.html",
		}),

		new webpack.NamedModulesPlugin(),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
};
