import React from 'react';

import webpack from 'webpack';
import express from 'express';

// import App from '../App';

import path from "path";

import config from '../../webpack.config.server.js';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import ReactDOMServer from 'react-dom/server';

const app = express();

const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
// 			noInfo: true,
// 			publicPath: config.output.publicPath
// 		}
// ));
//
// app.use(webpackHotMiddleware(compiler));

app.use(function (req, res, next) {

	const html = ReactDOMServer.renderToString(
			<App/>
	);

	res.send(html);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});

