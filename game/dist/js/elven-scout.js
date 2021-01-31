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
      you_win: 'img/you_win.png',
      game_over: 'img/game_over.png',
      tiles: 'img/tiles.png',
      tiles2: 'img/tiles2.png',
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

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json","target":"level1.json"}},"height":20,"infinite":false,"layers":[{"data":[1,1,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,64,15,66,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,17,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,7,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,17,4,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,17,4,4,4,4,5,5,5,4,4,4,1,1,74,25,46,65,65,65,65,65,65,65,65,65,65,65,65,65,66,1,1,1,74,25,25,25,75,75,75,75,75,75,75,75,75,75,75,75,76,1,1,1,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,64,65,66,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,84,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,61,62,62,62,62,63,1,1,1,1,1,1,1,1,1,1,1,1,1,1,71,72,72,72,72,73,1,1,1,1,1,64,65,65,65,65,65,65,65,1,81,82,82,82,82,83,1,1,1,1,1,74,75,75,75,75,75,75,75,1,1,1,1,1,1,1,1,1,1,1,1,84,85,85,85,85,85,85,85,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"id":1,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[48,48,48,48,48,48,48,48,48,0,0,0,30,47,39,39,39,38,18,60,48,27,58,0,59,28,39,60,27,0,0,0,30,39,39,0,39,38,38,57,48,39,0,0,0,48,39,28,0,0,0,0,29,29,39,0,0,29,29,29,48,60,37,0,0,48,0,27,39,0,0,0,60,38,0,0,59,58,0,38,48,27,0,0,60,48,60,0,28,0,0,29,29,29,0,39,0,29,29,29,48,28,58,0,0,48,37,27,27,0,0,58,0,38,0,59,0,38,0,60,48,27,0,0,0,48,28,39,60,0,29,29,29,29,0,39,0,29,29,29,48,59,0,0,0,48,39,59,0,0,0,58,0,60,39,0,0,0,60,0,48,58,0,60,0,0,29,29,29,29,29,29,0,0,0,59,0,57,0,48,48,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,48,39,37,0,0,0,0,59,29,29,29,29,0,59,39,39,39,39,59,48,48,48,48,48,48,48,48,37,0,39,0,39,0,58,39,48,48,48,48,48,48,27,0,0,0,27,27,60,27,37,48,39,37,27,37,60,49,48,48,48,48,37,0,57,0,39,28,37,39,39,48,58,0,39,28,28,59,49,48,48,48,28,60,27,39,39,37,0,58,0,48,37,28,60,0,27,0,28,49,48,48,0,0,0,0,0,0,27,0,60,48,27,58,28,39,28,27,39,28,48,48,0,0,0,0,0,0,0,28,49,48,59,37,0,0,0,0,0,0,58,48,0,0,0,0,0,0,39,49,48,48,49,37,57,0,0,60,0,0,39,48,39,27,39,28,60,28,49,48,48,48,49,49,49,49,49,49,48,49,49,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48],"height":20,"id":3,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":4,"name":"hitboxes","objects":[{"height":8.70607,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":1310.26,"x":0,"y":-2.17652},{"height":1051.26,"id":2,"name":"","rotation":0,"type":"","visible":true,"width":10.8826,"x":1266.73,"y":-2.17652},{"height":58.766,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":1262.38,"x":0,"y":1221.03},{"height":1212.32,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":43.5304,"x":0,"y":4.35304},{"height":30.4713,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":541.953,"x":32.6478,"y":8.70607},{"height":500.599,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":39.1773,"x":574.601,"y":8.70607},{"height":56.5895,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":276.418,"x":615.955,"y":457.069},{"height":54.413,"id":10,"name":"","rotation":0,"type":"","visible":true,"width":180.651,"x":1086.08,"y":457.069},{"height":54.413,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":180.651,"x":1083.91,"y":328.654},{"height":54.413,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":176.298,"x":1088.26,"y":200.24},{"height":250.3,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":76.1781,"x":700.839,"y":8.70607},{"height":50.0599,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":117.532,"x":779.194,"y":206.769},{"height":52.2364,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":252.476,"x":642.073,"y":333.007},{"height":380.891,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":37.0008,"x":639.896,"y":4.35304},{"height":28.2947,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":182.828,"x":709.545,"y":276.418},{"height":0,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":781.37,"y":145.827},{"height":28.2947,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":115.355,"x":777.017,"y":148.003},{"height":28.2947,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":169.768,"x":1099.14,"y":148.003},{"height":26.1182,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":176.298,"x":1094.79,"y":278.594},{"height":23.9417,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":174.121,"x":1096.97,"y":407.009},{"height":30.4713,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":243.77,"x":648.602,"y":404.832},{"height":58.766,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":396.126,"x":43.5304,"y":705.192},{"height":450.539,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":60.9425,"x":644.249,"y":766.134},{"height":163.239,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":50.0599,"x":592.013,"y":1051.26},{"height":104.473,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":50.0599,"x":522.364,"y":1114.38},{"height":41.3538,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":32.6478,"x":463.598,"y":1177.5},{"height":128.415,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":324.301,"x":91.4138,"y":994.669},{"height":30.4713,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":21.7652,"x":208.946,"y":851.019},{"height":34.8243,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":19.5887,"x":1107.85,"y":526.717},{"height":32.6478,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":21.7652,"x":848.842,"y":1105.67},{"height":54.413,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":302.536,"x":968.551,"y":707.368},{"height":509.305,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":52.2364,"x":1216.67,"y":515.835},{"height":50.0599,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":198.063,"x":1046.91,"y":766.134},{"height":52.2364,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":134.944,"x":1110.02,"y":835.783},{"height":28.2947,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":71.8251,"x":1170.97,"y":922.844},{"height":30.4713,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":241.594,"x":520.188,"y":657.309},{"height":39.1773,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":26.1182,"x":1234.09,"y":78.3547},{"height":361,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":21,"x":339,"y":140},{"height":21,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":393,"y":535},{"height":146,"id":54,"name":"","rotation":0,"type":"","visible":true,"width":8,"x":1276,"y":1042},{"height":95,"id":56,"name":"","rotation":0,"type":"","visible":true,"width":4,"x":1276.5,"y":1187.5},{"height":63,"id":57,"name":"","rotation":0,"type":"","visible":true,"width":14.5,"x":1262,"y":1217},{"height":128,"id":60,"name":"","rotation":0,"type":"","visible":true,"width":54,"x":708,"y":1092},{"height":54,"id":61,"name":"","rotation":0,"type":"","visible":true,"width":506,"x":766,"y":1168}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":5,"nextobjectid":65,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.4.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"tiles.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20};

/***/ }),

/***/ "./src/maps/level2.json":
/*!******************************!*\
  !*** ./src/maps/level2.json ***!
  \******************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json","target":"level2.json"}},"height":20,"infinite":false,"layers":[{"data":[42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,21,22,23,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,21,35,32,34,22,22,22,23,2,2,2,2,21,22,22,22,22,22,22,23,31,32,32,32,32,32,32,33,2,2,2,2,31,32,32,32,32,32,32,33,31,32,32,32,32,32,32,33,2,2,2,2,31,32,32,32,32,32,32,33],"height":20,"id":1,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,0,14,0,0,0,0,0,15,0,5,14,13,4,13,15,14,3,3,0,0,0,5,0,0,0,5,15,0,0,0,0,14,13,14,15,14,3,3,14,0,13,15,0,0,0,0,0,0,15,13,15,13,15,13,4,13,3,3,0,0,15,0,14,0,14,13,0,0,0,4,0,0,0,14,4,4,3,3,0,14,0,0,3,0,0,0,4,0,0,4,5,4,0,0,13,14,3,3,5,13,0,0,14,0,0,0,0,14,0,0,0,13,0,0,0,0,3,3,0,13,5,0,14,0,4,13,0,0,4,0,15,14,0,15,13,0,3,3,0,3,0,0,0,13,0,0,0,5,0,13,4,0,0,0,14,4,3,3,0,4,0,0,14,0,5,0,0,0,0,4,0,0,14,0,0,0,3,3,0,15,0,0,13,0,0,0,13,4,0,4,5,0,4,0,5,0,3,3,0,14,14,0,14,0,0,4,4,0,0,3,0,0,14,0,0,0,3,3,5,0,0,0,4,0,14,14,0,0,5,0,3,0,13,14,4,0,3,3,0,0,0,0,13,0,0,13,5,0,4,14,14,0,0,0,15,4,3,3,0,0,0,0,4,0,0,14,0,0,13,0,0,3,0,5,0,13,3,3,0,0,0,0,0,0,0,13,0,14,4,0,0,5,0,3,0,0,3,3,0,0,0,0,5,15,0,14,4,4,5,3,0,0,3,0,0,5,3,3,3,0,3,0,0,0,0,0,0,13,0,15,0,0,22,22,22,0,3,3,0,0,0,0,0,0,0,15,0,0,0,13,0,0,32,32,32,0,3,3,0,0,0,0,0,0,0,14,3,26,0,13,0,11,32,32,32,32,3],"height":20,"id":2,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":3,"name":"hitboxes","objects":[{"height":66.9856459330144,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":1280.38277511962,"x":0,"y":-3.82775119617225},{"height":1221.05263157895,"id":2,"name":"","rotation":0,"type":"","visible":true,"width":55.5023923444976,"x":1224.88038277512,"y":61.244019138756},{"height":149.282296650718,"id":3,"name":"","rotation":0,"type":"","visible":true,"width":93.7799043062203,"x":1136.84210526316,"y":1131.1004784689},{"height":321.531100478469,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":109.090909090909,"x":103.349282296651,"y":813.397129186603},{"height":1.91387559808618,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":1.91387559808612,"x":55.5023923444976,"y":1129.18660287081},{"height":1066.02870813397,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":66.9856459330144,"x":-15.311004784689,"y":63.1578947368421},{"height":55.5023923444976,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":38.2775119617225,"x":70.8133971291866,"y":200.956937799043},{"height":488.038277511962,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464115,"x":133.971291866029,"y":327.272727272727},{"height":49.7607655502393,"id":10,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":193.301435406699,"y":713.875598086124},{"height":116.746411483254,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":44.0191387559809,"x":200.956937799043,"y":206.698564593301},{"height":68.8995215311005,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":260.287081339713,"y":55.5023923444976},{"height":250.717703349282,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":42.1052631578947,"x":327.272727272727,"y":266.028708133971},{"height":47.8468899521532,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":45.933014354067,"x":390.430622009569,"y":524.401913875598},{"height":365.55023923445,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464115,"x":323.444976076555,"y":585.645933014354},{"height":55.5023923444976,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":114.832535885167,"x":453.588516746412,"y":775.11961722488},{"height":57.4162679425837,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":111.004784688995,"x":771.291866028708,"y":840.191387559809},{"height":53.5885167464114,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":47.8468899521532,"x":897.607655502392,"y":905.263157894737},{"height":49.7607655502393,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":1033.49282296651,"y":974.162679425837},{"height":61.2440191387559,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":118.66028708134,"x":512.918660287081,"y":711.961722488038},{"height":53.5885167464115,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":111.004784688995,"x":583.732057416268,"y":654.545454545455},{"height":243.062200956938,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":51.6746411483253,"x":771.291866028708,"y":526.315789473684},{"height":66.9856459330143,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":61.2440191387559,"x":824.88038277512,"y":771.291866028708},{"height":114.832535885167,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464114,"x":832.535885167464,"y":455.502392344498},{"height":187.55980861244,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":55.5023923444976,"x":895.693779904306,"y":327.272727272727},{"height":244.976076555024,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":958.851674641148,"y":585.645933014354},{"height":59.3301435406698,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":122.488038277512,"x":1025.83732057416,"y":777.033492822967},{"height":63.1578947368422,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":137.799043062201,"x":1083.25358851675,"y":838.277511961723},{"height":57.4162679425838,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":1157.89473684211,"y":903.349282296651},{"height":63.1578947368421,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120.574162679426,"x":1029.66507177034,"y":455.502392344498},{"height":55.5023923444977,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":126.315789473684,"x":1094.73684210526,"y":516.746411483254},{"height":57.4162679425837,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":132.057416267943,"x":1090.90909090909,"y":329.186602870813},{"height":61.244019138756,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":59.33014354067,"x":1090.90909090909,"y":133.971291866029},{"height":66.9856459330144,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":72.7272727272727,"x":1152.15311004785,"y":66.9856459330144},{"height":55.5023923444976,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":317.703349282297,"x":706.22009569378,"y":200.956937799043},{"height":128.22966507177,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":767.464114832536,"y":256.459330143541},{"height":65.0717703349283,"id":44,"name":"","rotation":0,"type":"","visible":true,"width":63.1578947368421,"x":702.392344497608,"y":453.588516746412},{"height":66.9856459330144,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":59.3301435406698,"x":579.904306220096,"y":327.272727272727},{"height":57.4162679425837,"id":46,"name":"","rotation":0,"type":"","visible":true,"width":59.3301435406698,"x":639.234449760766,"y":392.344497607656},{"height":59.3301435406699,"id":47,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":509.090909090909,"y":459.33014354067},{"height":51.6746411483253,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425837,"x":451.674641148325,"y":461.244019138756},{"height":65.0717703349283,"id":49,"name":"","rotation":0,"type":"","visible":true,"width":132.057416267943,"x":447.846889952153,"y":262.200956937799},{"height":61.244019138756,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464114,"x":583.732057416268,"y":135.885167464115},{"height":65.0717703349282,"id":51,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425838,"x":637.320574162679,"y":65.0717703349282},{"height":149.282296650718,"id":56,"name":"","rotation":0,"type":"","visible":true,"width":466.985645933014,"x":-1.91387559808612,"y":1125.35885167464},{"height":66.9856459330143,"id":57,"name":"","rotation":0,"type":"","visible":true,"width":68.8995215311005,"x":380.861244019139,"y":1023.92344497608},{"height":250.717703349282,"id":58,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":511.004784688995,"y":834.44976076555},{"height":61.2440191387559,"id":59,"name":"","rotation":0,"type":"","visible":true,"width":124.401913875598,"x":574.162679425837,"y":1027.75119617225},{"height":61.244019138756,"id":60,"name":"","rotation":0,"type":"","visible":true,"width":124.401913875598,"x":639.234449760766,"y":962.679425837321},{"height":130.143540669856,"id":61,"name":"","rotation":0,"type":"","visible":true,"width":61.2440191387559,"x":704.306220095694,"y":844.019138755981},{"height":177.99043062201,"id":62,"name":"","rotation":0,"type":"","visible":true,"width":49.7607655502392,"x":777.033492822967,"y":1102.39234449761},{"height":151.196172248804,"id":63,"name":"","rotation":0,"type":"","visible":true,"width":304.306220095694,"x":826.794258373206,"y":1131.1004784689},{"height":47.8468899521531,"id":64,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":976.076555023924,"y":1039.23444976077},{"height":51.6746411483252,"id":65,"name":"","rotation":0,"type":"","visible":true,"width":42.1052631578948,"x":974.162679425837,"y":1085.16746411483},{"height":0,"id":66,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":947.368421052632,"y":1301.43540669856},{"height":72.7272727272726,"id":67,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":767.464114832536,"y":1023.92344497608},{"height":128.22966507177,"id":68,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425838,"x":516.746411483254,"y":1154.06698564593},{"height":59.3301435406697,"id":69,"name":"","rotation":0,"type":"","visible":true,"width":47.8468899521531,"x":581.818181818182,"y":1222.96650717703},{"height":0,"id":70,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":625.837320574163,"y":1404.78468899522},{"height":63.1578947368421,"id":71,"name":"","rotation":0,"type":"","visible":true,"width":76.555023923445,"x":246.88995215311,"y":200.956937799043},{"height":36.3636363636365,"id":72,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":384.688995215311,"y":1090.90909090909},{"height":59.33014354067,"id":73,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":639.234449760766,"y":1088.995215311},{"height":70.8133971291866,"id":74,"name":"","rotation":0,"type":"","visible":true,"width":315.789473684211,"x":834.44976076555,"y":63.1578947368421},{"height":63.1578947368421,"id":75,"name":"","rotation":0,"type":"","visible":true,"width":187.55980861244,"x":899.521531100479,"y":132.057416267943},{"height":122.488038277512,"id":76,"name":"","rotation":0,"type":"","visible":true,"width":197.129186602871,"x":1023.92344497608,"y":200.956937799043},{"height":63.1578947368421,"id":77,"name":"","rotation":0,"type":"","visible":true,"width":76.5550239234451,"x":1148.32535885167,"y":130.143540669856}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":4,"nextobjectid":78,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.4.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../newnewnew/tiles2.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20};

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

/***/ "./src/newLevel.js":
/*!*************************!*\
  !*** ./src/newLevel.js ***!
  \*************************/
