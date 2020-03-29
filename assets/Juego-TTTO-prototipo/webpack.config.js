var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: {
		bundle: './src/Juego.js',
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      { 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader' 
      },
        {test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader','style-loader', 'sass-loader'
        ],
      },
    ],
  },
};