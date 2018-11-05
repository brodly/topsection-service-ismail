var path = require('path');

module.exports = { 
  entry: './src/index.js', 
  output:{ 
    path: path.join(__dirname, '../public'), 
    filename: 'bundle.js' 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: "babel-loader" 
        } 
      } 
    ] 
  }
}; 
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/public');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR,
//         loader : 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// };
