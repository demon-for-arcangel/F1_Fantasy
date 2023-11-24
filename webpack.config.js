const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    plugins:[
      new MiniCssExtractPlugin({
        filename: './src/style/estilo.css',
        chunkFilename: '[id].css',
      }),

      new MiniCssExtractPlugin({
        filename: './src/Skeleton/css/normalize.css',
        chunkFilename: '[id].css',
      }),

      new MiniCssExtractPlugin({
        filename: './src/Skeleton/css/skeleton.css',
        chunkFilename: '[id].css',
      }),
      
      new HtmlWebpackPlugin({
        template: './src/html/index.html',
        filename: 'index.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/registro.html',
        filename: 'registro.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/inicio.html',
        filename: 'inicio.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/clasificacion.html',
        filename: 'clasificacion.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/tusPilotos.html',
        filename: 'tusPilotos.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/pilotos.html',
        filename: 'pilotos.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/administracion.html',
        filename: 'administracion.html',
      }),

      new HtmlWebpackPlugin({
        template: './src/html/perfil.html',
        filename: 'perfil.html',
      }),
    ]
};
