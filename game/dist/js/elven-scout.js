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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  function AI() {
    _classCallCheck(this, AI);

    this.body = null;
  }

  _createClass(AI, [{
    key: "control",
    value: function control(body) {
      this.body = body;
    }
  }, {
    key: "update",
    value: function update(time) {}
  }]);

  return AI;
}();

/***/ }),

/***/ "./src/ais/dummy.js":
/*!**************************!*\
  !*** ./src/ais/dummy.js ***!
  \**************************/
/*! exports provided: Dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dummy", function() { return Dummy; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Dummy =
/*#__PURE__*/
function (_AI) {
  _inherits(Dummy, _AI);

  function Dummy() {
    var _this;

    _classCallCheck(this, Dummy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this));
    _this.duration = 1000;
    _this.direction = 'down';
    _this.lastTime = 0;
    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      this.direction = 'down,up,left,right'.split(',')[Math.floor(Math.random() * 4)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (time - this.lastTime > this.duration) {
        this.changeDirection();
        this.lastTime = time;
      }

      this.body.walk(this.direction);

      _get(_getPrototypeOf(Dummy.prototype), "update", this).call(this, time);
    }
  }]);

  return Dummy;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/endScript.js":
/*!******************************!*\
  !*** ./src/ais/endScript.js ***!
  \******************************/
/*! exports provided: EndScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndScript", function() { return EndScript; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var EndScript =
/*#__PURE__*/
function (_AI) {
  _inherits(EndScript, _AI);

  function EndScript() {
    var _this;

    _classCallCheck(this, EndScript);

    // Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(EndScript).call(this));
    _this.direction = 'left';
    _this.eventTime = 1500;
    _this.lastTime = 0;
    _this.eventStart = false;
    return _this;
  }

  _createClass(EndScript, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      this.eventTime -= time - this.lastTime;

      if (!this.eventStart) {
        // Если событие ешё не началось
        if (this.eventTime < 0) {
          this.eventStart = true; // Врубаем событие

          this.body.hit(this.direction); // Событие - орк бьёт
        }

        this.body.walk(this.direction);
      } else {
        this.body.stand(this.direction);
      }

      this.lastTime = time;

      _get(_getPrototypeOf(EndScript.prototype), "update", this).call(this, time);
    }
  }]);

  return EndScript;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/isAgressive.js":
/*!********************************!*\
  !*** ./src/ais/isAgressive.js ***!
  \********************************/
/*! exports provided: isAgressive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAgressive", function() { return isAgressive; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isAgressive =
/*#__PURE__*/
function () {
  function isAgressive() {
    _classCallCheck(this, isAgressive);
  }

  _createClass(isAgressive, null, [{
    key: "becomeAgressive",
    value: function becomeAgressive() {
      this.agressive = true;
    }
  }, {
    key: "becomePeaceful",
    value: function becomePeaceful() {
      this.agressive = false;
    }
  }, {
    key: "isOrcAgressive",
    value: function isOrcAgressive() {
      return this.agressive;
    }
  }]);

  return isAgressive;
}();

/***/ }),

/***/ "./src/ais/peaceful.js":
/*!*****************************!*\
  !*** ./src/ais/peaceful.js ***!
  \*****************************/
/*! exports provided: Peaceful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peaceful", function() { return Peaceful; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
/* harmony import */ var _isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isAgressive */ "./src/ais/isAgressive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Peaceful =
/*#__PURE__*/
function (_AI) {
  _inherits(Peaceful, _AI);

  function Peaceful(player) {
    var _this;

    _classCallCheck(this, Peaceful);

    // Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Peaceful).call(this));
    _this.duration = 1050; // Меняет направление каждые 1000 мс

    _this.direction = 'left';
    _this.lastTimeDumb = 0; // Когда в последний раз менял направление

    _this.lastTime = 0;
    _this.player = player; // Передаём игрока, чтобы орк мог следить за ним и атаковать его

    _this.stuck = false; // Если true, орк уперся в стену

    _this.changeWayInit = 500; // Если уперся в препятствие, это время он двигается в любом другом направлении в надежде обойти препятствие

    _this.changeWay = _this.changeWayInit;
    _this.oldX = 0; // В эти переменные будем писать старые координаты. Если новые координаты равны старым, значит орк уперся в препятствие

    _this.oldY = 0;
    _this.lastTimeAgressive = 0;
    _this.durationAgressive = 500; // Насколько часто меняют направление агрессивные орки

    _this.timeOfMarch = 4560; // Когда орк только появился, это время он просто движется в одном направлении. После - начинает действовать самостоятельно

    return _this;
  }

  _createClass(Peaceful, [{
    key: "changeDirection",
    value: function changeDirection() {
      // Один из блоков принятия решений
      this.direction = 'up,left'.split(',')[Math.floor(Math.random() * 2)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeOfMarch > 0) {
        // Орк ещё марширует, т.е. заходит на локацию
        this.timeOfMarch -= time - this.lastTime;
      } else if (this.stuck) {
        // Если орк застрял, дальнейших проверок else if не будет
        this.changeWay -= time - this.lastTime;

        if (this.changeWay < 0) {
          this.changeWay = this.changeWayInit;
          this.stuck = false;
        }
      } else if (_isAgressive__WEBPACK_IMPORTED_MODULE_1__["isAgressive"].isOrcAgressive()) {
        // Проверка орка на агрессию
        this.agressiveBehaviour(time);
        this.isStuck();
      } else {
        this.dumbBehaviour(time);
        this.isStuck();
      }

      this.lastTime = time;
      this.body.walk(this.direction);

      _get(_getPrototypeOf(Peaceful.prototype), "update", this).call(this, time);
    }
  }, {
    key: "dumbBehaviour",
    value: function dumbBehaviour(time) {
      if (time - this.lastTimeDumb > this.duration) {
        this.changeDirection();
        this.lastTimeDumb = time;
      }
    }
  }, {
    key: "agressiveBehaviour",
    value: function agressiveBehaviour(time) {
      var correction = 10; // орк бьёт на расстоянии 5, ему не нужно быть вплотную к игроку (иначе орк бьёт только при столкновении с игроком, а орки избегают столкновений)

      if (this.body.x + this.body.collisionShape.x - correction < this.player.x + this.player.collisionShape.x + this.player.collisionShape.width && this.body.x + this.body.collisionShape.x + this.body.collisionShape.width + correction > this.player.x + this.player.collisionShape.x && this.body.y + this.body.collisionShape.y - correction < this.player.y + this.player.collisionShape.y + this.player.collisionShape.height && this.body.y + this.body.collisionShape.y + this.body.collisionShape.height + correction > this.player.y + this.player.collisionShape.y) {
        this.attack();
      } // }


      if (time - this.lastTimeAgressive > this.durationAgressive) {
        this.changeAgressiveDirection();
        this.lastTimeAgressive = time;
      }
    }
  }, {
    key: "changeAgressiveDirection",
    value: function changeAgressiveDirection() {
      if (this.body.x >= this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'down';
        }
      }

      if (this.body.x >= this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'down';
        }
      }
    }
  }, {
    key: "isStuck",
    value: function isStuck() {
      // Проверка, возможно орк уперся в препятствие
      if (this.body.x == this.oldX && this.body.y == this.oldY) {
        this.stuck = true;

        if (this.direction == 'up' || this.direction == 'down') {
          if (Math.random() > 0.5) {
            this.direction = 'right';
          } else {
            this.direction = 'left';
          }

          return;
        }

        if (this.direction == 'right' || this.direction == 'left') {
          if (Math.random() > 0.5) {
            this.direction = 'up';
          } else {
            this.direction = 'down';
          }

          return;
        }
      }

      this.oldX = this.body.x;
      this.oldY = this.body.y;
    }
  }, {
    key: "attack",
    value: function attack() {
      this.body.hit();
      this.player.getHit();
    }
  }]);

  return Peaceful;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0; // время от последнего фрейма анимации

    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    /* Для отслеживания последнего кадра. Например, после последнего кадра анимации стрельбы, персонаж перестаёт стрелять
    Эта переменная задается в классе Body. Например: this.view.onEnd = ()=>this.isShooting = false; */

    _this.onEnd = null;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      // Старт анимации с самого начала
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        // Если это последний кадр, то...
        if (this.onEnd) {
          // ...если задана концовка, запускаем. Например: this.view.onEnd = ()=>this.isShooting = false;
          this.onEnd();
        }

        if (this.repeat) {
          // ... если задан повтор, повторяем
          this.setFrame(0);
          return;
        }

        this.stop(); // ... иначе - стоп анимация

        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        // Эта проверка нужна только для первого вызова update(), чтобы инициализировать this.lastTime
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        // Разница по времени между прошлым и текущим кадром: (11-2)>10, (12-2)>10, (13-2)>10 - здесь прошло 10мс, а speed в этом примере как раз равен 10мс, значит меняем кадр
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/audio-playback/audios.js":
/*!**************************************!*\
  !*** ./src/audio-playback/audios.js ***!
  \**************************************/
/*! exports provided: arrowPlayAudio, swordPlayAudio, deathOrcPlayAudio, gameOverPlayAudio, gameWinPlayAudio, gamePlayAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowPlayAudio", function() { return arrowPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swordPlayAudio", function() { return swordPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deathOrcPlayAudio", function() { return deathOrcPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverPlayAudio", function() { return gameOverPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameWinPlayAudio", function() { return gameWinPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamePlayAudio", function() { return gamePlayAudio; });
var gameAudio = new Audio('audio/game.mp3');
var gameAudioWin = new Audio('audio/win.mp3');
function arrowPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/arrow.mp3';
  return sound.play();
}
function swordPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/sword.mp3';
  sound.volume = 0.2;
  return sound.play();
}
function deathOrcPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/death-orc.mp3';
  sound.volume = 0.1;
  return sound.play();
}
function gameOverPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/game-over.mp3';
  sound.volume = 0.4;
  return sound.play();
}
function gameWinPlayAudio(state) {
  gameAudioWin.volume = 0.1;

  if (state == true) {
    gameAudioWin.play();
  } else {
    gameAudioWin.pause();
  }
}
function gamePlayAudio(state) {
  gameAudio.volume = 0.1;
  gameAudio.loop = true;

  if (state == true) {
    gameAudio.play();
  } else {
    gameAudio.pause();
  }
}

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Основа всех персонажей


var Body =
/*#__PURE__*/
function () {
  // Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = -100; // Положение объекта

    this.y = -100;
    this.speed = speed; // Скорость перемещения

    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]('left', 0); // Направление перемещения

    this.lastTime = 0; // Время последнего кадра

    this.animations = {}; // Контейнер для хранения анимаций {walk_down: .., walk_up: .. и т.д. }
    // Форма, которая будет использоваться для коллизии. Она начинается не от левого верхнего угла спрайта, а от x: 18, y: 15

    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
    this.isShooting = false;
    this.isHitting = false; // Загружаем необходмые анимации для данного персонажа

    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    'walk_down,walk_up,walk_left,walk_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name); // В итоге this.animations = {walk_down: .., walk_up: .. и т.д. }
    });
    'shoot_down,shoot_up,shoot_left,shoot_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    'cut_down,cut_up,cut_left,cut_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    ['death'].forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    this.stand('left');
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot(arrow) {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations["shoot_".concat(this.velocity.direction)];

        this.view.onEnd = function () {
          _this2.isShooting = false;
          arrow.fly(_this2.x, _this2.y, _this2.velocity.direction);
        };

        this.view.run(); // Запустить анимацию
      }
    }
  }, {
    key: "hit",
    value: function hit() {
      var _this3 = this;

      if (!this.isHitting) {
        this.isHitting = true;
        this.view = this.animations["cut_".concat(this.velocity.direction)];

        this.view.onEnd = function () {
          _this3.isHitting = false;
        };

        this.view.run(); // Запустить анимацию
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting || this.isHitting) return; // Во время стрельбы нельзя идти. НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_".concat(direction)]; // Здесь хранится текущая анимация.   this.view хранит объект CharacterSheet

      this.view.run(); // Запустить анимацию
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      // Стоять
      if (this.isShooting || this.isHitting) return; // НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_".concat(direction)];
      this.view.stop();
    }
  }, {
    key: "death",
    value: function death() {
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]('down', 0); // Останавливаем персонажа

      this.view = this.animations.death; // this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (this.isShooting || this.isHitting) {
        // Во время стрельбы и ударов нельзя идти
        this.velocity.move(this, 0);
      } else {
        this.velocity.move(this, time - this.lastTime);
      }

      this.lastTime = time; // Координаты для анимации; this.view хранит объект CharacterSheet

      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); // В переменной this.view хранится this.animations = {}. Метод trunc отбрасывет дробную часть

      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 50000 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 50000 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 200 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.obj = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.obj = obj;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.watchObject) {
        if (this.obj.x > this.x + this.width - this.scrollEdge) {
          this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge);
        }

        if (this.obj.x < this.x + this.scrollEdge) {
          this.x = Math.max(0, this.obj.x - this.scrollEdge);
        }

        if (this.obj.y > this.y + this.height - this.scrollEdge) {
          this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
        }

        if (this.obj.y < this.y + this.scrollEdge) {
          this.y = Math.max(0, this.obj.y - this.scrollEdge);
        }
      }
    }
  }, {
    key: "specialPosition",
    value: function specialPosition() {
      this.x = this.width;
      this.y = this.height;
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-from-array */ "./src/remove-from-array.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Collider =
/*#__PURE__*/
function () {
  function Collider() {
    _classCallCheck(this, Collider);

    this.staticShapes = []; // Массив статичных объектов. Мы используем следующие свойства объекта: {x, y, width, height}

    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        if (layer.type == 'objectgroup')
          /* objects это массив с набором объектов [{...},{...}, и т.д.]0
                    Думаю, конструкция (...layer.objects) создает массив  this.staticShapes = [{...},{...}, и т.д.] */
          {
            var _this$staticShapes;

            (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
          }
      }); // Добавим ограничение по краям карты. За карту нельзя выйти

      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1300,
        height: 1
      });
      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1,
        height: 1300
      }); // this.staticShapes.push({x:1280,y:0,width:1,height:1300});

      this.staticShapes.push({
        x: 1280,
        y: 0,
        width: 1300,
        height: 1
      });
    }
  }, {
    key: "addKinematicBody",
    value: function addKinematicBody(body) {
      this.bodies.push({
        x: body.x,
        // старые координаты персонажа
        y: body.y,
        obj: body // сохраняем персонажа с новыми координатами, будем сравнивать новые и старые координаты персонажа

      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkCollision(time); // рассчёт коллизии персонажей со статичными объектами и персонажей между собой
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(time) {
      var _this2 = this;

      var _loop = function _loop(i) {
        var body = _this2.bodies[i];
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y;

        if (x > oldX) {
          // moving right
          _this2.staticShapes.forEach(function (shape) {
            if ( // Если старые координаты находятся перед объектом***
            oldX // координата персонажа
            - 1 // Перемещение между кадрами занимает дробную часть пикселя, чтобы код работал округлим прошлую точку на 1 пиксель
            + body.obj.collisionShape.x // координата формы коллизии внутри персонажа (началом отсчёта служит левый верхний угол персонажа)
            + body.obj.collisionShape.width < shape.x && //* **и новые координаты находятся после объекта, значит персонаж столкнулся с препятствием
            x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x // Персонаж должен касаться препятствия
            && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              // Берем ближайший объект, где остановим персонажа
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) // (наверное можно было просто оставить один shape.x)
              - body.obj.collisionShape.x - body.obj.collisionShape.width;

              _this2.checkInteractiveWithStatic(body, i); // Проверяем интерактив со статичными объектами (например после попадания в дерево, стрела не движется)

            }
          }); // Коллизия персонажей между собой


          for (var j = 0; j < _this2.bodies.length; j++) {
            var shape = _this2.bodies[j];

            if (body != shape) {
              // Если это не тот же самый объект
              if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.obj.x + shape.obj.collisionShape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.obj.x + shape.obj.collisionShape.x && y + body.obj.collisionShape.y < shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.obj.y + shape.obj.collisionShape.y) {
                x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.obj.x + shape.obj.collisionShape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;

                _this2.checkInteractive(body, shape, i, j); // Проверяем интерактив (например стрела бьёт орка, орк бьёт игрока и т.д.)

              }
            }
          }
        }

        if (x < oldX) {
          // moving left
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); // Коллизия персонажей между собой


          for (var _j = 0; _j < _this2.bodies.length; _j++) {
            var _shape = _this2.bodies[_j];

            if (body != _shape) {
              // Если это не тот же самый объект
              if (oldX + 1 + body.obj.collisionShape.x > _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && x + body.obj.collisionShape.x < _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && y + body.obj.collisionShape.y < _shape.obj.y + _shape.obj.collisionShape.y + _shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape.obj.y + _shape.obj.collisionShape.y) {
                x = Math.max(x + body.obj.collisionShape.x, _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width) - body.obj.collisionShape.x;

                _this2.checkInteractive(body, _shape, i, _j);
              }
            }
          }
        }

        if (y > oldY) {
          // moving down
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); // Коллизия персонажей между собой


          for (var _j2 = 0; _j2 < _this2.bodies.length; _j2++) {
            var _shape2 = _this2.bodies[_j2];

            if (body != _shape2) {
              // Если это не тот же самый объект
              if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < _shape2.obj.y + _shape2.obj.collisionShape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape2.obj.y + _shape2.obj.collisionShape.y && x + body.obj.collisionShape.x < _shape2.obj.x + _shape2.obj.collisionShape.x + _shape2.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.height > _shape2.obj.x + _shape2.obj.collisionShape.x) {
                y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, _shape2.obj.y + _shape2.obj.collisionShape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

                _this2.checkInteractive(body, _shape2, i, _j2);
              }
            }
          }
        }

        if (y < oldY) {
          // moving up
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });

          for (var _j3 = 0; _j3 < _this2.bodies.length; _j3++) {
            var _shape3 = _this2.bodies[_j3];

            if (body != _shape3) {
              // Если это не тот же самый объект
              if (oldY + 1 + body.obj.collisionShape.y > _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && y + body.obj.collisionShape.y < _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && x + body.obj.collisionShape.x < _shape3.obj.x + _shape3.obj.collisionShape.x + _shape3.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > _shape3.obj.x + _shape3.obj.collisionShape.x) {
                y = Math.max(y + body.obj.collisionShape.y, _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height) - body.obj.collisionShape.y;

                _this2.checkInteractive(body, _shape3, i, _j3);
              }
            }
          }
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      };

      for (var i = 0; i < this.bodies.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "checkInteractive",
    value: function checkInteractive(body, shape, indexOfBody, indexOfShape) {
      if (body.obj.hasOwnProperty('name') && shape.obj.hasOwnProperty('name')) {
        // Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow' && shape.obj.name == 'orc') {
          // Если стрела коснулась орка
          // На самом деле вместо двух, можно сделать один вызов this.remove(this.bodies,indexOfBody,indexOfShape). Но мне так удобнее отлаживать
          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); // Стрела исчезает, удалить из коллайдера, удалить сам объект

          body.obj.delete(); // Удаляем стрелу

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfShape); // Отключить его от коллайдера (удалить элемент по индексу из массива this.bodies)

          shape.obj.death(); // Орк погибает
        }
      }
    }
  }, {
    key: "checkInteractiveWithStatic",
    value: function checkInteractiveWithStatic(body, indexOfBody) {
      //
      if (body.obj.hasOwnProperty('name')) {
        // Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow') {
          body.obj.stop(); // Стрела перестаёт двигаться

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); // удалить из коллайдера
        }
      }
    }
  }]);

  return Collider;
}();

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire'], [13, 'enter']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
/* harmony import */ var _scenes_game_over__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/game-over */ "./src/scenes/game-over.js");
/* harmony import */ var _scenes_game_win__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/game-win */ "./src/scenes/game-win.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      elf: 'img/dark-elf.png',
      player: 'img/player2.png',
      title_bg: 'img/bg_title.png',
      title_name: 'img/game_name.png',
      title_start: 'img/start_game.png',
      title_option: 'img/option_game.png',
      title_exit: 'img/exit_game.png',
      tiles: 'img/tiles.png',
      quest_person: 'img/girl-for-cave.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this),
      gameOver: new _scenes_game_over__WEBPACK_IMPORTED_MODULE_6__["GameOver"](this),
      gameWin: new _scenes_game_win__WEBPACK_IMPORTED_MODULE_7__["GameWin"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].GAME_OVER:
          return this.scenes.gameOver;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].GAME_WIN:
          return this.scenes.gameWin;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/get-quest.js":
