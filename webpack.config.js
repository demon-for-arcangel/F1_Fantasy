const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './src/app.js',
      registro: './src/registro.js',
      tusPilotos: './src/tusPilotos.js',
      pilotos: './src/pilotos.js',
      perfil: './src/perfil.js',
      objetos: './src/objetos.js',
      inicio: './src/inicio.js',
      clasificacion: './src/clasificacion.js',
      administracion: './src/administracion.js',
      cargarElementos: './src/cargarElementos.js'
    },
    output: {
        filename: 'bundle,js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/registro.html',
        filename: 'registro.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/inicio.html',
        filename: 'inicio.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/clasificacion.html',
        filename: 'clasificacion.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/tusPilotos.html',
        filename: 'tusPilotos.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/pilotos.html',
        filename: 'pilotos.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/administracion.html',
        filename: 'administracion.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/perfil.html',
        filename: 'perfil.html',
      }),
    ]
};
