module.exports = {
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: './public/[name].js'
  },
  module: {    
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};