/*!**************************!*\
  !*** ./src/get-quest.js ***!
  \**************************/
/*! exports provided: allDeathOrks, showQuestInterface, updateQuest, getQuest, deathOrcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDeathOrks", function() { return allDeathOrks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showQuestInterface", function() { return showQuestInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuest", function() { return updateQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuest", function() { return getQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deathOrcs", function() { return deathOrcs; });
var allDeathOrks = 0;
var showQuestInterface = false;
function updateQuest() {
  allDeathOrks = 0;
  showQuestInterface = false;
}
function getQuest() {
  console.log('YES!!!');
  showQuestInterface = true;
}
function deathOrcs() {
  if (showQuestInterface) {
    allDeathOrks++;
    console.log(allDeathOrks);
  }
}

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
};

console.log('И сейчас работает');

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: Interface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interface", function() { return Interface; });
/* harmony import */ var _text_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-info */ "./src/text-info.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Interface =
/*#__PURE__*/
function () {
  function Interface(game, waves) {
    _classCallCheck(this, Interface);

    this.game = game;
    this.waves = waves;
    this.textInfo = new _text_info__WEBPACK_IMPORTED_MODULE_0__["TextInfo"](game.screen);
    this.context = this.game.screen.context;
    this.lastTime = 0;
    this.player = game.currentScene.player;
    this.fightTextShowed = false; // надпись Fight покажется лишь один раз
    //this.timeToSurvive = 2000000;// Если это время выйдет в ноль, то игра закончится победой

    this.orcsKilled = 0;
    this.widthHealthLine = 150;
    this.endOpacity = 0; // При проигрыше экран дискретно, ступенчато, темнеет. 0 - абсолютно светло, 1 - абсолютно темно
  }

  _createClass(Interface, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime === 0) {
        this.lastTime = time;
      }

      this.showHealthLine();

      if (_get_quest__WEBPACK_IMPORTED_MODULE_2__["showQuestInterface"]) {
        this.questInterface();
      }

      if (this.player.health === 0) {
        this.endGame(time, 'lose'); // Проиграл
      }

      if (_ais_isAgressive__WEBPACK_IMPORTED_MODULE_1__["isAgressive"].isOrcAgressive()) {
        this.fightText(time);
      } // else {
      //   this.showTimer();//Обратный отсчёт
      //   this.timeToSurvive -= time - this.lastTime;
      //   if (this.timeToSurvive < 0) {
      //     this.timeToSurvive = 0;
      //     this.endGame(time, 'win');
      //   }
      // }


      this.textInfo.update(time);
      this.lastTime = time;
    }
  }, {
    key: "fightText",
    value: function fightText(time) {
      if (!this.fightTextShowed) {
        this.fightTextShowed = true;
        this.textInfo.showText('You angered the orcs!', time);
      }
    }
  }, {
    key: "showHealthLine",
    value: function showHealthLine() {
      this.context.strokeStyle = '#852727';
      this.context.fillStyle = '#b23d3d';
      this.context.lineWidth = 2;
      this.context.rect(20, 15, this.widthHealthLine, 10);
      this.context.fillRect(20, 15, this.widthHealthLine * (this.player.health / this.player.healthStart), 10); // this.context.fill();

      this.context.stroke();
    } // showTimer() {
    //   this.game.screen.print(this.game.screen.width - 50, 30, //х, y
    //     Math.floor(this.timeToSurvive / 1000),//'text'
    //     22);//fontsize
    // }

  }, {
    key: "questInterface",
    value: function questInterface() {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = "20px serif";
      this.context.fillText("Orcs killed - ".concat(_get_quest__WEBPACK_IMPORTED_MODULE_2__["allDeathOrks"], " of 10"), 20, 60);
    }
  }, {
    key: "endGame",
    value: function endGame(time, status) {
      // Постепенно появляется черная заставка и сообщаем сцене, что игра закончена
      this.endOpacity += (time - this.lastTime) / 1000;

      if (this.endOpacity > 1.5) {
        // 1.5, а не 1, чтобы черная заставка ещё повисела немного
        this.changeScene(status);
      }

      var opacity = 0;
      if (this.endOpacity > 0.25) opacity = 0.25;
      if (this.endOpacity > 0.5) opacity = 0.5;
      if (this.endOpacity > 0.75) opacity = 0.75;
      if (this.endOpacity > 1) opacity = 1;
      this.context.fillStyle = "rgb(0,0,0,".concat(opacity, ")");
      this.context.fillRect(0, 0, this.game.screen.width, this.game.screen.height);
    }
  }, {
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case 'lose':
          return this.game.currentScene.gameOverTrigger = true;

        case 'win':
          return this.game.currentScene.winTrigger = true;
      }
    }
  }]);

  return Interface;
}();

/***/ }),

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, layers, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":1,"layers":[{"data":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],"height":1,"name":"shoot_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],"height":1,"name":"shoot_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],"height":1,"name":"shoot_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],"height":1,"name":"shoot_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"death","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/playertiles.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json","target":"level1.json"}},"height":20,"infinite":false,"layers":[{"data":[1,1,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,64,15,66,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,17,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,7,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,17,4,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,17,4,4,4,4,5,5,5,4,4,4,1,1,74,25,46,65,65,65,65,65,65,65,65,65,65,65,65,65,66,1,1,1,74,25,25,25,75,75,75,75,75,75,75,75,75,75,75,75,76,1,1,1,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,64,65,66,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,84,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,61,62,62,62,62,63,1,1,1,1,1,1,1,1,1,1,1,1,1,1,71,72,72,72,72,73,1,1,1,1,1,64,65,65,65,65,65,65,65,1,81,82,82,82,82,83,1,1,1,1,1,74,75,75,75,75,75,75,75,1,1,1,1,1,1,1,1,1,1,1,1,84,85,85,85,85,85,85,85,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"id":1,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[48,48,48,48,48,48,48,48,48,0,0,0,30,47,39,39,39,38,18,60,48,27,58,0,59,28,39,60,27,0,0,0,30,39,39,0,39,38,38,57,48,39,0,0,0,48,39,28,0,0,0,0,29,29,39,0,0,29,29,29,48,60,37,0,0,48,0,27,39,0,0,0,60,38,0,0,59,58,0,38,48,27,0,0,60,48,60,0,28,0,0,29,29,29,0,39,0,29,29,29,48,28,58,0,0,48,37,27,27,0,0,58,0,38,0,59,0,38,0,60,48,27,0,0,0,48,28,39,60,0,29,29,29,29,0,39,0,29,29,29,48,59,0,0,0,48,39,59,0,0,0,58,0,60,39,0,0,0,60,0,48,58,0,60,0,0,29,29,29,29,29,29,0,0,0,59,0,57,0,48,48,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,48,39,37,0,0,0,0,59,29,29,29,29,0,59,39,39,39,39,59,48,48,48,48,48,48,48,48,37,0,39,0,39,0,58,39,48,48,48,48,48,48,27,0,0,0,27,27,60,27,37,48,39,37,27,37,60,49,48,48,48,48,37,0,57,0,39,28,37,39,39,48,58,0,39,28,28,59,49,48,48,48,28,60,27,39,39,37,0,58,0,48,37,28,60,0,27,0,28,49,48,48,0,0,0,0,0,0,27,0,60,48,27,58,28,39,28,27,39,28,48,48,0,0,0,0,0,0,0,28,49,48,59,0,0,0,0,0,0,0,58,48,0,0,0,0,0,0,39,49,48,48,37,0,57,0,0,60,0,0,39,48,39,27,39,28,60,28,49,48,48,48,58,28,0,59,0,0,39,58,0,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48],"height":20,"id":3,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":4,"name":"hitboxes","objects":[{"height":8.70607287449393,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":1310.26396761134,"x":0,"y":-2.17651821862348},{"height":1051.25829959514,"id":2,"name":"","rotation":0,"type":"","visible":true,"width":10.8825910931173,"x":1266.73360323887,"y":-2.17651821862348},{"height":95.7668016194332,"id":3,"name":"","rotation":0,"type":"","visible":true,"width":19.5886639676114,"x":1264.55708502024,"y":1181.84939271255},{"height":0,"id":4,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":1262.38056680162,"y":1210.14412955466},{"height":58.765991902834,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":1262.38056680162,"x":0,"y":1221.02672064777},{"height":1212.32064777328,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":43.5303643724696,"x":0,"y":4.35303643724706},{"height":30.4712550607287,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":541.953036437247,"x":32.6477732793522,"y":8.70607287449393},{"height":500.599190283401,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":39.1773279352226,"x":574.600809716599,"y":8.70607287449393},{"height":56.5894736842105,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":276.417813765182,"x":615.954655870445,"y":457.068825910931},{"height":54.4129554655871,"id":10,"name":"","rotation":0,"type":"","visible":true,"width":180.651012145749,"x":1086.08259109312,"y":457.068825910931},{"height":54.4129554655871,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":180.651012145749,"x":1083.90607287449,"y":328.654251012146},{"height":54.4129554655871,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":176.297975708502,"x":1088.25910931174,"y":200.23967611336},{"height":250.2995951417,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":76.1781376518219,"x":700.838866396761,"y":8.70607287449393},{"height":50.0599190283401,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":117.531983805668,"x":779.193522267207,"y":206.769230769231},{"height":52.2364372469635,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":252.476113360324,"x":642.072874493927,"y":333.007287449393},{"height":380.890688259109,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":37.0008097165992,"x":639.896356275304,"y":4.35303643724694},{"height":28.2947368421052,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":182.827530364372,"x":709.544939271255,"y":276.417813765182},{"height":0,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":781.37004048583,"y":145.826720647773},{"height":28.2947368421052,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":115.355465587044,"x":777.017004048583,"y":148.003238866397},{"height":28.2947368421052,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":169.768421052632,"x":1099.14170040486,"y":148.003238866397},{"height":26.1182186234818,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":176.297975708502,"x":1094.78866396761,"y":278.594331983806},{"height":23.9417004048583,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":174.121457489878,"x":1096.96518218623,"y":407.008906882591},{"height":30.4712550607288,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":243.77004048583,"x":648.602429149798,"y":404.832388663968},{"height":58.765991902834,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":396.126315789474,"x":43.5303643724696,"y":705.191902834008},{"height":450.539271255061,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":60.9425101214574,"x":644.249392712551,"y":766.134412955466},{"height":163.238866396761,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":50.05991902834,"x":592.012955465587,"y":1051.25829959514},{"height":104.472874493927,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":50.0599190283401,"x":522.364372469636,"y":1114.37732793522},{"height":41.353846153846,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":32.6477732793522,"x":463.598380566802,"y":1177.4963562753},{"height":128.414574898785,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":324.301214574899,"x":91.4137651821862,"y":994.668825910931},{"height":30.4712550607287,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":21.7651821862348,"x":208.945748987854,"y":851.018623481781},{"height":34.8242914979757,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":19.5886639676114,"x":1107.84777327935,"y":526.717408906883},{"height":32.6477732793521,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":21.7651821862348,"x":848.842105263158,"y":1105.67125506073},{"height":54.4129554655871,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":302.536032388664,"x":968.550607287449,"y":707.368421052632},{"height":509.305263157895,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":52.2364372469635,"x":1216.67368421053,"y":515.834817813765},{"height":50.0599190283401,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":198.063157894737,"x":1046.90526315789,"y":766.134412955466},{"height":52.2364372469635,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":134.944129554656,"x":1110.02429149798,"y":835.782995951417},{"height":28.2947368421052,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":71.8251012145749,"x":1170.96680161943,"y":922.843724696356},{"height":30.4712550607288,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":241.593522267206,"x":520.187854251012,"y":657.308502024291},{"height":39.1773279352227,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":26.1182186234819,"x":1234.08582995951,"y":78.3546558704453},{"height":361,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":21,"x":339,"y":140},{"height":21,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":393,"y":535},{"height":0,"id":51,"name":"","point":true,"rotation":0,"type":"","visible":true,"width":0,"x":224,"y":118},{"height":0,"id":52,"name":"","point":true,"rotation":0,"type":"","visible":true,"width":0,"x":992,"y":54},{"height":0,"id":53,"name":"","point":true,"rotation":0,"type":"","visible":true,"width":0,"x":1246,"y":1130},{"height":146,"id":54,"name":"","rotation":0,"type":"","visible":true,"width":8,"x":1276,"y":1042},{"height":0,"id":55,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":1478,"y":1252}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":5,"nextobjectid":56,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.4.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"tiles.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20};

/***/ }),

/***/ "./src/modal-dialogue.js":
/*!*******************************!*\
  !*** ./src/modal-dialogue.js ***!
  \*******************************/
/*! exports provided: runOnceQuest, showModalDialog, updateModalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runOnceQuest", function() { return runOnceQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModalDialog", function() { return showModalDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModalDialog", function() { return updateModalDialog; });
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");

var TAKE_QUEST = document.getElementById("take_quest");
var ADANDON_THE_QUEST = document.getElementById("abandon_the_quest");
var runOnceQuest = false;

TAKE_QUEST.onclick = function () {
  console.log('You take quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = true;
  Object(_get_quest__WEBPACK_IMPORTED_MODULE_0__["getQuest"])();
};

ADANDON_THE_QUEST.onclick = function () {
  console.log('Abandon the quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = false; // updateQuest();
};

function showModalDialog() {
  $('#staticBackdrop').modal('show'); // $('#staticBackdrop').modal('handleUpdate');
}
function updateModalDialog() {
  $('#staticBackdrop').modal('handleUpdate');
}

/***/ }),

/***/ "./src/orc.js":
/*!********************!*\
  !*** ./src/orc.js ***!
  \********************/
