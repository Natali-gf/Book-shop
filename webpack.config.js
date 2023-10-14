
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
	// mode: 'production',
	mode,
	// devtool: 'inline-source-map',
	// devtool: 'source-map',
	devtool,
	plugins: [
		new MiniCssExtractPlugin(),
		new ESLintPlugin({fix: true}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		// contentBase: path.resolve(__dirname, './build'),
		compress: true,
		port: 8080,
		hot: true,
		open: true,
	},
	// stats: 'none',
	// stats: {
	// 	children: false,
	// 	modulesSpace: 0,
	// },
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,//вместо "style-loader" , чтобы стили подключались отдельным файлом
					// "style-loader",
					"css-loader",
					// "sass-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require.resolve("sass"),
						},
					},
				],
			},
		],
	},
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
    output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
    },
}