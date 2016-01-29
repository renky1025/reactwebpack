var path = require('path');

module.exports = {
    entry: {
        catalog: ['./catalog/plugin.js'],
    },
    output: {
        path: './tmp',
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
              {
                presets:['react']
              }
          },
            {
              test: /\.less$/,
              loader: 'style!css!less',
            },
        ],
    },
    devtool: 'source-map',
    plugins: [],
};