/*! exports provided: Orc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orc", function() { return Orc; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
/* harmony import */ var _ais_endScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ais/endScript */ "./src/ais/endScript.js");
/* harmony import */ var _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ais/peaceful */ "./src/ais/peaceful.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio-playback/audios */ "./src/audio-playback/audios.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Orc =
/*#__PURE__*/
function (_Body) {
  _inherits(Orc, _Body);

  function Orc(player) {
    var _this;

    var aiType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peaceful';

    _classCallCheck(this, Orc);

    // Передаём игрока, чтобы орк мог следить за ним и атаковать его
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orc).call(this, {
      imageName: 'orc',
      speed: 50
    }));
    if (aiType == 'dummy') _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();
    if (aiType == 'endScript') _this.ai = new _ais_endScript__WEBPACK_IMPORTED_MODULE_2__["EndScript"]();
    if (aiType == 'peaceful') _this.ai = new _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__["Peaceful"](player);
    _this.allDeathOrks = 0;
    _this.name = 'orc'; // Для коллайдера, что опознать этот объект

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Orc, [{
    key: "update",
    value: function update(time) {
      if (this.ai) {
        this.ai.update(time); // Если ИИ не отключен
      }

      _get(_getPrototypeOf(Orc.prototype), "update", this).call(this, time);
    }
  }, {
    key: "death",
    value: function death() {
      Object(_get_quest__WEBPACK_IMPORTED_MODULE_6__["deathOrcs"])();
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_5__["deathOrcPlayAudio"])();
      this.ai = null; // Отключаем ИИ

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__["isAgressive"].becomeAgressive();

      _get(_getPrototypeOf(Orc.prototype), "death", this).call(this);
    }
  }]);

  return Orc;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-playback/audios */ "./src/audio-playback/audios.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  // Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Player(control, game_level) {
    var _this;

    _classCallCheck(this, Player);

    // control - управление клавиатурой
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: 'player',
      speed: 500
    }));
    _this.control = control;
    _this.game_level = game_level;
    _this.arrow = false; // Позволяем стрелять только если на руках есть стрела

    _this.timeArrow = 1000; // Константа, время между появлением следующей стрелы, чтобы стрелы не создавались как из пулемёта

    _this.timerForCreatingArrow = 0; // Таймер для стрел

    _this.lastTimeForArrow = 0;
    _this.name = 'player'; // Для коллайдера, что опознать этот объект

    _this.healthStart = 20; // Начальное количество жизней

    _this.health = _this.healthStart;
    _this.undead = 1000; // Константа времени бессмертия, после получения урона игрок бессмертен

    _this.timerUndead = -1;
    /* Таймер для обратного отсчёта. Если он равен диапазону от 0 до this.undead, значит идёт обратный отсчёт и игрок бессмертен
          Если -1, игрок может получить урон */

    _this.lastTimeForUndead = 0;
    return _this;
  }

  _createClass(Player, [{
    key: "addArrow",
    value: function addArrow(arrow) {
      this.arrow = arrow;
    }
  }, {
    key: "getHit",
    value: function getHit() {
      // Игрок получил удар
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_1__["swordPlayAudio"])();

      if (this.timerUndead === -1) {
        // Если игрок смертен
        if (this.health > 0) this.health -= 1;
        this.timerUndead = this.undead; // Делаем игрока бессмертным на время
      }
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTimeForArrow === 0) {
        this.lastTimeForArrow = time;
      }

      if (this.lastTimeForUndead === 0) {
        this.lastTimeForUndead = time;
      }

      if (this.control.fire) {
        if (this.timerForCreatingArrow === 0) {
          // Если стрелу можно создавать
          this.timerForCreatingArrow = this.timeArrow;
          this.game_level.shooting();
          if (this.arrow) this.shoot(this.arrow); // Использовать именно эту стрелу, т.к. персонаж может иметь разные стрелы
        }
      } else if (this.control.up) {
        this.walk('up');
      } else if (this.control.down) {
        this.walk('down');
      } else if (this.control.left) {
        this.walk('left');
      } else if (this.control.right) {
        this.walk('right');
      } else {
        this.stand(this.velocity.direction);
      }

      if (this.timerForCreatingArrow > 0) this.timerForCreatingArrow -= time - this.lastTimeForArrow;else this.timerForCreatingArrow = 0;
      this.lastTimeForArrow = time;

      if (this.timerUndead != -1) {
        // Игрок бессмертен, this.timerUndead > 0
        this.timerUndead -= time - this.lastTime;

        if (this.timerUndead < 0) {
          this.timerUndead = -1; // Игрок снова смертен
        }
      }

      this.timerUndead = -1;
      this.lastTimeForUndead = time;

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    } // update

  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! exports provided: Projectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Projectile =
/*#__PURE__*/
function () {
  // Его расширяет projectiles/arrow.js
  function Projectile(direction, speed, x, y) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, speed);
    this.lastTime = 0;
    this.active = false; // Если стрела активна, она отображается через this.game.screen.drawSprite и летит в цель. А вообще стрела в невидимом состоянии всегда находится на экране

    this.collisionShape = {
      x: 27,
      y: 27,
      width: 10,
      height: 10
    }; // Нужно для коллайдера (расчёт столкновений). Размер спрайта 64х64

    this.deleted = false; // Родитель будет отслеживать эту переменную, если она true, значит родитель удалит этот объект
  }

  _createClass(Projectile, [{
    key: "fly",
    value: function fly(x, y, direction) {
      this.x = x;
      this.y = y;
      this.velocity.setDirection(direction, this.speed);
      this.active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      // При попадании в статичное препятствие, projectile теряет скорость
      this.speed = 0;
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, this.speed);
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.deleted = true;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        // Инициализация  this.lastTime
        this.lastTime = time;
        return;
      }

      this.velocity.move(this, time - this.lastTime);
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); // На этом этапе пока не известно что это будет спрайт или анимация

      this.lastTime = time;
    }
  }]);

  return Projectile;
}();

/***/ }),

/***/ "./src/projectiles/arrow.js":
/*!**********************************!*\
  !*** ./src/projectiles/arrow.js ***!
  \**********************************/
/*! exports provided: Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectile */ "./src/projectile.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Arrow =
/*#__PURE__*/
function (_Projectile) {
  _inherits(Arrow, _Projectile);

  function Arrow(direction, speed, x, y) {
    var _this;

    _classCallCheck(this, Arrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Arrow).call(this, direction, speed, x, y));
    _this.sprites = {};
    _this.name = 'arrow';
    var tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.sprites.left = tiles.getSprite(9);
    _this.sprites.right = tiles.getSprite(10);
    _this.sprites.down = tiles.getSprite(19);
    _this.sprites.up = tiles.getSprite(20);
    _this.view = _this.sprites[direction];
    return _this;
  }

  _createClass(Arrow, [{
    key: "fly",
    value: function fly(x, y, direction) {
      _get(_getPrototypeOf(Arrow.prototype), "fly", this).call(this, x, y, direction);

      this.view = this.sprites[direction];
    }
  }]);

  return Arrow;
}(_projectile__WEBPACK_IMPORTED_MODULE_0__["Projectile"]);

/***/ }),

/***/ "./src/quest-person.js":
/*!*****************************!*\
  !*** ./src/quest-person.js ***!
  \*****************************/
/*! exports provided: QuestPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestPerson", function() { return QuestPerson; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var QuestPerson =
/*#__PURE__*/
function (_Body) {
  _inherits(QuestPerson, _Body);

  function QuestPerson() {
    var _this;

    _classCallCheck(this, QuestPerson);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestPerson).call(this, {
      imageName: 'quest_person',
      speed: 5
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(QuestPerson, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);

      _get(_getPrototypeOf(QuestPerson.prototype), "update", this).call(this, time);
    }
  }]);

  return QuestPerson;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/remove-from-array.js":
/*!**********************************!*\
  !*** ./src/remove-from-array.js ***!
  \**********************************/
/*! exports provided: RemoveFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromArray", function() { return RemoveFromArray; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemoveFromArray =
/*#__PURE__*/
function () {
  function RemoveFromArray() {
    _classCallCheck(this, RemoveFromArray);
  }

  _createClass(RemoveFromArray, null, [{
    key: "remove",
    value: function remove(arr, indexes) {
      // Удалить элементы из массива по индексу
      // arguments - псевдо массив, в котором хранятся все аргументы, переданные в функцию
      // [].slice() - создает пустой массив

      /* arrayOfIndexes - массив, который содержит все аргументы (кроме первого) переданные в функцию
             Это массив индексов, которые нужно удалить из основного массива arr */
      var arrayOfIndexes = [].slice.call(arguments, 1); // Вернуть отфильтрованный массив

      return arr.filter(function (item, index) {
        return (// Например arrayOfIndexes = [1], то есть нужно удалить один элемент по индексу 1
          // indexOf - возвращает индекс искомого элемента. Например: ['a','b'].indexOf('b') //-> 1
          // Каждый элемент массива arr сверяет свой индекс с индексами в arrayOfIndexes.
          // Если его индекса в arrayOfIndexes нет, то метод indexOf вернёт -1, значит будет true и элемент не будет удалён из массива
          arrayOfIndexes.indexOf(index) == -1
        );
      });
    } // remove

  }]);

  return RemoveFromArray;
}();

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projectiles/arrow */ "./src/projectiles/arrow.js");
/* harmony import */ var _waves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../waves */ "./src/waves.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interface */ "./src/interface.js");
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../audio-playback/audios */ "./src/audio-playback/audios.js");
/* harmony import */ var _quest_person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quest-person */ "./src/quest-person.js");
/* harmony import */ var _modal_dialogue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal-dialogue */ "./src/modal-dialogue.js");
/* harmony import */ var _training__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../training */ "./src/training.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../get-quest */ "./src/get-quest.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__["isAgressive"].becomePeaceful(); // Сделать орков мирными

      this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this);
      this.player.x = 224;
      this.player.y = 118; // this.player.x = 990;
      // this.player.y = 1040;

      this.questPerson = new _quest_person__WEBPACK_IMPORTED_MODULE_11__["QuestPerson"]();
      this.questPerson.x = 940;
      this.questPerson.y = 100;
      this.collider = new _collider__WEBPACK_IMPORTED_MODULE_4__["Collider"](); // Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга
      // Используем webpack поэтому загрузчик json файлов работает по умолчанию

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles); // createMap возвращает объект TileMap

      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.specialPosition(); // Загнать камеру в самый угол

      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.questPerson);
      this.orcArmy = []; // Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.waves = new _waves__WEBPACK_IMPORTED_MODULE_6__["Waves"](this.game); // Контролирует появление противников

      this.waves.init();
      this.interface = new _interface__WEBPACK_IMPORTED_MODULE_7__["Interface"](this.game, this.waves); // Шкала здоровья, таймер в углу экрана

      this.projectiles = []; // Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.gameOverTrigger = false; // Если interface сделает эту переменную true, переходим к проигрышной сцене

      this.winTrigger = false; // Если interface сделает эту переменную true, переходим к победной сцене
      //updateModalDialog();

      Object(_training__WEBPACK_IMPORTED_MODULE_13__["showTraining"])();
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(false);
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(true);
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this2 = this;

      if (_get_quest__WEBPACK_IMPORTED_MODULE_14__["allDeathOrks"] == 10) {
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(true);
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_14__["updateQuest"])();
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
      }

      if (this.gameOverTrigger) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameOverPlayAudio"])();
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_14__["updateQuest"])();
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_OVER);
      }

      this.player.update(time);

      if (this.projectiles.length > 0) {
        this.projectiles.forEach(function (arrow, index) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            arrow.update(time);
          }

          if (arrow.deleted) {
            _this2.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_8__["RemoveFromArray"].remove(_this2.projectiles, index);
          }
        });
      }

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          orc.update(time);
        });
      } //console.log(this.player.x, this.player.y);
      // console.log(this.questPerson.x, this.questPerson.y);


      this.questPerson.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this3 = this;

      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map);

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          _this3.game.screen.drawSprite(orc.view);
        });
      }

      this.game.screen.drawSprite(this.player.view);

      if (this.projectiles.length > 0) {
        // Отрисовка стрел
        this.projectiles.forEach(function (arrow) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            _this3.game.screen.drawSprite(arrow.view);
          }
        });
      }

      this.game.screen.drawSprite(this.questPerson.view);
      this.waves.update(time);
      this.interface.update(time);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);

      if (this.player.x >= 870 && this.player.x <= 970 && this.player.y >= 100 && this.player.y <= 130) {
        Object(_modal_dialogue__WEBPACK_IMPORTED_MODULE_12__["showModalDialog"])(); //setTimeout(() => showModalDialog(), 500);
        //getQuest();
      }
    }
  }, {
    key: "shooting",
    value: function shooting() {
      // Стрельба игрока
      var arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__["Arrow"]('down', 400, this.player.x, this.player.y);
      this.player.addArrow(arrow);
      this.projectiles.push(arrow); // Все объекты из этого массива будут отрисованы в методе render

      this.collider.addKinematicBody(arrow);
      setTimeout(function () {
        return Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["arrowPlayAudio"])();
      }, 500);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/game-over.js":
/*!*********************************!*\
  !*** ./src/scenes/game-over.js ***!
  \*********************************/
/*! exports provided: GameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOver", function() { return GameOver; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GameOver =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameOver, _Scene);

  function GameOver(game) {
    _classCallCheck(this, GameOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOver).call(this, game));
  }

  _createClass(GameOver, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameOver.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        // При нажатии на "enter" начать новую игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, 'Game over! Click on Enter to start a NEW GAME.');

      _get(_getPrototypeOf(GameOver.prototype), "render", this).call(this, time);
    }
  }]);

  return GameOver;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/game-win.js":
/*!********************************!*\
  !*** ./src/scenes/game-win.js ***!
  \********************************/
/*! exports provided: GameWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWin", function() { return GameWin; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GameWin =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameWin, _Scene);

  function GameWin(game) {
    _classCallCheck(this, GameWin);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameWin).call(this, game));
  }

  _createClass(GameWin, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameWin.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        // При нажатии на "enter" начать новую игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, 'You WIN! Click on Enter to start a NEW GAME.');

      _get(_getPrototypeOf(GameWin.prototype), "render", this).call(this, time);
    }
  }]);

  return GameWin;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(60, 80, 'Loading...');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'title_name');
      this.game.screen.drawImage(0, 0, 'title_start');
      this.game.screen.drawImage(0, 0, 'title_option');
      this.game.screen.drawImage(0, 0, 'title_exit');

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tite_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tite-map */ "./src/tite-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
    this.camera = null;
    this.isCameraSet = false;
    this.addStylesToCanvas();
  }

  _createClass(Screen, [{
    key: "addStylesToCanvas",
    value: function addStylesToCanvas() {
      this.canvas.style.display = 'block';
      this.canvas.style.position = 'absolute';
      this.canvas.style.left = '0';
      this.canvas.style.right = '0';
      this.canvas.style.top = '0';
      this.canvas.style.bottom = '0';
      this.canvas.style.margin = 'auto';
      document.body.style.background = '#FFFFFF';
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
        console.log(names);
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row;
      var col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == 'tilelayer') {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == 'objectgroup') {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tite_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '22px Georgia';
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      var spriteX = sprite.x;
      var spriteY = sprite.y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) {
        return;
      }

      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      this.context.drawImage(this.images[sprite.imageName], sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/text-info.js":
/*!**************************!*\
  !*** ./src/text-info.js ***!
  \**************************/
/*! exports provided: TextInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInfo", function() { return TextInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInfo =
/*#__PURE__*/
function () {
  function TextInfo(screen) {
    _classCallCheck(this, TextInfo);

    this.x = 0;
    this.y = 0;
    this.screen = screen;
    this.showTextBoolean = false; // Показывать ли текст

    this.text = '';
    this.lastTime = 0;
    this.howLongToShow = 5000; // Сколько времени показывать текст

    this.timeToStop = 0; // Время когда нужно завершить показ

    this.fontSize = 0;
    this.startFontSize = 150;
  }

  _createClass(TextInfo, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.showTextBoolean) {
        this.fontSize -= (time - this.lastTime) / 10;
        this.setXY();
        this.screen.print(this.x, this.y, this.text, this.fontSize);

        if (time > this.timeToStop) {
          this.showTextBoolean = false;
        }
      }

      this.lastTime = time;
    }
  }, {
    key: "showText",
    value: function showText(text, time) {
      this.text = text;
      this.showTextBoolean = true;
      this.timeToStop = time + this.howLongToShow;
      this.fontSize = this.startFontSize;
      this.setXY();
    }
  }, {
    key: "setXY",
    value: function setXY() {
      this.x = this.screen.width / 2 - this.fontSize * 1.5;
      this.y = this.screen.height / 2 + this.fontSize / 4.5;
    }
  }]);

  return TextInfo;
}();

/***/ }),

/***/ "./src/tite-map.js":
/*!*************************!*\
  !*** ./src/tite-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/training.js":
/*!*************************!*\
  !*** ./src/training.js ***!
  \*************************/
/*! exports provided: showTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTraining", function() { return showTraining; });
function showTraining() {
  $('#exampleModal').modal('show'); // $('#staticBackdrop').modal('handleUpdate');
}

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case 'up':
          this.y = -speed;
          break;

        case 'down':
          this.y = speed;
          break;

        case 'right':
          this.x = speed;
          break;

        case 'left':
          this.x = -speed;
          break;
      }
    }
  }, {
    key: "move",
    value: function move(object, dt) {
      object.x += dt * (this.x / 1000);
      object.y += dt * (this.y / 1000);
    }
  }]);

  return Vector;
}();

/***/ }),

/***/ "./src/waves.js":
/*!**********************!*\
  !*** ./src/waves.js ***!
  \**********************/
