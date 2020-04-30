/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Juego.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Clases/Jugador.js":
/*!*******************************!*\
  !*** ./src/Clases/Jugador.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tablero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tablero */ \"./src/Clases/Tablero.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Jugador = /*#__PURE__*/function () {\n  function Jugador() {\n    var prof_max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n\n    _classCallCheck(this, Jugador);\n\n    this.prof_max = this.prof_max;\n    this.nodes_map = new Map();\n  }\n\n  _createClass(Jugador, [{\n    key: \"Movimiento_optimo\",\n    value: function Movimiento_optimo(tablero) {\n      var _this = this;\n\n      var maximizing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n      var prof = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      //Da error si el primer argumento de la funcion no es un tablero\n      if (tablero.constructor.name !== \"Tablero\") throw \"El primer argumento de la función Movimiento_optimo debe ser una instancia de la clase Tablero\"; //!Esto directamente lo copié, no sé para qué sirve.\n\n      var TRACE = window.trace_ttt; //Limpia la variable Nodes_Map si se hace un nuevo movimiento\n\n      if (prof == 0) this.nodes_map.clear();\n\n      if (tablero.EstadoTablero() || prof == this.prof_max) {\n        if (tablero.EstadoTablero().Ganador == \"x\") {\n          return 100 - prof;\n        } else if (tablero.EstadoTablero().Ganador == \"o\") {\n          return -100 + prof;\n        }\n\n        return 0;\n      }\n\n      if (TRACE) {\n        var p = maximizing ? \"Maximizing\" : \"Minimizing\";\n        console.log(\"%c\".concat(p, \" player's turn Depth: \").concat(depth), turn_and_available_moves);\n        console.log(\"%cAvailable Moves: \".concat(tablero.MovimientosDisponibles().join(\" \")), turn_and_available_moves);\n        if (prof == 0) tablero.TableroConsola();\n      } //En caso de que el usuario esté maximizando\n\n\n      if (maximizing) {\n        //Se inicializa del mejor al peor valor posible\n        var mejor = -100; //Hace un ciclo entre todas las celdas vacías\n\n        tablero.MovimientosDisponibles().forEach(function (index) {\n          var child = new _Tablero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tablero.Estado.slice());\n          child.Insertar(\"x\", index);\n\n          var node_value = _this.Movimiento_optimo(child, false, callback, prof + 1); //Se actualiza el valor máximo\n\n\n          mejor = Math.max(mejor, node_value); //Console Tracing Code\n\n          if (TRACE) {\n            if (prof == 0) {\n              console.log(\"%cMove \".concat(index, \" yielded a heuristic value of \").concat(node_value), parent_heuristic);\n            } else {\n              console.log(\"%cChild move \".concat(index, \" yielded a heuristic value of \").concat(node_value), child_heuristic);\n            }\n          }\n\n          if (prof == 0) {\n            var movimientos = _this.nodes_map.has(node_value) ? \"\".concat(_this.nodes_map.get(node_value), \",\").concat(index) : index;\n\n            _this.nodes_map.set(node_value, movimientos);\n          }\n        });\n\n        if (prof == 0) {\n          if (typeof this.nodes_map.get(mejor) == \"string\") {\n            var arr = this.nodes_map.get(mejor).split(\",\");\n            var rand = Math.floor(Math.random() * arr.length);\n            var ret = arr[rand];\n          } else {\n            ret = this.nodes_map.get(mejor);\n          }\n\n          if (TRACE) {\n            this.nodes_map.forEach(function (index, value) {\n              console.log(\"%cMove(s) \".concat(index, \" yielded \").concat(value), all_moves);\n            });\n            console.log(\"%cMove \".concat(ret, \" was decided as the best move\"), best_move);\n          }\n\n          callback(ret);\n          return ret;\n        }\n\n        return mejor;\n      }\n\n      if (!maximizing) {\n        //Se inicializa la variable \"Mejor\" con la mayor puntiación posible\n        var _mejor = 100; //se hace un ciclo entre todas las celdas\n\n        tablero.MovimientosDisponibles().forEach(function (index) {\n          var child = new _Tablero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tablero.Estado.slice());\n          child.Insertar(\"o\", index);\n\n          var node_value = _this.Movimiento_optimo(child, true, callback, prof + 1);\n\n          _mejor = Math.min(_mejor, node_value); //Console Tracing Code\n\n          if (TRACE) {\n            if (prof == 0) {\n              console.log(\"%cMove \".concat(index, \" yielded a heuristic value of \").concat(node_value), parent_heuristic);\n            } else {\n              console.log(\"%cChild move \".concat(index, \" yielded a heuristic value of \").concat(node_value), child_heuristic);\n            }\n          }\n\n          if (prof == 0) {\n            var movimientos = _this.nodes_map.has(node_value) ? _this.nodes_map.get(node_value) + \",\" + index : index;\n\n            _this.nodes_map.set(node_value, movimientos);\n          }\n        });\n\n        if (prof == 0) {\n          if (typeof this.nodes_map.get(_mejor) == \"string\") {\n            var arr = this.nodes_map.get(_mejor).split(\",\");\n            var rand = Math.floor(Math.random() * arr.length);\n            var ret = arr[rand];\n          } else {\n            ret = this.nodes_map.get(_mejor);\n          }\n\n          callback(ret);\n          return ret;\n        }\n\n        return _mejor;\n      }\n    }\n  }]);\n\n  return Jugador;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jugador);\n\n//# sourceURL=webpack:///./src/Clases/Jugador.js?");

