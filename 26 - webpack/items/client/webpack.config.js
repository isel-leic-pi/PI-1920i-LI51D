const HtmlWebpackPlugin = 
	require('html-webpack-plugin');

const path = require('path');	
	
module.exports = {
	mode: 'development',
	
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../server','static')
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'ISEL - LEIC - PI'
		})
	],
	
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				use: [ 'file-loader' ]
			}
		]
	}
}
