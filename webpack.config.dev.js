const path = require("path");
const webpack = require("webpack");

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {

	mode: "development",

	devtool: 'inline-source-map',

	devServer: {
		contentBase: './build'
	},

	output: {
		filename: "[name].index.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/"
	},

	module: {
		rules: [
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
			}
		]
	},

	plugins: [
			
		new webpack.NamedModulesPlugin(),

		new webpack.HotModuleReplacementPlugin(),
	],
});
