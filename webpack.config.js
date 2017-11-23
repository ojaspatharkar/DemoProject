var config = {
  entry: {
  app : './app.js'
  },

  output:{
    filename: '[name].bundle.js',
    path: __dirname,
    publicPath: __dirname,
    crossOriginLoading: 'anonymous',
  },

  devServer:{
    inline: true,
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  },

  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude : /node_modules/,
        loader : 'babel-loader',

        query:{
          presets : ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }

}

module.exports = config;