/*! exports provided: nextLevelInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextLevelInfo", function() { return nextLevelInfo; });
function nextLevelInfo() {
  $('#infoModal').modal('show'); // $('#staticBackdrop').modal('handleUpdate');
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
      speed: 100
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
/* harmony import */ var _newLevel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../newLevel */ "./src/newLevel.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../get-quest */ "./src/get-quest.js");
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
    _classCallCheck(this, GameLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
        imageName: 'tiles',
        imageWidth: 640,
        imageHeight: 640
      });
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
      var _this = this;

      if (_get_quest__WEBPACK_IMPORTED_MODULE_15__["allDeathOrks"] == 10) {
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(true);
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
      }

      if (this.gameOverTrigger) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameOverPlayAudio"])();
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
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
            _this.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_8__["RemoveFromArray"].remove(_this.projectiles, index);
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
      var _this2 = this;

      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map);

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          _this2.game.screen.drawSprite(orc.view);
        });
      }

      this.game.screen.drawSprite(this.player.view);

      if (this.projectiles.length > 0) {
        // Отрисовка стрел
        this.projectiles.forEach(function (arrow) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            _this2.game.screen.drawSprite(arrow.view);
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
      } //go to next level for map


      if (this.player.x >= 1100 && this.player.x <= 1200 && this.player.y >= 30 && this.player.y <= 60) {
        this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
          imageName: 'tiles2',
          imageWidth: 640,
          imageHeight: 640
        });

        _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

        Object(_newLevel__WEBPACK_IMPORTED_MODULE_14__["nextLevelInfo"])();
        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this);
        this.player.x = 224;
        this.player.y = 118;
        this.collider = new _collider__WEBPACK_IMPORTED_MODULE_4__["Collider"](); // Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга

        var mapData = __webpack_require__(/*! ../maps/level2.json */ "./src/maps/level2.json");

        this.map = this.game.screen.createMap('level2', mapData, this.tiles); // createMap возвращает объект TileMap

        this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]({
          width: this.game.screen.width,
          height: this.game.screen.height,
          limitX: this.map.width - this.game.screen.width,
          limitY: this.map.height - this.game.screen.height
        });
        this.mainCamera.specialPosition();
        this.mainCamera.watch(this.player);
        this.game.screen.setCamera(this.mainCamera);
        this.collider.addStaticShapes(mapData);
        this.collider.addKinematicBody(this.player); // убираем персонажей куда подальше

        this.questPerson.x = 1400;
        this.questPerson.y = 1000; //this.orc.x = 1400;
        //this.orc.y = 1000;

        this.orcArmy = []; // Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

        this.waves = new _waves__WEBPACK_IMPORTED_MODULE_6__["Waves"](this.game);
        this.interface = new _interface__WEBPACK_IMPORTED_MODULE_7__["Interface"](this.game); // Шкала здоровья, таймер в углу экрана

        this.projectiles = []; // Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

        this.gameOverTrigger = false; // Если interface сделает эту переменную true, переходим к проигрышной сцене

        this.winTrigger = false; // Если interface сделает эту переменную true, переходим к победной сцене
        //updateModalDialog();

        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(true);
      }

      if (this.player.x >= 600 && this.player.x <= 700 && this.player.y >= 1150 && this.player.y <= 1300) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(true);
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
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
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'game_over');

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
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'you_win');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXQtcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwtZGlhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0LXBlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVtb3ZlLWZyb20tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtd2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGl0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWluaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLmpzIl0sIm5hbWVzIjpbIkFJIiwiYm9keSIsInRpbWUiLCJEdW1teSIsImR1cmF0aW9uIiwiZGlyZWN0aW9uIiwibGFzdFRpbWUiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5nZURpcmVjdGlvbiIsIndhbGsiLCJFbmRTY3JpcHQiLCJldmVudFRpbWUiLCJldmVudFN0YXJ0IiwiaGl0Iiwic3RhbmQiLCJpc0FncmVzc2l2ZSIsImFncmVzc2l2ZSIsIlBlYWNlZnVsIiwicGxheWVyIiwibGFzdFRpbWVEdW1iIiwic3R1Y2siLCJjaGFuZ2VXYXlJbml0IiwiY2hhbmdlV2F5Iiwib2xkWCIsIm9sZFkiLCJsYXN0VGltZUFncmVzc2l2ZSIsImR1cmF0aW9uQWdyZXNzaXZlIiwidGltZU9mTWFyY2giLCJpc09yY0FncmVzc2l2ZSIsImFncmVzc2l2ZUJlaGF2aW91ciIsImlzU3R1Y2siLCJkdW1iQmVoYXZpb3VyIiwiY29ycmVjdGlvbiIsIngiLCJjb2xsaXNpb25TaGFwZSIsIndpZHRoIiwieSIsImhlaWdodCIsImF0dGFjayIsImNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbiIsImdldEhpdCIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsInNvdXJjZVgiLCJzeCIsInNvdXJjZVkiLCJzeSIsInJ1bm5pbmciLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsIm9uRW5kIiwiaW5kZXgiLCJzZXRGcmFtZSIsInN0b3AiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJnYW1lQXVkaW8iLCJBdWRpbyIsImdhbWVBdWRpb1dpbiIsImFycm93UGxheUF1ZGlvIiwic291bmQiLCJzcmMiLCJwbGF5Iiwic3dvcmRQbGF5QXVkaW8iLCJ2b2x1bWUiLCJkZWF0aE9yY1BsYXlBdWRpbyIsImdhbWVPdmVyUGxheUF1ZGlvIiwiZ2FtZVdpblBsYXlBdWRpbyIsInN0YXRlIiwicGF1c2UiLCJnYW1lUGxheUF1ZGlvIiwibG9vcCIsIkJvZHkiLCJ2ZWxvY2l0eSIsIlZlY3RvciIsImFuaW1hdGlvbnMiLCJpc1Nob290aW5nIiwiaXNIaXR0aW5nIiwiYW5pbWF0aW9uU2hlZXQiLCJDaGFyYWN0ZXJTaGVldCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwiYXJyb3ciLCJ2aWV3IiwiZmx5IiwicnVuIiwic2V0RGlyZWN0aW9uIiwiZGVhdGgiLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyIsImoiLCJjaGVja0ludGVyYWN0aXZlIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlbGV0ZSIsIkNvbnRyb2xTdGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImZpcmUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsImVsZiIsInRpdGxlX2JnIiwidGl0bGVfbmFtZSIsInRpdGxlX3N0YXJ0IiwidGl0bGVfb3B0aW9uIiwidGl0bGVfZXhpdCIsInlvdV93aW4iLCJnYW1lX292ZXIiLCJ0aWxlcyIsInRpbGVzMiIsInF1ZXN0X3BlcnNvbiIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiZ2FtZU92ZXIiLCJHYW1lT3ZlciIsImdhbWVXaW4iLCJHYW1lV2luIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIkdBTUVfT1ZFUiIsIkdBTUVfV0lOIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJhbGxEZWF0aE9ya3MiLCJzaG93UXVlc3RJbnRlcmZhY2UiLCJ1cGRhdGVRdWVzdCIsImdldFF1ZXN0IiwiY29uc29sZSIsImxvZyIsImRlYXRoT3JjcyIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsIkludGVyZmFjZSIsImdhbWUiLCJ3YXZlcyIsInRleHRJbmZvIiwiVGV4dEluZm8iLCJjb250ZXh0IiwiZmlnaHRUZXh0U2hvd2VkIiwib3Jjc0tpbGxlZCIsIndpZHRoSGVhbHRoTGluZSIsImVuZE9wYWNpdHkiLCJzaG93SGVhbHRoTGluZSIsInF1ZXN0SW50ZXJmYWNlIiwiaGVhbHRoIiwiZW5kR2FtZSIsImZpZ2h0VGV4dCIsInNob3dUZXh0Iiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJyZWN0IiwiZmlsbFJlY3QiLCJoZWFsdGhTdGFydCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsIm9wYWNpdHkiLCJnYW1lT3ZlclRyaWdnZXIiLCJ3aW5UcmlnZ2VyIiwiVEFLRV9RVUVTVCIsImdldEVsZW1lbnRCeUlkIiwiQURBTkRPTl9USEVfUVVFU1QiLCJydW5PbmNlUXVlc3QiLCJvbmNsaWNrIiwiJCIsIm1vZGFsIiwic2hvd01vZGFsRGlhbG9nIiwidXBkYXRlTW9kYWxEaWFsb2ciLCJuZXh0TGV2ZWxJbmZvIiwiT3JjIiwiYWlUeXBlIiwiYWkiLCJiZWNvbWVBZ3Jlc3NpdmUiLCJQbGF5ZXIiLCJnYW1lX2xldmVsIiwidGltZUFycm93IiwidGltZXJGb3JDcmVhdGluZ0Fycm93IiwibGFzdFRpbWVGb3JBcnJvdyIsInVuZGVhZCIsInRpbWVyVW5kZWFkIiwibGFzdFRpbWVGb3JVbmRlYWQiLCJzaG9vdGluZyIsInNob290IiwiUHJvamVjdGlsZSIsImFjdGl2ZSIsImRlbGV0ZWQiLCJBcnJvdyIsInNwcml0ZXMiLCJnZXRTcHJpdGUiLCJRdWVzdFBlcnNvbiIsImFyciIsImluZGV4ZXMiLCJhcnJheU9mSW5kZXhlcyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIml0ZW0iLCJpbmRleE9mIiwiY29uc3RydWN0b3IiLCJiZWNvbWVQZWFjZWZ1bCIsInF1ZXN0UGVyc29uIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsInNwZWNpYWxQb3NpdGlvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsIm9yY0FybXkiLCJXYXZlcyIsImludGVyZmFjZSIsInByb2plY3RpbGVzIiwic2hvd1RyYWluaW5nIiwiZmluaXNoIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJhZGRBcnJvdyIsInNldFRpbWVvdXQiLCJlbnRlciIsImRyYXdJbWFnZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJwcmludCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImFkZFN0eWxlc1RvQ2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsInRleHQiLCJzcHJpdGUiLCJzcHJpdGVYIiwic3ByaXRlWSIsImFicyIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0Iiwic2hvd1RleHRCb29sZWFuIiwiaG93TG9uZ1RvU2hvdyIsInRpbWVUb1N0b3AiLCJmb250U2l6ZSIsInN0YXJ0Rm9udFNpemUiLCJwcm9wcyIsIm9iamVjdCIsImR0IiwidGltZUxlZnRGb3JOZXh0V2F2ZSIsInRpbWVGb3JOZXh0V2F2ZSIsIm5leHRXYXZlIiwib3JjU3F1YWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxFQUFiO0FBQUE7QUFBQTtBQUNFLGdCQUFjO0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDRDs7QUFISDtBQUFBO0FBQUEsNEJBS1VBLElBTFYsRUFLZ0I7QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDtBQVBIO0FBQUE7QUFBQSwyQkFTU0MsSUFUVCxFQVNlLENBRVo7QUFYSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1DLEtBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFB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L0J5SSxXQUFHLENBQUMxSCxDQUFKLEdBQVEsSUFBUixDQUYwQixDQUViOztBQUNiMEgsV0FBRyxDQUFDdkgsQ0FBSixHQUFRLElBQVI7QUFDQXdVLGdCQUFRLENBQUNuUCxJQUFULENBQWNrQyxHQUFkO0FBQ0Q7O0FBQ0RpTixjQUFRLENBQUN2UixPQUFULENBQWlCLFVBQUNzRSxHQUFELEVBQVM7QUFDeEIsYUFBSSxDQUFDK0gsUUFBTCxDQUFjUyxnQkFBZCxDQUErQnhJLEdBQS9COztBQUNBLGFBQUksQ0FBQ3lJLE9BQUwsQ0FBYTNLLElBQWIsQ0FBa0JrQyxHQUFsQjtBQUNELE9BSEQ7QUFLQSxXQUFLOE0sbUJBQUwsR0FBMkIsS0FBS0MsZUFBaEM7QUFDRDtBQXpDSDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvZWx2ZW4tc2NvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBSSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbChib2R5KSB7XHJcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFJIH0gZnJvbSAnLi4vYWknO1xyXG5cclxuZXhwb3J0IGNsYXNzIER1bW15IGV4dGVuZHMgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAxMDAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICB9XHJcblxyXG4gIGNoYW5nZURpcmVjdGlvbigpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24sdXAsbGVmdCxyaWdodCcuc3BsaXQoJywnKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmRTY3JpcHQgZXh0ZW5kcyBBSSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IC8vINCX0LTQtdGB0Ywg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0L/QsNGA0LDQvNC10YLRgNGLLCDQvdCw0L/RgNC40LzQtdGALCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgyDQv9C10YDRgdC+0L3QsNC20LAsINC10LPQviDQv9Cw0LzRj9GC0YwsINGH0YLQviDQtNC10LvQsNC10YIg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YEg0Lgg0YIu0LQuXHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmV2ZW50VGltZSA9IDE1MDA7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMuZXZlbnRTdGFydCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50VGltZSAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZXZlbnRTdGFydCkgeyAvLyDQldGB0LvQuCDRgdC+0LHRi9GC0LjQtSDQtdGI0ZEg0L3QtSDQvdCw0YfQsNC70L7RgdGMXHJcbiAgICAgIGlmICh0aGlzLmV2ZW50VGltZSA8IDApIHtcclxuICAgICAgICB0aGlzLmV2ZW50U3RhcnQgPSB0cnVlOy8vINCS0YDRg9Cx0LDQtdC8INGB0L7QsdGL0YLQuNC1XHJcbiAgICAgICAgdGhpcy5ib2R5LmhpdCh0aGlzLmRpcmVjdGlvbik7Ly8g0KHQvtCx0YvRgtC40LUgLSDQvtGA0Log0LHRjNGR0YJcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvZHkuc3RhbmQodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgaXNBZ3Jlc3NpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJlY29tZUFncmVzc2l2ZSgpIHtcclxuICAgIHRoaXMuYWdyZXNzaXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBiZWNvbWVQZWFjZWZ1bCgpIHtcclxuICAgIHRoaXMuYWdyZXNzaXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNPcmNBZ3Jlc3NpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZ3Jlc3NpdmU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFJIH0gZnJvbSAnLi4vYWknO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZSB9IGZyb20gJy4vaXNBZ3Jlc3NpdmUnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQZWFjZWZ1bCBleHRlbmRzIEFJIHtcclxuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHsgLy8g0JfQtNC10YHRjCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQv9Cw0YDQsNC80LXRgtGA0YssINC90LDQv9GA0LjQvNC10YAsINC60LDQutC40LUg0LfQsNC00LDRh9C4INGDINC/0LXRgNGB0L7QvdCw0LbQsCwg0LXQs9C+INC/0LDQvNGP0YLRjCwg0YfRgtC+INC00LXQu9Cw0LXRgiDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSDQuCDRgi7QtC5cclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gMTA1MDsvLyDQnNC10L3Rj9C10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQutCw0LbQtNGL0LUgMTAwMCDQvNGBXHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuICAgIHRoaXMubGFzdFRpbWVEdW1iID0gMDsvLyDQmtC+0LPQtNCwINCyINC/0L7RgdC70LXQtNC90LjQuSDRgNCw0Lcg0LzQtdC90Y/QuyDQvdCw0L/RgNCw0LLQu9C10L3QuNC1XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyOy8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG5cclxuICAgIHRoaXMuc3R1Y2sgPSBmYWxzZTsvLyDQldGB0LvQuCB0cnVlLCDQvtGA0Log0YPQv9C10YDRgdGPINCyINGB0YLQtdC90YNcclxuICAgIHRoaXMuY2hhbmdlV2F5SW5pdCA9IDUwMDsvLyDQldGB0LvQuCDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LIg0LvRjtCx0L7QvCDQtNGA0YPQs9C+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCDQsiDQvdCw0LTQtdC20LTQtSDQvtCx0L7QudGC0Lgg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxyXG4gICAgdGhpcy5jaGFuZ2VXYXkgPSB0aGlzLmNoYW5nZVdheUluaXQ7XHJcbiAgICB0aGlzLm9sZFggPSAwOy8vINCSINGN0YLQuCDQv9C10YDQtdC80LXQvdC90YvQtSDQsdGD0LTQtdC8INC/0LjRgdCw0YLRjCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0YsuINCV0YHQu9C4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YDQsNCy0L3RiyDRgdGC0LDRgNGL0LwsINC30L3QsNGH0LjRgiDQvtGA0Log0YPQv9C10YDRgdGPINCyINC/0YDQtdC/0Y/RgtGB0YLQstC40LVcclxuICAgIHRoaXMub2xkWSA9IDA7XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZUFncmVzc2l2ZSA9IDA7XHJcbiAgICB0aGlzLmR1cmF0aW9uQWdyZXNzaXZlID0gNTAwOy8vINCd0LDRgdC60L7Qu9GM0LrQviDRh9Cw0YHRgtC+INC80LXQvdGP0Y7RgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INCw0LPRgNC10YHRgdC40LLQvdGL0LUg0L7RgNC60LhcclxuICAgIHRoaXMudGltZU9mTWFyY2ggPSA0NTYwOy8vINCa0L7Qs9C00LAg0L7RgNC6INGC0L7Qu9GM0LrQviDQv9C+0Y/QstC40LvRgdGPLCDRjdGC0L4g0LLRgNC10LzRjyDQvtC9INC/0YDQvtGB0YLQviDQtNCy0LjQttC10YLRgdGPINCyINC+0LTQvdC+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuC4g0J/QvtGB0LvQtSAtINC90LDRh9C40L3QsNC10YIg0LTQtdC50YHRgtCy0L7QstCw0YLRjCDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7IC8vINCe0LTQuNC9INC40Lcg0LHQu9C+0LrQvtCyINC/0YDQuNC90Y/RgtC40Y8g0YDQtdGI0LXQvdC40LlcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwLGxlZnQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudGltZU9mTWFyY2ggPiAwKSB7IC8vINCe0YDQuiDQtdGJ0ZEg0LzQsNGA0YjQuNGA0YPQtdGCLCDRgi7QtS4g0LfQsNGF0L7QtNC40YIg0L3QsCDQu9C+0LrQsNGG0LjRjlxyXG4gICAgICB0aGlzLnRpbWVPZk1hcmNoIC09IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0dWNrKSB7IC8vINCV0YHQu9C4INC+0YDQuiDQt9Cw0YHRgtGA0Y/Quywg0LTQsNC70YzQvdC10LnRiNC40YUg0L/RgNC+0LLQtdGA0L7QuiBlbHNlIGlmINC90LUg0LHRg9C00LXRglxyXG4gICAgICB0aGlzLmNoYW5nZVdheSAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgaWYgKHRoaXMuY2hhbmdlV2F5IDwgMCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xyXG4gICAgICAgIHRoaXMuc3R1Y2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKSB7IC8vINCf0YDQvtCy0LXRgNC60LAg0L7RgNC60LAg0L3QsCDQsNCz0YDQtdGB0YHQuNGOXHJcbiAgICAgIHRoaXMuYWdyZXNzaXZlQmVoYXZpb3VyKHRpbWUpO1xyXG4gICAgICB0aGlzLmlzU3R1Y2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHVtYkJlaGF2aW91cih0aW1lKTtcclxuICAgICAgdGhpcy5pc1N0dWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICBkdW1iQmVoYXZpb3VyKHRpbWUpIHtcclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWVEdW1iKSA+IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcclxuICAgICAgdGhpcy5sYXN0VGltZUR1bWIgPSB0aW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWdyZXNzaXZlQmVoYXZpb3VyKHRpbWUpIHtcclxuICAgIGNvbnN0IGNvcnJlY3Rpb24gPSAxMDsvLyDQvtGA0Log0LHRjNGR0YIg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQuCA1LCDQtdC80YMg0L3QtSDQvdGD0LbQvdC+INCx0YvRgtGMINCy0L/Qu9C+0YLQvdGD0Y4g0Log0LjQs9GA0L7QutGDICjQuNC90LDRh9C1INC+0YDQuiDQsdGM0ZHRgiDRgtC+0LvRjNC60L4g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQuNCz0YDQvtC60L7QvCwg0LAg0L7RgNC60Lgg0LjQt9Cx0LXQs9Cw0Y7RgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpXHJcbiAgICBpZiAodGhpcy5ib2R5LnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueCAtIGNvcnJlY3Rpb24gPCB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLndpZHRoXHJcbiAgICAgICYmIHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUud2lkdGggKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnhcclxuICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSAtIGNvcnJlY3Rpb24gPCB0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLmhlaWdodFxyXG4gICAgICAmJiB0aGlzLmJvZHkueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS55ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLmhlaWdodCArIGNvcnJlY3Rpb24gPiB0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueSkgeyB0aGlzLmF0dGFjaygpO31cclxuICAgIC8vIH1cclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWVBZ3Jlc3NpdmUpID4gdGhpcy5kdXJhdGlvbkFncmVzc2l2ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbigpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmJvZHkueCA+PSB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55ID49IHRoaXMucGxheWVyLnkpIHtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSkge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPCB0aGlzLnBsYXllci55KSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPj0gdGhpcy5wbGF5ZXIueCAmJiB0aGlzLmJvZHkueSA8IHRoaXMucGxheWVyLnkpIHtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNTdHVjaygpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCwg0LLQvtC30LzQvtC20L3QviDQvtGA0Log0YPQv9C10YDRgdGPINCyINC/0YDQtdC/0Y/RgtGB0YLQstC40LVcclxuICAgIGlmICh0aGlzLmJvZHkueCA9PSB0aGlzLm9sZFggJiYgdGhpcy5ib2R5LnkgPT0gdGhpcy5vbGRZKSB7XHJcbiAgICAgIHRoaXMuc3R1Y2sgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3VwJyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnZG93bicpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnIHx8IHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub2xkWCA9IHRoaXMuYm9keS54O1xyXG4gICAgdGhpcy5vbGRZID0gdGhpcy5ib2R5Lnk7XHJcbiAgfVxyXG5cclxuICBhdHRhY2soKSB7XHJcbiAgICB0aGlzLmJvZHkuaGl0KCk7XHJcbiAgICB0aGlzLnBsYXllci5nZXRIaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgaW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDsvLyDQstGA0LXQvNGPINC+0YIg0L/QvtGB0LvQtdC00L3QtdCz0L4g0YTRgNC10LnQvNCwINCw0L3QuNC80LDRhtC40LhcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgLyog0JTQu9GPINC+0YLRgdC70LXQttC40LLQsNC90LjRjyDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwLiDQndCw0L/RgNC40LzQtdGALCDQv9C+0YHQu9C1INC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LAg0LDQvdC40LzQsNGG0LjQuCDRgdGC0YDQtdC70YzQsdGLLCDQv9C10YDRgdC+0L3QsNC2INC/0LXRgNC10YHRgtCw0ZHRgiDRgdGC0YDQtdC70Y/RgtGMXHJcbiAgICDQrdGC0LAg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LfQsNC00LDQtdGC0YHRjyDQsiDQutC70LDRgdGB0LUgQm9keS4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlOyAqL1xyXG4gICAgdGhpcy5vbkVuZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRGcmFtZShpbmRleCkge1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcclxuICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeDtcclxuICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHsgLy8g0KHRgtCw0YDRgiDQsNC90LjQvNCw0YbQuNC4INGBINGB0LDQvNC+0LPQviDQvdCw0YfQsNC70LBcclxuICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZXh0RnJhbWUoKSB7XHJcbiAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykgeyAvLyDQldGB0LvQuCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC60LDQtNGALCDRgtC+Li4uXHJcbiAgICAgIGlmICh0aGlzLm9uRW5kKSB7IC8vIC4uLtC10YHQu9C4INC30LDQtNCw0L3QsCDQutC+0L3RhtC+0LLQutCwLCDQt9Cw0L/Rg9GB0LrQsNC10LwuINCd0LDQv9GA0LjQvNC10YA6IHRoaXMudmlldy5vbkVuZCA9ICgpPT50aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uRW5kKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucmVwZWF0KSB7IC8vIC4uLiDQtdGB0LvQuCDQt9Cw0LTQsNC9INC/0L7QstGC0L7RgCwg0L/QvtCy0YLQvtGA0Y/QtdC8XHJcbiAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9wKCk7Ly8gLi4uINC40L3QsNGH0LUgLSDRgdGC0L7QvyDQsNC90LjQvNCw0YbQuNGPXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7IC8vINCt0YLQsCDQv9GA0L7QstC10YDQutCwINC90YPQttC90LAg0YLQvtC70YzQutC+INC00LvRjyDQv9C10YDQstC+0LPQviDQstGL0LfQvtCy0LAgdXBkYXRlKCksINGH0YLQvtCx0Ysg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNGC0YwgdGhpcy5sYXN0VGltZVxyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkgeyAvLyDQoNCw0LfQvdC40YbQsCDQv9C+INCy0YDQtdC80LXQvdC4INC80LXQttC00YMg0L/RgNC+0YjQu9GL0Lwg0Lgg0YLQtdC60YPRidC40Lwg0LrQsNC00YDQvtC8OiAoMTEtMik+MTAsICgxMi0yKT4xMCwgKDEzLTIpPjEwIC0g0LfQtNC10YHRjCDQv9GA0L7RiNC70L4gMTDQvNGBLCDQsCBzcGVlZCDQsiDRjdGC0L7QvCDQv9GA0LjQvNC10YDQtSDQutCw0Log0YDQsNC3INGA0LDQstC10L0gMTDQvNGBLCDQt9C90LDRh9C40YIg0LzQtdC90Y/QtdC8INC60LDQtNGAXHJcbiAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBnYW1lQXVkaW8gPSBuZXcgQXVkaW8oJ2F1ZGlvL2dhbWUubXAzJyk7XHJcbmNvbnN0IGdhbWVBdWRpb1dpbiA9IG5ldyBBdWRpbygnYXVkaW8vd2luLm1wMycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycm93UGxheUF1ZGlvKCkge1xyXG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XHJcbiAgc291bmQuc3JjID0gJ2F1ZGlvL2Fycm93Lm1wMyc7XHJcbiAgcmV0dXJuIHNvdW5kLnBsYXkoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3b3JkUGxheUF1ZGlvKCkge1xyXG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XHJcbiAgc291bmQuc3JjID0gJ2F1ZGlvL3N3b3JkLm1wMyc7XHJcbiAgc291bmQudm9sdW1lID0gMC4yO1xyXG4gIHJldHVybiBzb3VuZC5wbGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWF0aE9yY1BsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9kZWF0aC1vcmMubXAzJztcclxuICBzb3VuZC52b2x1bWUgPSAwLjE7XHJcbiAgcmV0dXJuIHNvdW5kLnBsYXkoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyUGxheUF1ZGlvKCkge1xyXG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XHJcbiAgc291bmQuc3JjID0gJ2F1ZGlvL2dhbWUtb3Zlci5tcDMnO1xyXG4gIHNvdW5kLnZvbHVtZSA9IDAuNDtcclxuICByZXR1cm4gc291bmQucGxheSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lV2luUGxheUF1ZGlvKHN0YXRlKSB7XHJcbiAgZ2FtZUF1ZGlvV2luLnZvbHVtZSA9IDAuMTtcclxuICBpZiAoc3RhdGUgPT0gdHJ1ZSkge1xyXG4gICAgZ2FtZUF1ZGlvV2luLnBsYXkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2FtZUF1ZGlvV2luLnBhdXNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVBsYXlBdWRpbyhzdGF0ZSkge1xyXG4gIGdhbWVBdWRpby52b2x1bWUgPSAwLjE7XHJcbiAgZ2FtZUF1ZGlvLmxvb3AgPSB0cnVlO1xyXG4gIGlmIChzdGF0ZSA9PSB0cnVlKSB7XHJcbiAgICBnYW1lQXVkaW8ucGxheSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBnYW1lQXVkaW8ucGF1c2UoKTtcclxuICB9XHJcbn1cclxuIiwiLy8g0J7RgdC90L7QstCwINCy0YHQtdGFINC/0LXRgNGB0L7QvdCw0LbQtdC5XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyU2hlZXQgfSBmcm9tICcuL2NoYXJhY3Rlci1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keSB7Ly8gUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxyXG4gIGNvbnN0cnVjdG9yKHsgaW1hZ2VOYW1lLCBzcGVlZCB9KSB7XHJcbiAgICB0aGlzLnggPSAtMTAwOy8vINCf0L7Qu9C+0LbQtdC90LjQtSDQvtCx0YrQtdC60YLQsFxyXG4gICAgdGhpcy55ID0gLTEwMDtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDsvLyDQodC60L7RgNC+0YHRgtGMINC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKCdsZWZ0JywgMCk7Ly8g0J3QsNC/0YDQsNCy0LvQtdC90LjQtSDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDsvLyDQktGA0LXQvNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LBcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9Oy8vINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQsNC90LjQvNCw0YbQuNC5IHt3YWxrX2Rvd246IC4uLCB3YWxrX3VwOiAuLiDQuCDRgi7QtC4gfVxyXG5cclxuICAgIC8vINCk0L7RgNC80LAsINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtNC70Y8g0LrQvtC70LvQuNC30LjQuC4g0J7QvdCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LUg0L7RgiDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDRgdC/0YDQsNC50YLQsCwg0LAg0L7RgiB4OiAxOCwgeTogMTVcclxuICAgIHRoaXMuY29sbGlzaW9uU2hhcGUgPSB7XHJcbiAgICAgIHg6IDE4LCB5OiAxNSwgd2lkdGg6IDI4LCBoZWlnaHQ6IDQ5LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgLy8g0JfQsNCz0YDRg9C20LDQtdC8INC90LXQvtCx0YXQvtC00LzRi9C1INCw0L3QuNC80LDRhtC40Lgg0LTQu9GPINC00LDQvdC90L7Qs9C+INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoeyBpbWFnZU5hbWUgfSk7XHJcbiAgICAnd2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7Ly8g0JIg0LjRgtC+0LPQtSB0aGlzLmFuaW1hdGlvbnMgPSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cclxuICAgIH0pO1xyXG4gICAgJ3Nob290X2Rvd24sc2hvb3RfdXAsc2hvb3RfbGVmdCxzaG9vdF9yaWdodCcuc3BsaXQoJywnKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCA1MCwgZmFsc2UpOy8vINCy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcclxuICAgIH0pO1xyXG4gICAgJ2N1dF9kb3duLGN1dF91cCxjdXRfbGVmdCxjdXRfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICB9KTtcclxuICAgIFsnZGVhdGgnXS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCA1MCwgZmFsc2UpOy8vINCy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFuZCgnbGVmdCcpO1xyXG4gIH1cclxuXHJcbiAgc2hvb3QoYXJyb3cpIHtcclxuICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgc2hvb3RfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcclxuICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGFycm93LmZseSh0aGlzLngsIHRoaXMueSwgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIGlmICghdGhpcy5pc0hpdHRpbmcpIHtcclxuICAgICAgdGhpcy5pc0hpdHRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYGN1dF8ke3RoaXMudmVsb2NpdHkuZGlyZWN0aW9ufWBdO1xyXG4gICAgICB0aGlzLnZpZXcub25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0hpdHRpbmcgPSBmYWxzZTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YWxrKGRpcmVjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZykgcmV0dXJuOyAvLyDQktC+INCy0YDQtdC80Y8g0YHRgtGA0LXQu9GM0LHRiyDQvdC10LvRjNC30Y8g0LjQtNGC0LguINCd0JUg0J/QntCd0JjQnNCQ0K4g0JrQkNCaINCg0JDQkdCe0KLQkNCV0KIuINCV0KHQm9CYINCj0JHQoNCQ0KLQrCDQrdCi0KMg0KHQotCg0J7QmtCjLCDQn9CV0KDQodCe0J3QkNCW0JXQnCDQndCV0JvQrNCX0K8g0KPQn9Cg0JDQktCb0K/QotCsXHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2B3YWxrXyR7ZGlyZWN0aW9ufWBdOy8vINCX0LTQtdGB0Ywg0YXRgNCw0L3QuNGC0YHRjyDRgtC10LrRg9GJ0LDRjyDQsNC90LjQvNCw0YbQuNGPLiAgIHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XHJcbiAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cclxuICB9XHJcblxyXG4gIHN0YW5kKGRpcmVjdGlvbikgeyAvLyDQodGC0L7Rj9GC0YxcclxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHJldHVybjsvLyDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgd2Fsa18ke2RpcmVjdGlvbn1gXTtcclxuICAgIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICBkZWF0aCgpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKCdkb3duJywgMCk7Ly8g0J7RgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnMuZGVhdGg7XHJcbiAgICAvLyB0aGlzLnZpZXcuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1Nob290aW5nIHx8IHRoaXMuaXNIaXR0aW5nKSB7IC8vINCS0L4g0LLRgNC10LzRjyDRgdGC0YDQtdC70YzQsdGLINC4INGD0LTQsNGA0L7QsiDQvdC10LvRjNC30Y8g0LjQtNGC0LhcclxuICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuXHJcbiAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDQtNC70Y8g0LDQvdC40LzQsNGG0LjQuDsgdGhpcy52aWV3INGF0YDQsNC90LjRgiDQvtCx0YrQtdC60YIgQ2hhcmFjdGVyU2hlZXRcclxuICAgIHRoaXMudmlldy5zZXRYWShNYXRoLnRydW5jKHRoaXMueCksIE1hdGgudHJ1bmModGhpcy55KSk7IC8vINCSINC/0LXRgNC10LzQtdC90L3QvtC5IHRoaXMudmlldyDRhdGA0LDQvdC40YLRgdGPIHRoaXMuYW5pbWF0aW9ucyA9IHt9LiDQnNC10YLQvtC0IHRydW5jINC+0YLQsdGA0LDRgdGL0LLQtdGCINC00YDQvtCx0L3Rg9GOINGH0LDRgdGC0YxcclxuICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAsIGxpbWl0WCA9IDUwMDAwLCBsaW1pdFkgPSA1MDAwMCwgc2Nyb2xsRWRnZSA9IDIwMCxcclxuICB9ID0ge30pIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmxpbWl0WCA9IGxpbWl0WDtcclxuICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xyXG4gICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vYmogPSBudWxsO1xyXG4gICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcclxuICB9XHJcblxyXG4gIHdhdGNoKG9iaikge1xyXG4gICAgdGhpcy53YXRjaE9iamVjdCA9IHRydWU7XHJcbiAgICB0aGlzLm9iaiA9IG9iajtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy53YXRjaE9iamVjdCkge1xyXG4gICAgICBpZiAodGhpcy5vYmoueCA+ICh0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWluKHRoaXMubGltaXRYLCB0aGlzLm9iai54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLm9iai55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3BlY2lhbFBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy54ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4vc3ByaXRlLXNoZWV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTaGVldCBleHRlbmRzIFNwcml0ZVNoZWV0IHtcclxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSB9KSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGltYWdlTmFtZSxcclxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxyXG4gICAgICBpbWFnZUhlaWdodDogMTM0NCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VxdWVuY2VzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcclxuICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xyXG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgc2VxdWVuY2VzW2xheWVyLm5hbWVdID0gbGF5ZXIuZGF0YS5maWx0ZXIoKGkpID0+IGkgPiAwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlcXVlbmNlcztcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcclxuICAgIHJldHVybiBzdXBlci5nZXRBbmltYXRpb24odGhpcy5zZXF1ZW5jZXNbbmFtZV0sIHNwZWVkLCByZXBlYXQsIGF1dG9ydW4pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuL3JlbW92ZS1mcm9tLWFycmF5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcyA9IFtdOy8vINCc0LDRgdGB0LjQsiDRgdGC0LDRgtC40YfQvdGL0YUg0L7QsdGK0LXQutGC0L7Qsi4g0JzRiyDQuNGB0L/QvtC70YzQt9GD0LXQvCDRgdC70LXQtNGD0Y7RidC40LUg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsDoge3gsIHksIHdpZHRoLCBoZWlnaHR9XHJcbiAgICB0aGlzLmJvZGllcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkU3RhdGljU2hhcGVzKGRhdGEpIHtcclxuICAgIGRhdGEubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09ICdvYmplY3Rncm91cCcpXHJcbiAgICAgIC8qIG9iamVjdHMg0Y3RgtC+INC80LDRgdGB0LjQsiDRgSDQvdCw0LHQvtGA0L7QvCDQvtCx0YrQtdC60YLQvtCyIFt7Li4ufSx7Li4ufSwg0Lgg0YIu0LQuXTBcclxuICAgICAgICAgICAgICAgINCU0YPQvNCw0Y4sINC60L7QvdGB0YLRgNGD0LrRhtC40Y8gKC4uLmxheWVyLm9iamVjdHMpINGB0L7Qt9C00LDQtdGCINC80LDRgdGB0LjQsiAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0gKi9cclxuICAgICAgeyB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMpOyB9XHJcbiAgICB9KTtcclxuICAgIC8vINCU0L7QsdCw0LLQuNC8INC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDQutGA0LDRj9C8INC60LDRgNGC0YsuINCX0LAg0LrQsNGA0YLRgyDQvdC10LvRjNC30Y8g0LLRi9C50YLQuFxyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7XHJcbiAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxMzAwLCBoZWlnaHQ6IDEsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xyXG4gICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxMzAwLFxyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjEyODAseTowLHdpZHRoOjEsaGVpZ2h0OjEzMDB9KTtcclxuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xyXG4gICAgICB4OiAxMjgwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRLaW5lbWF0aWNCb2R5KGJvZHkpIHtcclxuICAgIHRoaXMuYm9kaWVzLnB1c2goe1xyXG4gICAgICB4OiBib2R5LngsIC8vINGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgeTogYm9keS55LFxyXG4gICAgICBvYmo6IGJvZHksIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQv9C10YDRgdC+0L3QsNC20LAg0YEg0L3QvtCy0YvQvNC4INC60L7QvtGA0LTQuNC90LDRgtCw0LzQuCwg0LHRg9C00LXQvCDRgdGA0LDQstC90LjQstCw0YLRjCDQvdC+0LLRi9C1INC4INGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuY2hlY2tDb2xsaXNpb24odGltZSk7Ly8g0YDQsNGB0YHRh9GR0YIg0LrQvtC70LvQuNC30LjQuCDQv9C10YDRgdC+0L3QsNC20LXQuSDRgdC+INGB0YLQsNGC0LjRh9C90YvQvNC4INC+0LHRitC10LrRgtCw0LzQuCDQuCDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICB9XHJcblxyXG4gIGNoZWNrQ29sbGlzaW9uKHRpbWUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYm9keSA9IHRoaXMuYm9kaWVzW2ldO1xyXG4gICAgICBjb25zdCBvbGRYID0gYm9keS54O1xyXG4gICAgICBjb25zdCBvbGRZID0gYm9keS55O1xyXG4gICAgICBsZXQgeyB4IH0gPSBib2R5Lm9iajtcclxuICAgICAgbGV0IHsgeSB9ID0gYm9keS5vYmo7XHJcbiAgICAgIGlmICh4ID4gb2xkWCkgeyAvLyBtb3ZpbmcgcmlnaHRcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCAvLyDQldGB0LvQuCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0LXRgNC10LQg0L7QsdGK0LXQutGC0L7QvCoqKlxyXG4gICAgICAgICAgICAoKG9sZFggLy8g0LrQvtC+0YDQtNC40L3QsNGC0LAg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIDEvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INC80LXQttC00YMg0LrQsNC00YDQsNC80Lgg0LfQsNC90LjQvNCw0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMINC/0LjQutGB0LXQu9GPLCDRh9GC0L7QsdGLINC60L7QtCDRgNCw0LHQvtGC0LDQuyDQvtC60YDRg9Cz0LvQuNC8INC/0YDQvtGI0LvRg9GOINGC0L7Rh9C60YMg0L3QsCAxINC/0LjQutGB0LXQu9GMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLy8g0LrQvtC+0YDQtNC40L3QsNGC0LAg0YTQvtGA0LzRiyDQutC+0LvQu9C40LfQuNC4INCy0L3Rg9GC0YDQuCDQv9C10YDRgdC+0L3QsNC20LAgKNC90LDRh9Cw0LvQvtC8INC+0YLRgdGH0ZHRgtCwINGB0LvRg9C20LjRgiDQu9C10LLRi9C5INCy0LXRgNGF0L3QuNC5INGD0LPQvtC7INC/0LXRgNGB0L7QvdCw0LbQsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8qICoq0Lgg0L3QvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCw0YXQvtC00Y/RgtGB0Y8g0L/QvtGB0LvQtSDQvtCx0YrQtdC60YLQsCwg0LfQvdCw0YfQuNGCINC/0LXRgNGB0L7QvdCw0LYg0YHRgtC+0LvQutC90YPQu9GB0Y8g0YEg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtdC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDRgdC+0L3QsNC2INC00L7Qu9C20LXQvSDQutCw0YHQsNGC0YzRgdGPINC/0YDQtdC/0Y/RgtGB0YLQstC40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICApIHsgLy8g0JHQtdGA0LXQvCDQsdC70LjQttCw0LnRiNC40Lkg0L7QsdGK0LXQutGCLCDQs9C00LUg0L7RgdGC0LDQvdC+0LLQuNC8INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUueCkvLyAo0L3QsNCy0LXRgNC90L7QtSDQvNC+0LbQvdC+INCx0YvQu9C+INC/0YDQvtGB0YLQviDQvtGB0YLQsNCy0LjRgtGMINC+0LTQuNC9IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTsvLyDQn9GA0L7QstC10YDRj9C10Lwg0LjQvdGC0LXRgNCw0LrRgtC40LIg0YHQviDRgdGC0LDRgtC40YfQvdGL0LzQuCDQvtCx0YrQtdC60YLQsNC80LggKNC90LDQv9GA0LjQvNC10YAg0L/QvtGB0LvQtSDQv9C+0L/QsNC00LDQvdC40Y8g0LIg0LTQtdGA0LXQstC+LCDRgdGC0YDQtdC70LAg0L3QtSDQtNCy0LjQttC10YLRgdGPKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQmtC+0LvQu9C40LfQuNGPINC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5ib2RpZXNbal07XHJcbiAgICAgICAgICBpZiAoYm9keSAhPSBzaGFwZSkgeyAvLyDQldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICBpZiAoKChvbGRYIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaSwgaik7Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyICjQvdCw0L/RgNC40LzQtdGAINGB0YLRgNC10LvQsCDQsdGM0ZHRgiDQvtGA0LrQsCwg0L7RgNC6INCx0YzRkdGCINC40LPRgNC+0LrQsCDQuCDRgi7QtC4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh4IDwgb2xkWCkgeyAvLyBtb3ZpbmcgbGVmdFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeCA9IE1hdGgubWF4KHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54LCBzaGFwZS54ICsgc2hhcGUud2lkdGgpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgaWYgKGJvZHkgIT0gc2hhcGUpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgaWYgKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh5ID4gb2xkWSkgeyAvLyBtb3ZpbmcgZG93blxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKChvbGRZIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpIDwgc2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB5ID0gTWF0aC5taW4oeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQsIHNoYXBlLnkpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgaWYgKGJvZHkgIT0gc2hhcGUpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSA8IG9sZFkpIHsgLy8gbW92aW5nIHVwXHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcclxuICAgICAgICAgIGlmICgoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYm9keS54ID0geDtcclxuICAgICAgYm9keS55ID0geTtcclxuICAgICAgYm9keS5vYmoueCA9IHg7XHJcbiAgICAgIGJvZHkub2JqLnkgPSB5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaW5kZXhPZkJvZHksIGluZGV4T2ZTaGFwZSkge1xyXG4gICAgaWYgKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgc2hhcGUub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICBpZiAoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnICYmIHNoYXBlLm9iai5uYW1lID09ICdvcmMnKSB7IC8vINCV0YHQu9C4INGB0YLRgNC10LvQsCDQutC+0YHQvdGD0LvQsNGB0Ywg0L7RgNC60LBcclxuICAgICAgICAvLyDQndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0LLQvNC10YHRgtC+INC00LLRg9GFLCDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINC+0LTQuNC9INCy0YvQt9C+0LIgdGhpcy5yZW1vdmUodGhpcy5ib2RpZXMsaW5kZXhPZkJvZHksaW5kZXhPZlNoYXBlKS4g0J3QviDQvNC90LUg0YLQsNC6INGD0LTQvtCx0L3QtdC1INC+0YLQu9Cw0LbQuNCy0LDRgtGMXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSk7Ly8g0KHRgtGA0LXQu9CwINC40YHRh9C10LfQsNC10YIsINGD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LAsINGD0LTQsNC70LjRgtGMINGB0LDQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICBib2R5Lm9iai5kZWxldGUoKTsvLyDQo9C00LDQu9GP0LXQvCDRgdGC0YDQtdC70YNcclxuICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZTaGFwZSk7Ly8g0J7RgtC60LvRjtGH0LjRgtGMINC10LPQviDQvtGCINC60L7Qu9C70LDQudC00LXRgNCwICjRg9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgiDQv9C+INC40L3QtNC10LrRgdGDINC40Lcg0LzQsNGB0YHQuNCy0LAgdGhpcy5ib2RpZXMpXHJcbiAgICAgICAgc2hhcGUub2JqLmRlYXRoKCk7IC8vINCe0YDQuiDQv9C+0LPQuNCx0LDQtdGCXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljKGJvZHksIGluZGV4T2ZCb2R5KSB7IC8vXHJcbiAgICBpZiAoYm9keS5vYmouaGFzT3duUHJvcGVydHkoJ25hbWUnKSkgeyAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YHQu9GD0YfQsNC5LCDQtdGB0LvQuCDQv9C+0L/QsNC00ZHRgtGB0Y8g0L7QsdGK0LXQutGCINCx0LXQtyDQvdCw0LfQstCw0L3QuNGPXHJcbiAgICAgIGlmIChib2R5Lm9iai5uYW1lID09ICdhcnJvdycpIHtcclxuICAgICAgICBib2R5Lm9iai5zdG9wKCk7Ly8g0KHRgtGA0LXQu9CwINC/0LXRgNC10YHRgtCw0ZHRgiDQtNCy0LjQs9Cw0YLRjNGB0Y9cclxuICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZCb2R5KTsvLyDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maXJlID0gZmFsc2U7XHJcbiAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICBbMzcsICdsZWZ0J10sXHJcbiAgICAgIFszOSwgJ3JpZ2h0J10sXHJcbiAgICAgIFszOCwgJ3VwJ10sXHJcbiAgICAgIFs0MCwgJ2Rvd24nXSxcclxuICAgICAgWzMyLCAnZmlyZSddLFxyXG4gICAgICBbMTMsICdlbnRlciddLFxyXG4gICAgXSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XHJcbiAgICBpZiAodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzW3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKV0gPSBwcmVzc2VkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xyXG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJztcclxuaW1wb3J0IHsgR2FtZU92ZXIgfSBmcm9tICcuL3NjZW5lcy9nYW1lLW92ZXInO1xyXG5pbXBvcnQgeyBHYW1lV2luIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS13aW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xyXG4gICAgICBvcmM6ICdpbWcvb3JjLnBuZycsXHJcbiAgICAgIGVsZjogJ2ltZy9kYXJrLWVsZi5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyMi5wbmcnLFxyXG4gICAgICB0aXRsZV9iZzogJ2ltZy9iZ190aXRsZS5wbmcnLFxyXG4gICAgICB0aXRsZV9uYW1lOiAnaW1nL2dhbWVfbmFtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9zdGFydDogJ2ltZy9zdGFydF9nYW1lLnBuZycsXHJcbiAgICAgIHRpdGxlX29wdGlvbjogJ2ltZy9vcHRpb25fZ2FtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9leGl0OiAnaW1nL2V4aXRfZ2FtZS5wbmcnLFxyXG4gICAgICB5b3Vfd2luOiAnaW1nL3lvdV93aW4ucG5nJyxcclxuICAgICAgZ2FtZV9vdmVyOiAnaW1nL2dhbWVfb3Zlci5wbmcnLFxyXG4gICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnLFxyXG4gICAgICB0aWxlczI6ICdpbWcvdGlsZXMyLnBuZycsXHJcbiAgICAgIHF1ZXN0X3BlcnNvbjogJ2ltZy9naXJsLWZvci1jYXZlLnBuZydcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcyksXHJcbiAgICAgIGdhbWVPdmVyOiBuZXcgR2FtZU92ZXIodGhpcyksXHJcbiAgICAgIGdhbWVXaW46IG5ldyBHYW1lV2luKHRoaXMpLFxyXG4gICAgfTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xyXG4gICAgICBjYXNlIFNjZW5lLkdBTUVfT1ZFUjpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZU92ZXI7XHJcbiAgICAgIGNhc2UgU2NlbmUuR0FNRV9XSU46XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVXaW47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmcmFtZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGFsbERlYXRoT3JrcyA9IDA7XHJcbmV4cG9ydCBsZXQgc2hvd1F1ZXN0SW50ZXJmYWNlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUXVlc3QoKSB7XHJcbiAgICBhbGxEZWF0aE9ya3MgPSAwO1xyXG4gICAgc2hvd1F1ZXN0SW50ZXJmYWNlID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdZRVMhISEnKTtcclxuICAgIHNob3dRdWVzdEludGVyZmFjZSA9IHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVhdGhPcmNzKCkge1xyXG4gICAgaWYgKHNob3dRdWVzdEludGVyZmFjZSkge1xyXG4gICAgICAgIGFsbERlYXRoT3JrcysrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbERlYXRoT3Jrcyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcclxuICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSwgdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZWx2ZW5TY291dCA9IG5ldyBHYW1lKCk7XHJcbiAgZWx2ZW5TY291dC5ydW4oKTtcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKCfQmCDRgdC10LnRh9Cw0YEg0YDQsNCx0L7RgtCw0LXRgicpO1xyXG4iLCJpbXBvcnQgeyBUZXh0SW5mbyB9IGZyb20gJy4vdGV4dC1pbmZvJztcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2Fpcy9pc0FncmVzc2l2ZSc7XHJcbmltcG9ydCB7IGFsbERlYXRoT3Jrcywgc2hvd1F1ZXN0SW50ZXJmYWNlIH0gZnJvbSAnLi9nZXQtcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgd2F2ZXMpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLndhdmVzID0gd2F2ZXM7XHJcbiAgICB0aGlzLnRleHRJbmZvID0gbmV3IFRleHRJbmZvKGdhbWUuc2NyZWVuKTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2FtZS5zY3JlZW4uY29udGV4dDtcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5wbGF5ZXI7XHJcbiAgICB0aGlzLmZpZ2h0VGV4dFNob3dlZCA9IGZhbHNlOy8vINC90LDQtNC/0LjRgdGMIEZpZ2h0INC/0L7QutCw0LbQtdGC0YHRjyDQu9C40YjRjCDQvtC00LjQvSDRgNCw0LdcclxuICAgIC8vdGhpcy50aW1lVG9TdXJ2aXZlID0gMjAwMDAwMDsvLyDQldGB0LvQuCDRjdGC0L4g0LLRgNC10LzRjyDQstGL0LnQtNC10YIg0LIg0L3QvtC70YwsINGC0L4g0LjQs9GA0LAg0LfQsNC60L7QvdGH0LjRgtGB0Y8g0L/QvtCx0LXQtNC+0LlcclxuXHJcbiAgICB0aGlzLm9yY3NLaWxsZWQgPSAwO1xyXG5cclxuICAgIHRoaXMud2lkdGhIZWFsdGhMaW5lID0gMTUwO1xyXG5cclxuICAgIHRoaXMuZW5kT3BhY2l0eSA9IDA7Ly8g0J/RgNC4INC/0YDQvtC40LPRgNGL0YjQtSDRjdC60YDQsNC9INC00LjRgdC60YDQtdGC0L3Qviwg0YHRgtGD0L/QtdC90YfQsNGC0L4sINGC0LXQvNC90LXQtdGCLiAwIC0g0LDQsdGB0L7Qu9GO0YLQvdC+INGB0LLQtdGC0LvQviwgMSAtINCw0LHRgdC+0LvRjtGC0L3QviDRgtC10LzQvdC+XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93SGVhbHRoTGluZSgpO1xyXG4gICAgaWYgKHNob3dRdWVzdEludGVyZmFjZSkge1xyXG4gICAgICB0aGlzLnF1ZXN0SW50ZXJmYWNlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnBsYXllci5oZWFsdGggPT09IDApIHtcclxuICAgICAgdGhpcy5lbmRHYW1lKHRpbWUsICdsb3NlJyk7Ly8g0J/RgNC+0LjQs9GA0LDQu1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKSB7XHJcbiAgICAgIHRoaXMuZmlnaHRUZXh0KHRpbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMuc2hvd1RpbWVyKCk7Ly/QntCx0YDQsNGC0L3Ri9C5INC+0YLRgdGH0ZHRglxyXG4gICAgLy8gICB0aGlzLnRpbWVUb1N1cnZpdmUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAvLyAgIGlmICh0aGlzLnRpbWVUb1N1cnZpdmUgPCAwKSB7XHJcbiAgICAvLyAgICAgdGhpcy50aW1lVG9TdXJ2aXZlID0gMDtcclxuICAgIC8vICAgICB0aGlzLmVuZEdhbWUodGltZSwgJ3dpbicpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy50ZXh0SW5mby51cGRhdGUodGltZSk7XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG5cclxuICBmaWdodFRleHQodGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmZpZ2h0VGV4dFNob3dlZCkge1xyXG4gICAgICB0aGlzLmZpZ2h0VGV4dFNob3dlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudGV4dEluZm8uc2hvd1RleHQoJ1lvdSBhbmdlcmVkIHRoZSBvcmNzIScsIHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0hlYWx0aExpbmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzg1MjcyNyc7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNiMjNkM2QnO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICB0aGlzLmNvbnRleHQucmVjdCgyMCwgMTUsIHRoaXMud2lkdGhIZWFsdGhMaW5lLCAxMCk7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMjAsIDE1LCB0aGlzLndpZHRoSGVhbHRoTGluZSAqICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5oZWFsdGhTdGFydCksIDEwKTtcclxuICAgIC8vIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBzaG93VGltZXIoKSB7XHJcbiAgLy8gICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGggLSA1MCwgMzAsIC8v0YUsIHlcclxuICAvLyAgICAgTWF0aC5mbG9vcih0aGlzLnRpbWVUb1N1cnZpdmUgLyAxMDAwKSwvLyd0ZXh0J1xyXG4gIC8vICAgICAyMik7Ly9mb250c2l6ZVxyXG4gIC8vIH1cclxuXHJcbiAgcXVlc3RJbnRlcmZhY2UoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIwcHggc2VyaWZcIlxyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGBPcmNzIGtpbGxlZCAtICR7YWxsRGVhdGhPcmtzfSBvZiAxMGAsIDIwLCA2MCk7XHJcbiAgfVxyXG5cclxuICBlbmRHYW1lKHRpbWUsIHN0YXR1cykge1xyXG4gICAgLy8g0J/QvtGB0YLQtdC/0LXQvdC90L4g0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0YfQtdGA0L3QsNGPINC30LDRgdGC0LDQstC60LAg0Lgg0YHQvtC+0LHRidCw0LXQvCDRgdGG0LXQvdC1LCDRh9GC0L4g0LjQs9GA0LAg0LfQsNC60L7QvdGH0LXQvdCwXHJcbiAgICB0aGlzLmVuZE9wYWNpdHkgKz0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDA7XHJcbiAgICBpZiAodGhpcy5lbmRPcGFjaXR5ID4gMS41KSB7IC8vIDEuNSwg0LAg0L3QtSAxLCDRh9GC0L7QsdGLINGH0LXRgNC90LDRjyDQt9Cw0YHRgtCw0LLQutCwINC10YnRkSDQv9C+0LLQuNGB0LXQu9CwINC90LXQvNC90L7Qs9C+XHJcbiAgICAgIHRoaXMuY2hhbmdlU2NlbmUoc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3BhY2l0eSA9IDA7XHJcbiAgICBpZiAodGhpcy5lbmRPcGFjaXR5ID4gMC4yNSkgb3BhY2l0eSA9IDAuMjU7XHJcbiAgICBpZiAodGhpcy5lbmRPcGFjaXR5ID4gMC41KSBvcGFjaXR5ID0gMC41O1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDAuNzUpIG9wYWNpdHkgPSAwLjc1O1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDEpIG9wYWNpdHkgPSAxO1xyXG5cclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiKDAsMCwwLCR7b3BhY2l0eX0pYDtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLCB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ2xvc2UnOiByZXR1cm4gdGhpcy5nYW1lLmN1cnJlbnRTY2VuZS5nYW1lT3ZlclRyaWdnZXIgPSB0cnVlO1xyXG4gICAgICBjYXNlICd3aW4nOiByZXR1cm4gdGhpcy5nYW1lLmN1cnJlbnRTY2VuZS53aW5UcmlnZ2VyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0UXVlc3QsIHVwZGF0ZVF1ZXN0IH0gZnJvbSAnLi9nZXQtcXVlc3QnO1xyXG5jb25zdCBUQUtFX1FVRVNUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWtlX3F1ZXN0XCIpO1xyXG5jb25zdCBBREFORE9OX1RIRV9RVUVTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJhbmRvbl90aGVfcXVlc3RcIik7XHJcbmV4cG9ydCBsZXQgcnVuT25jZVF1ZXN0ID0gZmFsc2U7XHJcblxyXG5UQUtFX1FVRVNULm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnWW91IHRha2UgcXVlc3QhJyk7XHJcbiAgICAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgcnVuT25jZVF1ZXN0ID0gdHJ1ZTtcclxuICAgIGdldFF1ZXN0KCk7XHJcbn07XHJcbkFEQU5ET05fVEhFX1FVRVNULm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWJhbmRvbiB0aGUgcXVlc3QhJyk7XHJcbiAgIFxyXG4gICAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hpZGUnKTtcclxuICAgIFxyXG4gICAgcnVuT25jZVF1ZXN0ID0gZmFsc2U7XHJcbiAgICAvLyB1cGRhdGVRdWVzdCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbERpYWxvZygpIHtcclxuICAgICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAvLyAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNb2RhbERpYWxvZygpIHtcclxuICAgICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5leHRMZXZlbEluZm8oKSB7XHJcbiAgICAkKCcjaW5mb01vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoYW5kbGVVcGRhdGUnKTtcclxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgeyBEdW1teSB9IGZyb20gJy4vYWlzL2R1bW15JztcclxuaW1wb3J0IHsgRW5kU2NyaXB0IH0gZnJvbSAnLi9haXMvZW5kU2NyaXB0JztcclxuaW1wb3J0IHsgUGVhY2VmdWwgfSBmcm9tICcuL2Fpcy9wZWFjZWZ1bCc7XHJcbmltcG9ydCB7IGlzQWdyZXNzaXZlIH0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQgeyBkZWF0aE9yY1BsYXlBdWRpbyB9IGZyb20gJy4vYXVkaW8tcGxheWJhY2svYXVkaW9zJztcclxuaW1wb3J0IHsgZGVhdGhPcmNzIH0gZnJvbSAnLi9nZXQtcXVlc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmMgZXh0ZW5kcyBCb2R5IHtcclxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGFpVHlwZSA9ICdwZWFjZWZ1bCcpIHsgLy8g0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XHJcbiAgICBzdXBlcih7IGltYWdlTmFtZTogJ29yYycsIHNwZWVkOiA1MCB9KTtcclxuICAgIGlmIChhaVR5cGUgPT0gJ2R1bW15JykgdGhpcy5haSA9IG5ldyBEdW1teSgpO1xyXG4gICAgaWYgKGFpVHlwZSA9PSAnZW5kU2NyaXB0JykgdGhpcy5haSA9IG5ldyBFbmRTY3JpcHQoKTtcclxuICAgIGlmIChhaVR5cGUgPT0gJ3BlYWNlZnVsJykgdGhpcy5haSA9IG5ldyBQZWFjZWZ1bChwbGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuYWxsRGVhdGhPcmtzID0gMDtcclxuICAgIHRoaXMubmFtZSA9ICdvcmMnOy8vINCU0LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0YfRgtC+INC+0L/QvtC30L3QsNGC0Ywg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcbiAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuYWkpIHtcclxuICAgICAgdGhpcy5haS51cGRhdGUodGltZSk7Ly8g0JXRgdC70Lgg0JjQmCDQvdC1INC+0YLQutC70Y7Rh9C10L1cclxuICAgIH1cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG5cclxuICBkZWF0aCgpIHtcclxuICAgIGRlYXRoT3JjcygpO1xyXG4gICAgZGVhdGhPcmNQbGF5QXVkaW8oKTtcclxuICAgIHRoaXMuYWkgPSBudWxsOy8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQmNCYXHJcbiAgICBpc0FncmVzc2l2ZS5iZWNvbWVBZ3Jlc3NpdmUoKTtcclxuICAgIHN1cGVyLmRlYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJvZHkgfSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgeyBzd29yZFBsYXlBdWRpbyB9IGZyb20gJy4vYXVkaW8tcGxheWJhY2svYXVkaW9zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5IHsgLy8gUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxyXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2wsIGdhbWVfbGV2ZWwpIHsgLy8gY29udHJvbCAtINGD0L/RgNCw0LLQu9C10L3QuNC1INC60LvQsNCy0LjQsNGC0YPRgNC+0LlcclxuICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiAncGxheWVyJywgc3BlZWQ6IDEwMCB9KTtcclxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICB0aGlzLmdhbWVfbGV2ZWwgPSBnYW1lX2xldmVsO1xyXG4gICAgdGhpcy5hcnJvdyA9IGZhbHNlOy8vINCf0L7Qt9Cy0L7Qu9GP0LXQvCDRgdGC0YDQtdC70Y/RgtGMINGC0L7Qu9GM0LrQviDQtdGB0LvQuCDQvdCwINGA0YPQutCw0YUg0LXRgdGC0Ywg0YHRgtGA0LXQu9CwXHJcbiAgICB0aGlzLnRpbWVBcnJvdyA9IDEwMDA7Ly8g0JrQvtC90YHRgtCw0L3RgtCwLCDQstGA0LXQvNGPINC80LXQttC00YMg0L/QvtGP0LLQu9C10L3QuNC10Lwg0YHQu9C10LTRg9GO0YnQtdC5INGB0YLRgNC10LvRiywg0YfRgtC+0LHRiyDRgdGC0YDQtdC70Ysg0L3QtSDRgdC+0LfQtNCw0LLQsNC70LjRgdGMINC60LDQuiDQuNC3INC/0YPQu9C10LzRkdGC0LBcclxuICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gMDsvLyDQotCw0LnQvNC10YAg0LTQu9GPINGB0YLRgNC10LtcclxuICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IDA7XHJcbiAgICB0aGlzLm5hbWUgPSAncGxheWVyJzsvLyDQlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxyXG5cclxuICAgIHRoaXMuaGVhbHRoU3RhcnQgPSAyMDsvLyDQndCw0YfQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LbQuNC30L3QtdC5XHJcbiAgICB0aGlzLmhlYWx0aCA9IHRoaXMuaGVhbHRoU3RhcnQ7XHJcblxyXG4gICAgdGhpcy51bmRlYWQgPSAxMDAwOy8vINCa0L7QvdGB0YLQsNC90YLQsCDQstGA0LXQvNC10L3QuCDQsdC10YHRgdC80LXRgNGC0LjRjywg0L/QvtGB0LvQtSDQv9C+0LvRg9GH0LXQvdC40Y8g0YPRgNC+0L3QsCDQuNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9XHJcbiAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7Lyog0KLQsNC50LzQtdGAINC00LvRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0L7RgtGB0YfRkdGC0LAuINCV0YHQu9C4INC+0L0g0YDQsNCy0LXQvSDQtNC40LDQv9Cw0LfQvtC90YMg0L7RgiAwINC00L4gdGhpcy51bmRlYWQsINC30L3QsNGH0LjRgiDQuNC00ZHRgiDQvtCx0YDQsNGC0L3Ri9C5INC+0YLRgdGH0ZHRgiDQuCDQuNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JXRgdC70LggLTEsINC40LPRgNC+0Log0LzQvtC20LXRgiDQv9C+0LvRg9GH0LjRgtGMINGD0YDQvtC9ICovXHJcbiAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gMDtcclxuICB9XHJcblxyXG4gIGFkZEFycm93KGFycm93KSB7XHJcbiAgICB0aGlzLmFycm93ID0gYXJyb3c7XHJcbiAgfVxyXG5cclxuICBnZXRIaXQoKSB7IC8vINCY0LPRgNC+0Log0L/QvtC70YPRh9C40Lsg0YPQtNCw0YBcclxuICAgIHN3b3JkUGxheUF1ZGlvKCk7XHJcbiAgICBpZiAodGhpcy50aW1lclVuZGVhZCA9PT0gLTEpIHsgLy8g0JXRgdC70Lgg0LjQs9GA0L7QuiDRgdC80LXRgNGC0LXQvVxyXG4gICAgICBpZiAodGhpcy5oZWFsdGggPiAwKSB0aGlzLmhlYWx0aCAtPSAxO1xyXG4gICAgICB0aGlzLnRpbWVyVW5kZWFkID0gdGhpcy51bmRlYWQ7Ly8g0JTQtdC70LDQtdC8INC40LPRgNC+0LrQsCDQsdC10YHRgdC80LXRgNGC0L3Ri9C8INC90LAg0LLRgNC10LzRj1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPT09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYXN0VGltZUZvclVuZGVhZCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250cm9sLmZpcmUpIHtcclxuICAgICAgaWYgKHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID09PSAwKSB7IC8vINCV0YHQu9C4INGB0YLRgNC10LvRgyDQvNC+0LbQvdC+INGB0L7Qt9C00LDQstCw0YLRjFxyXG4gICAgICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gdGhpcy50aW1lQXJyb3c7XHJcbiAgICAgICAgdGhpcy5nYW1lX2xldmVsLnNob290aW5nKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHRoaXMuc2hvb3QodGhpcy5hcnJvdyk7Ly8g0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC40LzQtdC90L3QviDRjdGC0YMg0YHRgtGA0LXQu9GDLCDRgi7Qui4g0L/QtdGA0YHQvtC90LDQtiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0YDQsNC30L3Ri9C1INGB0YLRgNC10LvRi1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC51cCkge1xyXG4gICAgICB0aGlzLndhbGsoJ3VwJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5kb3duKSB7XHJcbiAgICAgIHRoaXMud2FsaygnZG93bicpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wubGVmdCkge1xyXG4gICAgICB0aGlzLndhbGsoJ2xlZnQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMud2FsaygncmlnaHQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhbmQodGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA+IDApIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93IC09ICh0aW1lIC0gdGhpcy5sYXN0VGltZUZvckFycm93KTtcclxuICAgIGVsc2UgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSAwO1xyXG5cclxuICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IHRpbWU7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZXJVbmRlYWQgIT0gLTEpIHsgLy8g0JjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvSwgdGhpcy50aW1lclVuZGVhZCA+IDBcclxuICAgICAgdGhpcy50aW1lclVuZGVhZCAtPSAodGltZSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgICBpZiAodGhpcy50aW1lclVuZGVhZCA8IDApIHtcclxuICAgICAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7Ly8g0JjQs9GA0L7QuiDRgdC90L7QstCwINGB0LzQtdGA0YLQtdC9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTtcclxuICAgIHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPSB0aW1lO1xyXG5cclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9Ly8gdXBkYXRlXHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUgey8vINCV0LPQviDRgNCw0YHRiNC40YDRj9C10YIgcHJvamVjdGlsZXMvYXJyb3cuanNcclxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkLCB4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IodGhpcy5kaXJlY3Rpb24sIHNwZWVkKTtcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsvLyDQldGB0LvQuCDRgdGC0YDQtdC70LAg0LDQutGC0LjQstC90LAsINC+0L3QsCDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0YfQtdGA0LXQtyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUg0Lgg0LvQtdGC0LjRgiDQsiDRhtC10LvRjC4g0JAg0LLQvtC+0LHRidC1INGB0YLRgNC10LvQsCDQsiDQvdC10LLQuNC00LjQvNC+0Lwg0YHQvtGB0YLQvtGP0L3QuNC4INCy0YHQtdCz0LTQsCDQvdCw0YXQvtC00LjRgtGB0Y8g0L3QsCDRjdC60YDQsNC90LVcclxuICAgIHRoaXMuY29sbGlzaW9uU2hhcGUgPSB7XHJcbiAgICAgIHg6IDI3LCB5OiAyNywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLFxyXG4gICAgfTsvLyDQndGD0LbQvdC+INC00LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCAo0YDQsNGB0YfRkdGCINGB0YLQvtC70LrQvdC+0LLQtdC90LjQuSkuINCg0LDQt9C80LXRgCDRgdC/0YDQsNC50YLQsCA2NNGFNjRcclxuICAgIHRoaXMuZGVsZXRlZCA9IGZhbHNlOy8vINCg0L7QtNC40YLQtdC70Ywg0LHRg9C00LXRgiDQvtGC0YHQu9C10LbQuNCy0LDRgtGMINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiwg0LXRgdC70Lgg0L7QvdCwIHRydWUsINC30L3QsNGH0LjRgiDRgNC+0LTQuNGC0LXQu9GMINGD0LTQsNC70LjRgiDRjdGC0L7RgiDQvtCx0YrQtdC60YJcclxuICB9XHJcblxyXG4gIGZseSh4LCB5LCBkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7IC8vINCf0YDQuCDQv9C+0L/QsNC00LDQvdC40Lgg0LIg0YHRgtCw0YLQuNGH0L3QvtC1INC/0YDQtdC/0Y/RgtGB0YLQstC40LUsIHByb2plY3RpbGUg0YLQtdGA0Y/QtdGCINGB0LrQvtGA0L7RgdGC0YxcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgdGhpcy5kZWxldGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7IC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPICB0aGlzLmxhc3RUaW1lXHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTsvLyDQndCwINGN0YLQvtC8INGN0YLQsNC/0LUg0L/QvtC60LAg0L3QtSDQuNC30LLQtdGB0YLQvdC+INGH0YLQviDRjdGC0L4g0LHRg9C00LXRgiDRgdC/0YDQsNC50YIg0LjQu9C4INCw0L3QuNC80LDRhtC40Y9cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSAnLi4vcHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJvdyBleHRlbmRzIFByb2plY3RpbGUge1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpIHtcclxuICAgIHN1cGVyKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpO1xyXG4gICAgdGhpcy5zcHJpdGVzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSAnYXJyb3cnO1xyXG4gICAgY29uc3QgdGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgIGltYWdlV2lkdGg6IDY0MCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDY0MCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zcHJpdGVzLmxlZnQgPSB0aWxlcy5nZXRTcHJpdGUoOSk7XHJcbiAgICB0aGlzLnNwcml0ZXMucmlnaHQgPSB0aWxlcy5nZXRTcHJpdGUoMTApO1xyXG4gICAgdGhpcy5zcHJpdGVzLmRvd24gPSB0aWxlcy5nZXRTcHJpdGUoMTkpO1xyXG4gICAgdGhpcy5zcHJpdGVzLnVwID0gdGlsZXMuZ2V0U3ByaXRlKDIwKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gIH1cclxuXHJcbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgc3VwZXIuZmx5KHgsIHksIGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnNwcml0ZXNbZGlyZWN0aW9uXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XHJcbmltcG9ydCB7IER1bW15IH0gZnJvbSAnLi9haXMvZHVtbXknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0UGVyc29uIGV4dGVuZHMgQm9keSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7IGltYWdlTmFtZTogJ3F1ZXN0X3BlcnNvbicsIHNwZWVkOiA1IH0pO1xyXG4gICAgICAgIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgICAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlbW92ZUZyb21BcnJheSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlKGFyciwgaW5kZXhlcykgeyAvLyDQo9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgtGLINC40Lcg0LzQsNGB0YHQuNCy0LAg0L/QviDQuNC90LTQtdC60YHRg1xyXG4gICAgLy8gYXJndW1lbnRzIC0g0L/RgdC10LLQtNC+INC80LDRgdGB0LjQsiwg0LIg0LrQvtGC0L7RgNC+0Lwg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLLCDQv9C10YDQtdC00LDQvdC90YvQtSDQsiDRhNGD0L3QutGG0LjRjlxyXG4gICAgLy8gW10uc2xpY2UoKSAtINGB0L7Qt9C00LDQtdGCINC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcclxuICAgIC8qIGFycmF5T2ZJbmRleGVzIC0g0LzQsNGB0YHQuNCyLCDQutC+0YLQvtGA0YvQuSDRgdC+0LTQtdGA0LbQuNGCINCy0YHQtSDQsNGA0LPRg9C80LXQvdGC0YsgKNC60YDQvtC80LUg0L/QtdGA0LLQvtCz0L4pINC/0LXRgNC10LTQsNC90L3Ri9C1INCyINGE0YPQvdC60YbQuNGOXHJcbiAgICAgICAgICAg0K3RgtC+INC80LDRgdGB0LjQsiDQuNC90LTQtdC60YHQvtCyLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INGD0LTQsNC70LjRgtGMINC40Lcg0L7RgdC90L7QstC90L7Qs9C+INC80LDRgdGB0LjQstCwIGFyciAqL1xyXG4gICAgY29uc3QgYXJyYXlPZkluZGV4ZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgLy8g0JLQtdGA0L3Rg9GC0Ywg0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNC90L3Ri9C5INC80LDRgdGB0LjQslxyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PlxyXG5cclxuICAgIC8vINCd0LDQv9GA0LjQvNC10YAgYXJyYXlPZkluZGV4ZXMgPSBbMV0sINGC0L4g0LXRgdGC0Ywg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQvtC00LjQvSDRjdC70LXQvNC10L3RgiDQv9C+INC40L3QtNC10LrRgdGDIDFcclxuICAgIC8vIGluZGV4T2YgLSDQstC+0LfQstGA0LDRidCw0LXRgiDQuNC90LTQtdC60YEg0LjRgdC60L7QvNC+0LPQviDRjdC70LXQvNC10L3RgtCwLiDQndCw0L/RgNC40LzQtdGAOiBbJ2EnLCdiJ10uaW5kZXhPZignYicpIC8vLT4gMVxyXG4gICAgLy8g0JrQsNC20LTRi9C5INGN0LvQtdC80LXQvdGCINC80LDRgdGB0LjQstCwIGFyciDRgdCy0LXRgNGP0LXRgiDRgdCy0L7QuSDQuNC90LTQtdC60YEg0YEg0LjQvdC00LXQutGB0LDQvNC4INCyIGFycmF5T2ZJbmRleGVzLlxyXG4gICAgLy8g0JXRgdC70Lgg0LXQs9C+INC40L3QtNC10LrRgdCwINCyIGFycmF5T2ZJbmRleGVzINC90LXRgiwg0YLQviDQvNC10YLQvtC0IGluZGV4T2Yg0LLQtdGA0L3RkdGCIC0xLCDQt9C90LDRh9C40YIg0LHRg9C00LXRgiB0cnVlINC4INGN0LvQtdC80LXQvdGCINC90LUg0LHRg9C00LXRgiDRg9C00LDQu9GR0L0g0LjQtyDQvNCw0YHRgdC40LLQsFxyXG4gICAgICBhcnJheU9mSW5kZXhlcy5pbmRleE9mKGluZGV4KSA9PSAtMSk7XHJcbiAgfS8vIHJlbW92ZVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBXT1JLSU5HKCkgeyByZXR1cm4gJ1dPUktJTkcnOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuXHJcbiAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgR0FNRV9PVkVSKCkgeyByZXR1cm4gJ0dBTUVfT1ZFUic7IH1cclxuXHJcbiAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cclxuXHJcbiAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gIH1cclxuXHJcbiAgZmluaXNoKHN0YXR1cykge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyJztcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnLi4vY2FtZXJhJztcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tICcuLi9jb2xsaWRlcic7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi4vcHJvamVjdGlsZXMvYXJyb3cnO1xyXG5pbXBvcnQgeyBXYXZlcyB9IGZyb20gJy4uL3dhdmVzJztcclxuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi4vcmVtb3ZlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZSB9IGZyb20gJy4uL2Fpcy9pc0FncmVzc2l2ZSc7XHJcbmltcG9ydCB7IGFycm93UGxheUF1ZGlvLCBnYW1lUGxheUF1ZGlvLCBnYW1lT3ZlclBsYXlBdWRpbywgZ2FtZVdpblBsYXlBdWRpbyB9IGZyb20gJy4uL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcyc7XHJcbmltcG9ydCB7IFF1ZXN0UGVyc29uIH0gZnJvbSAnLi4vcXVlc3QtcGVyc29uJztcclxuaW1wb3J0IHsgc2hvd01vZGFsRGlhbG9nIH0gZnJvbSAnLi4vbW9kYWwtZGlhbG9ndWUnO1xyXG5pbXBvcnQgeyBzaG93VHJhaW5pbmcgfSBmcm9tICcuLi90cmFpbmluZyc7XHJcbmltcG9ydCB7IG5leHRMZXZlbEluZm8gfSBmcm9tICcuLi9uZXdMZXZlbCc7XHJcbmltcG9ydCB7IGFsbERlYXRoT3JrcywgdXBkYXRlUXVlc3QgfSBmcm9tICcuLi9nZXQtcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDAsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXNBZ3Jlc3NpdmUuYmVjb21lUGVhY2VmdWwoKTsvLyDQodC00LXQu9Cw0YLRjCDQvtGA0LrQvtCyINC80LjRgNC90YvQvNC4XHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMucGxheWVyLnggPSAyMjQ7XHJcbiAgICB0aGlzLnBsYXllci55ID0gMTE4O1xyXG5cclxuICAgIC8vIHRoaXMucGxheWVyLnggPSA5OTA7XHJcbiAgICAvLyB0aGlzLnBsYXllci55ID0gMTA0MDtcclxuXHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uID0gbmV3IFF1ZXN0UGVyc29uKCk7XHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnggPSA5NDA7XHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnkgPSAxMDA7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpOy8vINCj0YfQuNGC0YvQstCw0LXRgiDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1INC80LXQttC00YMg0L7QsdGK0LXQutGC0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGALCDQvdC1INC00LDRkdGCINC/0YDQvtGF0L7QtNC40YLRjCDQvtCx0YrQtdC60YLQsNC8INGB0LrQstC+0LfRjCDQtNGA0YPQsyDQtNGA0YPQs9CwXHJcblxyXG4gICAgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwgd2VicGFjayDQv9C+0Y3RgtC+0LzRgyDQt9Cw0LPRgNGD0LfRh9C40LoganNvbiDRhNCw0LnQu9C+0LIg0YDQsNCx0L7RgtCw0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgbGV0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XHJcbiAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTsvLyBjcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkNhbWVyYS5zcGVjaWFsUG9zaXRpb24oKTsvLyDQl9Cw0LPQvdCw0YLRjCDQutCw0LzQtdGA0YMg0LIg0YHQsNC80YvQuSDRg9Cz0L7Qu1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRTdGF0aWNTaGFwZXMobWFwRGF0YSk7XHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucXVlc3RQZXJzb24pO1xyXG5cclxuICAgIHRoaXMub3JjQXJteSA9IFtdOy8vINCc0LDRgdGB0LjQsiDQvtGA0LrQvtCyLCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgIHRoaXMud2F2ZXMgPSBuZXcgV2F2ZXModGhpcy5nYW1lKTsvLyDQmtC+0L3RgtGA0L7Qu9C40YDRg9C10YIg0L/QvtGP0LLQu9C10L3QuNC1INC/0YDQvtGC0LjQstC90LjQutC+0LJcclxuICAgIFxyXG4gICAgdGhpcy53YXZlcy5pbml0KCk7XHJcblxyXG4gICAgdGhpcy5pbnRlcmZhY2UgPSBuZXcgSW50ZXJmYWNlKHRoaXMuZ2FtZSwgdGhpcy53YXZlcyk7Ly8g0KjQutCw0LvQsCDQt9C00L7RgNC+0LLRjNGPLCDRgtCw0LnQvNC10YAg0LIg0YPQs9C70YMg0Y3QutGA0LDQvdCwXHJcbiAgICB0aGlzLnByb2plY3RpbGVzID0gW107Ly8g0JzQsNGB0YHQuNCyINGB0YLRgNC10LssINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgdGhpcy5nYW1lT3ZlclRyaWdnZXIgPSBmYWxzZTsvLyDQldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9GA0L7QuNCz0YDRi9GI0L3QvtC5INGB0YbQtdC90LVcclxuICAgIHRoaXMud2luVHJpZ2dlciA9IGZhbHNlOy8vINCV0YHQu9C4IGludGVyZmFjZSDRgdC00LXQu9Cw0LXRgiDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4gdHJ1ZSwg0L/QtdGA0LXRhdC+0LTQuNC8INC6INC/0L7QsdC10LTQvdC+0Lkg0YHRhtC10L3QtVxyXG4gICAgLy91cGRhdGVNb2RhbERpYWxvZygpO1xyXG4gICAgc2hvd1RyYWluaW5nKCk7XHJcbiAgICBnYW1lV2luUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgIGdhbWVQbGF5QXVkaW8odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKGFsbERlYXRoT3JrcyA9PSAxMCkge1xyXG4gICAgICBnYW1lUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgICAgZ2FtZVdpblBsYXlBdWRpbyh0cnVlKTtcclxuICAgICAgdXBkYXRlUXVlc3QoKTtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9XSU4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmdhbWVPdmVyVHJpZ2dlcikgeyAvLyDQl9Cw0LrQvtC90YfQuNC8INC40LPRgNGDXHJcbiAgICAgIGdhbWVQbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgICBnYW1lT3ZlclBsYXlBdWRpbygpO1xyXG4gICAgICB1cGRhdGVRdWVzdCgpO1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKGFycm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChhcnJvdy5hY3RpdmUpIHsgLy8gYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgIGFycm93LnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFycm93LmRlbGV0ZWQpIHtcclxuICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMucHJvamVjdGlsZXMsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9yY0FybXkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgICAgb3JjLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVzdFBlcnNvbi54LCB0aGlzLnF1ZXN0UGVyc29uLnkpO1xyXG5cclxuXHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMubWFwKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcmNBcm15Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5vcmNBcm15LmZvckVhY2goKG9yYykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShvcmMudmlldyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPiAwKSB7IC8vINCe0YLRgNC40YHQvtCy0LrQsCDRgdGC0YDQtdC7XHJcbiAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgoYXJyb3cpID0+IHtcclxuICAgICAgICBpZiAoYXJyb3cuYWN0aXZlKSB7IC8vIGFjdGl2ZSDRgdGC0LDQvdC+0LLQuNGC0YHRjyB0cnVlINCyINC80LXRgtC+0LTQtSBQbGF5ZXIgLT4gQm9keS5zaG9vdCgpXHJcbiAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUoYXJyb3cudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucXVlc3RQZXJzb24udmlldyk7XHJcbiAgICB0aGlzLndhdmVzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuaW50ZXJmYWNlLnVwZGF0ZSh0aW1lKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gODcwICYmIHRoaXMucGxheWVyLnggPD0gOTcwICYmIHRoaXMucGxheWVyLnkgPj0gMTAwICYmIHRoaXMucGxheWVyLnkgPD0gMTMwKSB7XHJcbiAgICAgIHNob3dNb2RhbERpYWxvZygpO1xyXG4gICAgICAvL3NldFRpbWVvdXQoKCkgPT4gc2hvd01vZGFsRGlhbG9nKCksIDUwMCk7XHJcbiAgICAgIC8vZ2V0UXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dvIHRvIG5leHQgbGV2ZWwgZm9yIG1hcFxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gMTEwMCAmJiB0aGlzLnBsYXllci54IDw9IDEyMDAgJiYgdGhpcy5wbGF5ZXIueSA+PSAzMCAmJiB0aGlzLnBsYXllci55IDw9IDYwKSB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICBpbWFnZU5hbWU6ICd0aWxlczInLFxyXG4gICAgICAgIGltYWdlV2lkdGg6IDY0MCxcclxuICAgICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgICB9KTtcclxuICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICBuZXh0TGV2ZWxJbmZvKClcclxuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcclxuICAgIFxyXG4gICAgICB0aGlzLnBsYXllci54ID0gMjI0O1xyXG4gICAgICB0aGlzLnBsYXllci55ID0gMTE4O1xyXG5cclxuICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpOy8vINCj0YfQuNGC0YvQstCw0LXRgiDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1INC80LXQttC00YMg0L7QsdGK0LXQutGC0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGALCDQvdC1INC00LDRkdGCINC/0YDQvtGF0L7QtNC40YLRjCDQvtCx0YrQtdC60YLQsNC8INGB0LrQstC+0LfRjCDQtNGA0YPQsyDQtNGA0YPQs9CwXHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgIGxldCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDIuanNvbicpO1xyXG4gICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDInLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTsvLyBjcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tYWluQ2FtZXJhLnNwZWNpYWxQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xyXG4gICAgXHJcbiAgICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xyXG4gICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG4gICAgXHJcbiAgICAgIC8vINGD0LHQuNGA0LDQtdC8INC/0LXRgNGB0L7QvdCw0LbQtdC5INC60YPQtNCwINC/0L7QtNCw0LvRjNGI0LVcclxuICAgICAgdGhpcy5xdWVzdFBlcnNvbi54ID0gMTQwMDtcclxuICAgICAgdGhpcy5xdWVzdFBlcnNvbi55ID0gMTAwMDtcclxuICAgICAgLy90aGlzLm9yYy54ID0gMTQwMDtcclxuICAgICAgLy90aGlzLm9yYy55ID0gMTAwMDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMub3JjQXJteSA9IFtdOy8vINCc0LDRgdGB0LjQsiDQvtGA0LrQvtCyLCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgICAgdGhpcy53YXZlcyA9IG5ldyBXYXZlcyh0aGlzLmdhbWUpO1xyXG5cclxuICAgICB0aGlzLmludGVyZmFjZSA9IG5ldyBJbnRlcmZhY2UodGhpcy5nYW1lKTsvLyDQqNC60LDQu9CwINC30LTQvtGA0L7QstGM0Y8sINGC0LDQudC80LXRgCDQsiDRg9Cz0LvRgyDRjdC60YDQsNC90LBcclxuICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtGA0LXQuywg0L3QvtCy0YvQtSDRgdGC0YDQtdC70Ysg0LHRg9C00YPRgiDQtNC+0LHQsNCy0LvRj9GC0YzRgdGPINGB0Y7QtNCwLCDQsCDQvNC10YLQvtC0IHJlbmRlciDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0YvQstCw0YLRjCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwXHJcbiAgICB0aGlzLmdhbWVPdmVyVHJpZ2dlciA9IGZhbHNlOy8vINCV0YHQu9C4IGludGVyZmFjZSDRgdC00LXQu9Cw0LXRgiDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4gdHJ1ZSwg0L/QtdGA0LXRhdC+0LTQuNC8INC6INC/0YDQvtC40LPRgNGL0YjQvdC+0Lkg0YHRhtC10L3QtVxyXG4gICAgdGhpcy53aW5UcmlnZ2VyID0gZmFsc2U7Ly8g0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/QvtCx0LXQtNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICAgIC8vdXBkYXRlTW9kYWxEaWFsb2coKTtcclxuICAgICAgZ2FtZVdpblBsYXlBdWRpbyhmYWxzZSk7XHJcbiAgICAgIGdhbWVQbGF5QXVkaW8odHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gNjAwICYmIHRoaXMucGxheWVyLnggPD0gNzAwICYmIHRoaXMucGxheWVyLnkgPj0gMTE1MCAmJiB0aGlzLnBsYXllci55IDw9IDEzMDApIHsgLy8g0JfQsNC60L7QvdGH0LjQvCDQuNCz0YDRg1xyXG4gICAgICBnYW1lUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgICAgZ2FtZVdpblBsYXlBdWRpbyh0cnVlKTtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9XSU4pO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIFxyXG5cclxuICBzaG9vdGluZygpIHsgLy8g0KHRgtGA0LXQu9GM0LHQsCDQuNCz0YDQvtC60LBcclxuICAgIGNvbnN0IGFycm93ID0gbmV3IEFycm93KCdkb3duJywgNDAwLCB0aGlzLnBsYXllci54LCB0aGlzLnBsYXllci55KTtcclxuICAgIHRoaXMucGxheWVyLmFkZEFycm93KGFycm93KTtcclxuICAgIHRoaXMucHJvamVjdGlsZXMucHVzaChhcnJvdyk7Ly8g0JLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsCDQsdGD0LTRg9GCINC+0YLRgNC40YHQvtCy0LDQvdGLINCyINC80LXRgtC+0LTQtSByZW5kZXJcclxuICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keShhcnJvdyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGFycm93UGxheUF1ZGlvKCksIDUwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7IC8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwiZW50ZXJcIiDQvdCw0YfQsNGC0Ywg0L3QvtCy0YPRjiDQuNCz0YDRg1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9iZycpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ2dhbWVfb3ZlcicpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lV2luIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7IC8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwiZW50ZXJcIiDQvdCw0YfQsNGC0Ywg0L3QvtCy0YPRjiDQuNCz0YDRg1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfYmcnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAneW91X3dpbicpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDYwLCA4MCwgJ0xvYWRpbmcuLi4nKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX2JnJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfbmFtZScpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX3N0YXJ0Jyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfb3B0aW9uJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfZXhpdCcpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGl0ZS1tYXAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmFkZFN0eWxlc1RvQ2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRTdHlsZXNUb0NhbnZhcygpIHtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnJpZ2h0ID0gJzAnO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYm90dG9tID0gJzAnO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUubWFyZ2luID0gJ2F1dG8nO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGRkZGRkYnO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FtZXJhKGNhbWVyYSkge1xyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZXMoaW1hZ2VGaWxlcykge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xyXG4gICAgbG9hZGVyLmxvYWQoKS50aGVuKChuYW1lcykgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2cobmFtZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXAobmFtZSwgbWFwRGF0YSwgdGlsZXNldCkge1xyXG4gICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIG1hcEltYWdlLndpZHRoID0gbWFwRGF0YS53aWR0aCAqIG1hcERhdGEudGlsZXdpZHRoO1xyXG4gICAgbWFwSW1hZ2UuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQgKiBtYXBEYXRhLnRpbGVoZWlnaHQ7XHJcbiAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnN0IGhpdGJveGVzID0gW107XHJcbiAgICBsZXQgcm93OyBsZXRcclxuICAgICAgY29sO1xyXG4gICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ3RpbGVsYXllcicpIHtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1t0aWxlc2V0LmltYWdlTmFtZV0sXHJcbiAgICAgICAgICAgICAgdGlsZXNldC5nZXRTb3VyY2VYKGluZGV4KSwgdGlsZXNldC5nZXRTb3VyY2VZKGluZGV4KSxcclxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIGNvbCAqIG1hcERhdGEudGlsZXdpZHRoLCByb3cgKiBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2wrKztcclxuICAgICAgICAgIGlmIChjb2wgPiAobWFwRGF0YS53aWR0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgIHJvdysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsYXllci50eXBlID09ICdvYmplY3Rncm91cCcpIHtcclxuICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMubWFwKChvYmopID0+ICh7XHJcbiAgICAgICAgICB4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0LFxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBtYXBJbWFnZTtcclxuICAgIHJldHVybiBuZXcgVGlsZU1hcCh7XHJcbiAgICAgIGltYWdlTmFtZTogbmFtZSxcclxuICAgICAgc291cmNlWDogMCxcclxuICAgICAgc291cmNlWTogMCxcclxuICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG1hcEltYWdlLmhlaWdodCxcclxuICAgICAgaGl0Ym94ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbGwoY29sb3IpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcmludCh4LCB5LCB0ZXh0KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMjJweCBHZW9yZ2lhJztcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdJbWFnZSh4LCB5LCBpbWFnZU5hbWUpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSwgeCwgeSk7XHJcbiAgfVxyXG5cclxuICBkcmF3U3ByaXRlKHNwcml0ZSkge1xyXG4gICAgbGV0IHNwcml0ZVggPSBzcHJpdGUueDtcclxuICAgIGxldCBzcHJpdGVZID0gc3ByaXRlLnk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDYW1lcmFTZXQpIHtcclxuICAgICAgc3ByaXRlWCAtPSB0aGlzLmNhbWVyYS54O1xyXG4gICAgICBzcHJpdGVZIC09IHRoaXMuY2FtZXJhLnk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAoc3ByaXRlWCA+PSB0aGlzLndpZHRoKVxyXG4gICAgICB8fCAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodClcclxuICAgICAgfHwgKChzcHJpdGVYICsgc3ByaXRlLndpZHRoKSA8PSAwKVxyXG4gICAgICB8fCAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3VyY2VYID0gc3ByaXRlLnNvdXJjZVggKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVYKSk7XHJcbiAgICBjb25zdCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGgsIHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLmhlaWdodCwgc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWSk7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tzcHJpdGUuaW1hZ2VOYW1lXSxcclxuICAgICAgc291cmNlWCxcclxuICAgICAgc291cmNlWSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCksXHJcbiAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVkpLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0LFxyXG4gIH0pIHtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcclxuICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodDtcclxuICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uKGluZGV4ZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKChpbmRleCkgPT4gKHsgc3g6IHRoaXMuZ2V0U291cmNlWChpbmRleCksIHN5OiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpIH0pKSxcclxuICAgICAgc3BlZWQsXHJcbiAgICAgIHJlcGVhdCxcclxuICAgICAgYXV0b3J1bixcclxuICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNwcml0ZShpbmRleCkge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlWChpbmRleCkge1xyXG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VZKGluZGV4KSB7XHJcbiAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0LFxyXG4gIH0pIHtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcclxuICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0WFkoeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUZXh0SW5mbyB7XHJcbiAgY29uc3RydWN0b3Ioc2NyZWVuKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSBmYWxzZTsvLyDQn9C+0LrQsNC30YvQstCw0YLRjCDQu9C4INGC0LXQutGB0YJcclxuICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmhvd0xvbmdUb1Nob3cgPSA1MDAwOy8vINCh0LrQvtC70YzQutC+INCy0YDQtdC80LXQvdC4INC/0L7QutCw0LfRi9Cy0LDRgtGMINGC0LXQutGB0YJcclxuICAgIHRoaXMudGltZVRvU3RvcCA9IDA7Ly8g0JLRgNC10LzRjyDQutC+0LPQtNCwINC90YPQttC90L4g0LfQsNCy0LXRgNGI0LjRgtGMINC/0L7QutCw0LdcclxuICAgIHRoaXMuZm9udFNpemUgPSAwO1xyXG4gICAgdGhpcy5zdGFydEZvbnRTaXplID0gMTUwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd1RleHRCb29sZWFuKSB7XHJcbiAgICAgIHRoaXMuZm9udFNpemUgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwO1xyXG4gICAgICB0aGlzLnNldFhZKCk7XHJcbiAgICAgIHRoaXMuc2NyZWVuLnByaW50KHRoaXMueCwgdGhpcy55LCB0aGlzLnRleHQsIHRoaXMuZm9udFNpemUpO1xyXG4gICAgICBpZiAodGltZSA+IHRoaXMudGltZVRvU3RvcCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RleHQodGV4dCwgdGltZSkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gdHJ1ZTtcclxuICAgIHRoaXMudGltZVRvU3RvcCA9IHRpbWUgKyB0aGlzLmhvd0xvbmdUb1Nob3c7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5zdGFydEZvbnRTaXplO1xyXG4gICAgdGhpcy5zZXRYWSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0WFkoKSB7XHJcbiAgICB0aGlzLnggPSB0aGlzLnNjcmVlbi53aWR0aCAvIDIgLSB0aGlzLmZvbnRTaXplICogMS41O1xyXG4gICAgdGhpcy55ID0gdGhpcy5zY3JlZW4uaGVpZ2h0IC8gMiArIHRoaXMuZm9udFNpemUgLyA0LjU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd1RyYWluaW5nKCkge1xyXG4gICAgJCgnI2V4YW1wbGVNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAvLyAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcclxuICB9XHJcblxyXG4gIHNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgIHRoaXMueSA9IC1zcGVlZDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgIHRoaXMueSA9IHNwZWVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHRoaXMueCA9IHNwZWVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgdGhpcy54ID0gLXNwZWVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZShvYmplY3QsIGR0KSB7XHJcbiAgICBvYmplY3QueCArPSBkdCAqICh0aGlzLnggLyAxMDAwKTtcclxuICAgIG9iamVjdC55ICs9IGR0ICogKHRoaXMueSAvIDEwMDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPcmMgfSBmcm9tICcuL29yYyc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2F2ZXMge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLm9yY0FybXkgPSBnYW1lLmN1cnJlbnRTY2VuZS5vcmNBcm15Oy8vINCc0LDRgdGB0LjQsiwg0YHQvtC00LXRgNC20LDRidC40Lkg0LLRgdC10YUg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNGFINC+0YDQutC+0LIuINCt0YLQvtGCINC60LvQsNGB0YEg0L/QvtC/0L7Qu9C90Y/QtdGCINGN0YLQvtGCINC80LDRgdGB0LjQsiDQvdC+0LLRi9C80Lgg0L7RgNC60LDQvNC4XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlciA9IGdhbWUuY3VycmVudFNjZW5lLmNvbGxpZGVyOy8vINCR0YPQtNC10Lwg0LTQvtCx0LDQstC70Y/RgtGMINC+0YDQutC+0LIg0LIg0LrQvtC70LvQsNC50LTQtdGAXHJcbiAgICB0aGlzLnBsYXllciA9IGdhbWUuY3VycmVudFNjZW5lLnBsYXllcjsvLyDQn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gNTAwOy8vINCi0LDQudC80LXRgCDQtNC70Y8g0L7QsdGA0LDRgtC90L7Qs9C+INC+0YLRgdGH0ZHRgtCwLiDQn9C10YDQstCw0Y8g0LLQvtC70L3QsCDQvdCw0YfQvdGR0YLRgdGPINGH0LXRgNC10LcgMTAwMCDQvNGBXHJcbiAgICB0aGlzLnRpbWVGb3JOZXh0V2F2ZSA9IDEwMDAwOy8vINCa0L7QvdGB0YLQsNC90YLQsCwg0YHQu9C10LTRg9GO0YnQsNGPINCy0L7Qu9C90LDRjyDQsdGD0LTQtdGCINGH0LXRgNC10Lcg0Y3RgtC+INCy0YDQtdC80Y9cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvLyB0aGlzLndhdmVzID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA8IDApIHtcclxuICAgICAgdGhpcy5uZXh0V2F2ZSh0aW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSAtPSAodGltZSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG5cclxuICBuZXh0V2F2ZSh0aW1lKSB7XHJcbiAgICBsZXQgb3JjU3F1YWQgPSBbXTsvLyDQodC+0LfQtNCw0YLRjCDQt9CwINC+0LTQuNC9INGA0LDQtyDQvdC10YHQutC+0LvRjNC60LjRhSDQvtGA0LrQvtCyXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICBsZXQgb3JjID0gbmV3IE9yYyh0aGlzLnBsYXllcik7Ly8g0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XHJcbiAgICAgIG9yYy54ID0gMTI0NjsvLyDQn9C+0YHQu9C1INC+0YLQu9Cw0LTQutC4INGB0LTQtdC70LDQuSAxMzUwXHJcbiAgICAgIG9yYy55ID0gMTEzMDtcclxuICAgICAgb3JjU3F1YWQucHVzaChvcmMpO1xyXG4gICAgfVxyXG4gICAgb3JjU3F1YWQuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keShvcmMpO1xyXG4gICAgICB0aGlzLm9yY0FybXkucHVzaChvcmMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gdGhpcy50aW1lRm9yTmV4dFdhdmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=