/***/ }),

/***/ "./src/Clases/Tablero.js":
/*!*******************************!*\
  !*** ./src/Clases/Tablero.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tablero = /*#__PURE__*/function () {\n  //Esta es la clase Tablero, se utiliza para definir el tablero en el cual se jugarán las partidas\n  //Constructor de Tablero\n  function Tablero() {\n    var Estado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"];\n\n    _classCallCheck(this, Tablero);\n\n    this.Estado = Estado;\n  } //Esta función se utilizará para imprimir un tablero en la consola del navegador\n\n\n  _createClass(Tablero, [{\n    key: \"TableroConsola\",\n    value: function TableroConsola() {\n      var Formato = \"\";\n      this.Estado.forEach(function (cell, index) {\n        Formato += cell ? \" \".concat(cell, \"|\") : \"   |\";\n\n        if ((index + 1) % 3 == 0) {\n          Formato = Formato.slice(0, -1);\n          if (index < 8) Formato += \"\\n\\u2015\\u2015\\u2015 \\u2015\\u2015\\u2015 \\u2015\\u2015\\u2015\\n\";\n        }\n      });\n      console.log(\"%c\" + Formato, \"color:#6d4e42;font-size:16px\");\n    } //Pregunta si el tablero está vacío.\n\n  }, {\n    key: \"TableroVacio\",\n    value: function TableroVacio() {\n      return this.Estado.every(function (cell) {\n        return !cell;\n      });\n    } //Pregunta si el tablero esta lleno.\n\n  }, {\n    key: \"TableroLleno\",\n    value: function TableroLleno() {\n      return this.Estado.every(function (cell) {\n        return cell;\n      });\n    } //Introduce un nuevo símbolo, ya sea X o O en el tablero\n\n  }, {\n    key: \"Insertar\",\n    value: function Insertar(Simbolo, posicion) {\n      if (posicion > 8 || this.Estado[posicion]) return false;\n      this.Estado[posicion] = Simbolo;\n      return true;\n    }\n  }, {\n    key: \"MovimientosDisponibles\",\n    value: function MovimientosDisponibles() {\n      var Mov = [];\n      this.Estado.forEach(function (cell, index) {\n        if (!cell) Mov.push(index);\n      });\n      return Mov;\n    }\n  }, {\n    key: \"EstadoTablero\",\n    value: function EstadoTablero() {\n      //Si el tablero está vacío retorna Falso\n      if (this.TableroVacio()) return false; //Se verificará si se ha ganado horizontalmente\n\n      if (this.Estado[0] == this.Estado[1] && this.Estado[0] == this.Estado[2] && this.Estado[0]) {\n        return {\n          Ganador: this.Estado[0],\n          dirección: \"H\",\n          Columna: 1\n        };\n      }\n\n      if (this.Estado[3] == this.Estado[4] && this.Estado[3] == this.Estado[5] && this.Estado[3]) {\n        return {\n          Ganador: this.Estado[3],\n          dirección: \"H\",\n          Columna: 2\n        };\n      }\n\n      if (this.Estado[6] == this.Estado[7] && this.Estado[6] == this.Estado[8] && this.Estado[6]) {\n        return {\n          Ganador: this.Estado[3],\n          dirección: \"H\",\n          Columna: 3\n        };\n      } //Se verificará si se ha ganado verticalemente\n\n\n      if (this.Estado[0] == this.Estado[3] && this.Estado[0] == this.Estado[6] && this.Estado[0]) {\n        return {\n          Ganador: this.Estado[0],\n          dirección: \"V\",\n          Columna: 1\n        };\n      }\n\n      if (this.Estado[1] == this.Estado[4] && this.Estado[1] == this.Estado[7] && this.Estado[1]) {\n        return {\n          Ganador: this.Estado[3],\n          dirección: \"V\",\n          Columna: 2\n        };\n      }\n\n      if (this.Estado[2] == this.Estado[4] && this.Estado[5] == this.Estado[8] && this.Estado[2]) {\n        return {\n          Ganador: this.Estado[3],\n          dirección: \"V\",\n          Columna: 3\n        };\n      } //Se verificará si se ha ganado de manera diagonal\n\n\n      if (this.Estado[0] == this.Estado[4] && this.Estado[0] == this.Estado[8] && this.Estado[0]) {\n        return {\n          Ganador: this.Estado[0],\n          dirección: \"D\",\n          Columna: 1\n        };\n      }\n\n      if (this.Estado[2] == this.Estado[4] && this.Estado[2] == this.Estado[6] && this.Estado[3]) {\n        return {\n          Ganador: this.Estado[3],\n          dirección: \"H\",\n          Columna: 2\n        };\n      } //En caso de que no haya ganador, pero el tablero esté lleno, será un empate.\n\n\n      if (this.TableroLleno()) {\n        return {\n          Ganador: \"Empate\"\n        };\n      }\n\n      return false;\n    }\n  }]);\n\n  return Tablero;\n}(); //Se exporta la clase para ser utilizada en otra parte.\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tablero);\n\n//# sourceURL=webpack:///./src/Clases/Tablero.js?");

/***/ }),

/***/ "./src/Juego.js":
/*!**********************!*\
  !*** ./src/Juego.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Clases_Tablero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clases/Tablero */ \"./src/Clases/Tablero.js\");\n/* harmony import */ var _Clases_Jugador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clases/Jugador */ \"./src/Clases/Jugador.js\");\n //*Se importan las distintas clases necesarias para el funcionamiento del juego.\n\n\nalert(\"hola, esto es una prueba\");\nvar tablero = new _Clases_Tablero__WEBPACK_IMPORTED_MODULE_0__[\"default\"](['x', '', 'o', 'x', '', 'x', 'o', '', 'o']);\ntablero.TableroConsola();\nvar j = new _Clases_Jugador__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconsole.log(j.Movimiento_optimo(tablero));\nconsole.log(j.nodes_map);\nconsole.log(tablero.EstadoTablero());\n\n//# sourceURL=webpack:///./src/Juego.js?");

/***/ })

/******/ });