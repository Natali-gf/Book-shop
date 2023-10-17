
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

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
			directory: path.join(__dirname, "dist"),
		},
		// contentBase: path.resolve(__dirname, './dist'),
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
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(ttf|woff|woff2|eot|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
			// new ImageMinimizerPlugin({
			// 	minimizer: {
			// 		implementation: ImageMinimizerPlugin.imageminMinify,
			// 		options: {
			// 			plugins: [
			// 				["gifsicle", { interlaced: true }],
			// 				["jpegtran", { progressive: true }],
			// 				["optipng", { optimizationLevel: 5 }],
			// 				["svgo", {
			// 					plugins: [{
			// 						name: "preset-default",
			// 						params: {
			// 							overrides: {
			// 								removeViewBox: false,
			// 								addAttributesToSVGElement: {
			// 									params: {
			// 										attributes: [
			// 											{ xmlns: "http://www.w3.org/2000/svg" },
			// 										],
			// 									},
			// 								},
			// 							},
			// 						},
			// 					}],
			// 				}],
			// 			],
			// 		},
			// 	},
			// }),
		],
	},
	resolve: {
		extensions: [ '.ts', '.js', '.scss' ],
	},
    output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
    },
}