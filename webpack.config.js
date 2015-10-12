var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './js/app.js'
    },
    output: {
        filename: '[name].js?[hash]-[chunkhash]',
        chunkFilename: '[name].js?[hash]-[chunkhash]',
        path: __dirname + '/assets',
        publicPath: '/assets/'
    },
    //resolve: {
    //    modulesDirectories: ['node_modules']
    //},
    module: {
        loaders: [
			{
			    test: /\.css$/, loader: ExtractTextPlugin.extract(
                  'style-loader',
                  'css-loader?sourceMap',
                  {
                      publicPath: '../'
                  }
              )
			},
			{ test: /\.png$/, loader: 'file-loader' }
        ]
    },
    devtool: 'sourcemap',
    plugins: [
		new ExtractTextPlugin('css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', {
		    disable: false,
		    allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
};