/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cargarElementos.js":
/*!***********************************!*\
  !*** ./src/js/cargarElementos.js ***!
  \***********************************/
/***/ (() => {

eval("function cargarCabecera() {\r\n    document.getElementById(\"cabecera\").innerHTML = \r\n    `\r\n        <header>\r\n            <img src=\"../imagenes/f1_logo.svg\">\r\n        </header>\r\n    `;\r\n}\r\n\r\nfunction cargarCabecera2() {\r\n    document.getElementById(\"cabecera2\").innerHTML =\r\n        `\r\n        <header class = \"cabeceraOrientacion\">\r\n            <a href=\"inicio.html\" class = \"logo\"><img src=\"../imagenes/f1_logo.svg\"></a>\r\n            <a href=\"clasificacion.html\"><p>Clasificación</p></a>\r\n            <a href=\"tuspilotos.html\"><p>Tus pilotos</p></a>\r\n            <a href=\"pilotos.html\"><p>Pilotos</p></a>\r\n            <a href=\"administracion.html\"><p>Administración</p></a>\r\n            <a href=\"perfil.html\" class = \"iconoPerfil\"><img src = \"../imagenes/iconos/icono_perfil.png\"></a>\r\n            <button id = \"btnOrientacion\" onclick = \"cambiarOrientacion()\">Cambiar Orientación</button>\r\n        </header>\r\n    `;\r\n\r\n}\r\n\r\nfunction cargarPiePagina(){\r\n    document.getElementById(\"piePagina\").innerHTML = \r\n    `\r\n    <footer>\r\n        <img src = \"../imagenes/f1_logo.svg\">\r\n        <p>Política de Privacidad</p>\r\n        <p>Subcripción</p>\r\n        <p>Terminos de Usuario</p>\r\n        <p>Cookies</p>\r\n        <p>© 2023 - 2024 Marina and Ismael</p>\r\n    </footer>\r\n    `;\r\n}\r\n\r\n\r\nfunction cambiarOrientacion() {\r\n    const cabecera = document.querySelector('.cabeceraOrientacion');\r\n    cabecera.classList.toggle('orientacion-vertical');\r\n}\n\n//# sourceURL=webpack://f1_fantasy/./src/js/cargarElementos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/cargarElementos.js"]();
/******/ 	
/******/ })()
;