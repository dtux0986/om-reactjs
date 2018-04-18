const path = require("path");
const webpack = require("webpack");

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

	mode: "production",

	output: {
		filename: "[name].index.js",
		path: path.resolve(__dirname, "build")
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,

				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"],
					fallback: "style-loader"
				}),
			}
		],
	},

	plugins: [

		new ExtractTextPlugin({
			filename: "css/styles.css"
		}),

		new UglifyJSPlugin({
			sourceMap: true
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});