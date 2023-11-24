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

/***/ "./src/js/perfil.js":
/*!**************************!*\
  !*** ./src/js/perfil.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/estilo.css */ \"./src/style/estilo.css\");\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));\r\n\r\n    if (usuarioGuardado) {\r\n        document.getElementById('nombre').value = usuarioGuardado.nombre;\r\n        document.getElementById('apellido').value = usuarioGuardado.apellido;\r\n        document.getElementById('correo').value = usuarioGuardado.correo;\r\n        document.getElementById('nick').value = usuarioGuardado.nick;\r\n    }\r\n\r\n    const btnModificar = document.getElementById('btnModificar');\r\n    btnModificar.addEventListener('click', function(){\r\n        const contrasenaAntigua = document.getElementById('contrasenaAntigua').value;\r\n        const contrasenaNueva = document.getElementById('contrasenaNueva').value;\r\n        const confirmacionContrasena = document.getElementById('confirmacionContrasena').value;\r\n        const mensajeErrorAntigua = document.getElementById('mensajeErrorAntigua');\r\n        const mensajeErrorNueva = document.getElementById('mensajeErrorNueva');\r\n        const mensajeErrorConfirmacion = document.getElementById('mensajeErrorConfirmacion');\r\n        const mensajeGeneral = document.getElementById('mensajeGeneral');\r\n\r\n        var contrasenaRegExp = /^[A-Za-z0-9*#$]{6,12}$/;\r\n\r\n        if (contrasenaAntigua === \"\" || contrasenaNueva === \"\" || confirmacionContrasena === \"\"){\r\n            mensajeGeneral.textContent = \"Por favor, rellena todos los campos.\";\r\n            setTimeout(function(){\r\n                mensajeGeneral.textContent = \"\";\r\n            }, 3500);\r\n        }else{\r\n            if (contrasenaAntigua === usuarioGuardado.contrasena){\r\n                if (contrasenaNueva !== contrasenaAntigua){\r\n                    if (contrasenaNueva === confirmacionContrasena){\r\n                        if (contrasenaRegExp.test(contrasenaNueva)) {\r\n                            usuarioGuardado.contrasena = contrasenaNueva;\r\n                            localStorage.setItem('usuario', JSON.stringify(usuarioGuardado));\r\n                            mensajeGeneral.textContent = \"¡Has cambiado tu contraseña exitosamente!\";\r\n                            setTimeout(function(){\r\n                                mensajeCorrecto.textContent = \"\";\r\n                            }, 3500);\r\n                        } else {\r\n                            mensajeErrorNueva.textContent = \"El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.\";\r\n                            setTimeout(function(){\r\n                                mensajeErrorNueva.textContent = \"\";\r\n                            }, 3500);\r\n                        }\r\n                    }else{\r\n                        mensajeErrorConfirmacion.textContent = 'La nueva contraseña y la confirmación no coinciden';\r\n                        setTimeout(function(){\r\n                            mensajeErrorConfirmacion.textContent = \"\";\r\n                        }, 3500);\r\n                    }\r\n                }else{\r\n                    mensajeErrorNueva.textContent = 'La contraseña nueva no puede ser igual a la contraseña antigua.';\r\n                    setTimeout(function(){\r\n                        mensajeErrorNueva.textContent = \"\";\r\n                    }, 3500);\r\n                }\r\n            }else{\r\n                mensajeErrorAntigua.textContent = 'La contraseña es incorrecta.';\r\n                setTimeout(function(){\r\n                    mensajeErrorAntigua.textContent = \"\";\r\n                }, 3500);\r\n            }\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://f1_fantasy/./src/js/perfil.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/perfil.js");
/******/ 	
/******/ })()
;