/*! exports provided: Waves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return Waves; });
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orc */ "./src/orc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Waves =
/*#__PURE__*/
function () {
  function Waves(game) {
    _classCallCheck(this, Waves);

    this.game = game;
    this.orcArmy = game.currentScene.orcArmy; // Массив, содержащий всех существующих орков. Этот класс пополняет этот массив новыми орками

    this.collider = game.currentScene.collider; // Будем добавлять орков в коллайдер

    this.player = game.currentScene.player; // Передаём игрока, чтобы орк мог следить за ним и атаковать его

    this.lastTime = 0;
    this.timeLeftForNextWave = 500; // Таймер для обратного отсчёта. Первая волна начнётся через 1000 мс

    this.timeForNextWave = 10000; // Константа, следующая волная будет через это время
  }

  _createClass(Waves, [{
    key: "init",
    value: function init() {// this.waves = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeLeftForNextWave < 0) {
        this.nextWave(time);
      }

      this.timeLeftForNextWave -= time - this.lastTime;
      this.lastTime = time;
    }
  }, {
    key: "nextWave",
    value: function nextWave(time) {
      var _this = this;

      var orcSquad = []; // Создать за один раз нескольких орков

      for (var i = 0; i < 2; i++) {
        var orc = new _orc__WEBPACK_IMPORTED_MODULE_0__["Orc"](this.player); // Передаём игрока, чтобы орк мог следить за ним и атаковать его

        orc.x = 1246; // После отладки сделай 1350

        orc.y = 1130;
        orcSquad.push(orc);
      }

      orcSquad.forEach(function (orc) {
        _this.collider.addKinematicBody(orc);

        _this.orcArmy.push(orc);
      });
      this.timeLeftForNextWave = this.timeForNextWave;
    }
  }]);

  return Waves;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXQtcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwtZGlhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlcy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3QtcGVyc29uLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW1vdmUtZnJvbS1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1vdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS13aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy90aXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhaW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F2ZXMuanMiXSwibmFtZXMiOlsiQUkiLCJib2R5IiwidGltZSIsIkR1bW15IiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJsYXN0VGltZSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmdlRGlyZWN0aW9uIiwid2FsayIsIkVuZFNjcmlwdCIsImV2ZW50VGltZSIsImV2ZW50U3RhcnQiLCJoaXQiLCJzdGFuZCIsImlzQWdyZXNzaXZlIiwiYWdyZXNzaXZlIiwiUGVhY2VmdWwiLCJwbGF5ZXIiLCJsYXN0VGltZUR1bWIiLCJzdHVjayIsImNoYW5nZVdheUluaXQiLCJjaGFuZ2VXYXkiLCJvbGRYIiwib2xkWSIsImxhc3RUaW1lQWdyZXNzaXZlIiwiZHVyYXRpb25BZ3Jlc3NpdmUiLCJ0aW1lT2ZNYXJjaCIsImlzT3JjQWdyZXNzaXZlIiwiYWdyZXNzaXZlQmVoYXZpb3VyIiwiaXNTdHVjayIsImR1bWJCZWhhdmlvdXIiLCJjb3JyZWN0aW9uIiwieCIsImNvbGxpc2lvblNoYXBlIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiYXR0YWNrIiwiY2hhbmdlQWdyZXNzaXZlRGlyZWN0aW9uIiwiZ2V0SGl0IiwiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImN1cnJlbnRGcmFtZSIsInRvdGFsRnJhbWVzIiwibGVuZ3RoIiwib25FbmQiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsIm5leHRGcmFtZSIsIlNwcml0ZSIsImdhbWVBdWRpbyIsIkF1ZGlvIiwiZ2FtZUF1ZGlvV2luIiwiYXJyb3dQbGF5QXVkaW8iLCJzb3VuZCIsInNyYyIsInBsYXkiLCJzd29yZFBsYXlBdWRpbyIsInZvbHVtZSIsImRlYXRoT3JjUGxheUF1ZGlvIiwiZ2FtZU92ZXJQbGF5QXVkaW8iLCJnYW1lV2luUGxheUF1ZGlvIiwic3RhdGUiLCJwYXVzZSIsImdhbWVQbGF5QXVkaW8iLCJsb29wIiwiQm9keSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImlzU2hvb3RpbmciLCJpc0hpdHRpbmciLCJhbmltYXRpb25TaGVldCIsIkNoYXJhY3RlclNoZWV0IiwiZm9yRWFjaCIsIm5hbWUiLCJnZXRBbmltYXRpb24iLCJhcnJvdyIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJkZWF0aCIsIm1vdmUiLCJzZXRYWSIsInRydW5jIiwidXBkYXRlIiwiQ2FtZXJhIiwibGltaXRYIiwibGltaXRZIiwic2Nyb2xsRWRnZSIsIndhdGNoT2JqZWN0Iiwib2JqIiwibWluIiwibWF4IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJsYXllciIsImZpbHRlciIsImkiLCJTcHJpdGVTaGVldCIsIkNvbGxpZGVyIiwic3RhdGljU2hhcGVzIiwiYm9kaWVzIiwidHlwZSIsInB1c2giLCJvYmplY3RzIiwiY2hlY2tDb2xsaXNpb24iLCJzaGFwZSIsImNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljIiwiaiIsImNoZWNrSW50ZXJhY3RpdmUiLCJpbmRleE9mQm9keSIsImluZGV4T2ZTaGFwZSIsImhhc093blByb3BlcnR5IiwiUmVtb3ZlRnJvbUFycmF5IiwicmVtb3ZlIiwiZGVsZXRlIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwiZWxmIiwidGl0bGVfYmciLCJ0aXRsZV9uYW1lIiwidGl0bGVfc3RhcnQiLCJ0aXRsZV9vcHRpb24iLCJ0aXRsZV9leGl0IiwidGlsZXMiLCJxdWVzdF9wZXJzb24iLCJjb250cm9sIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJtZW51IiwiTWVudSIsImdhbWVMZXZlbCIsIkdhbWVMZXZlbCIsImdhbWVPdmVyIiwiR2FtZU92ZXIiLCJnYW1lV2luIiwiR2FtZVdpbiIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJzdGF0dXMiLCJTY2VuZSIsIkxPQURFRCIsIlNUQVJUX0dBTUUiLCJHQU1FX09WRVIiLCJHQU1FX1dJTiIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiYWxsRGVhdGhPcmtzIiwic2hvd1F1ZXN0SW50ZXJmYWNlIiwidXBkYXRlUXVlc3QiLCJnZXRRdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJkZWF0aE9yY3MiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJJbnRlcmZhY2UiLCJnYW1lIiwid2F2ZXMiLCJ0ZXh0SW5mbyIsIlRleHRJbmZvIiwiY29udGV4dCIsImZpZ2h0VGV4dFNob3dlZCIsIm9yY3NLaWxsZWQiLCJ3aWR0aEhlYWx0aExpbmUiLCJlbmRPcGFjaXR5Iiwic2hvd0hlYWx0aExpbmUiLCJxdWVzdEludGVyZmFjZSIsImhlYWx0aCIsImVuZEdhbWUiLCJmaWdodFRleHQiLCJzaG93VGV4dCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwicmVjdCIsImZpbGxSZWN0IiwiaGVhbHRoU3RhcnQiLCJzdHJva2UiLCJmb250IiwiZmlsbFRleHQiLCJvcGFjaXR5IiwiZ2FtZU92ZXJUcmlnZ2VyIiwid2luVHJpZ2dlciIsIlRBS0VfUVVFU1QiLCJnZXRFbGVtZW50QnlJZCIsIkFEQU5ET05fVEhFX1FVRVNUIiwicnVuT25jZVF1ZXN0Iiwib25jbGljayIsIiQiLCJtb2RhbCIsInNob3dNb2RhbERpYWxvZyIsInVwZGF0ZU1vZGFsRGlhbG9nIiwiT3JjIiwiYWlUeXBlIiwiYWkiLCJiZWNvbWVBZ3Jlc3NpdmUiLCJQbGF5ZXIiLCJnYW1lX2xldmVsIiwidGltZUFycm93IiwidGltZXJGb3JDcmVhdGluZ0Fycm93IiwibGFzdFRpbWVGb3JBcnJvdyIsInVuZGVhZCIsInRpbWVyVW5kZWFkIiwibGFzdFRpbWVGb3JVbmRlYWQiLCJzaG9vdGluZyIsInNob290IiwiUHJvamVjdGlsZSIsImFjdGl2ZSIsImRlbGV0ZWQiLCJBcnJvdyIsInNwcml0ZXMiLCJnZXRTcHJpdGUiLCJRdWVzdFBlcnNvbiIsImFyciIsImluZGV4ZXMiLCJhcnJheU9mSW5kZXhlcyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIml0ZW0iLCJpbmRleE9mIiwiY29uc3RydWN0b3IiLCJiZWNvbWVQZWFjZWZ1bCIsInF1ZXN0UGVyc29uIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsInNwZWNpYWxQb3NpdGlvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsIm9yY0FybXkiLCJXYXZlcyIsImludGVyZmFjZSIsInByb2plY3RpbGVzIiwic2hvd1RyYWluaW5nIiwiZmluaXNoIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJhZGRBcnJvdyIsInNldFRpbWVvdXQiLCJlbnRlciIsInByaW50IiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImFkZFN0eWxlc1RvQ2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsInRleHQiLCJzcHJpdGUiLCJzcHJpdGVYIiwic3ByaXRlWSIsImFicyIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0Iiwic2hvd1RleHRCb29sZWFuIiwiaG93TG9uZ1RvU2hvdyIsInRpbWVUb1N0b3AiLCJmb250U2l6ZSIsInN0YXJ0Rm9udFNpemUiLCJwcm9wcyIsIm9iamVjdCIsImR0IiwidGltZUxlZnRGb3JOZXh0V2F2ZSIsInRpbWVGb3JOZXh0V2F2ZSIsIm5leHRXYXZlIiwib3JjU3F1YWQiXSwibWFwcGluZ3Mi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OztBQUNELFdBQUtzVyxtQkFBTCxJQUE2QnRXLElBQUksR0FBRyxLQUFLSSxRQUF6QztBQUNBLFdBQUtBLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0Q7QUF6Qkg7QUFBQTtBQUFBLDZCQTJCV0EsSUEzQlgsRUEyQmlCO0FBQUE7O0FBQ2IsVUFBTXlXLFFBQVEsR0FBRyxFQUFqQixDQURhLENBQ087O0FBQ3BCLFdBQUssSUFBSXJQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsWUFBTXdDLEdBQUcsR0FBRyxJQUFJMkYsd0NBQUosQ0FBUSxLQUFLcE8sTUFBYixDQUFaLENBRDBCLENBQ087O0FBQ2pDeUksV0FBRyxDQUFDMUgsQ0FBSixHQUFRLElBQVIsQ0FGMEIsQ0FFYjs7QUFDYjBILFdBQUcsQ0FBQ3ZILENBQUosR0FBUSxJQUFSO0FBQ0FvVSxnQkFBUSxDQUFDL08sSUFBVCxDQUFja0MsR0FBZDtBQUNEOztBQUNENk0sY0FBUSxDQUFDblIsT0FBVCxDQUFpQixVQUFDc0UsR0FBRCxFQUFTO0FBQ3hCLGFBQUksQ0FBQzJILFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0JwSSxHQUEvQjs7QUFDQSxhQUFJLENBQUNxSSxPQUFMLENBQWF2SyxJQUFiLENBQWtCa0MsR0FBbEI7QUFDRCxPQUhEO0FBS0EsV0FBSzBNLG1CQUFMLEdBQTJCLEtBQUtDLGVBQWhDO0FBQ0Q7QUF6Q0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnRyb2woYm9keSkge1xyXG4gICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duLHVwLGxlZnQscmlnaHQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5kU2NyaXB0IGV4dGVuZHMgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyAvLyDQl9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5ldmVudFRpbWUgPSAxNTAwO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmV2ZW50U3RhcnQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudFRpbWUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmV2ZW50U3RhcnQpIHsgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LXRiNGRINC90LUg0L3QsNGH0LDQu9C+0YHRjFxyXG4gICAgICBpZiAodGhpcy5ldmVudFRpbWUgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudFN0YXJ0ID0gdHJ1ZTsvLyDQktGA0YPQsdCw0LXQvCDRgdC+0LHRi9GC0LjQtVxyXG4gICAgICAgIHRoaXMuYm9keS5oaXQodGhpcy5kaXJlY3Rpb24pOy8vINCh0L7QsdGL0YLQuNC1IC0g0L7RgNC6INCx0YzRkdGCXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib2R5LnN0YW5kKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIGlzQWdyZXNzaXZlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBiZWNvbWVBZ3Jlc3NpdmUoKSB7XHJcbiAgICB0aGlzLmFncmVzc2l2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmVjb21lUGVhY2VmdWwoKSB7XHJcbiAgICB0aGlzLmFncmVzc2l2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzT3JjQWdyZXNzaXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWdyZXNzaXZlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2lzQWdyZXNzaXZlJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGVhY2VmdWwgZXh0ZW5kcyBBSSB7XHJcbiAgY29uc3RydWN0b3IocGxheWVyKSB7IC8vINCX0LTQtdGB0Ywg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0L/QsNGA0LDQvNC10YLRgNGLLCDQvdCw0L/RgNC40LzQtdGALCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgyDQv9C10YDRgdC+0L3QsNC20LAsINC10LPQviDQv9Cw0LzRj9GC0YwsINGH0YLQviDQtNC10LvQsNC10YIg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YEg0Lgg0YIu0LQuXHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IDEwNTA7Ly8g0JzQtdC90Y/QtdGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LrQsNC20LTRi9C1IDEwMDAg0LzRgVxyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IDA7Ly8g0JrQvtCz0LTQsCDQsiDQv9C+0YHQu9C10LTQvdC40Lkg0YDQsNC3INC80LXQvdGP0Lsg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjsvLyDQn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cclxuXHJcbiAgICB0aGlzLnN0dWNrID0gZmFsc2U7Ly8g0JXRgdC70LggdHJ1ZSwg0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDRgdGC0LXQvdGDXHJcbiAgICB0aGlzLmNoYW5nZVdheUluaXQgPSA1MDA7Ly8g0JXRgdC70Lgg0YPQv9C10YDRgdGPINCyINC/0YDQtdC/0Y/RgtGB0YLQstC40LUsINGN0YLQviDQstGA0LXQvNGPINC+0L0g0LTQstC40LPQsNC10YLRgdGPINCyINC70Y7QsdC+0Lwg0LTRgNGD0LPQvtC8INC90LDQv9GA0LDQstC70LXQvdC40Lgg0LIg0L3QsNC00LXQttC00LUg0L7QsdC+0LnRgtC4INC/0YDQtdC/0Y/RgtGB0YLQstC40LVcclxuICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xyXG4gICAgdGhpcy5vbGRYID0gMDsvLyDQkiDRjdGC0Lgg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LHRg9C00LXQvCDQv9C40YHQsNGC0Ywg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLLiDQldGB0LvQuCDQvdC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINGA0LDQstC90Ysg0YHRgtCw0YDRi9C8LCDQt9C90LDRh9C40YIg0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICB0aGlzLm9sZFkgPSAwO1xyXG5cclxuICAgIHRoaXMubGFzdFRpbWVBZ3Jlc3NpdmUgPSAwO1xyXG4gICAgdGhpcy5kdXJhdGlvbkFncmVzc2l2ZSA9IDUwMDsvLyDQndCw0YHQutC+0LvRjNC60L4g0YfQsNGB0YLQviDQvNC10L3Rj9GO0YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQsNCz0YDQtdGB0YHQuNCy0L3Ri9C1INC+0YDQutC4XHJcbiAgICB0aGlzLnRpbWVPZk1hcmNoID0gNDU2MDsvLyDQmtC+0LPQtNCwINC+0YDQuiDRgtC+0LvRjNC60L4g0L/QvtGP0LLQuNC70YHRjywg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQv9GA0L7RgdGC0L4g0LTQstC40LbQtdGC0YHRjyDQsiDQvtC00L3QvtC8INC90LDQv9GA0LDQstC70LXQvdC40LguINCf0L7RgdC70LUgLSDQvdCw0YfQuNC90LDQtdGCINC00LXQudGB0YLQstC+0LLQsNGC0Ywg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGlyZWN0aW9uKCkgeyAvLyDQntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCxsZWZ0Jy5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRpbWVPZk1hcmNoID4gMCkgeyAvLyDQntGA0Log0LXRidGRINC80LDRgNGI0LjRgNGD0LXRgiwg0YIu0LUuINC30LDRhdC+0LTQuNGCINC90LAg0LvQvtC60LDRhtC40Y5cclxuICAgICAgdGhpcy50aW1lT2ZNYXJjaCAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdHVjaykgeyAvLyDQldGB0LvQuCDQvtGA0Log0LfQsNGB0YLRgNGP0LssINC00LDQu9GM0L3QtdC50YjQuNGFINC/0YDQvtCy0LXRgNC+0LogZWxzZSBpZiDQvdC1INCx0YPQtNC10YJcclxuICAgICAgdGhpcy5jaGFuZ2VXYXkgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgIGlmICh0aGlzLmNoYW5nZVdheSA8IDApIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVdheSA9IHRoaXMuY2hhbmdlV2F5SW5pdDtcclxuICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNBZ3Jlc3NpdmUuaXNPcmNBZ3Jlc3NpdmUoKSkgeyAvLyDQn9GA0L7QstC10YDQutCwINC+0YDQutCwINC90LAg0LDQs9GA0LXRgdGB0LjRjlxyXG4gICAgICB0aGlzLmFncmVzc2l2ZUJlaGF2aW91cih0aW1lKTtcclxuICAgICAgdGhpcy5pc1N0dWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmR1bWJCZWhhdmlvdXIodGltZSk7XHJcbiAgICAgIHRoaXMuaXNTdHVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZHVtYkJlaGF2aW91cih0aW1lKSB7XHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lRHVtYikgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFncmVzc2l2ZUJlaGF2aW91cih0aW1lKSB7XHJcbiAgICBjb25zdCBjb3JyZWN0aW9uID0gMTA7Ly8g0L7RgNC6INCx0YzRkdGCINC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LggNSwg0LXQvNGDINC90LUg0L3Rg9C20L3QviDQsdGL0YLRjCDQstC/0LvQvtGC0L3Rg9GOINC6INC40LPRgNC+0LrRgyAo0LjQvdCw0YfQtSDQvtGA0Log0LHRjNGR0YIg0YLQvtC70YzQutC+INC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Lgg0YEg0LjQs9GA0L7QutC+0LwsINCwINC+0YDQutC4INC40LfQsdC10LPQsNGO0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5KVxyXG4gICAgaWYgKHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS53aWR0aFxyXG4gICAgICAmJiB0aGlzLmJvZHkueCArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLndpZHRoICsgY29ycmVjdGlvbiA+IHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS54XHJcbiAgICAgICYmIHRoaXMuYm9keS55ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnkgLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkgKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS5oZWlnaHRcclxuICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS5oZWlnaHQgKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkpIHsgdGhpcy5hdHRhY2soKTt9XHJcbiAgICAvLyB9XHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlKSA+IHRoaXMuZHVyYXRpb25BZ3Jlc3NpdmUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKTtcclxuICAgICAgdGhpcy5sYXN0VGltZUFncmVzc2l2ZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPj0gdGhpcy5wbGF5ZXIueCAmJiB0aGlzLmJvZHkueSA+PSB0aGlzLnBsYXllci55KSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55ID49IHRoaXMucGxheWVyLnkpIHtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPCB0aGlzLnBsYXllci55KSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU3R1Y2soKSB7IC8vINCf0YDQvtCy0LXRgNC60LAsINCy0L7Qt9C80L7QttC90L4g0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPT0gdGhpcy5vbGRYICYmIHRoaXMuYm9keS55ID09IHRoaXMub2xkWSkge1xyXG4gICAgICB0aGlzLnN0dWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICd1cCcgfHwgdGhpcy5kaXJlY3Rpb24gPT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9sZFggPSB0aGlzLmJvZHkueDtcclxuICAgIHRoaXMub2xkWSA9IHRoaXMuYm9keS55O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNrKCkge1xyXG4gICAgdGhpcy5ib2R5LmhpdCgpO1xyXG4gICAgdGhpcy5wbGF5ZXIuZ2V0SGl0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0LFxyXG4gIH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiBmcmFtZXNbMF0uc3gsXHJcbiAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0LLRgNC10LzRjyDQvtGCINC/0L7RgdC70LXQtNC90LXQs9C+INGE0YDQtdC50LzQsCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgIC8qINCU0LvRjyDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsC4g0J3QsNC/0YDQuNC80LXRgCwg0L/QvtGB0LvQtSDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwINCw0L3QuNC80LDRhtC40Lgg0YHRgtGA0LXQu9GM0LHRiywg0L/QtdGA0YHQvtC90LDQtiDQv9C10YDQtdGB0YLQsNGR0YIg0YHRgtGA0LXQu9GP0YLRjFxyXG4gICAg0K3RgtCwINC/0LXRgNC10LzQtdC90L3QsNGPINC30LDQtNCw0LXRgtGB0Y8g0LIg0LrQu9Cw0YHRgdC1IEJvZHkuINCd0LDQv9GA0LjQvNC10YA6IHRoaXMudmlldy5vbkVuZCA9ICgpPT50aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTsgKi9cclxuICAgIHRoaXMub25FbmQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWUoaW5kZXgpIHtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7IC8vINCh0YLQsNGA0YIg0LDQvdC40LzQsNGG0LjQuCDRgSDRgdCw0LzQvtCz0L4g0L3QsNGH0LDQu9CwXHJcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmV4dEZyYW1lKCkge1xyXG4gICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQutCw0LTRgCwg0YLQvi4uLlxyXG4gICAgICBpZiAodGhpcy5vbkVuZCkgeyAvLyAuLi7QtdGB0LvQuCDQt9Cw0LTQsNC90LAg0LrQvtC90YbQvtCy0LrQsCwg0LfQsNC/0YPRgdC60LDQtdC8LiDQndCw0L/RgNC40LzQtdGAOiB0aGlzLnZpZXcub25FbmQgPSAoKT0+dGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnJlcGVhdCkgeyAvLyAuLi4g0LXRgdC70Lgg0LfQsNC00LDQvSDQv9C+0LLRgtC+0YAsINC/0L7QstGC0L7RgNGP0LXQvFxyXG4gICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpOy8vIC4uLiDQuNC90LDRh9C1IC0g0YHRgtC+0L8g0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQrdGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQvdGD0LbQvdCwINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LLRi9C30L7QstCwIHVwZGF0ZSgpLCDRh9GC0L7QsdGLINC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGMIHRoaXMubGFzdFRpbWVcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHsgLy8g0KDQsNC30L3QuNGG0LAg0L/QviDQstGA0LXQvNC10L3QuCDQvNC10LbQtNGDINC/0YDQvtGI0LvRi9C8INC4INGC0LXQutGD0YnQuNC8INC60LDQtNGA0L7QvDogKDExLTIpPjEwLCAoMTItMik+MTAsICgxMy0yKT4xMCAtINC30LTQtdGB0Ywg0L/RgNC+0YjQu9C+IDEw0LzRgSwg0LAgc3BlZWQg0LIg0Y3RgtC+0Lwg0L/RgNC40LzQtdGA0LUg0LrQsNC6INGA0LDQtyDRgNCw0LLQtdC9IDEw0LzRgSwg0LfQvdCw0YfQuNGCINC80LXQvdGP0LXQvCDQutCw0LTRgFxyXG4gICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ2FtZUF1ZGlvID0gbmV3IEF1ZGlvKCdhdWRpby9nYW1lLm1wMycpO1xyXG5jb25zdCBnYW1lQXVkaW9XaW4gPSBuZXcgQXVkaW8oJ2F1ZGlvL3dpbi5tcDMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJvd1BsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9hcnJvdy5tcDMnO1xyXG4gIHJldHVybiBzb3VuZC5wbGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd29yZFBsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9zd29yZC5tcDMnO1xyXG4gIHNvdW5kLnZvbHVtZSA9IDAuMjtcclxuICByZXR1cm4gc291bmQucGxheSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVhdGhPcmNQbGF5QXVkaW8oKSB7XHJcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oKTtcclxuICBzb3VuZC5zcmMgPSAnYXVkaW8vZGVhdGgtb3JjLm1wMyc7XHJcbiAgc291bmQudm9sdW1lID0gMC4xO1xyXG4gIHJldHVybiBzb3VuZC5wbGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlclBsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9nYW1lLW92ZXIubXAzJztcclxuICBzb3VuZC52b2x1bWUgPSAwLjQ7XHJcbiAgcmV0dXJuIHNvdW5kLnBsYXkoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVdpblBsYXlBdWRpbyhzdGF0ZSkge1xyXG4gIGdhbWVBdWRpb1dpbi52b2x1bWUgPSAwLjE7XHJcbiAgaWYgKHN0YXRlID09IHRydWUpIHtcclxuICAgIGdhbWVBdWRpb1dpbi5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdhbWVBdWRpb1dpbi5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVQbGF5QXVkaW8oc3RhdGUpIHtcclxuICBnYW1lQXVkaW8udm9sdW1lID0gMC4xO1xyXG4gIGdhbWVBdWRpby5sb29wID0gdHJ1ZTtcclxuICBpZiAoc3RhdGUgPT0gdHJ1ZSkge1xyXG4gICAgZ2FtZUF1ZGlvLnBsYXkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2FtZUF1ZGlvLnBhdXNlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vINCe0YHQvdC+0LLQsCDQstGB0LXRhSDQv9C10YDRgdC+0L3QsNC20LXQuVxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi9jaGFyYWN0ZXItc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkgey8vIFBsYXllciAtPiBCb2R5IH4gQ2hhcmFjdGVyU2hlZXQgLT4gU3ByaXRlU2hlZXQgfiBTcHJpdGVcclxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgc3BlZWQgfSkge1xyXG4gICAgdGhpcy54ID0gLTEwMDsvLyDQn9C+0LvQvtC20LXQvdC40LUg0L7QsdGK0LXQutGC0LBcclxuICAgIHRoaXMueSA9IC0xMDA7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7Ly8g0KHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcignbGVmdCcsIDApOy8vINCd0LDQv9GA0LDQstC70LXQvdC40LUg0L/QtdGA0LXQvNC10YnQtdC90LjRj1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0JLRgNC10LzRjyDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTsvLyDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cclxuXHJcbiAgICAvLyDQpNC+0YDQvNCwLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LTQu9GPINC60L7Qu9C70LjQt9C40LguINCe0L3QsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDQvdC1INC+0YIg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0YHQv9GA0LDQudGC0LAsINCwINC+0YIgeDogMTgsIHk6IDE1XHJcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xyXG4gICAgICB4OiAxOCwgeTogMTUsIHdpZHRoOiAyOCwgaGVpZ2h0OiA0OSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSGl0dGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCX0LDQs9GA0YPQttCw0LXQvCDQvdC10L7QsdGF0L7QtNC80YvQtSDQsNC90LjQvNCw0YbQuNC4INC00LvRjyDQtNCw0L3QvdC+0LPQviDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHsgaW1hZ2VOYW1lIH0pO1xyXG4gICAgJ3dhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpOy8vINCSINC40YLQvtCz0LUgdGhpcy5hbmltYXRpb25zID0ge3dhbGtfZG93bjogLi4sIHdhbGtfdXA6IC4uINC4INGCLtC0LiB9XHJcbiAgICB9KTtcclxuICAgICdzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICB9KTtcclxuICAgICdjdXRfZG93bixjdXRfdXAsY3V0X2xlZnQsY3V0X3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxyXG4gICAgfSk7XHJcbiAgICBbJ2RlYXRoJ10uZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhbmQoJ2xlZnQnKTtcclxuICB9XHJcblxyXG4gIHNob290KGFycm93KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNTaG9vdGluZykge1xyXG4gICAgICB0aGlzLmlzU2hvb3RpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHNob290XyR7dGhpcy52ZWxvY2l0eS5kaXJlY3Rpb259YF07XHJcbiAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICBhcnJvdy5mbHkodGhpcy54LCB0aGlzLnksIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNIaXR0aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNIaXR0aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2BjdXRfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcclxuICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMudmlldy5ydW4oKTsvLyDQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LDQvdC40LzQsNGG0LjRjlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2FsayhkaXJlY3Rpb24pIHtcclxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHJldHVybjsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0L3QtdC70YzQt9GPINC40LTRgtC4LiDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgd2Fsa18ke2RpcmVjdGlvbn1gXTsvLyDQl9C00LXRgdGMINGF0YDQsNC90LjRgtGB0Y8g0YLQtdC60YPRidCw0Y8g0LDQvdC40LzQsNGG0LjRjy4gICB0aGlzLnZpZXcg0YXRgNCw0L3QuNGCINC+0LHRitC10LrRgiBDaGFyYWN0ZXJTaGVldFxyXG4gICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgfVxyXG5cclxuICBzdGFuZChkaXJlY3Rpb24pIHsgLy8g0KHRgtC+0Y/RgtGMXHJcbiAgICBpZiAodGhpcy5pc1Nob290aW5nIHx8IHRoaXMuaXNIaXR0aW5nKSByZXR1cm47Ly8g0J3QlSDQn9Ce0J3QmNCc0JDQriDQmtCQ0Jog0KDQkNCR0J7QotCQ0JXQoi4g0JXQodCb0Jgg0KPQkdCg0JDQotCsINCt0KLQoyDQodCi0KDQntCa0KMsINCf0JXQoNCh0J7QndCQ0JbQldCcINCd0JXQm9Cs0JfQryDQo9Cf0KDQkNCS0JvQr9Ci0KxcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHdhbGtfJHtkaXJlY3Rpb259YF07XHJcbiAgICB0aGlzLnZpZXcuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgZGVhdGgoKSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcignZG93bicsIDApOy8vINCe0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zLmRlYXRoO1xyXG4gICAgLy8gdGhpcy52aWV3LnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZykgeyAvLyDQktC+INCy0YDQtdC80Y8g0YHRgtGA0LXQu9GM0LHRiyDQuCDRg9C00LDRgNC+0LIg0L3QtdC70YzQt9GPINC40LTRgtC4XHJcbiAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcblxyXG4gICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINCw0L3QuNC80LDRhtC40Lg7IHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XHJcbiAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpOyAvLyDQkiDQv9C10YDQtdC80LXQvdC90L7QuSB0aGlzLnZpZXcg0YXRgNCw0L3QuNGC0YHRjyB0aGlzLmFuaW1hdGlvbnMgPSB7fS4g0JzQtdGC0L7QtCB0cnVuYyDQvtGC0LHRgNCw0YHRi9Cy0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMXHJcbiAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwLCBsaW1pdFggPSA1MDAwMCwgbGltaXRZID0gNTAwMDAsIHNjcm9sbEVkZ2UgPSAyMDAsXHJcbiAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5saW1pdFggPSBsaW1pdFg7XHJcbiAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcclxuICAgIHRoaXMud2F0Y2hPYmplY3QgPSBmYWxzZTtcclxuICAgIHRoaXMub2JqID0gbnVsbDtcclxuICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XHJcbiAgfVxyXG5cclxuICB3YXRjaChvYmopIHtcclxuICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xyXG4gICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMud2F0Y2hPYmplY3QpIHtcclxuICAgICAgaWYgKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLmxpbWl0WCwgdGhpcy5vYmoueCAtIHRoaXMud2lkdGggKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vYmoueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai55ID4gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLm9iai55IC0gdGhpcy5oZWlnaHQgKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueSAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwZWNpYWxQb3NpdGlvbigpIHtcclxuICAgIHRoaXMueCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmhlaWdodDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3IoeyBpbWFnZU5hbWUgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWUsXHJcbiAgICAgIGltYWdlV2lkdGg6IDgzMixcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VxdWVuY2VzID0gdGhpcy5nZXRTZXF1ZW5jZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlcXVlbmNlcygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XHJcbiAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcclxuICAgIGRhdGEubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKChpKSA9PiBpID4gMCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXF1ZW5jZXM7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24obmFtZSwgc3BlZWQgPSAxMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtCw0YLQuNGH0L3Ri9GFINC+0LHRitC10LrRgtC+0LIuINCc0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9C10LTRg9GO0YnQuNC1INGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LA6IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fVxyXG4gICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFN0YXRpY1NoYXBlcyhkYXRhKSB7XHJcbiAgICBkYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAnb2JqZWN0Z3JvdXAnKVxyXG4gICAgICAvKiBvYmplY3RzINGN0YLQviDQvNCw0YHRgdC40LIg0YEg0L3QsNCx0L7RgNC+0Lwg0L7QsdGK0LXQutGC0L7QsiBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0wXHJcbiAgICAgICAgICAgICAgICDQlNGD0LzQsNGOLCDQutC+0L3RgdGC0YDRg9C60YbQuNGPICguLi5sYXllci5vYmplY3RzKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIgIHRoaXMuc3RhdGljU2hhcGVzID0gW3suLi59LHsuLi59LCDQuCDRgi7QtC5dICovXHJcbiAgICAgIHsgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTsgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcclxuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xyXG4gICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEsIGhlaWdodDogMTMwMCxcclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7eDoxMjgwLHk6MCx3aWR0aDoxLGhlaWdodDoxMzAwfSk7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMTI4MCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkS2luZW1hdGljQm9keShib2R5KSB7XHJcbiAgICB0aGlzLmJvZGllcy5wdXNoKHtcclxuICAgICAgeDogYm9keS54LCAvLyDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgIHk6IGJvZHkueSxcclxuICAgICAgb2JqOiBib2R5LCAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0L/QtdGA0YHQvtC90LDQttCwINGBINC90L7QstGL0LzQuCDQutC+0L7RgNC00LjQvdCw0YLQsNC80LgsINCx0YPQtNC10Lwg0YHRgNCw0LLQvdC40LLQsNGC0Ywg0L3QvtCy0YvQtSDQuCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKHRpbWUpOy8vINGA0LDRgdGB0YfRkdGCINC60L7Qu9C70LjQt9C40Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0YHQviDRgdGC0LDRgtC40YfQvdGL0LzQuCDQvtCx0YrQtdC60YLQsNC80Lgg0Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbGxpc2lvbih0aW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuICAgICAgY29uc3Qgb2xkWCA9IGJvZHkueDtcclxuICAgICAgY29uc3Qgb2xkWSA9IGJvZHkueTtcclxuICAgICAgbGV0IHsgeCB9ID0gYm9keS5vYmo7XHJcbiAgICAgIGxldCB7IHkgfSA9IGJvZHkub2JqO1xyXG4gICAgICBpZiAoeCA+IG9sZFgpIHsgLy8gbW92aW5nIHJpZ2h0XHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcclxuICAgICAgICAgIGlmICggLy8g0JXRgdC70Lgg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LDRhdC+0LTRj9GC0YHRjyDQv9C10YDQtdC0INC+0LHRitC10LrRgtC+0LwqKipcclxuICAgICAgICAgICAgKChvbGRYIC8vINC60L7QvtGA0LTQuNC90LDRgtCwINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAxLy8g0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvNC10LbQtNGDINC60LDQtNGA0LDQvNC4INC30LDQvdC40LzQsNC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjCDQv9C40LrRgdC10LvRjywg0YfRgtC+0LHRiyDQutC+0LQg0YDQsNCx0L7RgtCw0Lsg0L7QutGA0YPQs9C70LjQvCDQv9GA0L7RiNC70YPRjiDRgtC+0YfQutGDINC90LAgMSDQv9C40LrRgdC10LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC8vINC60L7QvtGA0LTQuNC90LDRgtCwINGE0L7RgNC80Ysg0LrQvtC70LvQuNC30LjQuCDQstC90YPRgtGA0Lgg0L/QtdGA0YHQvtC90LDQttCwICjQvdCw0YfQsNC70L7QvCDQvtGC0YHRh9GR0YLQsCDRgdC70YPQttC40YIg0LvQtdCy0YvQuSDQstC10YDRhdC90LjQuSDRg9Cz0L7QuyDQv9C10YDRgdC+0L3QsNC20LApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKiAqKtC4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0L7RgdC70LUg0L7QsdGK0LXQutGC0LAsINC30L3QsNGH0LjRgiDQv9C10YDRgdC+0L3QsNC2INGB0YLQvtC70LrQvdGD0LvRgdGPINGBINC/0YDQtdC/0Y/RgtGB0YLQstC40LXQvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0YHQvtC90LDQtiDQtNC+0LvQttC10L0g0LrQsNGB0LDRgtGM0YHRjyDQv9GA0LXQv9GP0YLRgdGC0LLQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7IC8vINCR0LXRgNC10Lwg0LHQu9C40LbQsNC50YjQuNC5INC+0LHRitC10LrRgiwg0LPQtNC1INC+0YHRgtCw0L3QvtCy0LjQvCDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLngpLy8gKNC90LDQstC10YDQvdC+0LUg0LzQvtC20L3QviDQsdGL0LvQviDQv9GA0L7RgdGC0L4g0L7RgdGC0LDQstC40YLRjCDQvtC00LjQvSBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyINGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4ICjQvdCw0L/RgNC40LzQtdGAINC/0L7RgdC70LUg0L/QvtC/0LDQtNCw0L3QuNGPINCyINC00LXRgNC10LLQviwg0YHRgtGA0LXQu9CwINC90LUg0LTQstC40LbQtdGC0YHRjylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgaWYgKGJvZHkgIT0gc2hhcGUpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgaWYgKCgob2xkWCAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopOy8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiAo0L3QsNC/0YDQuNC80LXRgCDRgdGC0YDQtdC70LAg0LHRjNGR0YIg0L7RgNC60LAsINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LAg0Lgg0YIu0LQuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeCA8IG9sZFgpIHsgLy8gbW92aW5nIGxlZnRcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCArIHNoYXBlLndpZHRoKSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLng7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFggKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSA+IG9sZFkpIHsgLy8gbW92aW5nIGRvd25cclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS55KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHkgPCBvbGRZKSB7IC8vIG1vdmluZyB1cFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5ib2RpZXNbal07XHJcbiAgICAgICAgICBpZiAoYm9keSAhPSBzaGFwZSkgeyAvLyDQldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICBpZiAoKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55O1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkueCA9IHg7XHJcbiAgICAgIGJvZHkueSA9IHk7XHJcbiAgICAgIGJvZHkub2JqLnggPSB4O1xyXG4gICAgICBib2R5Lm9iai55ID0geTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGluZGV4T2ZCb2R5LCBpbmRleE9mU2hhcGUpIHtcclxuICAgIGlmIChib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHNoYXBlLm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7IC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdC70YPRh9Cw0LksINC10YHQu9C4INC/0L7Qv9Cw0LTRkdGC0YHRjyDQvtCx0YrQtdC60YIg0LHQtdC3INC90LDQt9Cy0LDQvdC40Y9cclxuICAgICAgaWYgKGJvZHkub2JqLm5hbWUgPT0gJ2Fycm93JyAmJiBzaGFwZS5vYmoubmFtZSA9PSAnb3JjJykgeyAvLyDQldGB0LvQuCDRgdGC0YDQtdC70LAg0LrQvtGB0L3Rg9C70LDRgdGMINC+0YDQutCwXHJcbiAgICAgICAgLy8g0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCy0LzQtdGB0YLQviDQtNCy0YPRhSwg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQvtC00LjQvSDQstGL0LfQvtCyIHRoaXMucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5LGluZGV4T2ZTaGFwZSkuINCd0L4g0LzQvdC1INGC0LDQuiDRg9C00L7QsdC90LXQtSDQvtGC0LvQsNC20LjQstCw0YLRjFxyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gUmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLmJvZGllcywgaW5kZXhPZkJvZHkpOy8vINCh0YLRgNC10LvQsCDQuNGB0YfQtdC30LDQtdGCLCDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwLCDRg9C00LDQu9C40YLRjCDRgdCw0Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgYm9keS5vYmouZGVsZXRlKCk7Ly8g0KPQtNCw0LvRj9C10Lwg0YHRgtGA0LXQu9GDXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mU2hhcGUpOy8vINCe0YLQutC70Y7Rh9C40YLRjCDQtdCz0L4g0L7RgiDQutC+0LvQu9Cw0LnQtNC10YDQsCAo0YPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyDQuNC3INC80LDRgdGB0LjQstCwIHRoaXMuYm9kaWVzKVxyXG4gICAgICAgIHNoYXBlLm9iai5kZWF0aCgpOyAvLyDQntGA0Log0L/QvtCz0LjQsdCw0LXRglxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpbmRleE9mQm9keSkgeyAvL1xyXG4gICAgaWYgKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICBpZiAoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnKSB7XHJcbiAgICAgICAgYm9keS5vYmouc3RvcCgpOy8vINCh0YLRgNC10LvQsCDQv9C10YDQtdGB0YLQsNGR0YIg0LTQstC40LPQsNGC0YzRgdGPXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSk7Ly8g0YPQtNCw0LvQuNGC0Ywg0LjQtyDQutC+0LvQu9Cw0LnQtNC10YDQsFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgWzM3LCAnbGVmdCddLFxyXG4gICAgICBbMzksICdyaWdodCddLFxyXG4gICAgICBbMzgsICd1cCddLFxyXG4gICAgICBbNDAsICdkb3duJ10sXHJcbiAgICAgIFszMiwgJ2ZpcmUnXSxcclxuICAgICAgWzEzLCAnZW50ZXInXSxcclxuICAgIF0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xyXG4gICAgaWYgKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1vdmVyJztcclxuaW1wb3J0IHsgR2FtZVdpbiB9IGZyb20gJy4vc2NlbmVzL2dhbWUtd2luJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICBlbGY6ICdpbWcvZGFyay1lbGYucG5nJyxcclxuICAgICAgcGxheWVyOiAnaW1nL3BsYXllcjIucG5nJyxcclxuICAgICAgdGl0bGVfYmc6ICdpbWcvYmdfdGl0bGUucG5nJyxcclxuICAgICAgdGl0bGVfbmFtZTogJ2ltZy9nYW1lX25hbWUucG5nJyxcclxuICAgICAgdGl0bGVfc3RhcnQ6ICdpbWcvc3RhcnRfZ2FtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9vcHRpb246ICdpbWcvb3B0aW9uX2dhbWUucG5nJyxcclxuICAgICAgdGl0bGVfZXhpdDogJ2ltZy9leGl0X2dhbWUucG5nJyxcclxuICAgICAgdGlsZXM6ICdpbWcvdGlsZXMucG5nJyxcclxuICAgICAgcXVlc3RfcGVyc29uOiAnaW1nL2dpcmwtZm9yLWNhdmUucG5nJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuc2NlbmVzID0ge1xyXG4gICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcclxuICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXHJcbiAgICAgIGdhbWVMZXZlbDogbmV3IEdhbWVMZXZlbCh0aGlzKSxcclxuICAgICAgZ2FtZU92ZXI6IG5ldyBHYW1lT3Zlcih0aGlzKSxcclxuICAgICAgZ2FtZVdpbjogbmV3IEdhbWVXaW4odGhpcyksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFNjZW5lLkxPQURFRDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XHJcbiAgICAgIGNhc2UgU2NlbmUuR0FNRV9PVkVSOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lT3ZlcjtcclxuICAgICAgY2FzZSBTY2VuZS5HQU1FX1dJTjpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZVdpbjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZyYW1lKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgYWxsRGVhdGhPcmtzID0gMDtcclxuZXhwb3J0IGxldCBzaG93UXVlc3RJbnRlcmZhY2UgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdWVzdCgpIHtcclxuICAgIGFsbERlYXRoT3JrcyA9IDA7XHJcbiAgICBzaG93UXVlc3RJbnRlcmZhY2UgPSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ1lFUyEhIScpO1xyXG4gICAgc2hvd1F1ZXN0SW50ZXJmYWNlID0gdHJ1ZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWF0aE9yY3MoKSB7XHJcbiAgICBpZiAoc2hvd1F1ZXN0SW50ZXJmYWNlKSB7XHJcbiAgICAgICAgYWxsRGVhdGhPcmtzKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsRGVhdGhPcmtzKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xyXG4gICAgdGhpcy5pbWFnZUZpbGVzID0gaW1hZ2VGaWxlcztcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcclxuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLCB0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcclxuICBlbHZlblNjb3V0LnJ1bigpO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coJ9CYINGB0LXQudGH0LDRgSDRgNCw0LHQvtGC0LDQtdGCJyk7XHJcbiIsImltcG9ydCB7IFRleHRJbmZvIH0gZnJvbSAnLi90ZXh0LWluZm8nO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZSB9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuaW1wb3J0IHsgYWxsRGVhdGhPcmtzLCBzaG93UXVlc3RJbnRlcmZhY2UgfSBmcm9tICcuL2dldC1xdWVzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB3YXZlcykge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMud2F2ZXMgPSB3YXZlcztcclxuICAgIHRoaXMudGV4dEluZm8gPSBuZXcgVGV4dEluZm8oZ2FtZS5zY3JlZW4pO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nYW1lLnNjcmVlbi5jb250ZXh0O1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLnBsYXllciA9IGdhbWUuY3VycmVudFNjZW5lLnBsYXllcjtcclxuICAgIHRoaXMuZmlnaHRUZXh0U2hvd2VkID0gZmFsc2U7Ly8g0L3QsNC00L/QuNGB0YwgRmlnaHQg0L/QvtC60LDQttC10YLRgdGPINC70LjRiNGMINC+0LTQuNC9INGA0LDQt1xyXG4gICAgLy90aGlzLnRpbWVUb1N1cnZpdmUgPSAyMDAwMDAwOy8vINCV0YHQu9C4INGN0YLQviDQstGA0LXQvNGPINCy0YvQudC00LXRgiDQsiDQvdC+0LvRjCwg0YLQviDQuNCz0YDQsCDQt9Cw0LrQvtC90YfQuNGC0YHRjyDQv9C+0LHQtdC00L7QuVxyXG5cclxuICAgIHRoaXMub3Jjc0tpbGxlZCA9IDA7XHJcblxyXG4gICAgdGhpcy53aWR0aEhlYWx0aExpbmUgPSAxNTA7XHJcblxyXG4gICAgdGhpcy5lbmRPcGFjaXR5ID0gMDsvLyDQn9GA0Lgg0L/RgNC+0LjQs9GA0YvRiNC1INGN0LrRgNCw0L0g0LTQuNGB0LrRgNC10YLQvdC+LCDRgdGC0YPQv9C10L3Rh9Cw0YLQviwg0YLQtdC80L3QtdC10YIuIDAgLSDQsNCx0YHQvtC70Y7RgtC90L4g0YHQstC10YLQu9C+LCAxIC0g0LDQsdGB0L7Qu9GO0YLQvdC+INGC0LXQvNC90L5cclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dIZWFsdGhMaW5lKCk7XHJcbiAgICBpZiAoc2hvd1F1ZXN0SW50ZXJmYWNlKSB7XHJcbiAgICAgIHRoaXMucXVlc3RJbnRlcmZhY2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyLmhlYWx0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVuZEdhbWUodGltZSwgJ2xvc2UnKTsvLyDQn9GA0L7QuNCz0YDQsNC7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQWdyZXNzaXZlLmlzT3JjQWdyZXNzaXZlKCkpIHtcclxuICAgICAgdGhpcy5maWdodFRleHQodGltZSk7XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgdGhpcy5zaG93VGltZXIoKTsvL9Ce0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCXHJcbiAgICAvLyAgIHRoaXMudGltZVRvU3Vydml2ZSAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgIC8vICAgaWYgKHRoaXMudGltZVRvU3Vydml2ZSA8IDApIHtcclxuICAgIC8vICAgICB0aGlzLnRpbWVUb1N1cnZpdmUgPSAwO1xyXG4gICAgLy8gICAgIHRoaXMuZW5kR2FtZSh0aW1lLCAnd2luJyk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLnRleHRJbmZvLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICB9XHJcblxyXG4gIGZpZ2h0VGV4dCh0aW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuZmlnaHRUZXh0U2hvd2VkKSB7XHJcbiAgICAgIHRoaXMuZmlnaHRUZXh0U2hvd2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy50ZXh0SW5mby5zaG93VGV4dCgnWW91IGFuZ2VyZWQgdGhlIG9yY3MhJywgdGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93SGVhbHRoTGluZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjODUyNzI3JztcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2IyM2QzZCc7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gMjtcclxuICAgIHRoaXMuY29udGV4dC5yZWN0KDIwLCAxNSwgdGhpcy53aWR0aEhlYWx0aExpbmUsIDEwKTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgyMCwgMTUsIHRoaXMud2lkdGhIZWFsdGhMaW5lICogKHRoaXMucGxheWVyLmhlYWx0aCAvIHRoaXMucGxheWVyLmhlYWx0aFN0YXJ0KSwgMTApO1xyXG4gICAgLy8gdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8vIHNob3dUaW1lcigpIHtcclxuICAvLyAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQodGhpcy5nYW1lLnNjcmVlbi53aWR0aCAtIDUwLCAzMCwgLy/RhSwgeVxyXG4gIC8vICAgICBNYXRoLmZsb29yKHRoaXMudGltZVRvU3Vydml2ZSAvIDEwMDApLC8vJ3RleHQnXHJcbiAgLy8gICAgIDIyKTsvL2ZvbnRzaXplXHJcbiAgLy8gfVxyXG5cclxuICBxdWVzdEludGVyZmFjZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMjBweCBzZXJpZlwiXHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYE9yY3Mga2lsbGVkIC0gJHthbGxEZWF0aE9ya3N9IG9mIDEwYCwgMjAsIDYwKTtcclxuICB9XHJcblxyXG4gIGVuZEdhbWUodGltZSwgc3RhdHVzKSB7XHJcbiAgICAvLyDQn9C+0YHRgtC10L/QtdC90L3QviDQv9C+0Y/QstC70Y/QtdGC0YHRjyDRh9C10YDQvdCw0Y8g0LfQsNGB0YLQsNCy0LrQsCDQuCDRgdC+0L7QsdGJ0LDQtdC8INGB0YbQtdC90LUsINGH0YLQviDQuNCz0YDQsCDQt9Cw0LrQvtC90YfQtdC90LBcclxuICAgIHRoaXMuZW5kT3BhY2l0eSArPSAodGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMDtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAxLjUpIHsgLy8gMS41LCDQsCDQvdC1IDEsINGH0YLQvtCx0Ysg0YfQtdGA0L3QsNGPINC30LDRgdGC0LDQstC60LAg0LXRidGRINC/0L7QstC40YHQtdC70LAg0L3QtdC80L3QvtCz0L5cclxuICAgICAgdGhpcy5jaGFuZ2VTY2VuZShzdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcGFjaXR5ID0gMDtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAwLjI1KSBvcGFjaXR5ID0gMC4yNTtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAwLjUpIG9wYWNpdHkgPSAwLjU7XHJcbiAgICBpZiAodGhpcy5lbmRPcGFjaXR5ID4gMC43NSkgb3BhY2l0eSA9IDAuNzU7XHJcbiAgICBpZiAodGhpcy5lbmRPcGFjaXR5ID4gMSkgb3BhY2l0eSA9IDE7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2IoMCwwLDAsJHtvcGFjaXR5fSlgO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAnbG9zZSc6IHJldHVybiB0aGlzLmdhbWUuY3VycmVudFNjZW5lLmdhbWVPdmVyVHJpZ2dlciA9IHRydWU7XHJcbiAgICAgIGNhc2UgJ3dpbic6IHJldHVybiB0aGlzLmdhbWUuY3VycmVudFNjZW5lLndpblRyaWdnZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRRdWVzdCwgdXBkYXRlUXVlc3QgfSBmcm9tICcuL2dldC1xdWVzdCc7XHJcbmNvbnN0IFRBS0VfUVVFU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRha2VfcXVlc3RcIik7XHJcbmNvbnN0IEFEQU5ET05fVEhFX1FVRVNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYmFuZG9uX3RoZV9xdWVzdFwiKTtcclxuZXhwb3J0IGxldCBydW5PbmNlUXVlc3QgPSBmYWxzZTtcclxuXHJcblRBS0VfUVVFU1Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgdGFrZSBxdWVzdCEnKTtcclxuICAgICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICBydW5PbmNlUXVlc3QgPSB0cnVlO1xyXG4gICAgZ2V0UXVlc3QoKTtcclxufTtcclxuQURBTkRPTl9USEVfUVVFU1Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBYmFuZG9uIHRoZSBxdWVzdCEnKTtcclxuICAgXHJcbiAgICAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgXHJcbiAgICBydW5PbmNlUXVlc3QgPSBmYWxzZTtcclxuICAgIC8vIHVwZGF0ZVF1ZXN0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsRGlhbG9nKCkge1xyXG4gICAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vZGFsRGlhbG9nKCkge1xyXG4gICAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tICcuL2Fpcy9kdW1teSc7XHJcbmltcG9ydCB7IEVuZFNjcmlwdCB9IGZyb20gJy4vYWlzL2VuZFNjcmlwdCc7XHJcbmltcG9ydCB7IFBlYWNlZnVsIH0gZnJvbSAnLi9haXMvcGVhY2VmdWwnO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZSB9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuaW1wb3J0IHsgZGVhdGhPcmNQbGF5QXVkaW8gfSBmcm9tICcuL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcyc7XHJcbmltcG9ydCB7IGRlYXRoT3JjcyB9IGZyb20gJy4vZ2V0LXF1ZXN0JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT3JjIGV4dGVuZHMgQm9keSB7XHJcbiAgY29uc3RydWN0b3IocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKSB7IC8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdvcmMnLCBzcGVlZDogNTAgfSk7XHJcbiAgICBpZiAoYWlUeXBlID09ICdkdW1teScpIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgIGlmIChhaVR5cGUgPT0gJ2VuZFNjcmlwdCcpIHRoaXMuYWkgPSBuZXcgRW5kU2NyaXB0KCk7XHJcbiAgICBpZiAoYWlUeXBlID09ICdwZWFjZWZ1bCcpIHRoaXMuYWkgPSBuZXcgUGVhY2VmdWwocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLmFsbERlYXRoT3JrcyA9IDA7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gJ29yYyc7Ly8g0JTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwLCDRh9GC0L4g0L7Qv9C+0LfQvdCw0YLRjCDRjdGC0L7RgiDQvtCx0YrQtdC60YJcclxuICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5haSkge1xyXG4gICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTsvLyDQldGB0LvQuCDQmNCYINC90LUg0L7RgtC60LvRjtGH0LXQvVxyXG4gICAgfVxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGRlYXRoKCkge1xyXG4gICAgZGVhdGhPcmNzKCk7XHJcbiAgICBkZWF0aE9yY1BsYXlBdWRpbygpO1xyXG4gICAgdGhpcy5haSA9IG51bGw7Ly8g0J7RgtC60LvRjtGH0LDQtdC8INCY0JhcclxuICAgIGlzQWdyZXNzaXZlLmJlY29tZUFncmVzc2l2ZSgpO1xyXG4gICAgc3VwZXIuZGVhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XHJcbmltcG9ydCB7IHN3b3JkUGxheUF1ZGlvIH0gZnJvbSAnLi9hdWRpby1wbGF5YmFjay9hdWRpb3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkgeyAvLyBQbGF5ZXIgLT4gQm9keSB+IENoYXJhY3RlclNoZWV0IC0+IFNwcml0ZVNoZWV0IH4gU3ByaXRlXHJcbiAgY29uc3RydWN0b3IoY29udHJvbCwgZ2FtZV9sZXZlbCkgeyAvLyBjb250cm9sIC0g0YPQv9GA0LDQstC70LXQvdC40LUg0LrQu9Cw0LLQuNCw0YLRg9GA0L7QuVxyXG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdwbGF5ZXInLCBzcGVlZDogNTAwIH0pO1xyXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgIHRoaXMuZ2FtZV9sZXZlbCA9IGdhbWVfbGV2ZWw7XHJcbiAgICB0aGlzLmFycm93ID0gZmFsc2U7Ly8g0J/QvtC30LLQvtC70Y/QtdC8INGB0YLRgNC10LvRj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INC90LAg0YDRg9C60LDRhSDQtdGB0YLRjCDRgdGC0YDQtdC70LBcclxuICAgIHRoaXMudGltZUFycm93ID0gMTAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAsINCy0YDQtdC80Y8g0LzQtdC20LTRgyDQv9C+0Y/QstC70LXQvdC40LXQvCDRgdC70LXQtNGD0Y7RidC10Lkg0YHRgtGA0LXQu9GLLCDRh9GC0L7QsdGLINGB0YLRgNC10LvRiyDQvdC1INGB0L7Qt9C00LDQstCw0LvQuNGB0Ywg0LrQsNC6INC40Lcg0L/Rg9C70LXQvNGR0YLQsFxyXG4gICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSAwOy8vINCi0LDQudC80LXRgCDQtNC70Y8g0YHRgtGA0LXQu1xyXG4gICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gMDtcclxuICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInOy8vINCU0LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0YfRgtC+INC+0L/QvtC30L3QsNGC0Ywg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcblxyXG4gICAgdGhpcy5oZWFsdGhTdGFydCA9IDIwOy8vINCd0LDRh9Cw0LvRjNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LlcclxuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGhTdGFydDtcclxuXHJcbiAgICB0aGlzLnVuZGVhZCA9IDEwMDA7Ly8g0JrQvtC90YHRgtCw0L3RgtCwINCy0YDQtdC80LXQvdC4INCx0LXRgdGB0LzQtdGA0YLQuNGPLCDQv9C+0YHQu9C1INC/0L7Qu9GD0YfQtdC90LjRjyDRg9GA0L7QvdCwINC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cclxuICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTsvKiDQotCw0LnQvNC10YAg0LTQu9GPINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9GR0YLQsC4g0JXRgdC70Lgg0L7QvSDRgNCw0LLQtdC9INC00LjQsNC/0LDQt9C+0L3RgyDQvtGCIDAg0LTQviB0aGlzLnVuZGVhZCwg0LfQvdCw0YfQuNGCINC40LTRkdGCINC+0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCINC4INC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQldGB0LvQuCAtMSwg0LjQs9GA0L7QuiDQvNC+0LbQtdGCINC/0L7Qu9GD0YfQuNGC0Ywg0YPRgNC+0L0gKi9cclxuICAgIHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPSAwO1xyXG4gIH1cclxuXHJcbiAgYWRkQXJyb3coYXJyb3cpIHtcclxuICAgIHRoaXMuYXJyb3cgPSBhcnJvdztcclxuICB9XHJcblxyXG4gIGdldEhpdCgpIHsgLy8g0JjQs9GA0L7QuiDQv9C+0LvRg9GH0LjQuyDRg9C00LDRgFxyXG4gICAgc3dvcmRQbGF5QXVkaW8oKTtcclxuICAgIGlmICh0aGlzLnRpbWVyVW5kZWFkID09PSAtMSkgeyAvLyDQldGB0LvQuCDQuNCz0YDQvtC6INGB0LzQtdGA0YLQtdC9XHJcbiAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHRoaXMuaGVhbHRoIC09IDE7XHJcbiAgICAgIHRoaXMudGltZXJVbmRlYWQgPSB0aGlzLnVuZGVhZDsvLyDQlNC10LvQsNC10Lwg0LjQs9GA0L7QutCwINCx0LXRgdGB0LzQtdGA0YLQvdGL0Lwg0L3QsCDQstGA0LXQvNGPXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICBpZiAodGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPT09IDApIHsgLy8g0JXRgdC70Lgg0YHRgtGA0LXQu9GDINC80L7QttC90L4g0YHQvtC30LTQsNCy0LDRgtGMXHJcbiAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSB0aGlzLnRpbWVBcnJvdztcclxuICAgICAgICB0aGlzLmdhbWVfbGV2ZWwuc2hvb3RpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5hcnJvdykgdGhpcy5zaG9vdCh0aGlzLmFycm93KTsvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LjQvNC10L3QvdC+INGN0YLRgyDRgdGC0YDQtdC70YMsINGCLtC6LiDQv9C10YDRgdC+0L3QsNC2INC80L7QttC10YIg0LjQvNC10YLRjCDRgNCw0LfQvdGL0LUg0YHRgtGA0LXQu9GLXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLnVwKSB7XHJcbiAgICAgIHRoaXMud2FsaygndXAnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLmRvd24pIHtcclxuICAgICAgdGhpcy53YWxrKCdkb3duJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5sZWZ0KSB7XHJcbiAgICAgIHRoaXMud2FsaygnbGVmdCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wucmlnaHQpIHtcclxuICAgICAgdGhpcy53YWxrKCdyaWdodCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID4gMCkgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lRm9yQXJyb3cpO1xyXG4gICAgZWxzZSB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IDA7XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gdGltZTtcclxuXHJcbiAgICBpZiAodGhpcy50aW1lclVuZGVhZCAhPSAtMSkgeyAvLyDQmNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9LCB0aGlzLnRpbWVyVW5kZWFkID4gMFxyXG4gICAgICB0aGlzLnRpbWVyVW5kZWFkIC09ICh0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgIGlmICh0aGlzLnRpbWVyVW5kZWFkIDwgMCkge1xyXG4gICAgICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTsvLyDQmNCz0YDQvtC6INGB0L3QvtCy0LAg0YHQvNC10YDRgtC10L1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lclVuZGVhZCA9IC0xO1xyXG4gICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IHRpbWU7XHJcblxyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH0vLyB1cGRhdGVcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7Ly8g0JXQs9C+INGA0LDRgdGI0LjRgNGP0LXRgiBwcm9qZWN0aWxlcy9hcnJvdy5qc1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOy8vINCV0YHQu9C4INGB0YLRgNC10LvQsCDQsNC60YLQuNCy0L3QsCwg0L7QvdCwINC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDRh9C10YDQtdC3IHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSDQuCDQu9C10YLQuNGCINCyINGG0LXQu9GMLiDQkCDQstC+0L7QsdGJ0LUg0YHRgtGA0LXQu9CwINCyINC90LXQstC40LTQuNC80L7QvCDRgdC+0YHRgtC+0Y/QvdC40Lgg0LLRgdC10LPQtNCwINC90LDRhdC+0LTQuNGC0YHRjyDQvdCwINGN0LrRgNCw0L3QtVxyXG4gICAgdGhpcy5jb2xsaXNpb25TaGFwZSA9IHtcclxuICAgICAgeDogMjcsIHk6IDI3LCB3aWR0aDogMTAsIGhlaWdodDogMTAsXHJcbiAgICB9Oy8vINCd0YPQttC90L4g0LTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwICjRgNCw0YHRh9GR0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5KS4g0KDQsNC30LzQtdGAINGB0L/RgNCw0LnRgtCwIDY00YU2NFxyXG4gICAgdGhpcy5kZWxldGVkID0gZmFsc2U7Ly8g0KDQvtC00LjRgtC10LvRjCDQsdGD0LTQtdGCINC+0YLRgdC70LXQttC40LLQsNGC0Ywg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOLCDQtdGB0LvQuCDQvtC90LAgdHJ1ZSwg0LfQvdCw0YfQuNGCINGA0L7QtNC40YLQtdC70Ywg0YPQtNCw0LvQuNGCINGN0YLQvtGCINC+0LHRitC10LrRglxyXG4gIH1cclxuXHJcbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHsgLy8g0J/RgNC4INC/0L7Qv9Cw0LTQsNC90LjQuCDQsiDRgdGC0LDRgtC40YfQvdC+0LUg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwgcHJvamVjdGlsZSDRgtC10YDRj9C10YIg0YHQutC+0YDQvtGB0YLRjFxyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoKSB7XHJcbiAgICB0aGlzLmRlbGV0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHsgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gIHRoaXMubGFzdFRpbWVcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpOy8vINCd0LAg0Y3RgtC+0Lwg0Y3RgtCw0L/QtSDQv9C+0LrQsCDQvdC1INC40LfQstC10YHRgtC90L4g0YfRgtC+INGN0YLQviDQsdGD0LTQtdGCINGB0L/RgNCw0LnRgiDQuNC70Lgg0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuLi9wcm9qZWN0aWxlJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycm93IGV4dGVuZHMgUHJvamVjdGlsZSB7XHJcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSkge1xyXG4gICAgc3VwZXIoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSk7XHJcbiAgICB0aGlzLnNwcml0ZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9ICdhcnJvdyc7XHJcbiAgICBjb25zdCB0aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNwcml0ZXMubGVmdCA9IHRpbGVzLmdldFNwcml0ZSg5KTtcclxuICAgIHRoaXMuc3ByaXRlcy5yaWdodCA9IHRpbGVzLmdldFNwcml0ZSgxMCk7XHJcbiAgICB0aGlzLnNwcml0ZXMuZG93biA9IHRpbGVzLmdldFNwcml0ZSgxOSk7XHJcbiAgICB0aGlzLnNwcml0ZXMudXAgPSB0aWxlcy5nZXRTcHJpdGUoMjApO1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XHJcbiAgfVxyXG5cclxuICBmbHkoeCwgeSwgZGlyZWN0aW9uKSB7XHJcbiAgICBzdXBlci5mbHkoeCwgeSwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tICcuL2Fpcy9kdW1teSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3RQZXJzb24gZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiAncXVlc3RfcGVyc29uJywgc3BlZWQ6IDUgfSk7XHJcbiAgICAgICAgdGhpcy5haSA9IG5ldyBEdW1teSgpO1xyXG4gICAgICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIHRoaXMuYWkudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmVtb3ZlRnJvbUFycmF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmUoYXJyLCBpbmRleGVzKSB7IC8vINCj0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGC0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCDQv9C+INC40L3QtNC10LrRgdGDXHJcbiAgICAvLyBhcmd1bWVudHMgLSDQv9GB0LXQstC00L4g0LzQsNGB0YHQuNCyLCDQsiDQutC+0YLQvtGA0L7QvCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQsNGA0LPRg9C80LXQvdGC0YssINC/0LXRgNC10LTQsNC90L3Ri9C1INCyINGE0YPQvdC60YbQuNGOXHJcbiAgICAvLyBbXS5zbGljZSgpIC0g0YHQvtC30LTQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxyXG4gICAgLyogYXJyYXlPZkluZGV4ZXMgLSDQvNCw0YHRgdC40LIsINC60L7RgtC+0YDRi9C5INGB0L7QtNC10YDQttC40YIg0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiyAo0LrRgNC+0LzQtSDQv9C10YDQstC+0LPQvikg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cclxuICAgICAgICAgICDQrdGC0L4g0LzQsNGB0YHQuNCyINC40L3QtNC10LrRgdC+0LIsINC60L7RgtC+0YDRi9C1INC90YPQttC90L4g0YPQtNCw0LvQuNGC0Ywg0LjQtyDQvtGB0L3QvtCy0L3QvtCz0L4g0LzQsNGB0YHQuNCy0LAgYXJyICovXHJcbiAgICBjb25zdCBhcnJheU9mSW5kZXhlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgICAvLyDQktC10YDQvdGD0YLRjCDQvtGC0YTQuNC70YzRgtGA0L7QstCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+XHJcblxyXG4gICAgLy8g0J3QsNC/0YDQuNC80LXRgCBhcnJheU9mSW5kZXhlcyA9IFsxXSwg0YLQviDQtdGB0YLRjCDQvdGD0LbQvdC+INGD0LTQsNC70LjRgtGMINC+0LTQuNC9INGN0LvQtdC80LXQvdGCINC/0L4g0LjQvdC00LXQutGB0YMgMVxyXG4gICAgLy8gaW5kZXhPZiAtINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40L3QtNC10LrRgSDQuNGB0LrQvtC80L7Qs9C+INGN0LvQtdC80LXQvdGC0LAuINCd0LDQv9GA0LjQvNC10YA6IFsnYScsJ2InXS5pbmRleE9mKCdiJykgLy8tPiAxXHJcbiAgICAvLyDQmtCw0LbQtNGL0Lkg0Y3Qu9C10LzQtdC90YIg0LzQsNGB0YHQuNCy0LAgYXJyINGB0LLQtdGA0Y/QtdGCINGB0LLQvtC5INC40L3QtNC10LrRgSDRgSDQuNC90LTQtdC60YHQsNC80Lgg0LIgYXJyYXlPZkluZGV4ZXMuXHJcbiAgICAvLyDQldGB0LvQuCDQtdCz0L4g0LjQvdC00LXQutGB0LAg0LIgYXJyYXlPZkluZGV4ZXMg0L3QtdGCLCDRgtC+INC80LXRgtC+0LQgaW5kZXhPZiDQstC10YDQvdGR0YIgLTEsINC30L3QsNGH0LjRgiDQsdGD0LTQtdGCIHRydWUg0Lgg0Y3Qu9C10LzQtdC90YIg0L3QtSDQsdGD0LTQtdGCINGD0LTQsNC70ZHQvSDQuNC3INC80LDRgdGB0LjQstCwXHJcbiAgICAgIGFycmF5T2ZJbmRleGVzLmluZGV4T2YoaW5kZXgpID09IC0xKTtcclxuICB9Ly8gcmVtb3ZlXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuXHJcbiAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cclxuXHJcbiAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgfVxyXG5cclxuICBmaW5pc2goc3RhdHVzKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuLi9jYW1lcmEnO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gJy4uL2NvbGxpZGVyJztcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuLi9wcm9qZWN0aWxlcy9hcnJvdyc7XHJcbmltcG9ydCB7IFdhdmVzIH0gZnJvbSAnLi4vd2F2ZXMnO1xyXG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGlzQWdyZXNzaXZlIH0gZnJvbSAnLi4vYWlzL2lzQWdyZXNzaXZlJztcclxuaW1wb3J0IHsgYXJyb3dQbGF5QXVkaW8sIGdhbWVQbGF5QXVkaW8sIGdhbWVPdmVyUGxheUF1ZGlvLCBnYW1lV2luUGxheUF1ZGlvIH0gZnJvbSAnLi4vYXVkaW8tcGxheWJhY2svYXVkaW9zJztcclxuaW1wb3J0IHsgUXVlc3RQZXJzb24gfSBmcm9tICcuLi9xdWVzdC1wZXJzb24nO1xyXG5pbXBvcnQgeyBzaG93TW9kYWxEaWFsb2cgfSBmcm9tICcuLi9tb2RhbC1kaWFsb2d1ZSc7XHJcbmltcG9ydCB7IHNob3dUcmFpbmluZyB9IGZyb20gJy4uL3RyYWluaW5nJztcclxuaW1wb3J0IHsgYWxsRGVhdGhPcmtzLCB1cGRhdGVRdWVzdCB9IGZyb20gJy4uL2dldC1xdWVzdCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgIGltYWdlV2lkdGg6IDY0MCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDY0MCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICAgIGlzQWdyZXNzaXZlLmJlY29tZVBlYWNlZnVsKCk7Ly8g0KHQtNC10LvQsNGC0Ywg0L7RgNC60L7QsiDQvNC40YDQvdGL0LzQuFxyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnBsYXllci54ID0gMjI0O1xyXG4gICAgdGhpcy5wbGF5ZXIueSA9IDExODtcclxuXHJcbiAgICAvLyB0aGlzLnBsYXllci54ID0gOTkwO1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIueSA9IDEwNDA7XHJcblxyXG4gICAgdGhpcy5xdWVzdFBlcnNvbiA9IG5ldyBRdWVzdFBlcnNvbigpO1xyXG4gICAgdGhpcy5xdWVzdFBlcnNvbi54ID0gOTQwO1xyXG4gICAgdGhpcy5xdWVzdFBlcnNvbi55ID0gMTAwO1xyXG5cclxuICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTsvLyDQo9GH0LjRgtGL0LLQsNC10YIg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQtSDQvNC10LbQtNGDINC+0LHRitC10LrRgtCw0LzQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L3QtSDQtNCw0ZHRgiDQv9GA0L7RhdC+0LTQuNGC0Ywg0L7QsdGK0LXQutGC0LDQvCDRgdC60LLQvtC30Ywg0LTRgNGD0LMg0LTRgNGD0LPQsFxyXG5cclxuICAgIC8vINCY0YHQv9C+0LvRjNC30YPQtdC8IHdlYnBhY2sg0L/QvtGN0YLQvtC80YMg0LfQsNCz0YDRg9C30YfQuNC6IGpzb24g0YTQsNC50LvQvtCyINGA0LDQsdC+0YLQsNC10YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICAgIGNvbnN0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XHJcbiAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTsvLyBjcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkNhbWVyYS5zcGVjaWFsUG9zaXRpb24oKTsvLyDQl9Cw0LPQvdCw0YLRjCDQutCw0LzQtdGA0YMg0LIg0YHQsNC80YvQuSDRg9Cz0L7Qu1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRTdGF0aWNTaGFwZXMobWFwRGF0YSk7XHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucXVlc3RQZXJzb24pO1xyXG5cclxuICAgIHRoaXMub3JjQXJteSA9IFtdOy8vINCc0LDRgdGB0LjQsiDQvtGA0LrQvtCyLCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgIHRoaXMud2F2ZXMgPSBuZXcgV2F2ZXModGhpcy5nYW1lKTsvLyDQmtC+0L3RgtGA0L7Qu9C40YDRg9C10YIg0L/QvtGP0LLQu9C10L3QuNC1INC/0YDQvtGC0LjQstC90LjQutC+0LJcclxuICAgIFxyXG4gICAgdGhpcy53YXZlcy5pbml0KCk7XHJcblxyXG4gICAgdGhpcy5pbnRlcmZhY2UgPSBuZXcgSW50ZXJmYWNlKHRoaXMuZ2FtZSwgdGhpcy53YXZlcyk7Ly8g0KjQutCw0LvQsCDQt9C00L7RgNC+0LLRjNGPLCDRgtCw0LnQvNC10YAg0LIg0YPQs9C70YMg0Y3QutGA0LDQvdCwXHJcbiAgICB0aGlzLnByb2plY3RpbGVzID0gW107Ly8g0JzQsNGB0YHQuNCyINGB0YLRgNC10LssINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgdGhpcy5nYW1lT3ZlclRyaWdnZXIgPSBmYWxzZTsvLyDQldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9GA0L7QuNCz0YDRi9GI0L3QvtC5INGB0YbQtdC90LVcclxuICAgIHRoaXMud2luVHJpZ2dlciA9IGZhbHNlOy8vINCV0YHQu9C4IGludGVyZmFjZSDRgdC00LXQu9Cw0LXRgiDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4gdHJ1ZSwg0L/QtdGA0LXRhdC+0LTQuNC8INC6INC/0L7QsdC10LTQvdC+0Lkg0YHRhtC10L3QtVxyXG4gICAgLy91cGRhdGVNb2RhbERpYWxvZygpO1xyXG4gICAgc2hvd1RyYWluaW5nKCk7XHJcbiAgICBnYW1lV2luUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgIGdhbWVQbGF5QXVkaW8odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKGFsbERlYXRoT3JrcyA9PSAxMCkge1xyXG4gICAgICBnYW1lUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgICAgZ2FtZVdpblBsYXlBdWRpbyh0cnVlKTtcclxuICAgICAgdXBkYXRlUXVlc3QoKTtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9XSU4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmdhbWVPdmVyVHJpZ2dlcikgeyAvLyDQl9Cw0LrQvtC90YfQuNC8INC40LPRgNGDXHJcbiAgICAgIGdhbWVQbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgICBnYW1lT3ZlclBsYXlBdWRpbygpO1xyXG4gICAgICB1cGRhdGVRdWVzdCgpO1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKGFycm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChhcnJvdy5hY3RpdmUpIHsgLy8gYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgIGFycm93LnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFycm93LmRlbGV0ZWQpIHtcclxuICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMucHJvamVjdGlsZXMsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9yY0FybXkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgICAgb3JjLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVzdFBlcnNvbi54LCB0aGlzLnF1ZXN0UGVyc29uLnkpO1xyXG5cclxuXHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMubWFwKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcmNBcm15Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5vcmNBcm15LmZvckVhY2goKG9yYykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShvcmMudmlldyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPiAwKSB7IC8vINCe0YLRgNC40YHQvtCy0LrQsCDRgdGC0YDQtdC7XHJcbiAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgoYXJyb3cpID0+IHtcclxuICAgICAgICBpZiAoYXJyb3cuYWN0aXZlKSB7IC8vIGFjdGl2ZSDRgdGC0LDQvdC+0LLQuNGC0YHRjyB0cnVlINCyINC80LXRgtC+0LTQtSBQbGF5ZXIgLT4gQm9keS5zaG9vdCgpXHJcbiAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUoYXJyb3cudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucXVlc3RQZXJzb24udmlldyk7XHJcbiAgICB0aGlzLndhdmVzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuaW50ZXJmYWNlLnVwZGF0ZSh0aW1lKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gODcwICYmIHRoaXMucGxheWVyLnggPD0gOTcwICYmIHRoaXMucGxheWVyLnkgPj0gMTAwICYmIHRoaXMucGxheWVyLnkgPD0gMTMwKSB7XHJcbiAgICAgIHNob3dNb2RhbERpYWxvZygpO1xyXG4gICAgICAvL3NldFRpbWVvdXQoKCkgPT4gc2hvd01vZGFsRGlhbG9nKCksIDUwMCk7XHJcbiAgICAgIC8vZ2V0UXVlc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290aW5nKCkgeyAvLyDQodGC0YDQtdC70YzQsdCwINC40LPRgNC+0LrQsFxyXG4gICAgY29uc3QgYXJyb3cgPSBuZXcgQXJyb3coJ2Rvd24nLCA0MDAsIHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgdGhpcy5wbGF5ZXIuYWRkQXJyb3coYXJyb3cpO1xyXG4gICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKGFycm93KTsvLyDQktGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwINCx0YPQtNGD0YIg0L7RgtGA0LjRgdC+0LLQsNC90Ysg0LIg0LzQtdGC0L7QtNC1IHJlbmRlclxyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KGFycm93KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gYXJyb3dQbGF5QXVkaW8oKSwgNTAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikgeyAvLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcImVudGVyXCIg0L3QsNGH0LDRgtGMINC90L7QstGD0Y4g0LjQs9GA0YNcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsIDcwLCAnR2FtZSBvdmVyISBDbGljayBvbiBFbnRlciB0byBzdGFydCBhIE5FVyBHQU1FLicpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lV2luIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7IC8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwiZW50ZXJcIiDQvdCw0YfQsNGC0Ywg0L3QvtCy0YPRjiDQuNCz0YDRg1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgJ1lvdSBXSU4hIENsaWNrIG9uIEVudGVyIHRvIHN0YXJ0IGEgTkVXIEdBTUUuJyk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxvYWRlZEF0ID09IDAgJiYgdGhpcy5nYW1lLnNjcmVlbi5pc0ltYWdlc0xvYWRlZCA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNjAsIDgwLCAnTG9hZGluZy4uLicpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lLmNvbnRyb2wuZW50ZXIpIHtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfYmcnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9uYW1lJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfc3RhcnQnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9vcHRpb24nKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9leGl0Jyk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aXRlLW1hcCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcclxuICAgIHRoaXMuaXNDYW1lcmFTZXQgPSBmYWxzZTtcclxuICAgIHRoaXMuYWRkU3R5bGVzVG9DYW52YXMoKTtcclxuICB9XHJcblxyXG4gIGFkZFN0eWxlc1RvQ2FudmFzKCkge1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3R0b20gPSAnMCc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5tYXJnaW4gPSAnYXV0byc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZGRkZGRic7XHJcbiAgfVxyXG5cclxuICBzZXRDYW1lcmEoY2FtZXJhKSB7XHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XHJcbiAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcclxuICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcclxuICAgIGxldCByb3c7IGxldFxyXG4gICAgICBjb2w7XHJcbiAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgY29sID0gMDtcclxuICAgICAgICBsYXllci5kYXRhLmZvckVhY2goKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJykge1xyXG4gICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAoKG9iaikgPT4gKHtcclxuICAgICAgICAgIHgxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHQsXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xyXG4gICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICBoaXRib3hlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaW50KHgsIHksIHRleHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMnB4IEdlb3JnaWEnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xyXG4gICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpXHJcbiAgICAgIHx8IChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KVxyXG4gICAgICB8fCAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApXHJcbiAgICAgIHx8ICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvdXJjZVggPSBzcHJpdGUuc291cmNlWCArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVgpKTtcclxuICAgIGNvbnN0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzb3VyY2VYLFxyXG4gICAgICBzb3VyY2VZLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSxcclxuICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgaW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoKGluZGV4KSA9PiAoeyBzeDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6IHRoaXMuZ2V0U291cmNlWShpbmRleCkgfSkpLFxyXG4gICAgICBzcGVlZCxcclxuICAgICAgcmVwZWF0LFxyXG4gICAgICBhdXRvcnVuLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VYKGluZGV4KSB7XHJcbiAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICB9XHJcblxyXG4gIGdldFNvdXJjZVkoaW5kZXgpIHtcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRYWSh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRleHRJbmZvIHtcclxuICBjb25zdHJ1Y3RvcihzY3JlZW4pIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IGZhbHNlOy8vINCf0L7QutCw0LfRi9Cy0LDRgtGMINC70Lgg0YLQtdC60YHRglxyXG4gICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMuaG93TG9uZ1RvU2hvdyA9IDUwMDA7Ly8g0KHQutC+0LvRjNC60L4g0LLRgNC10LzQtdC90Lgg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0YLQtdC60YHRglxyXG4gICAgdGhpcy50aW1lVG9TdG9wID0gMDsvLyDQktGA0LXQvNGPINC60L7Qs9C00LAg0L3Rg9C20L3QviDQt9Cw0LLQtdGA0YjQuNGC0Ywg0L/QvtC60LDQt1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0Rm9udFNpemUgPSAxNTA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93VGV4dEJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5mb250U2l6ZSAtPSAodGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTA7XHJcbiAgICAgIHRoaXMuc2V0WFkoKTtcclxuICAgICAgdGhpcy5zY3JlZW4ucHJpbnQodGhpcy54LCB0aGlzLnksIHRoaXMudGV4dCwgdGhpcy5mb250U2l6ZSk7XHJcbiAgICAgIGlmICh0aW1lID4gdGhpcy50aW1lVG9TdG9wKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG5cclxuICBzaG93VGV4dCh0ZXh0LCB0aW1lKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdGhpcy50aW1lVG9TdG9wID0gdGltZSArIHRoaXMuaG93TG9uZ1RvU2hvdztcclxuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnN0YXJ0Rm9udFNpemU7XHJcbiAgICB0aGlzLnNldFhZKCk7XHJcbiAgfVxyXG5cclxuICBzZXRYWSgpIHtcclxuICAgIHRoaXMueCA9IHRoaXMuc2NyZWVuLndpZHRoIC8gMiAtIHRoaXMuZm9udFNpemUgKiAxLjU7XHJcbiAgICB0aGlzLnkgPSB0aGlzLnNjcmVlbi5oZWlnaHQgLyAyICsgdGhpcy5mb250U2l6ZSAvIDQuNTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVNYXAgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93VHJhaW5pbmcoKSB7XHJcbiAgICAkKCcjZXhhbXBsZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgdGhpcy55ID0gLXNwZWVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgdGhpcy55ID0gc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgdGhpcy54ID0gc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB0aGlzLnggPSAtc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlKG9iamVjdCwgZHQpIHtcclxuICAgIG9iamVjdC54ICs9IGR0ICogKHRoaXMueCAvIDEwMDApO1xyXG4gICAgb2JqZWN0LnkgKz0gZHQgKiAodGhpcy55IC8gMTAwMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9yYyB9IGZyb20gJy4vb3JjJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXYXZlcyB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMub3JjQXJteSA9IGdhbWUuY3VycmVudFNjZW5lLm9yY0FybXk7Ly8g0JzQsNGB0YHQuNCyLCDRgdC+0LTQtdGA0LbQsNGJ0LjQuSDQstGB0LXRhSDRgdGD0YnQtdGB0YLQstGD0Y7RidC40YUg0L7RgNC60L7Qsi4g0K3RgtC+0YIg0LrQu9Cw0YHRgSDQv9C+0L/QvtC70L3Rj9C10YIg0Y3RgtC+0YIg0LzQsNGB0YHQuNCyINC90L7QstGL0LzQuCDQvtGA0LrQsNC80LhcclxuXHJcbiAgICB0aGlzLmNvbGxpZGVyID0gZ2FtZS5jdXJyZW50U2NlbmUuY29sbGlkZXI7Ly8g0JHRg9C00LXQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0L7RgNC60L7QsiDQsiDQutC+0LvQu9Cw0LnQtNC10YBcclxuICAgIHRoaXMucGxheWVyID0gZ2FtZS5jdXJyZW50U2NlbmUucGxheWVyOy8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLnRpbWVMZWZ0Rm9yTmV4dFdhdmUgPSA1MDA7Ly8g0KLQsNC50LzQtdGAINC00LvRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0L7RgtGB0YfRkdGC0LAuINCf0LXRgNCy0LDRjyDQstC+0LvQvdCwINC90LDRh9C90ZHRgtGB0Y8g0YfQtdGA0LXQtyAxMDAwINC80YFcclxuICAgIHRoaXMudGltZUZvck5leHRXYXZlID0gMTAwMDA7Ly8g0JrQvtC90YHRgtCw0L3RgtCwLCDRgdC70LXQtNGD0Y7RidCw0Y8g0LLQvtC70L3QsNGPINCx0YPQtNC10YIg0YfQtdGA0LXQtyDRjdGC0L4g0LLRgNC10LzRj1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vIHRoaXMud2F2ZXMgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lTGVmdEZvck5leHRXYXZlIDwgMCkge1xyXG4gICAgICB0aGlzLm5leHRXYXZlKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlIC09ICh0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICB9XHJcblxyXG4gIG5leHRXYXZlKHRpbWUpIHtcclxuICAgIGNvbnN0IG9yY1NxdWFkID0gW107Ly8g0KHQvtC30LTQsNGC0Ywg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0L7RgNC60L7QslxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgY29uc3Qgb3JjID0gbmV3IE9yYyh0aGlzLnBsYXllcik7Ly8g0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XHJcbiAgICAgIG9yYy54ID0gMTI0NjsvLyDQn9C+0YHQu9C1INC+0YLQu9Cw0LTQutC4INGB0LTQtdC70LDQuSAxMzUwXHJcbiAgICAgIG9yYy55ID0gMTEzMDtcclxuICAgICAgb3JjU3F1YWQucHVzaChvcmMpO1xyXG4gICAgfVxyXG4gICAgb3JjU3F1YWQuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keShvcmMpO1xyXG4gICAgICB0aGlzLm9yY0FybXkucHVzaChvcmMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gdGhpcy50aW1lRm9yTmV4dFdhdmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=