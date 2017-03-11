var webpackDevConfig = require('./webpack.config.dev');
var webpackProdConfig = require('./webpack.config.prod');

module.exports = process.env.EDITOR_ENV === "development" ? webpackDevConfig : webpackProdConfig;