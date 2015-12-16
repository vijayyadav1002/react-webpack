module.exports = {
  entry: {
    main: ['./script1.js', './script2.js']
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  }
};