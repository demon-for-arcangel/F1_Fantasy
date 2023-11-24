const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './src/js/app.js',
      registro: './src/js/registro.js',
      tusPilotos: './src/js/tusPilotos.js',
      pilotos: './src/js/pilotos.js',
      perfil: './src/js/perfil.js',
      objetos: './src/js/objetos.js',
      inicio: './src/js/inicio.js',
      clasificacion: './src/js/clasificacion.js',
      administracion: './src/js/administracion.js',
      cargarElementos: './src/js/cargarElementos.js'
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
        devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8888,
        historyApiFallback: true, // Agrega esta línea si estás utilizando enrutamiento de una sola página (SPA)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins:[
      new HtmlWebpackPlugin({
        template: './src/html/index.html',
        filename: 'index.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/registro.html',
        filename: 'registro.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/inicio.html',
        filename: 'inicio.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/clasificacion.html',
        filename: 'clasificacion.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/tusPilotos.html',
        filename: 'tusPilotos.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/pilotos.html',
        filename: 'pilotos.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/administracion.html',
        filename: 'administracion.html',
        chunks: ['estilo.css'],
      }),

      new HtmlWebpackPlugin({
        template: './src/html/perfil.html',
        filename: 'perfil.html',
        chunks: ['estilo.css'],
      }),
    ]
};
