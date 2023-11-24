/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/estilo.css":
/*!******************************!*\
  !*** ./src/style/estilo.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://f1_fantasy/./src/style/estilo.css?");

/***/ }),

/***/ "./src/js/cargarElementos.js":
/*!***********************************!*\
  !*** ./src/js/cargarElementos.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/estilo.css */ \"./src/style/estilo.css\");\n\r\n\r\nfunction cargarCabecera() {\r\n    document.getElementById(\"cabecera\").innerHTML =\r\n    `\r\n        <header>\r\n            <img src=\"../imagenes/f1_logo.svg\">\r\n        </header>\r\n    `;\r\n}\r\n\r\nfunction cargarCabecera2() {\r\n    document.getElementById(\"cabecera2\").innerHTML =\r\n        `\r\n        <header class = \"cabeceraOrientacion\">\r\n            <a href=\"inicio.html\" class = \"logo\"><img src=\"../imagenes/f1_logo.svg\"></a>\r\n            <a href=\"clasificacion.html\"><p>Clasificación</p></a>\r\n            <a href=\"tuspilotos.html\"><p>Tus pilotos</p></a>\r\n            <a href=\"pilotos.html\"><p>Pilotos</p></a>\r\n            <a href=\"administracion.html\"><p>Administración</p></a>\r\n            <a href=\"perfil.html\" class = \"iconoPerfil\"><img src = \"../imagenes/iconos/icono_perfil.png\"></a>\r\n            <button id = \"btnOrientacion\" onclick = \"cambiarOrientacion()\">Cambiar Orientación</button>\r\n        </header>\r\n    `;\r\n\r\n}\r\n\r\nfunction cargarPiePagina(){\r\n    document.getElementById(\"piePagina\").innerHTML =\r\n    `\r\n    <footer>\r\n        <img src = \"../imagenes/f1_logo.svg\">\r\n        <p>Política de Privacidad</p>\r\n        <p>Subcripción</p>\r\n        <p>Terminos de Usuario</p>\r\n        <p>Cookies</p>\r\n        <p>© 2023 - 2024 Marina and Ismael</p>\r\n    </footer>\r\n    `;\r\n}\r\n\r\n\r\nfunction cambiarOrientacion() {\r\n    const cabecera = document.querySelector('.cabeceraOrientacion');\r\n    cabecera.classList.toggle('orientacion-vertical');\r\n}\r\n\n\n//# sourceURL=webpack://f1_fantasy/./src/js/cargarElementos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/cargarElementos.js");
/******/ 	
/******/ })()
;