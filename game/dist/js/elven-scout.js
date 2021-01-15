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
        console.log(this);
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/elf.js":
/*!********************!*\
  !*** ./src/elf.js ***!
  \********************/
/*! exports provided: Elf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elf", function() { return Elf; });
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



var Elf =
/*#__PURE__*/
function (_Body) {
  _inherits(Elf, _Body);

  function Elf() {
    var _this;

    _classCallCheck(this, Elf);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Elf).call(this, {
      imageName: 'elf',
      speed: 60
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Elf, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);

      _get(_getPrototypeOf(Elf.prototype), "update", this).call(this, time);
    }
  }]);

  return Elf;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

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
      tiles: 'img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
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
/*! exports provided: height, layers, nextobjectid, orientation, properties, propertytypes, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":20,"layers":[{"data":[1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,1,1,1,1,1,1,1,18,1,1,1,1,1,22,22,22,1,1,1,26,27,27,27,27,17,27,27,28,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[7,21,0,23,7,0,7,3,11,12,12,12,12,13,0,2,7,7,7,7,7,21,0,23,0,0,7,3,31,32,32,32,32,33,4,0,2,2,2,7,7,21,0,23,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,21,0,23,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,21,0,23,7,7,2,2,2,2,2,21,0,23,2,4,2,2,2,7,7,21,0,23,0,0,0,0,0,0,0,21,0,23,0,6,6,6,4,7,7,21,5,23,6,6,6,6,6,6,5,21,0,23,0,6,5,6,4,7,7,21,0,24,12,12,12,12,12,12,12,25,0,23,0,6,6,6,4,7,7,31,32,32,32,32,32,32,32,32,32,32,32,33,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,11,12,12,13,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,21,14,15,23,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,21,24,25,23,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,31,32,32,33,7,7,7,7,0,0,0,2,0,0,7,0,11,12,12,13,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,31,32,32,33,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,11,12,12,12,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,31,32,32,32,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],"height":20,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","name":"hitboxes","objects":[{"height":1279,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":1,"y":1},{"height":59,"id":4,"name":"","rotation":0,"type":"","visible":true,"width":1276,"x":1,"y":1218},{"height":65,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":127,"x":129,"y":1153},{"height":57,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":67,"y":1090},{"height":55,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":52,"x":71,"y":1027},{"height":184,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":257,"y":899},{"height":54,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":323,"y":900},{"height":118,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":122,"x":515,"y":899},{"height":63,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":577,"y":831},{"height":62,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":63,"x":705,"y":961},{"height":60,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":834,"y":1026},{"height":58,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":121,"x":515,"y":1090},{"height":59,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":247,"x":579,"y":1154},{"height":120,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":55,"x":387,"y":1027},{"height":120,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":123,"x":66,"y":834},{"height":60,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":193,"y":771},{"height":63,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":321,"y":703},{"height":62,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":514,"y":706},{"height":58,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":707,"y":705},{"height":61,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":835,"y":769},{"height":58,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":960,"y":835},{"height":54,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":50,"x":1031,"y":965},{"height":55,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":1152,"y":899},{"height":63,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":1218,"y":1151},{"height":1019,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":1219,"y":4},{"height":183,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":183,"x":964,"y":324},{"height":64,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":193,"x":1024,"y":-1},{"height":60,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":1089,"y":127},{"height":130,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":11,"x":1016,"y":63},{"height":64,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":381,"x":385,"y":192},{"height":62,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":186,"x":833,"y":190},{"height":188,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":384,"y":1},{"height":61,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120,"x":259,"y":257},{"height":61,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":255,"y":129},{"height":60,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":259,"y":2},{"height":56,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":262,"y":387},{"height":61,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":125,"x":63,"y":577},{"height":65,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":446,"x":257,"y":578}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextobjectid":42,"orientation":"orthogonal","properties":{"name":"level1"},"propertytypes":{"name":"string"},"renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/tileset.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

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
      speed: 100
    }));
    _this.control = control;
    _this.game_level = game_level;
    _this.arrow = false; // Позволяем стрелять только если на руках есть стрела

    _this.timeArrow = 1000; // Константа, время между появлением следующей стрелы, чтобы стрелы не создавались как из пулемёта

    _this.timerForCreatingArrow = 0; // Таймер для стрел

    _this.lastTimeForArrow = 0;
    _this.name = 'player'; // Для коллайдера, что опознать этот объект

    _this.healthStart = 3; // Начальное количество жизней

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
    } // getHit() {//Игрок получил удар
    //   if (this.timerUndead === -1) {//Если игрок смертен
    //     if (this.health > 0)
    //       this.health -= 1;
    //     this.timerUndead = this.undead;//Делаем игрока бессмертным на время
    //   }
    // }

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

          if (this.arrow) {
            this.shoot(this.arrow);
          } // Использовать именно эту стрелу, т.к. персонаж может иметь разные стрелы

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

      if (this.timerForCreatingArrow > 0) {
        this.timerForCreatingArrow -= time - this.lastTimeForArrow;
      } else {
        this.timerForCreatingArrow = 0;
      }

      this.lastTimeForArrow = time;

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    }
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
    _this.sprites.left = tiles.getSprite(36);
    _this.sprites.right = tiles.getSprite(37);
    _this.sprites.down = tiles.getSprite(46);
    _this.sprites.up = tiles.getSprite(47);
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
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-sheet */ "./src/character-sheet.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orc */ "./src/orc.js");
/* harmony import */ var _elf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elf */ "./src/elf.js");
/* harmony import */ var _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projectiles/arrow */ "./src/projectiles/arrow.js");
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ais/isAgressive */ "./src/ais/isAgressive.js");
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











 // import { Interface } from '../interface';

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
    _this.orc = new _orc__WEBPACK_IMPORTED_MODULE_6__["Orc"]();
    _this.orc.x = 500;
    _this.orc.y = 300;
    _this.elf = new _elf__WEBPACK_IMPORTED_MODULE_7__["Elf"]();
    _this.elf.x = 310;
    _this.elf.y = 110;
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_10__["isAgressive"].becomePeaceful();
      this.player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](this.game.control, this);
      this.player.x = 100;
      this.player.y = 100;
      this.collider = new _collider__WEBPACK_IMPORTED_MODULE_5__["Collider"]();

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles);
      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.specialPosition();
      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.orc);
      this.collider.addKinematicBody(this.elf);
      this.projectiles = [];
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this2 = this;

      this.orc.update(time);
      this.elf.update(time);
      this.player.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);

      if (this.projectiles.length > 0) {
        this.projectiles.forEach(function (arrow, index) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            arrow.update(time);
          }

          if (arrow.deleted) {
            _this2.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_9__["RemoveFromArray"].remove(_this2.projectiles, index);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this3 = this;

      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map);
      this.game.screen.drawSprite(this.orc.view);
      this.game.screen.drawSprite(this.elf.view);
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

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }, {
    key: "shooting",
    value: function shooting() {
      // Стрельба игрока
      var arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__["Arrow"]('down', 400, this.player.x, this.player.y);
      this.player.addArrow(arrow);
      this.projectiles.push(arrow); // Все объекты из этого массива будут отрисованы в методе render

      this.collider.addKinematicBody(arrow);
    }
  }]);

  return GameLevel;
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
      this.game.screen.print(50, 70, 'Загрузка...');

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
  }

  _createClass(Screen, [{
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbW92ZS1mcm9tLWFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGl0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyJdLCJuYW1lcyI6WyJBSSIsImJvZHkiLCJ0aW1lIiwiRHVtbXkiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsImxhc3RUaW1lIiwic3BsaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuZ2VEaXJlY3Rpb24iLCJ3YWxrIiwiRW5kU2NyaXB0IiwiZXZlbnRUaW1lIiwiZXZlbnRTdGFydCIsImhpdCIsInN0YW5kIiwiaXNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmUiLCJQZWFjZWZ1bCIsInBsYXllciIsImxhc3RUaW1lRHVtYiIsInN0dWNrIiwiY2hhbmdlV2F5SW5pdCIsImNoYW5nZVdheSIsIm9sZFgiLCJvbGRZIiwibGFzdFRpbWVBZ3Jlc3NpdmUiLCJkdXJhdGlvbkFncmVzc2l2ZSIsInRpbWVPZk1hcmNoIiwiaXNPcmNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmVCZWhhdmlvdXIiLCJpc1N0dWNrIiwiZHVtYkJlaGF2aW91ciIsImNvcnJlY3Rpb24iLCJ4IiwiY29sbGlzaW9uU2hhcGUiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJhdHRhY2siLCJjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24iLCJnZXRIaXQiLCJBbmltYXRpb24iLCJpbWFnZU5hbWUiLCJmcmFtZXMiLCJzcGVlZCIsInJlcGVhdCIsImF1dG9ydW4iLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJvbkVuZCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwiQm9keSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImlzU2hvb3RpbmciLCJpc0hpdHRpbmciLCJhbmltYXRpb25TaGVldCIsIkNoYXJhY3RlclNoZWV0IiwiZm9yRWFjaCIsIm5hbWUiLCJnZXRBbmltYXRpb24iLCJhcnJvdyIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJkZWF0aCIsIm1vdmUiLCJzZXRYWSIsInRydW5jIiwidXBkYXRlIiwiQ2FtZXJhIiwibGltaXRYIiwibGltaXRZIiwic2Nyb2xsRWRnZSIsIndhdGNoT2JqZWN0Iiwib2JqIiwibWluIiwibWF4IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwic2VxdWVuY2VzIiwiZ2V0U2VxdWVuY2VzIiwiZGF0YSIsInJlcXVpcmUiLCJsYXllcnMiLCJsYXllciIsImZpbHRlciIsImkiLCJTcHJpdGVTaGVldCIsIkNvbGxpZGVyIiwic3RhdGljU2hhcGVzIiwiYm9kaWVzIiwidHlwZSIsInB1c2giLCJvYmplY3RzIiwiY2hlY2tDb2xsaXNpb24iLCJzaGFwZSIsImNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljIiwiaiIsImNoZWNrSW50ZXJhY3RpdmUiLCJpbmRleE9mQm9keSIsImluZGV4T2ZTaGFwZSIsImhhc093blByb3BlcnR5IiwiUmVtb3ZlRnJvbUFycmF5IiwicmVtb3ZlIiwiZGVsZXRlIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJFbGYiLCJhaSIsImNvbnRyb2wiLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsImVsZiIsInRpdGxlX2JnIiwidGl0bGVfbmFtZSIsInRpdGxlX3N0YXJ0IiwidGl0bGVfb3B0aW9uIiwidGl0bGVfZXhpdCIsInRpbGVzIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJtZW51IiwiTWVudSIsImdhbWVMZXZlbCIsIkdhbWVMZXZlbCIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJzdGF0dXMiLCJTY2VuZSIsIkxPQURFRCIsIlNUQVJUX0dBTUUiLCJXT1JLSU5HIiwiY2hhbmdlU2NlbmUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsIk9yYyIsImFpVHlwZSIsImJlY29tZUFncmVzc2l2ZSIsIlBsYXllciIsImdhbWVfbGV2ZWwiLCJ0aW1lQXJyb3ciLCJ0aW1lckZvckNyZWF0aW5nQXJyb3ciLCJsYXN0VGltZUZvckFycm93IiwiaGVhbHRoU3RhcnQiLCJoZWFsdGgiLCJ1bmRlYWQiLCJ0aW1lclVuZGVhZCIsImxhc3RUaW1lRm9yVW5kZWFkIiwic2hvb3RpbmciLCJzaG9vdCIsIlByb2plY3RpbGUiLCJhY3RpdmUiLCJkZWxldGVkIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiYXJyIiwiaW5kZXhlcyIsImFycmF5T2ZJbmRleGVzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiaXRlbSIsImluZGV4T2YiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJiZWNvbWVQZWFjZWZ1bCIsImNvbGxpZGVyIiwibWFwRGF0YSIsIm1hcCIsImNyZWF0ZU1hcCIsIm1haW5DYW1lcmEiLCJzcGVjaWFsUG9zaXRpb24iLCJ3YXRjaCIsInNldENhbWVyYSIsImFkZFN0YXRpY1NoYXBlcyIsImFkZEtpbmVtYXRpY0JvZHkiLCJwcm9qZWN0aWxlcyIsImZpbGwiLCJkcmF3U3ByaXRlIiwiYWRkQXJyb3ciLCJsb2FkZWRBdCIsImlzSW1hZ2VzTG9hZGVkIiwiZmluaXNoIiwicHJpbnQiLCJlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2FtZXJhIiwiaXNDYW1lcmFTZXQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngxIiwieDIiLCJ5MSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlWCIsInNwcml0ZVkiLCJhYnMiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsInByb3BzIiwib2JqZWN0IiwiZHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFz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QnJNLDhDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU1HLE1BQWI7QUFBQTtBQUFBO0FBQ0Usa0JBQVk3RCxTQUFaLEVBQXVCMEMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBS2dDLFlBQUwsQ0FBa0IxRSxTQUFsQixFQUE2QjBDLEtBQTdCO0FBQ0Q7O0FBSEg7QUFBQTtBQUFBLGlDQUtlMUMsU0FMZixFQUswQjBDLEtBTDFCLEVBS2lDO0FBQzdCLFdBQUsxQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUswQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLWCxDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUtHLENBQUwsR0FBUyxDQUFUOztBQUNBLGNBQVFsQyxTQUFSO0FBQ0UsYUFBSyxJQUFMO0FBQ0UsZUFBS2tDLENBQUwsR0FBUyxDQUFDUSxLQUFWO0FBQ0E7O0FBRUYsYUFBSyxNQUFMO0FBQ0UsZUFBS1IsQ0FBTCxHQUFTUSxLQUFUO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0UsZUFBS1gsQ0FBTCxHQUFTVyxLQUFUO0FBQ0E7O0FBRUYsYUFBSyxNQUFMO0FBQ0UsZUFBS1gsQ0FBTCxHQUFTLENBQUNXLEtBQVY7QUFDQTtBQWZKO0FBaUJEO0FBM0JIO0FBQUE7QUFBQSx5QkE2Qk80TyxNQTdCUCxFQTZCZUMsRUE3QmYsRUE2Qm1CO0FBQ2ZELFlBQU0sQ0FBQ3ZQLENBQVAsSUFBWXdQLEVBQUUsSUFBSSxLQUFLeFAsQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNBdVAsWUFBTSxDQUFDcFAsQ0FBUCxJQUFZcVAsRUFBRSxJQUFJLEtBQUtyUCxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0Q7QUFoQ0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvZHkgPSBudWxsO1xuICB9XG5cbiAgY29udHJvbChib2R5KSB7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XG5cbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duLHVwLGxlZnQscmlnaHQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XG5cbmV4cG9ydCBjbGFzcyBFbmRTY3JpcHQgZXh0ZW5kcyBBSSB7XG4gIGNvbnN0cnVjdG9yKCkgeyAvLyDQl9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgdGhpcy5ldmVudFRpbWUgPSAxNTAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuZXZlbnRTdGFydCA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgdGhpcy5ldmVudFRpbWUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRTdGFydCkgeyAvLyDQldGB0LvQuCDRgdC+0LHRi9GC0LjQtSDQtdGI0ZEg0L3QtSDQvdCw0YfQsNC70L7RgdGMXG4gICAgICBpZiAodGhpcy5ldmVudFRpbWUgPCAwKSB7XG4gICAgICAgIHRoaXMuZXZlbnRTdGFydCA9IHRydWU7Ly8g0JLRgNGD0LHQsNC10Lwg0YHQvtCx0YvRgtC40LVcbiAgICAgICAgdGhpcy5ib2R5LmhpdCh0aGlzLmRpcmVjdGlvbik7Ly8g0KHQvtCx0YvRgtC40LUgLSDQvtGA0Log0LHRjNGR0YJcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib2R5LnN0YW5kKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICBzdXBlci51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBpc0FncmVzc2l2ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc3RhdGljIGJlY29tZUFncmVzc2l2ZSgpIHtcbiAgICB0aGlzLmFncmVzc2l2ZSA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmVjb21lUGVhY2VmdWwoKSB7XG4gICAgdGhpcy5hZ3Jlc3NpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBpc09yY0FncmVzc2l2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZ3Jlc3NpdmU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFJIH0gZnJvbSAnLi4vYWknO1xuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2lzQWdyZXNzaXZlJztcblxuZXhwb3J0IGNsYXNzIFBlYWNlZnVsIGV4dGVuZHMgQUkge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHsgLy8g0JfQtNC10YHRjCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQv9Cw0YDQsNC80LXRgtGA0YssINC90LDQv9GA0LjQvNC10YAsINC60LDQutC40LUg0LfQsNC00LDRh9C4INGDINC/0LXRgNGB0L7QvdCw0LbQsCwg0LXQs9C+INC/0LDQvNGP0YLRjCwg0YfRgtC+INC00LXQu9Cw0LXRgiDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSDQuCDRgi7QtC5cbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZHVyYXRpb24gPSAxMDUwOy8vINCc0LXQvdGP0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60LDQttC00YvQtSAxMDAwINC80YFcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IDA7Ly8g0JrQvtCz0LTQsCDQsiDQv9C+0YHQu9C10LTQvdC40Lkg0YDQsNC3INC80LXQvdGP0Lsg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyOy8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxuXG4gICAgdGhpcy5zdHVjayA9IGZhbHNlOy8vINCV0YHQu9C4IHRydWUsINC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0YHRgtC10L3Rg1xuICAgIHRoaXMuY2hhbmdlV2F5SW5pdCA9IDUwMDsvLyDQldGB0LvQuCDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LIg0LvRjtCx0L7QvCDQtNGA0YPQs9C+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCDQsiDQvdCw0LTQtdC20LTQtSDQvtCx0L7QudGC0Lgg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xuICAgIHRoaXMub2xkWCA9IDA7Ly8g0JIg0Y3RgtC4INC/0LXRgNC10LzQtdC90L3Ri9C1INCx0YPQtNC10Lwg0L/QuNGB0LDRgtGMINGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiy4g0JXRgdC70Lgg0L3QvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDRgNCw0LLQvdGLINGB0YLQsNGA0YvQvCwg0LfQvdCw0YfQuNGCINC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIHRoaXMub2xkWSA9IDA7XG5cbiAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uQWdyZXNzaXZlID0gNTAwOy8vINCd0LDRgdC60L7Qu9GM0LrQviDRh9Cw0YHRgtC+INC80LXQvdGP0Y7RgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INCw0LPRgNC10YHRgdC40LLQvdGL0LUg0L7RgNC60LhcbiAgICB0aGlzLnRpbWVPZk1hcmNoID0gNDU2MDsvLyDQmtC+0LPQtNCwINC+0YDQuiDRgtC+0LvRjNC60L4g0L/QvtGP0LLQuNC70YHRjywg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQv9GA0L7RgdGC0L4g0LTQstC40LbQtdGC0YHRjyDQsiDQvtC00L3QvtC8INC90LDQv9GA0LDQstC70LXQvdC40LguINCf0L7RgdC70LUgLSDQvdCw0YfQuNC90LDQtdGCINC00LXQudGB0YLQstC+0LLQsNGC0Ywg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKCkgeyAvLyDQntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAndXAsbGVmdCcuc3BsaXQoJywnKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVPZk1hcmNoID4gMCkgeyAvLyDQntGA0Log0LXRidGRINC80LDRgNGI0LjRgNGD0LXRgiwg0YIu0LUuINC30LDRhdC+0LTQuNGCINC90LAg0LvQvtC60LDRhtC40Y5cbiAgICAgIHRoaXMudGltZU9mTWFyY2ggLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0dWNrKSB7IC8vINCV0YHQu9C4INC+0YDQuiDQt9Cw0YHRgtGA0Y/Quywg0LTQsNC70YzQvdC10LnRiNC40YUg0L/RgNC+0LLQtdGA0L7QuiBlbHNlIGlmINC90LUg0LHRg9C00LXRglxuICAgICAgdGhpcy5jaGFuZ2VXYXkgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VXYXkgPCAwKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xuICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKSB7IC8vINCf0YDQvtCy0LXRgNC60LAg0L7RgNC60LAg0L3QsCDQsNCz0YDQtdGB0YHQuNGOXG4gICAgICB0aGlzLmFncmVzc2l2ZUJlaGF2aW91cih0aW1lKTtcbiAgICAgIHRoaXMuaXNTdHVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR1bWJCZWhhdmlvdXIodGltZSk7XG4gICAgICB0aGlzLmlzU3R1Y2soKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICB9XG5cbiAgZHVtYkJlaGF2aW91cih0aW1lKSB7XG4gICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZUR1bWIpID4gdGhpcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gdGltZTtcbiAgICB9XG4gIH1cblxuICBhZ3Jlc3NpdmVCZWhhdmlvdXIodGltZSkge1xuICAgIGNvbnN0IGNvcnJlY3Rpb24gPSAxMDsvLyDQvtGA0Log0LHRjNGR0YIg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQuCA1LCDQtdC80YMg0L3QtSDQvdGD0LbQvdC+INCx0YvRgtGMINCy0L/Qu9C+0YLQvdGD0Y4g0Log0LjQs9GA0L7QutGDICjQuNC90LDRh9C1INC+0YDQuiDQsdGM0ZHRgiDRgtC+0LvRjNC60L4g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQuNCz0YDQvtC60L7QvCwg0LAg0L7RgNC60Lgg0LjQt9Cx0LXQs9Cw0Y7RgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpXG4gICAgaWYgKHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS53aWR0aFxuICAgICAgICAgICAgICAgICYmIHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUud2lkdGggKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnhcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmJvZHkueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS55IC0gY29ycmVjdGlvbiA8IHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS5oZWlnaHQgKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkpIHsgdGhpcy5hdHRhY2soKTsgfVxuICAgIC8vIH1cbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlKSA+IHRoaXMuZHVyYXRpb25BZ3Jlc3NpdmUpIHtcbiAgICAgIHRoaXMuY2hhbmdlQWdyZXNzaXZlRGlyZWN0aW9uKCk7XG4gICAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gdGltZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHkueCA+PSB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1N0dWNrKCkgeyAvLyDQn9GA0L7QstC10YDQutCwLCDQstC+0LfQvNC+0LbQvdC+INC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIGlmICh0aGlzLmJvZHkueCA9PSB0aGlzLm9sZFggJiYgdGhpcy5ib2R5LnkgPT0gdGhpcy5vbGRZKSB7XG4gICAgICB0aGlzLnN0dWNrID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAndXAnIHx8IHRoaXMuZGlyZWN0aW9uID09ICdkb3duJykge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9sZFggPSB0aGlzLmJvZHkueDtcbiAgICB0aGlzLm9sZFkgPSB0aGlzLmJvZHkueTtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICB0aGlzLmJvZHkuaGl0KCk7XG4gICAgdGhpcy5wbGF5ZXIuZ2V0SGl0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIGZyYW1lcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NCxcbiAgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGltYWdlTmFtZSxcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcbiAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0LLRgNC10LzRjyDQvtGCINC/0L7RgdC70LXQtNC90LXQs9C+INGE0YDQtdC50LzQsCDQsNC90LjQvNCw0YbQuNC4XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xuICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XG5cbiAgICAvKiDQlNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LAuINCd0LDQv9GA0LjQvNC10YAsINC/0L7RgdC70LUg0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsCDQsNC90LjQvNCw0YbQuNC4INGB0YLRgNC10LvRjNCx0YssINC/0LXRgNGB0L7QvdCw0LYg0L/QtdGA0LXRgdGC0LDRkdGCINGB0YLRgNC10LvRj9GC0YxcbiAgICDQrdGC0LAg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LfQsNC00LDQtdGC0YHRjyDQsiDQutC70LDRgdGB0LUgQm9keS4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlOyAqL1xuICAgIHRoaXMub25FbmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xuICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeDtcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gIH1cblxuICBydW4oKSB7IC8vINCh0YLQsNGA0YIg0LDQvdC40LzQsNGG0LjQuCDRgSDRgdCw0LzQvtCz0L4g0L3QsNGH0LDQu9CwXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICBuZXh0RnJhbWUoKSB7XG4gICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQutCw0LTRgCwg0YLQvi4uLlxuICAgICAgaWYgKHRoaXMub25FbmQpIHsgLy8gLi4u0LXRgdC70Lgg0LfQsNC00LDQvdCwINC60L7QvdGG0L7QstC60LAsINC30LDQv9GD0YHQutCw0LXQvC4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXBlYXQpIHsgLy8gLi4uINC10YHQu9C4INC30LDQtNCw0L0g0L/QvtCy0YLQvtGALCDQv9C+0LLRgtC+0YDRj9C10LxcbiAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zdG9wKCk7Ly8gLi4uINC40L3QsNGH0LUgLSDRgdGC0L7QvyDQsNC90LjQvNCw0YbQuNGPXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQrdGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQvdGD0LbQvdCwINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LLRi9C30L7QstCwIHVwZGF0ZSgpLCDRh9GC0L7QsdGLINC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGMIHRoaXMubGFzdFRpbWVcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkgeyAvLyDQoNCw0LfQvdC40YbQsCDQv9C+INCy0YDQtdC80LXQvdC4INC80LXQttC00YMg0L/RgNC+0YjQu9GL0Lwg0Lgg0YLQtdC60YPRidC40Lwg0LrQsNC00YDQvtC8OiAoMTEtMik+MTAsICgxMi0yKT4xMCwgKDEzLTIpPjEwIC0g0LfQtNC10YHRjCDQv9GA0L7RiNC70L4gMTDQvNGBLCDQsCBzcGVlZCDQsiDRjdGC0L7QvCDQv9GA0LjQvNC10YDQtSDQutCw0Log0YDQsNC3INGA0LDQstC10L0gMTDQvNGBLCDQt9C90LDRh9C40YIg0LzQtdC90Y/QtdC8INC60LDQtNGAXG4gICAgICB0aGlzLm5leHRGcmFtZSgpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICB9XG59XG4iLCIvLyDQntGB0L3QvtCy0LAg0LLRgdC10YUg0L/QtdGA0YHQvtC90LDQttC10LlcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi9jaGFyYWN0ZXItc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7Ly8gUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgc3BlZWQgfSkge1xuICAgIHRoaXMueCA9IC0xMDA7Ly8g0J/QvtC70L7QttC10L3QuNC1INC+0LHRitC10LrRgtCwXG4gICAgdGhpcy55ID0gLTEwMDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7Ly8g0KHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoJ2xlZnQnLCAwKTsvLyDQndCw0L/RgNCw0LLQu9C10L3QuNC1INC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cbiAgICB0aGlzLmxhc3RUaW1lID0gMDsvLyDQktGA0LXQvNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LBcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTsvLyDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cblxuICAgIC8vINCk0L7RgNC80LAsINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtNC70Y8g0LrQvtC70LvQuNC30LjQuC4g0J7QvdCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LUg0L7RgiDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDRgdC/0YDQsNC50YLQsCwg0LAg0L7RgiB4OiAxOCwgeTogMTVcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xuICAgICAgeDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDksXG4gICAgfTtcblxuICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XG5cbiAgICAvLyDQl9Cw0LPRgNGD0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQvNGL0LUg0LDQvdC40LzQsNGG0LjQuCDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0L/QtdGA0YHQvtC90LDQttCwXG4gICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoeyBpbWFnZU5hbWUgfSk7XG4gICAgJ3dhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lKTsvLyDQkiDQuNGC0L7Qs9C1IHRoaXMuYW5pbWF0aW9ucyA9IHt3YWxrX2Rvd246IC4uLCB3YWxrX3VwOiAuLiDQuCDRgi7QtC4gfVxuICAgIH0pO1xuICAgICdzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxuICAgIH0pO1xuICAgICdjdXRfZG93bixjdXRfdXAsY3V0X2xlZnQsY3V0X3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCA1MCwgZmFsc2UpOy8vINCy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcbiAgICB9KTtcbiAgICBbJ2RlYXRoJ10uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxuICAgIH0pO1xuICAgIHRoaXMuc3RhbmQoJ2xlZnQnKTtcbiAgfVxuXG4gIHNob290KGFycm93KSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHNob290XyR7dGhpcy52ZWxvY2l0eS5kaXJlY3Rpb259YF07XG4gICAgICB0aGlzLnZpZXcub25FbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgICAgICBhcnJvdy5mbHkodGhpcy54LCB0aGlzLnksIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cbiAgICB9XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzSGl0dGluZykge1xuICAgICAgdGhpcy5pc0hpdHRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2BjdXRfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcbiAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5pc0hpdHRpbmcgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cbiAgICB9XG4gIH1cblxuICB3YWxrKGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHJldHVybjsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0L3QtdC70YzQt9GPINC40LTRgtC4LiDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2B3YWxrXyR7ZGlyZWN0aW9ufWBdOy8vINCX0LTQtdGB0Ywg0YXRgNCw0L3QuNGC0YHRjyDRgtC10LrRg9GJ0LDRjyDQsNC90LjQvNCw0YbQuNGPLiAgIHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XG4gICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXG4gIH1cblxuICBzdGFuZChkaXJlY3Rpb24pIHsgLy8g0KHRgtC+0Y/RgtGMXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZykgcmV0dXJuOy8vINCd0JUg0J/QntCd0JjQnNCQ0K4g0JrQkNCaINCg0JDQkdCe0KLQkNCV0KIuINCV0KHQm9CYINCj0JHQoNCQ0KLQrCDQrdCi0KMg0KHQotCg0J7QmtCjLCDQn9CV0KDQodCe0J3QkNCW0JXQnCDQndCV0JvQrNCX0K8g0KPQn9Cg0JDQktCb0K/QotCsXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHdhbGtfJHtkaXJlY3Rpb259YF07XG4gICAgdGhpcy52aWV3LnN0b3AoKTtcbiAgfVxuXG4gIGRlYXRoKCkge1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKCdkb3duJywgMCk7Ly8g0J7RgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/QtdGA0YHQvtC90LDQttCwXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zLmRlYXRoO1xuICAgIC8vIHRoaXMudmlldy5zdG9wKCk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0Lgg0YPQtNCw0YDQvtCyINC90LXQu9GM0LfRjyDQuNC00YLQuFxuICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINCw0L3QuNC80LDRhtC40Lg7IHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTsgLy8g0JIg0L/QtdGA0LXQvNC10L3QvdC+0LkgdGhpcy52aWV3INGF0YDQsNC90LjRgtGB0Y8gdGhpcy5hbmltYXRpb25zID0ge30uINCc0LXRgtC+0LQgdHJ1bmMg0L7RgtCx0YDQsNGB0YvQstC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjFxuICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwLFxuICB9ID0ge30pIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xuICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xuICAgIHRoaXMud2F0Y2hPYmplY3QgPSBmYWxzZTtcbiAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcbiAgfVxuXG4gIHdhdGNoKG9iaikge1xuICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xuICAgIHRoaXMub2JqID0gb2JqO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy53YXRjaE9iamVjdCkge1xuICAgICAgaWYgKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2JqLnggPCAodGhpcy54ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54IC0gdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLm9iai55IC0gdGhpcy5oZWlnaHQgKyB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNwZWNpYWxQb3NpdGlvbigpIHtcbiAgICB0aGlzLnggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4vc3ByaXRlLXNoZWV0JztcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgaW1hZ2VOYW1lLFxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDQsXG4gICAgfSk7XG4gICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xuICB9XG5cbiAgZ2V0U2VxdWVuY2VzKCkge1xuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XG4gICAgY29uc3Qgc2VxdWVuY2VzID0ge307XG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKChpKSA9PiBpID4gMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcXVlbmNlcztcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi9yZW1vdmUtZnJvbS1hcnJheSc7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdGljU2hhcGVzID0gW107Ly8g0JzQsNGB0YHQuNCyINGB0YLQsNGC0LjRh9C90YvRhSDQvtCx0YrQtdC60YLQvtCyLiDQnNGLINC40YHQv9C+0LvRjNC30YPQtdC8INGB0LvQtdC00YPRjtGJ0LjQtSDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwOiB7eCwgeSwgd2lkdGgsIGhlaWdodH1cbiAgICB0aGlzLmJvZGllcyA9IFtdO1xuICB9XG5cbiAgYWRkU3RhdGljU2hhcGVzKGRhdGEpIHtcbiAgICBkYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJylcbiAgICAgIC8qIG9iamVjdHMg0Y3RgtC+INC80LDRgdGB0LjQsiDRgSDQvdCw0LHQvtGA0L7QvCDQvtCx0YrQtdC60YLQvtCyIFt7Li4ufSx7Li4ufSwg0Lgg0YIu0LQuXTBcbiAgICAgICAgICAgICAgICDQlNGD0LzQsNGOLCDQutC+0L3RgdGC0YDRg9C60YbQuNGPICguLi5sYXllci5vYmplY3RzKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIgIHRoaXMuc3RhdGljU2hhcGVzID0gW3suLi59LHsuLi59LCDQuCDRgi7QtC5dICovXG4gICAgICB7IHRoaXMuc3RhdGljU2hhcGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cyk7IH1cbiAgICB9KTtcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcbiAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMzAwLCBoZWlnaHQ6IDEsXG4gICAgfSk7XG4gICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7XG4gICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxMzAwLFxuICAgIH0pO1xuICAgIC8vIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MTI4MCx5OjAsd2lkdGg6MSxoZWlnaHQ6MTMwMH0pO1xuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xuICAgICAgeDogMTI4MCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEtpbmVtYXRpY0JvZHkoYm9keSkge1xuICAgIHRoaXMuYm9kaWVzLnB1c2goe1xuICAgICAgeDogYm9keS54LCAvLyDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXG4gICAgICB5OiBib2R5LnksXG4gICAgICBvYmo6IGJvZHksIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQv9C10YDRgdC+0L3QsNC20LAg0YEg0L3QvtCy0YvQvNC4INC60L7QvtGA0LTQuNC90LDRgtCw0LzQuCwg0LHRg9C00LXQvCDRgdGA0LDQstC90LjQstCw0YLRjCDQvdC+0LLRi9C1INC4INGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C10YDRgdC+0L3QsNC20LBcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbih0aW1lKTsvLyDRgNCw0YHRgdGH0ZHRgiDQutC+0LvQu9C40LfQuNC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4INC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24odGltZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcbiAgICAgIGNvbnN0IG9sZFggPSBib2R5Lng7XG4gICAgICBjb25zdCBvbGRZID0gYm9keS55O1xuICAgICAgbGV0IHsgeCB9ID0gYm9keS5vYmo7XG4gICAgICBsZXQgeyB5IH0gPSBib2R5Lm9iajtcbiAgICAgIGlmICh4ID4gb2xkWCkgeyAvLyBtb3ZpbmcgcmlnaHRcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICBpZiAoIC8vINCV0YHQu9C4INGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCw0YXQvtC00Y/RgtGB0Y8g0L/QtdGA0LXQtCDQvtCx0YrQtdC60YLQvtC8KioqXG4gICAgICAgICAgICAoKG9sZFggLy8g0LrQvtC+0YDQtNC40L3QsNGC0LAg0L/QtdGA0YHQvtC90LDQttCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAxLy8g0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvNC10LbQtNGDINC60LDQtNGA0LDQvNC4INC30LDQvdC40LzQsNC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjCDQv9C40LrRgdC10LvRjywg0YfRgtC+0LHRiyDQutC+0LQg0YDQsNCx0L7RgtCw0Lsg0L7QutGA0YPQs9C70LjQvCDQv9GA0L7RiNC70YPRjiDRgtC+0YfQutGDINC90LAgMSDQv9C40LrRgdC10LvRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAvLyDQutC+0L7RgNC00LjQvdCw0YLQsCDRhNC+0YDQvNGLINC60L7Qu9C70LjQt9C40Lgg0LLQvdGD0YLRgNC4INC/0LXRgNGB0L7QvdCw0LbQsCAo0L3QsNGH0LDQu9C+0Lwg0L7RgtGB0YfRkdGC0LAg0YHQu9GD0LbQuNGCINC70LXQstGL0Lkg0LLQtdGA0YXQvdC40Lkg0YPQs9C+0Lsg0L/QtdGA0YHQvtC90LDQttCwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUueClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKiAqKtC4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0L7RgdC70LUg0L7QsdGK0LXQutGC0LAsINC30L3QsNGH0LjRgiDQv9C10YDRgdC+0L3QsNC2INGB0YLQvtC70LrQvdGD0LvRgdGPINGBINC/0YDQtdC/0Y/RgtGB0YLQstC40LXQvFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDRgdC+0L3QsNC2INC00L7Qu9C20LXQvSDQutCw0YHQsNGC0YzRgdGPINC/0YDQtdC/0Y/RgtGB0YLQstC40Y9cbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXG4gICAgICAgICAgKSB7IC8vINCR0LXRgNC10Lwg0LHQu9C40LbQsNC50YjQuNC5INC+0LHRitC10LrRgiwg0LPQtNC1INC+0YHRgtCw0L3QvtCy0LjQvCDQv9C10YDRgdC+0L3QsNC20LBcbiAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS54KS8vICjQvdCw0LLQtdGA0L3QvtC1INC80L7QttC90L4g0LHRi9C70L4g0L/RgNC+0YHRgtC+INC+0YHRgtCw0LLQuNGC0Ywg0L7QtNC40L0gc2hhcGUueClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyINGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4ICjQvdCw0L/RgNC40LzQtdGAINC/0L7RgdC70LUg0L/QvtC/0LDQtNCw0L3QuNGPINCyINC00LXRgNC10LLQviwg0YHRgtGA0LXQu9CwINC90LUg0LTQstC40LbQtdGC0YHRjylcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXG4gICAgICAgICAgICBpZiAoKChvbGRYIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopOy8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiAo0L3QsNC/0YDQuNC80LXRgCDRgdGC0YDQtdC70LAg0LHRjNGR0YIg0L7RgNC60LAsINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LAg0Lgg0YIu0LQuKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoeCA8IG9sZFgpIHsgLy8gbW92aW5nIGxlZnRcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgICAgICBpZiAoKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLnggKyBzaGFwZS53aWR0aCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXG4gICAgICAgICAgICBpZiAoKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHkgPiBvbGRZKSB7IC8vIG1vdmluZyBkb3duXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB5ID0gTWF0aC5taW4oeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQsIHNoYXBlLnkpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQmtC+0LvQu9C40LfQuNGPINC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcbiAgICAgICAgICBpZiAoYm9keSAhPSBzaGFwZSkgeyAvLyDQldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxuICAgICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB5ID0gTWF0aC5taW4oeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQsIHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHkgPCBvbGRZKSB7IC8vIG1vdmluZyB1cFxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgICAgIGlmICgoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHkgPSBNYXRoLm1heCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSwgc2hhcGUueSArIHNoYXBlLmhlaWdodCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55O1xuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXG4gICAgICAgICAgICBpZiAoKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJvZHkueCA9IHg7XG4gICAgICBib2R5LnkgPSB5O1xuICAgICAgYm9keS5vYmoueCA9IHg7XG4gICAgICBib2R5Lm9iai55ID0geTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpbmRleE9mQm9keSwgaW5kZXhPZlNoYXBlKSB7XG4gICAgaWYgKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgc2hhcGUub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xuICAgICAgaWYgKGJvZHkub2JqLm5hbWUgPT0gJ2Fycm93JyAmJiBzaGFwZS5vYmoubmFtZSA9PSAnb3JjJykgeyAvLyDQldGB0LvQuCDRgdGC0YDQtdC70LAg0LrQvtGB0L3Rg9C70LDRgdGMINC+0YDQutCwXG4gICAgICAgIC8vINCd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQstC80LXRgdGC0L4g0LTQstGD0YUsINC80L7QttC90L4g0YHQtNC10LvQsNGC0Ywg0L7QtNC40L0g0LLRi9C30L7QsiB0aGlzLnJlbW92ZSh0aGlzLmJvZGllcyxpbmRleE9mQm9keSxpbmRleE9mU2hhcGUpLiDQndC+INC80L3QtSDRgtCw0Log0YPQtNC+0LHQvdC10LUg0L7RgtC70LDQttC40LLQsNGC0YxcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSk7Ly8g0KHRgtGA0LXQu9CwINC40YHRh9C10LfQsNC10YIsINGD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LAsINGD0LTQsNC70LjRgtGMINGB0LDQvCDQvtCx0YrQtdC60YJcbiAgICAgICAgYm9keS5vYmouZGVsZXRlKCk7Ly8g0KPQtNCw0LvRj9C10Lwg0YHRgtGA0LXQu9GDXG4gICAgICAgIHRoaXMuYm9kaWVzID0gUmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLmJvZGllcywgaW5kZXhPZlNoYXBlKTsvLyDQntGC0LrQu9GO0YfQuNGC0Ywg0LXQs9C+INC+0YIg0LrQvtC70LvQsNC50LTQtdGA0LAgKNGD0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGCINC/0L4g0LjQvdC00LXQutGB0YMg0LjQtyDQvNCw0YHRgdC40LLQsCB0aGlzLmJvZGllcylcbiAgICAgICAgc2hhcGUub2JqLmRlYXRoKCk7IC8vINCe0YDQuiDQv9C+0LPQuNCx0LDQtdGCXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaW5kZXhPZkJvZHkpIHsgLy9cbiAgICBpZiAoYm9keS5vYmouaGFzT3duUHJvcGVydHkoJ25hbWUnKSkgeyAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YHQu9GD0YfQsNC5LCDQtdGB0LvQuCDQv9C+0L/QsNC00ZHRgtGB0Y8g0L7QsdGK0LXQutGCINCx0LXQtyDQvdCw0LfQstCw0L3QuNGPXG4gICAgICBpZiAoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnKSB7XG4gICAgICAgIGJvZHkub2JqLnN0b3AoKTsvLyDQodGC0YDQtdC70LAg0L/QtdGA0LXRgdGC0LDRkdGCINC00LLQuNCz0LDRgtGM0YHRj1xuICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZCb2R5KTsvLyDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xuICAgICAgWzM3LCAnbGVmdCddLFxuICAgICAgWzM5LCAncmlnaHQnXSxcbiAgICAgIFszOCwgJ3VwJ10sXG4gICAgICBbNDAsICdkb3duJ10sXG4gICAgICBbMzIsICdmaXJlJ10sXG4gICAgICBbMTMsICdlbnRlciddLFxuICAgIF0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xuICB9XG5cbiAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XG4gICAgaWYgKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBEdW1teSB9IGZyb20gJy4vYWlzL2R1bW15JztcblxuZXhwb3J0IGNsYXNzIEVsZiBleHRlbmRzIEJvZHkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IGltYWdlTmFtZTogJ2VsZicsIHNwZWVkOiA2MCB9KTtcbiAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XG4gICAgdGhpcy5haS5jb250cm9sKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcbiAgICBzdXBlci51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gJy4vc2NlbmVzL2dhbWUtbGV2ZWwnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xuICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcbiAgICAgIG9yYzogJ2ltZy9vcmMucG5nJyxcbiAgICAgIGVsZjogJ2ltZy9kYXJrLWVsZi5wbmcnLFxuICAgICAgcGxheWVyOiAnaW1nL3BsYXllcjIucG5nJyxcbiAgICAgIHRpdGxlX2JnOiAnaW1nL2JnX3RpdGxlLnBuZycsXG4gICAgICB0aXRsZV9uYW1lOiAnaW1nL2dhbWVfbmFtZS5wbmcnLFxuICAgICAgdGl0bGVfc3RhcnQ6ICdpbWcvc3RhcnRfZ2FtZS5wbmcnLFxuICAgICAgdGl0bGVfb3B0aW9uOiAnaW1nL29wdGlvbl9nYW1lLnBuZycsXG4gICAgICB0aXRsZV9leGl0OiAnaW1nL2V4aXRfZ2FtZS5wbmcnLFxuICAgICAgdGlsZXM6ICdpbWcvdGlsZXMucG5nJyxcbiAgICB9KTtcblxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcblxuICAgIHRoaXMuc2NlbmVzID0ge1xuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcbiAgICAgIGdhbWVMZXZlbDogbmV3IEdhbWVMZXZlbCh0aGlzKSxcbiAgICB9O1xuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gIH1cblxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xuICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XG4gICAgfVxuICB9XG5cbiAgZnJhbWUodGltZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHRoaXMuZnJhbWUodGltZSkpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcbiAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xuICAgIHRoaXMuaW1hZ2VzID0ge307XG4gIH1cblxuICBsb2FkKCkge1xuICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLCB0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xuICBlbHZlblNjb3V0LnJ1bigpO1xufTtcblxuY29uc29sZS5sb2coJ9CYINGB0LXQudGH0LDRgSDRgNCw0LHQvtGC0LDQtdGCJyk7XG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcbmltcG9ydCB7IER1bW15IH0gZnJvbSAnLi9haXMvZHVtbXknO1xuaW1wb3J0IHsgRW5kU2NyaXB0IH0gZnJvbSAnLi9haXMvZW5kU2NyaXB0JztcbmltcG9ydCB7IFBlYWNlZnVsIH0gZnJvbSAnLi9haXMvcGVhY2VmdWwnO1xuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2Fpcy9pc0FncmVzc2l2ZSc7XG5cbmV4cG9ydCBjbGFzcyBPcmMgZXh0ZW5kcyBCb2R5IHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKSB7IC8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxuICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiAnb3JjJywgc3BlZWQ6IDUwIH0pO1xuICAgIGlmIChhaVR5cGUgPT0gJ2R1bW15JykgdGhpcy5haSA9IG5ldyBEdW1teSgpO1xuICAgIGlmIChhaVR5cGUgPT0gJ2VuZFNjcmlwdCcpIHRoaXMuYWkgPSBuZXcgRW5kU2NyaXB0KCk7XG4gICAgaWYgKGFpVHlwZSA9PSAncGVhY2VmdWwnKSB0aGlzLmFpID0gbmV3IFBlYWNlZnVsKHBsYXllcik7XG5cbiAgICB0aGlzLm5hbWUgPSAnb3JjJzsvLyDQlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxuICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKHRoaXMuYWkpIHtcbiAgICAgIHRoaXMuYWkudXBkYXRlKHRpbWUpOy8vINCV0YHQu9C4INCY0Jgg0L3QtSDQvtGC0LrQu9GO0YfQtdC9XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcbiAgfVxuXG4gIGRlYXRoKCkge1xuICAgIHRoaXMuYWkgPSBudWxsOy8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQmNCYXG4gICAgaXNBZ3Jlc3NpdmUuYmVjb21lQWdyZXNzaXZlKCk7XG4gICAgc3VwZXIuZGVhdGgoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5IHsgLy8gUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxuICBjb25zdHJ1Y3Rvcihjb250cm9sLCBnYW1lX2xldmVsKSB7IC8vIGNvbnRyb2wgLSDRg9C/0YDQsNCy0LvQtdC90LjQtSDQutC70LDQstC40LDRgtGD0YDQvtC5XG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdwbGF5ZXInLCBzcGVlZDogMTAwIH0pO1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5nYW1lX2xldmVsID0gZ2FtZV9sZXZlbDtcbiAgICB0aGlzLmFycm93ID0gZmFsc2U7Ly8g0J/QvtC30LLQvtC70Y/QtdC8INGB0YLRgNC10LvRj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INC90LAg0YDRg9C60LDRhSDQtdGB0YLRjCDRgdGC0YDQtdC70LBcbiAgICB0aGlzLnRpbWVBcnJvdyA9IDEwMDA7Ly8g0JrQvtC90YHRgtCw0L3RgtCwLCDQstGA0LXQvNGPINC80LXQttC00YMg0L/QvtGP0LLQu9C10L3QuNC10Lwg0YHQu9C10LTRg9GO0YnQtdC5INGB0YLRgNC10LvRiywg0YfRgtC+0LHRiyDRgdGC0YDQtdC70Ysg0L3QtSDRgdC+0LfQtNCw0LLQsNC70LjRgdGMINC60LDQuiDQuNC3INC/0YPQu9C10LzRkdGC0LBcbiAgICB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IDA7Ly8g0KLQsNC50LzQtdGAINC00LvRjyDRgdGC0YDQtdC7XG4gICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gMDtcbiAgICB0aGlzLm5hbWUgPSAncGxheWVyJzsvLyDQlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxuXG4gICAgdGhpcy5oZWFsdGhTdGFydCA9IDM7Ly8g0J3QsNGH0LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuVxuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGhTdGFydDtcblxuICAgIHRoaXMudW5kZWFkID0gMTAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAg0LLRgNC10LzQtdC90Lgg0LHQtdGB0YHQvNC10YDRgtC40Y8sINC/0L7RgdC70LUg0L/QvtC70YPRh9C10L3QuNGPINGD0YDQvtC90LAg0LjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvVxuICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTsvKiDQotCw0LnQvNC10YAg0LTQu9GPINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9GR0YLQsC4g0JXRgdC70Lgg0L7QvSDRgNCw0LLQtdC9INC00LjQsNC/0LDQt9C+0L3RgyDQvtGCIDAg0LTQviB0aGlzLnVuZGVhZCwg0LfQvdCw0YfQuNGCINC40LTRkdGCINC+0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCINC4INC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JXRgdC70LggLTEsINC40LPRgNC+0Log0LzQvtC20LXRgiDQv9C+0LvRg9GH0LjRgtGMINGD0YDQvtC9ICovXG4gICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IDA7XG4gIH1cblxuICBhZGRBcnJvdyhhcnJvdykge1xuICAgIHRoaXMuYXJyb3cgPSBhcnJvdztcbiAgfVxuXG4gIC8vIGdldEhpdCgpIHsvL9CY0LPRgNC+0Log0L/QvtC70YPRh9C40Lsg0YPQtNCw0YBcbiAgLy8gICBpZiAodGhpcy50aW1lclVuZGVhZCA9PT0gLTEpIHsvL9CV0YHQu9C4INC40LPRgNC+0Log0YHQvNC10YDRgtC10L1cbiAgLy8gICAgIGlmICh0aGlzLmhlYWx0aCA+IDApXG4gIC8vICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gIC8vICAgICB0aGlzLnRpbWVyVW5kZWFkID0gdGhpcy51bmRlYWQ7Ly/QlNC10LvQsNC10Lwg0LjQs9GA0L7QutCwINCx0LXRgdGB0LzQtdGA0YLQvdGL0Lwg0L3QsCDQstGA0LXQvNGPXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZUZvckFycm93ID09PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID09PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sLmZpcmUpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9PT0gMCkgeyAvLyDQldGB0LvQuCDRgdGC0YDQtdC70YMg0LzQvtC20L3QviDRgdC+0LfQtNCw0LLQsNGC0YxcbiAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSB0aGlzLnRpbWVBcnJvdztcbiAgICAgICAgdGhpcy5nYW1lX2xldmVsLnNob290aW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmFycm93KSB7IHRoaXMuc2hvb3QodGhpcy5hcnJvdyk7IH0vLyDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LjQvNC10L3QvdC+INGN0YLRgyDRgdGC0YDQtdC70YMsINGCLtC6LiDQv9C10YDRgdC+0L3QsNC2INC80L7QttC10YIg0LjQvNC10YLRjCDRgNCw0LfQvdGL0LUg0YHRgtGA0LXQu9GLXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcbiAgICAgIHRoaXMud2FsaygndXAnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5kb3duKSB7XG4gICAgICB0aGlzLndhbGsoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5sZWZ0KSB7XG4gICAgICB0aGlzLndhbGsoJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5yaWdodCkge1xuICAgICAgdGhpcy53YWxrKCdyaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPiAwKSB7IHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93IC09ICh0aW1lIC0gdGhpcy5sYXN0VGltZUZvckFycm93KTsgfSBlbHNlIHsgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSAwOyB9XG5cbiAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xuXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHsvLyDQldCz0L4g0YDQsNGB0YjQuNGA0Y/QtdGCIHByb2plY3RpbGVzL2Fycm93LmpzXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uLCBzcGVlZCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsvLyDQldGB0LvQuCDRgdGC0YDQtdC70LAg0LDQutGC0LjQstC90LAsINC+0L3QsCDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0YfQtdGA0LXQtyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUg0Lgg0LvQtdGC0LjRgiDQsiDRhtC10LvRjC4g0JAg0LLQvtC+0LHRidC1INGB0YLRgNC10LvQsCDQsiDQvdC10LLQuNC00LjQvNC+0Lwg0YHQvtGB0YLQvtGP0L3QuNC4INCy0YHQtdCz0LTQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0L3QsCDRjdC60YDQsNC90LVcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xuICAgICAgeDogMjcsIHk6IDI3LCB3aWR0aDogMTAsIGhlaWdodDogMTAsXG4gICAgfTsvLyDQndGD0LbQvdC+INC00LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCAo0YDQsNGB0YfRkdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQuSkuINCg0LDQt9C80LXRgCDRgdC/0YDQsNC50YLQsCA2NNGFNjRcbiAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTsvLyDQoNC+0LTQuNGC0LXQu9GMINCx0YPQtNC10YIg0L7RgtGB0LvQtdC20LjQstCw0YLRjCDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4sINC10YHQu9C4INC+0L3QsCB0cnVlLCDQt9C90LDRh9C40YIg0YDQvtC00LjRgtC10LvRjCDRg9C00LDQu9C40YIg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXG4gIH1cblxuICBmbHkoeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc3RvcCgpIHsgLy8g0J/RgNC4INC/0L7Qv9Cw0LTQsNC90LjQuCDQsiDRgdGC0LDRgtC40YfQvdC+0LUg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwgcHJvamVjdGlsZSDRgtC10YDRj9C10YIg0YHQutC+0YDQvtGB0YLRjFxuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmRlbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7IC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPICB0aGlzLmxhc3RUaW1lXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcbiAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpOy8vINCd0LAg0Y3RgtC+0Lwg0Y3RgtCw0L/QtSDQv9C+0LrQsCDQvdC1INC40LfQstC10YHRgtC90L4g0YfRgtC+INGN0YLQviDQsdGD0LTQtdGCINGB0L/RgNCw0LnRgiDQuNC70Lgg0LDQvdC40LzQsNGG0LjRj1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi4vcHJvamVjdGlsZSc7XG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XG5cbmV4cG9ydCBjbGFzcyBBcnJvdyBleHRlbmRzIFByb2plY3RpbGUge1xuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkLCB4LCB5KSB7XG4gICAgc3VwZXIoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSk7XG4gICAgdGhpcy5zcHJpdGVzID0ge307XG4gICAgdGhpcy5uYW1lID0gJ2Fycm93JztcbiAgICBjb25zdCB0aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XG4gICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXG4gICAgICBpbWFnZUhlaWdodDogNjQwLFxuICAgIH0pO1xuICAgIHRoaXMuc3ByaXRlcy5sZWZ0ID0gdGlsZXMuZ2V0U3ByaXRlKDM2KTtcbiAgICB0aGlzLnNwcml0ZXMucmlnaHQgPSB0aWxlcy5nZXRTcHJpdGUoMzcpO1xuICAgIHRoaXMuc3ByaXRlcy5kb3duID0gdGlsZXMuZ2V0U3ByaXRlKDQ2KTtcbiAgICB0aGlzLnNwcml0ZXMudXAgPSB0aWxlcy5nZXRTcHJpdGUoNDcpO1xuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xuICB9XG5cbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xuICAgIHN1cGVyLmZseSh4LCB5LCBkaXJlY3Rpb24pO1xuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVtb3ZlRnJvbUFycmF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKGFyciwgaW5kZXhlcykgeyAvLyDQo9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgtGLINC40Lcg0LzQsNGB0YHQuNCy0LAg0L/QviDQuNC90LTQtdC60YHRg1xuICAgIC8vIGFyZ3VtZW50cyAtINC/0YHQtdCy0LTQviDQvNCw0YHRgdC40LIsINCyINC60L7RgtC+0YDQvtC8INGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiywg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cbiAgICAvLyBbXS5zbGljZSgpIC0g0YHQvtC30LTQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgIC8qIGFycmF5T2ZJbmRleGVzIC0g0LzQsNGB0YHQuNCyLCDQutC+0YLQvtGA0YvQuSDRgdC+0LTQtdGA0LbQuNGCINCy0YHQtSDQsNGA0LPRg9C80LXQvdGC0YsgKNC60YDQvtC80LUg0L/QtdGA0LLQvtCz0L4pINC/0LXRgNC10LTQsNC90L3Ri9C1INCyINGE0YPQvdC60YbQuNGOXG4gICAgICAgICAgINCt0YLQviDQvNCw0YHRgdC40LIg0LjQvdC00LXQutGB0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQuNC3INC+0YHQvdC+0LLQvdC+0LPQviDQvNCw0YHRgdC40LLQsCBhcnIgKi9cbiAgICBjb25zdCBhcnJheU9mSW5kZXhlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIC8vINCS0LXRgNC90YPRgtGMINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdC90YvQuSDQvNCw0YHRgdC40LJcbiAgICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+XG5cbiAgICAvLyDQndCw0L/RgNC40LzQtdGAIGFycmF5T2ZJbmRleGVzID0gWzFdLCDRgtC+INC10YHRgtGMINC90YPQttC90L4g0YPQtNCw0LvQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyAxXG4gICAgLy8gaW5kZXhPZiAtINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40L3QtNC10LrRgSDQuNGB0LrQvtC80L7Qs9C+INGN0LvQtdC80LXQvdGC0LAuINCd0LDQv9GA0LjQvNC10YA6IFsnYScsJ2InXS5pbmRleE9mKCdiJykgLy8tPiAxXG4gICAgLy8g0JrQsNC20LTRi9C5INGN0LvQtdC80LXQvdGCINC80LDRgdGB0LjQstCwIGFyciDRgdCy0LXRgNGP0LXRgiDRgdCy0L7QuSDQuNC90LTQtdC60YEg0YEg0LjQvdC00LXQutGB0LDQvNC4INCyIGFycmF5T2ZJbmRleGVzLlxuICAgIC8vINCV0YHQu9C4INC10LPQviDQuNC90LTQtdC60YHQsCDQsiBhcnJheU9mSW5kZXhlcyDQvdC10YIsINGC0L4g0LzQtdGC0L7QtCBpbmRleE9mINCy0LXRgNC90ZHRgiAtMSwg0LfQvdCw0YfQuNGCINCx0YPQtNC10YIgdHJ1ZSDQuCDRjdC70LXQvNC10L3RgiDQvdC1INCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INC40Lcg0LzQsNGB0YHQuNCy0LBcbiAgICAgIGFycmF5T2ZJbmRleGVzLmluZGV4T2YoaW5kZXgpID09IC0xKTtcbiAgfS8vIHJlbW92ZVxufVxuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cblxuICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XG5cbiAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XG5cbiAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxuXG4gIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XG5cbiAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICB9XG5cbiAgZmluaXNoKHN0YXR1cykge1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcblxuICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi4vY2hhcmFjdGVyLXNoZWV0JztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuLi9jYW1lcmEnO1xuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tICcuLi9jb2xsaWRlcic7XG5pbXBvcnQgeyBPcmMgfSBmcm9tICcuLi9vcmMnO1xuaW1wb3J0IHsgRWxmIH0gZnJvbSAnLi4vZWxmJztcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi4vcHJvamVjdGlsZXMvYXJyb3cnO1xuaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vcmVtb3ZlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuLi9haXMvaXNBZ3Jlc3NpdmUnO1xuLy8gaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHN1cGVyKGdhbWUpO1xuICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDY0MCxcbiAgICB9KTtcblxuICAgIHRoaXMub3JjID0gbmV3IE9yYygpO1xuICAgIHRoaXMub3JjLnggPSA1MDA7XG4gICAgdGhpcy5vcmMueSA9IDMwMDtcblxuICAgIHRoaXMuZWxmID0gbmV3IEVsZigpO1xuICAgIHRoaXMuZWxmLnggPSAzMTA7XG4gICAgdGhpcy5lbGYueSA9IDExMDtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpO1xuICAgIGlzQWdyZXNzaXZlLmJlY29tZVBlYWNlZnVsKCk7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcbiAgICB0aGlzLnBsYXllci54ID0gMTAwO1xuICAgIHRoaXMucGxheWVyLnkgPSAxMDA7XG5cbiAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7XG5cbiAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xuICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoJ2xldmVsMScsIG1hcERhdGEsIHRoaXMudGlsZXMpO1xuXG4gICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XG4gICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXG4gICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcbiAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXG4gICAgfSk7XG4gICAgdGhpcy5tYWluQ2FtZXJhLnNwZWNpYWxQb3NpdGlvbigpO1xuICAgIHRoaXMubWFpbkNhbWVyYS53YXRjaCh0aGlzLnBsYXllcik7XG4gICAgdGhpcy5nYW1lLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5tYWluQ2FtZXJhKTtcblxuICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xuICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keSh0aGlzLnBsYXllcik7XG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMub3JjKTtcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5lbGYpO1xuXG4gICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XG4gICAgdGhpcy5lbGYudXBkYXRlKHRpbWUpO1xuICAgIHRoaXMucGxheWVyLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmNvbGxpZGVyLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLm1haW5DYW1lcmEudXBkYXRlKHRpbWUpO1xuXG4gICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKChhcnJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGFycm93LmFjdGl2ZSkgeyAvLyBhY3RpdmUg0YHRgtCw0L3QvtCy0LjRgtGB0Y8gdHJ1ZSDQsiDQvNC10YLQvtC00LUgUGxheWVyIC0+IEJvZHkuc2hvb3QoKVxuICAgICAgICAgIGFycm93LnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyb3cuZGVsZXRlZCkge1xuICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMucHJvamVjdGlsZXMsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYy52aWV3KTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5lbGYudmlldyk7XG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xuXG4gICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCkgeyAvLyDQntGC0YDQuNGB0L7QstC60LAg0YHRgtGA0LXQu1xuICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKChhcnJvdykgPT4ge1xuICAgICAgICBpZiAoYXJyb3cuYWN0aXZlKSB7IC8vIGFjdGl2ZSDRgdGC0LDQvdC+0LLQuNGC0YHRjyB0cnVlINCyINC80LXRgtC+0LTQtSBQbGF5ZXIgLT4gQm9keS5zaG9vdCgpXG4gICAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKGFycm93LnZpZXcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICB9XG5cbiAgc2hvb3RpbmcoKSB7IC8vINCh0YLRgNC10LvRjNCx0LAg0LjQs9GA0L7QutCwXG4gICAgY29uc3QgYXJyb3cgPSBuZXcgQXJyb3coJ2Rvd24nLCA0MDAsIHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xuICAgIHRoaXMucGxheWVyLmFkZEFycm93KGFycm93KTtcbiAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goYXJyb3cpOy8vINCS0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LAg0LHRg9C00YPRgiDQvtGC0YDQuNGB0L7QstCw0L3RiyDQsiDQvNC10YLQvtC00LUgcmVuZGVyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KGFycm93KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSk7XG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcbiAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nKTtcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHN1cGVyKGdhbWUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikge1xuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfYmcnKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfbmFtZScpO1xuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9zdGFydCcpO1xuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9vcHRpb24nKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfZXhpdCcpO1xuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aXRlLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0Q2FtZXJhKGNhbWVyYSkge1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xuICB9XG5cbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xuICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XG4gICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XG4gICAgY29uc3QgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XG4gICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcbiAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcbiAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xuICAgIGxldCByb3c7IGxldFxuICAgICAgY29sO1xuICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xuICAgICAgICByb3cgPSAwO1xuICAgICAgICBjb2wgPSAwO1xuICAgICAgICBsYXllci5kYXRhLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxuICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29sKys7XG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcbiAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICByb3crKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJykge1xuICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMubWFwKChvYmopID0+ICh7XG4gICAgICAgICAgeDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodCxcbiAgICAgICAgfSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xuICAgIHJldHVybiBuZXcgVGlsZU1hcCh7XG4gICAgICBpbWFnZU5hbWU6IG5hbWUsXG4gICAgICBzb3VyY2VYOiAwLFxuICAgICAgc291cmNlWTogMCxcbiAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcbiAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxuICAgICAgaGl0Ym94ZXMsXG4gICAgfSk7XG4gIH1cblxuICBmaWxsKGNvbG9yKSB7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBwcmludCh4LCB5LCB0ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMnB4IEdlb3JnaWEnO1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgfVxuXG4gIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xuICB9XG5cbiAgZHJhd1Nwcml0ZShzcHJpdGUpIHtcbiAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xuICAgIGxldCBzcHJpdGVZID0gc3ByaXRlLnk7XG5cbiAgICBpZiAodGhpcy5pc0NhbWVyYVNldCkge1xuICAgICAgc3ByaXRlWCAtPSB0aGlzLmNhbWVyYS54O1xuICAgICAgc3ByaXRlWSAtPSB0aGlzLmNhbWVyYS55O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpXG4gICAgICAgICAgICB8fCAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodClcbiAgICAgICAgICAgIHx8ICgoc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgPD0gMClcbiAgICAgICAgICAgIHx8ICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xuICAgIGNvbnN0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGgsIHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tzcHJpdGUuaW1hZ2VOYW1lXSxcbiAgICAgIHNvdXJjZVgsXG4gICAgICBzb3VyY2VZLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSxcbiAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCxcbiAgfSkge1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcbiAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcCgoaW5kZXgpID0+ICh7IHN4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSB9KSksXG4gICAgICBzcGVlZCxcbiAgICAgIHJlcGVhdCxcbiAgICAgIGF1dG9ydW4sXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTcHJpdGUoaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFNwcml0ZSh7XG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcbiAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3VyY2VYKGluZGV4KSB7XG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XG4gIH1cblxuICBnZXRTb3VyY2VZKGluZGV4KSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0LFxuICB9KSB7XG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBzZXRYWSh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpO1xuICB9XG5cbiAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICd1cCc6XG4gICAgICAgIHRoaXMueSA9IC1zcGVlZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICB0aGlzLnkgPSBzcGVlZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy54ID0gc3BlZWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy54ID0gLXNwZWVkO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtb3ZlKG9iamVjdCwgZHQpIHtcbiAgICBvYmplY3QueCArPSBkdCAqICh0aGlzLnggLyAxMDAwKTtcbiAgICBvYmplY3QueSArPSBkdCAqICh0aGlzLnkgLyAxMDAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==