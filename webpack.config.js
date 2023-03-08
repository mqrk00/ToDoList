const path = require('path');

module.exports = {

  entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  mode: "production",
  devtool: 'inline-source-map',
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

}; 