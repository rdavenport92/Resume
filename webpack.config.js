const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: prod ? 'production' : 'development',
	entry: './src/index.tsx',
	output: {
		path: __dirname + '/build/'
	},
	resolve: {
		plugins: [new TsConfigPathsPlugin()],
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json']
				},
				use: 'ts-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: prod ? undefined : 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		new MiniCssExtractPlugin()
	]
};
