const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public/dist')
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
			{ test: /\.scss$/, use: [ { loader: "style-loader" }, { loader: "css-loader" }, 
									  { loader: "sass-loader" } ] },
		]
	}
}