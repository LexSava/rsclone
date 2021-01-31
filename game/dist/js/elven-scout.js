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
      speed: 300
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

      this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this); // this.player.x = 224;
      // this.player.y = 118;

      this.player.x = 990;
      this.player.y = 1040;
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

      // if (allDeathOrks == 10) {
      //   gamePlayAudio(false);
      //   gameWinPlayAudio(true);
      //   updateQuest();
      //   this.finish(Scene.GAME_WIN);
      // }
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
        // давай сдесь добавим проверку на выполненный квест 
        if (_get_quest__WEBPACK_IMPORTED_MODULE_15__["allDeathOrks"] >= 10) {
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

          Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
          Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(false);
          Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(true);
        }
      }

      if (this.player.x >= 600 && this.player.x <= 700 && this.player.y >= 1150 && this.player.y <= 1300) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
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

        orc.y = 1030 + i * 70;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXQtcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwtZGlhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0LXBlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVtb3ZlLWZyb20tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtd2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGl0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWluaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLmpzIl0sIm5hbWVzIjpbIkFJIiwiYm9keSIsInRpbWUiLCJEdW1teSIsImR1cmF0aW9uIiwiZGlyZWN0aW9uIiwibGFzdFRpbWUiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5nZURpcmVjdGlvbiIsIndhbGsiLCJFbmRTY3JpcHQiLCJldmVudFRpbWUiLCJldmVudFN0YXJ0IiwiaGl0Iiwic3RhbmQiLCJpc0FncmVzc2l2ZSIsImFncmVzc2l2ZSIsIlBlYWNlZnVsIiwicGxheWVyIiwibGFzdFRpbWVEdW1iIiwic3R1Y2siLCJjaGFuZ2VXYXlJbml0IiwiY2hhbmdlV2F5Iiwib2xkWCIsIm9sZFkiLCJsYXN0VGltZUFncmVzc2l2ZSIsImR1cmF0aW9uQWdyZXNzaXZlIiwidGltZU9mTWFyY2giLCJpc09yY0FncmVzc2l2ZSIsImFncmVzc2l2ZUJlaGF2aW91ciIsImlzU3R1Y2siLCJkdW1iQmVoYXZpb3VyIiwiY29ycmVjdGlvbiIsIngiLCJjb2xsaXNpb25TaGFwZSIsIndpZHRoIiwieSIsImhlaWdodCIsImF0dGFjayIsImNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbiIsImdldEhpdCIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsInNvdXJjZVgiLCJzeCIsInNvdXJjZVkiLCJzeSIsInJ1bm5pbmciLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsIm9uRW5kIiwiaW5kZXgiLCJzZXRGcmFtZSIsInN0b3AiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJnYW1lQXVkaW8iLCJBdWRpbyIsImdhbWVBdWRpb1dpbiIsImFycm93UGxheUF1ZGlvIiwic291bmQiLCJzcmMiLCJwbGF5Iiwic3dvcmRQbGF5QXVkaW8iLCJ2b2x1bWUiLCJkZWF0aE9yY1BsYXlBdWRpbyIsImdhbWVPdmVyUGxheUF1ZGlvIiwiZ2FtZVdpblBsYXlBdWRpbyIsInN0YXRlIiwicGF1c2UiLCJnYW1lUGxheUF1ZGlvIiwibG9vcCIsIkJvZHkiLCJ2ZWxvY2l0eSIsIlZlY3RvciIsImFuaW1hdGlvbnMiLCJpc1Nob290aW5nIiwiaXNIaXR0aW5nIiwiYW5pbWF0aW9uU2hlZXQiLCJDaGFyYWN0ZXJTaGVldCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwiYXJyb3ciLCJ2aWV3IiwiZmx5IiwicnVuIiwic2V0RGlyZWN0aW9uIiwiZGVhdGgiLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyIsImoiLCJjaGVja0ludGVyYWN0aXZlIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlbGV0ZSIsIkNvbnRyb2xTdGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImZpcmUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsImVsZiIsInRpdGxlX2JnIiwidGl0bGVfbmFtZSIsInRpdGxlX3N0YXJ0IiwidGl0bGVfb3B0aW9uIiwidGl0bGVfZXhpdCIsInlvdV93aW4iLCJnYW1lX292ZXIiLCJ0aWxlcyIsInRpbGVzMiIsInF1ZXN0X3BlcnNvbiIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiZ2FtZU92ZXIiLCJHYW1lT3ZlciIsImdhbWVXaW4iLCJHYW1lV2luIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIkdBTUVfT1ZFUiIsIkdBTUVfV0lOIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJhbGxEZWF0aE9ya3MiLCJzaG93UXVlc3RJbnRlcmZhY2UiLCJ1cGRhdGVRdWVzdCIsImdldFF1ZXN0IiwiY29uc29sZSIsImxvZyIsImRlYXRoT3JjcyIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsIkludGVyZmFjZSIsImdhbWUiLCJ3YXZlcyIsInRleHRJbmZvIiwiVGV4dEluZm8iLCJjb250ZXh0IiwiZmlnaHRUZXh0U2hvd2VkIiwib3Jjc0tpbGxlZCIsIndpZHRoSGVhbHRoTGluZSIsImVuZE9wYWNpdHkiLCJzaG93SGVhbHRoTGluZSIsInF1ZXN0SW50ZXJmYWNlIiwiaGVhbHRoIiwiZW5kR2FtZSIsImZpZ2h0VGV4dCIsInNob3dUZXh0Iiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJsaW5lV2lkdGgiLCJyZWN0IiwiZmlsbFJlY3QiLCJoZWFsdGhTdGFydCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsIm9wYWNpdHkiLCJnYW1lT3ZlclRyaWdnZXIiLCJ3aW5UcmlnZ2VyIiwiVEFLRV9RVUVTVCIsImdldEVsZW1lbnRCeUlkIiwiQURBTkRPTl9USEVfUVVFU1QiLCJydW5PbmNlUXVlc3QiLCJvbmNsaWNrIiwiJCIsIm1vZGFsIiwic2hvd01vZGFsRGlhbG9nIiwidXBkYXRlTW9kYWxEaWFsb2ciLCJuZXh0TGV2ZWxJbmZvIiwiT3JjIiwiYWlUeXBlIiwiYWkiLCJiZWNvbWVBZ3Jlc3NpdmUiLCJQbGF5ZXIiLCJnYW1lX2xldmVsIiwidGltZUFycm93IiwidGltZXJGb3JDcmVhdGluZ0Fycm93IiwibGFzdFRpbWVGb3JBcnJvdyIsInVuZGVhZCIsInRpbWVyVW5kZWFkIiwibGFzdFRpbWVGb3JVbmRlYWQiLCJzaG9vdGluZyIsInNob290IiwiUHJvamVjdGlsZSIsImFjdGl2ZSIsImRlbGV0ZWQiLCJBcnJvdyIsInNwcml0ZXMiLCJnZXRTcHJpdGUiLCJRdWVzdFBlcnNvbiIsImFyciIsImluZGV4ZXMiLCJhcnJheU9mSW5kZXhlcyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIml0ZW0iLCJpbmRleE9mIiwiY29uc3RydWN0b3IiLCJiZWNvbWVQZWFjZWZ1bCIsInF1ZXN0UGVyc29uIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsInNwZWNpYWxQb3NpdGlvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsIm9yY0FybXkiLCJXYXZlcyIsImludGVyZmFjZSIsInByb2plY3RpbGVzIiwic2hvd1RyYWluaW5nIiwiZmluaXNoIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJhZGRBcnJvdyIsInNldFRpbWVvdXQiLCJlbnRlciIsImRyYXdJbWFnZSIsImxvYWRlZEF0IiwiaXNJbWFnZXNMb2FkZWQiLCJwcmludCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImFkZFN0eWxlc1RvQ2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsInRleHQiLCJzcHJpdGUiLCJzcHJpdGVYIiwic3ByaXRlWSIsImFicyIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0Iiwic2hvd1RleHRCb29sZWFuIiwiaG93TG9uZ1RvU2hvdyIsInRpbWVUb1N0b3AiLCJmb250U2l6ZSIsInN0YXJ0Rm9udFNpemUiLCJwcm9wcyIsIm9iamVjdCIsImR0IiwidGltZUxlZnRGb3JOZXh0V2F2ZSIsInRpbWVGb3JOZXh0V2F2ZSIsIm5leHRXYXZlIiwib3JjU3F1YWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxFQUFiO0FBQUE7QUFBQTtBQUNFLGdCQUFjO0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDRDs7QUFISDtBQUFBO0FBQUEsNEJBS1VBLElBTFYsRUFLZ0I7QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDtBQVBIO0FBQUE7QUFBQSwyQkFTU0MsSUFUVCxFQVNlLENBRVo7QUFYSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1DLEtBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsbUJBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFB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QUcsQ0FBQ3ZILENBQUosR0FBUSxPQUFPK0UsQ0FBQyxHQUFHLEVBQW5CO0FBQ0F5UCxnQkFBUSxDQUFDblAsSUFBVCxDQUFja0MsR0FBZDtBQUNEOztBQUNEaU4sY0FBUSxDQUFDdlIsT0FBVCxDQUFpQixVQUFDc0UsR0FBRCxFQUFTO0FBQ3hCLGFBQUksQ0FBQytILFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0J4SSxHQUEvQjs7QUFDQSxhQUFJLENBQUN5SSxPQUFMLENBQWEzSyxJQUFiLENBQWtCa0MsR0FBbEI7QUFDRCxPQUhEO0FBS0EsV0FBSzhNLG1CQUFMLEdBQTJCLEtBQUtDLGVBQWhDO0FBQ0Q7QUF6Q0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnRyb2woYm9keSkge1xyXG4gICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duLHVwLGxlZnQscmlnaHQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5kU2NyaXB0IGV4dGVuZHMgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyAvLyDQl9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5ldmVudFRpbWUgPSAxNTAwO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmV2ZW50U3RhcnQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudFRpbWUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmV2ZW50U3RhcnQpIHsgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LXRiNGRINC90LUg0L3QsNGH0LDQu9C+0YHRjFxyXG4gICAgICBpZiAodGhpcy5ldmVudFRpbWUgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudFN0YXJ0ID0gdHJ1ZTsvLyDQktGA0YPQsdCw0LXQvCDRgdC+0LHRi9GC0LjQtVxyXG4gICAgICAgIHRoaXMuYm9keS5oaXQodGhpcy5kaXJlY3Rpb24pOy8vINCh0L7QsdGL0YLQuNC1IC0g0L7RgNC6INCx0YzRkdGCXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib2R5LnN0YW5kKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIGlzQWdyZXNzaXZlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBiZWNvbWVBZ3Jlc3NpdmUoKSB7XHJcbiAgICB0aGlzLmFncmVzc2l2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmVjb21lUGVhY2VmdWwoKSB7XHJcbiAgICB0aGlzLmFncmVzc2l2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzT3JjQWdyZXNzaXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWdyZXNzaXZlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2lzQWdyZXNzaXZlJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGVhY2VmdWwgZXh0ZW5kcyBBSSB7XHJcbiAgY29uc3RydWN0b3IocGxheWVyKSB7IC8vINCX0LTQtdGB0Ywg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0L/QsNGA0LDQvNC10YLRgNGLLCDQvdCw0L/RgNC40LzQtdGALCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgyDQv9C10YDRgdC+0L3QsNC20LAsINC10LPQviDQv9Cw0LzRj9GC0YwsINGH0YLQviDQtNC10LvQsNC10YIg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YEg0Lgg0YIu0LQuXHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IDEwNTA7Ly8g0JzQtdC90Y/QtdGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LrQsNC20LTRi9C1IDEwMDAg0LzRgVxyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IDA7Ly8g0JrQvtCz0LTQsCDQsiDQv9C+0YHQu9C10LTQvdC40Lkg0YDQsNC3INC80LXQvdGP0Lsg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjsvLyDQn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cclxuXHJcbiAgICB0aGlzLnN0dWNrID0gZmFsc2U7Ly8g0JXRgdC70LggdHJ1ZSwg0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDRgdGC0LXQvdGDXHJcbiAgICB0aGlzLmNoYW5nZVdheUluaXQgPSA1MDA7Ly8g0JXRgdC70Lgg0YPQv9C10YDRgdGPINCyINC/0YDQtdC/0Y/RgtGB0YLQstC40LUsINGN0YLQviDQstGA0LXQvNGPINC+0L0g0LTQstC40LPQsNC10YLRgdGPINCyINC70Y7QsdC+0Lwg0LTRgNGD0LPQvtC8INC90LDQv9GA0LDQstC70LXQvdC40Lgg0LIg0L3QsNC00LXQttC00LUg0L7QsdC+0LnRgtC4INC/0YDQtdC/0Y/RgtGB0YLQstC40LVcclxuICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xyXG4gICAgdGhpcy5vbGRYID0gMDsvLyDQkiDRjdGC0Lgg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LHRg9C00LXQvCDQv9C40YHQsNGC0Ywg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLLiDQldGB0LvQuCDQvdC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINGA0LDQstC90Ysg0YHRgtCw0YDRi9C8LCDQt9C90LDRh9C40YIg0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICB0aGlzLm9sZFkgPSAwO1xyXG5cclxuICAgIHRoaXMubGFzdFRpbWVBZ3Jlc3NpdmUgPSAwO1xyXG4gICAgdGhpcy5kdXJhdGlvbkFncmVzc2l2ZSA9IDUwMDsvLyDQndCw0YHQutC+0LvRjNC60L4g0YfQsNGB0YLQviDQvNC10L3Rj9GO0YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQsNCz0YDQtdGB0YHQuNCy0L3Ri9C1INC+0YDQutC4XHJcbiAgICB0aGlzLnRpbWVPZk1hcmNoID0gNDU2MDsvLyDQmtC+0LPQtNCwINC+0YDQuiDRgtC+0LvRjNC60L4g0L/QvtGP0LLQuNC70YHRjywg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQv9GA0L7RgdGC0L4g0LTQstC40LbQtdGC0YHRjyDQsiDQvtC00L3QvtC8INC90LDQv9GA0LDQstC70LXQvdC40LguINCf0L7RgdC70LUgLSDQvdCw0YfQuNC90LDQtdGCINC00LXQudGB0YLQstC+0LLQsNGC0Ywg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGlyZWN0aW9uKCkgeyAvLyDQntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCxsZWZ0Jy5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRpbWVPZk1hcmNoID4gMCkgeyAvLyDQntGA0Log0LXRidGRINC80LDRgNGI0LjRgNGD0LXRgiwg0YIu0LUuINC30LDRhdC+0LTQuNGCINC90LAg0LvQvtC60LDRhtC40Y5cclxuICAgICAgdGhpcy50aW1lT2ZNYXJjaCAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdHVjaykgeyAvLyDQldGB0LvQuCDQvtGA0Log0LfQsNGB0YLRgNGP0LssINC00LDQu9GM0L3QtdC50YjQuNGFINC/0YDQvtCy0LXRgNC+0LogZWxzZSBpZiDQvdC1INCx0YPQtNC10YJcclxuICAgICAgdGhpcy5jaGFuZ2VXYXkgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgIGlmICh0aGlzLmNoYW5nZVdheSA8IDApIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVdheSA9IHRoaXMuY2hhbmdlV2F5SW5pdDtcclxuICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNBZ3Jlc3NpdmUuaXNPcmNBZ3Jlc3NpdmUoKSkgeyAvLyDQn9GA0L7QstC10YDQutCwINC+0YDQutCwINC90LAg0LDQs9GA0LXRgdGB0LjRjlxyXG4gICAgICB0aGlzLmFncmVzc2l2ZUJlaGF2aW91cih0aW1lKTtcclxuICAgICAgdGhpcy5pc1N0dWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmR1bWJCZWhhdmlvdXIodGltZSk7XHJcbiAgICAgIHRoaXMuaXNTdHVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZHVtYkJlaGF2aW91cih0aW1lKSB7XHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lRHVtYikgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFncmVzc2l2ZUJlaGF2aW91cih0aW1lKSB7XHJcbiAgICBjb25zdCBjb3JyZWN0aW9uID0gMTA7Ly8g0L7RgNC6INCx0YzRkdGCINC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LggNSwg0LXQvNGDINC90LUg0L3Rg9C20L3QviDQsdGL0YLRjCDQstC/0LvQvtGC0L3Rg9GOINC6INC40LPRgNC+0LrRgyAo0LjQvdCw0YfQtSDQvtGA0Log0LHRjNGR0YIg0YLQvtC70YzQutC+INC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Lgg0YEg0LjQs9GA0L7QutC+0LwsINCwINC+0YDQutC4INC40LfQsdC10LPQsNGO0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5KVxyXG4gICAgaWYgKHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS53aWR0aFxyXG4gICAgICAmJiB0aGlzLmJvZHkueCArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLndpZHRoICsgY29ycmVjdGlvbiA+IHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS54XHJcbiAgICAgICYmIHRoaXMuYm9keS55ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnkgLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkgKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS5oZWlnaHRcclxuICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS5oZWlnaHQgKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkpIHsgdGhpcy5hdHRhY2soKTt9XHJcbiAgICAvLyB9XHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlKSA+IHRoaXMuZHVyYXRpb25BZ3Jlc3NpdmUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKTtcclxuICAgICAgdGhpcy5sYXN0VGltZUFncmVzc2l2ZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPj0gdGhpcy5wbGF5ZXIueCAmJiB0aGlzLmJvZHkueSA+PSB0aGlzLnBsYXllci55KSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55ID49IHRoaXMucGxheWVyLnkpIHtcclxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPCB0aGlzLnBsYXllci55KSB7XHJcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU3R1Y2soKSB7IC8vINCf0YDQvtCy0LXRgNC60LAsINCy0L7Qt9C80L7QttC90L4g0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICBpZiAodGhpcy5ib2R5LnggPT0gdGhpcy5vbGRYICYmIHRoaXMuYm9keS55ID09IHRoaXMub2xkWSkge1xyXG4gICAgICB0aGlzLnN0dWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICd1cCcgfHwgdGhpcy5kaXJlY3Rpb24gPT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9sZFggPSB0aGlzLmJvZHkueDtcclxuICAgIHRoaXMub2xkWSA9IHRoaXMuYm9keS55O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNrKCkge1xyXG4gICAgdGhpcy5ib2R5LmhpdCgpO1xyXG4gICAgdGhpcy5wbGF5ZXIuZ2V0SGl0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0LFxyXG4gIH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lLFxyXG4gICAgICBzb3VyY2VYOiBmcmFtZXNbMF0uc3gsXHJcbiAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0LLRgNC10LzRjyDQvtGCINC/0L7RgdC70LXQtNC90LXQs9C+INGE0YDQtdC50LzQsCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgIC8qINCU0LvRjyDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsC4g0J3QsNC/0YDQuNC80LXRgCwg0L/QvtGB0LvQtSDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwINCw0L3QuNC80LDRhtC40Lgg0YHRgtGA0LXQu9GM0LHRiywg0L/QtdGA0YHQvtC90LDQtiDQv9C10YDQtdGB0YLQsNGR0YIg0YHRgtGA0LXQu9GP0YLRjFxyXG4gICAg0K3RgtCwINC/0LXRgNC10LzQtdC90L3QsNGPINC30LDQtNCw0LXRgtGB0Y8g0LIg0LrQu9Cw0YHRgdC1IEJvZHkuINCd0LDQv9GA0LjQvNC10YA6IHRoaXMudmlldy5vbkVuZCA9ICgpPT50aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTsgKi9cclxuICAgIHRoaXMub25FbmQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWUoaW5kZXgpIHtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7IC8vINCh0YLQsNGA0YIg0LDQvdC40LzQsNGG0LjQuCDRgSDRgdCw0LzQvtCz0L4g0L3QsNGH0LDQu9CwXHJcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmV4dEZyYW1lKCkge1xyXG4gICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQutCw0LTRgCwg0YLQvi4uLlxyXG4gICAgICBpZiAodGhpcy5vbkVuZCkgeyAvLyAuLi7QtdGB0LvQuCDQt9Cw0LTQsNC90LAg0LrQvtC90YbQvtCy0LrQsCwg0LfQsNC/0YPRgdC60LDQtdC8LiDQndCw0L/RgNC40LzQtdGAOiB0aGlzLnZpZXcub25FbmQgPSAoKT0+dGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnJlcGVhdCkgeyAvLyAuLi4g0LXRgdC70Lgg0LfQsNC00LDQvSDQv9C+0LLRgtC+0YAsINC/0L7QstGC0L7RgNGP0LXQvFxyXG4gICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpOy8vIC4uLiDQuNC90LDRh9C1IC0g0YHRgtC+0L8g0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQrdGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQvdGD0LbQvdCwINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LLRi9C30L7QstCwIHVwZGF0ZSgpLCDRh9GC0L7QsdGLINC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGMIHRoaXMubGFzdFRpbWVcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHsgLy8g0KDQsNC30L3QuNGG0LAg0L/QviDQstGA0LXQvNC10L3QuCDQvNC10LbQtNGDINC/0YDQvtGI0LvRi9C8INC4INGC0LXQutGD0YnQuNC8INC60LDQtNGA0L7QvDogKDExLTIpPjEwLCAoMTItMik+MTAsICgxMy0yKT4xMCAtINC30LTQtdGB0Ywg0L/RgNC+0YjQu9C+IDEw0LzRgSwg0LAgc3BlZWQg0LIg0Y3RgtC+0Lwg0L/RgNC40LzQtdGA0LUg0LrQsNC6INGA0LDQtyDRgNCw0LLQtdC9IDEw0LzRgSwg0LfQvdCw0YfQuNGCINC80LXQvdGP0LXQvCDQutCw0LTRgFxyXG4gICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ2FtZUF1ZGlvID0gbmV3IEF1ZGlvKCdhdWRpby9nYW1lLm1wMycpO1xyXG5jb25zdCBnYW1lQXVkaW9XaW4gPSBuZXcgQXVkaW8oJ2F1ZGlvL3dpbi5tcDMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJvd1BsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9hcnJvdy5tcDMnO1xyXG4gIHJldHVybiBzb3VuZC5wbGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd29yZFBsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9zd29yZC5tcDMnO1xyXG4gIHNvdW5kLnZvbHVtZSA9IDAuMjtcclxuICByZXR1cm4gc291bmQucGxheSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVhdGhPcmNQbGF5QXVkaW8oKSB7XHJcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oKTtcclxuICBzb3VuZC5zcmMgPSAnYXVkaW8vZGVhdGgtb3JjLm1wMyc7XHJcbiAgc291bmQudm9sdW1lID0gMC4xO1xyXG4gIHJldHVybiBzb3VuZC5wbGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lT3ZlclBsYXlBdWRpbygpIHtcclxuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gIHNvdW5kLnNyYyA9ICdhdWRpby9nYW1lLW92ZXIubXAzJztcclxuICBzb3VuZC52b2x1bWUgPSAwLjQ7XHJcbiAgcmV0dXJuIHNvdW5kLnBsYXkoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVdpblBsYXlBdWRpbyhzdGF0ZSkge1xyXG4gIGdhbWVBdWRpb1dpbi52b2x1bWUgPSAwLjE7XHJcbiAgaWYgKHN0YXRlID09IHRydWUpIHtcclxuICAgIGdhbWVBdWRpb1dpbi5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdhbWVBdWRpb1dpbi5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVQbGF5QXVkaW8oc3RhdGUpIHtcclxuICBnYW1lQXVkaW8udm9sdW1lID0gMC4xO1xyXG4gIGdhbWVBdWRpby5sb29wID0gdHJ1ZTtcclxuICBpZiAoc3RhdGUgPT0gdHJ1ZSkge1xyXG4gICAgZ2FtZUF1ZGlvLnBsYXkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2FtZUF1ZGlvLnBhdXNlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vINCe0YHQvdC+0LLQsCDQstGB0LXRhSDQv9C10YDRgdC+0L3QsNC20LXQuVxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi9jaGFyYWN0ZXItc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkgey8vIFBsYXllciAtPiBCb2R5IH4gQ2hhcmFjdGVyU2hlZXQgLT4gU3ByaXRlU2hlZXQgfiBTcHJpdGVcclxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgc3BlZWQgfSkge1xyXG4gICAgdGhpcy54ID0gLTEwMDsvLyDQn9C+0LvQvtC20LXQvdC40LUg0L7QsdGK0LXQutGC0LBcclxuICAgIHRoaXMueSA9IC0xMDA7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7Ly8g0KHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcignbGVmdCcsIDApOy8vINCd0LDQv9GA0LDQstC70LXQvdC40LUg0L/QtdGA0LXQvNC10YnQtdC90LjRj1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0JLRgNC10LzRjyDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTsvLyDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cclxuXHJcbiAgICAvLyDQpNC+0YDQvNCwLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LTQu9GPINC60L7Qu9C70LjQt9C40LguINCe0L3QsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDQvdC1INC+0YIg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0YHQv9GA0LDQudGC0LAsINCwINC+0YIgeDogMTgsIHk6IDE1XHJcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xyXG4gICAgICB4OiAxOCwgeTogMTUsIHdpZHRoOiAyOCwgaGVpZ2h0OiA0OSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSGl0dGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCX0LDQs9GA0YPQttCw0LXQvCDQvdC10L7QsdGF0L7QtNC80YvQtSDQsNC90LjQvNCw0YbQuNC4INC00LvRjyDQtNCw0L3QvdC+0LPQviDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHsgaW1hZ2VOYW1lIH0pO1xyXG4gICAgJ3dhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpOy8vINCSINC40YLQvtCz0LUgdGhpcy5hbmltYXRpb25zID0ge3dhbGtfZG93bjogLi4sIHdhbGtfdXA6IC4uINC4INGCLtC0LiB9XHJcbiAgICB9KTtcclxuICAgICdzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICB9KTtcclxuICAgICdjdXRfZG93bixjdXRfdXAsY3V0X2xlZnQsY3V0X3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxyXG4gICAgfSk7XHJcbiAgICBbJ2RlYXRoJ10uZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvLyDQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhbmQoJ2xlZnQnKTtcclxuICB9XHJcblxyXG4gIHNob290KGFycm93KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNTaG9vdGluZykge1xyXG4gICAgICB0aGlzLmlzU2hvb3RpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHNob290XyR7dGhpcy52ZWxvY2l0eS5kaXJlY3Rpb259YF07XHJcbiAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICBhcnJvdy5mbHkodGhpcy54LCB0aGlzLnksIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNIaXR0aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNIaXR0aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2BjdXRfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcclxuICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMudmlldy5ydW4oKTsvLyDQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LDQvdC40LzQsNGG0LjRjlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2FsayhkaXJlY3Rpb24pIHtcclxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHJldHVybjsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0L3QtdC70YzQt9GPINC40LTRgtC4LiDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgd2Fsa18ke2RpcmVjdGlvbn1gXTsvLyDQl9C00LXRgdGMINGF0YDQsNC90LjRgtGB0Y8g0YLQtdC60YPRidCw0Y8g0LDQvdC40LzQsNGG0LjRjy4gICB0aGlzLnZpZXcg0YXRgNCw0L3QuNGCINC+0LHRitC10LrRgiBDaGFyYWN0ZXJTaGVldFxyXG4gICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgfVxyXG5cclxuICBzdGFuZChkaXJlY3Rpb24pIHsgLy8g0KHRgtC+0Y/RgtGMXHJcbiAgICBpZiAodGhpcy5pc1Nob290aW5nIHx8IHRoaXMuaXNIaXR0aW5nKSByZXR1cm47Ly8g0J3QlSDQn9Ce0J3QmNCc0JDQriDQmtCQ0Jog0KDQkNCR0J7QotCQ0JXQoi4g0JXQodCb0Jgg0KPQkdCg0JDQotCsINCt0KLQoyDQodCi0KDQntCa0KMsINCf0JXQoNCh0J7QndCQ0JbQldCcINCd0JXQm9Cs0JfQryDQo9Cf0KDQkNCS0JvQr9Ci0KxcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHdhbGtfJHtkaXJlY3Rpb259YF07XHJcbiAgICB0aGlzLnZpZXcuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgZGVhdGgoKSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcignZG93bicsIDApOy8vINCe0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zLmRlYXRoO1xyXG4gICAgLy8gdGhpcy52aWV3LnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZykgeyAvLyDQktC+INCy0YDQtdC80Y8g0YHRgtGA0LXQu9GM0LHRiyDQuCDRg9C00LDRgNC+0LIg0L3QtdC70YzQt9GPINC40LTRgtC4XHJcbiAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcblxyXG4gICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINCw0L3QuNC80LDRhtC40Lg7IHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XHJcbiAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpOyAvLyDQkiDQv9C10YDQtdC80LXQvdC90L7QuSB0aGlzLnZpZXcg0YXRgNCw0L3QuNGC0YHRjyB0aGlzLmFuaW1hdGlvbnMgPSB7fS4g0JzQtdGC0L7QtCB0cnVuYyDQvtGC0LHRgNCw0YHRi9Cy0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMXHJcbiAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwLCBsaW1pdFggPSA1MDAwMCwgbGltaXRZID0gNTAwMDAsIHNjcm9sbEVkZ2UgPSAyMDAsXHJcbiAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5saW1pdFggPSBsaW1pdFg7XHJcbiAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcclxuICAgIHRoaXMud2F0Y2hPYmplY3QgPSBmYWxzZTtcclxuICAgIHRoaXMub2JqID0gbnVsbDtcclxuICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XHJcbiAgfVxyXG5cclxuICB3YXRjaChvYmopIHtcclxuICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xyXG4gICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMud2F0Y2hPYmplY3QpIHtcclxuICAgICAgaWYgKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLmxpbWl0WCwgdGhpcy5vYmoueCAtIHRoaXMud2lkdGggKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vYmoueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai55ID4gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLm9iai55IC0gdGhpcy5oZWlnaHQgKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueSAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwZWNpYWxQb3NpdGlvbigpIHtcclxuICAgIHRoaXMueCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmhlaWdodDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3IoeyBpbWFnZU5hbWUgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWUsXHJcbiAgICAgIGltYWdlV2lkdGg6IDgzMixcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VxdWVuY2VzID0gdGhpcy5nZXRTZXF1ZW5jZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlcXVlbmNlcygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XHJcbiAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcclxuICAgIGRhdGEubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKChpKSA9PiBpID4gMCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXF1ZW5jZXM7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24obmFtZSwgc3BlZWQgPSAxMDAsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtCw0YLQuNGH0L3Ri9GFINC+0LHRitC10LrRgtC+0LIuINCc0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9C10LTRg9GO0YnQuNC1INGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LA6IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fVxyXG4gICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFN0YXRpY1NoYXBlcyhkYXRhKSB7XHJcbiAgICBkYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAnb2JqZWN0Z3JvdXAnKVxyXG4gICAgICAvKiBvYmplY3RzINGN0YLQviDQvNCw0YHRgdC40LIg0YEg0L3QsNCx0L7RgNC+0Lwg0L7QsdGK0LXQutGC0L7QsiBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0wXHJcbiAgICAgICAgICAgICAgICDQlNGD0LzQsNGOLCDQutC+0L3RgdGC0YDRg9C60YbQuNGPICguLi5sYXllci5vYmplY3RzKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIgIHRoaXMuc3RhdGljU2hhcGVzID0gW3suLi59LHsuLi59LCDQuCDRgi7QtC5dICovXHJcbiAgICAgIHsgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTsgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcclxuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xyXG4gICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEsIGhlaWdodDogMTMwMCxcclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7eDoxMjgwLHk6MCx3aWR0aDoxLGhlaWdodDoxMzAwfSk7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMTI4MCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkS2luZW1hdGljQm9keShib2R5KSB7XHJcbiAgICB0aGlzLmJvZGllcy5wdXNoKHtcclxuICAgICAgeDogYm9keS54LCAvLyDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgIHk6IGJvZHkueSxcclxuICAgICAgb2JqOiBib2R5LCAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0L/QtdGA0YHQvtC90LDQttCwINGBINC90L7QstGL0LzQuCDQutC+0L7RgNC00LjQvdCw0YLQsNC80LgsINCx0YPQtNC10Lwg0YHRgNCw0LLQvdC40LLQsNGC0Ywg0L3QvtCy0YvQtSDQuCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKHRpbWUpOy8vINGA0LDRgdGB0YfRkdGCINC60L7Qu9C70LjQt9C40Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0YHQviDRgdGC0LDRgtC40YfQvdGL0LzQuCDQvtCx0YrQtdC60YLQsNC80Lgg0Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbGxpc2lvbih0aW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuICAgICAgY29uc3Qgb2xkWCA9IGJvZHkueDtcclxuICAgICAgY29uc3Qgb2xkWSA9IGJvZHkueTtcclxuICAgICAgbGV0IHsgeCB9ID0gYm9keS5vYmo7XHJcbiAgICAgIGxldCB7IHkgfSA9IGJvZHkub2JqO1xyXG4gICAgICBpZiAoeCA+IG9sZFgpIHsgLy8gbW92aW5nIHJpZ2h0XHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcclxuICAgICAgICAgIGlmICggLy8g0JXRgdC70Lgg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LDRhdC+0LTRj9GC0YHRjyDQv9C10YDQtdC0INC+0LHRitC10LrRgtC+0LwqKipcclxuICAgICAgICAgICAgKChvbGRYIC8vINC60L7QvtGA0LTQuNC90LDRgtCwINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAxLy8g0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvNC10LbQtNGDINC60LDQtNGA0LDQvNC4INC30LDQvdC40LzQsNC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjCDQv9C40LrRgdC10LvRjywg0YfRgtC+0LHRiyDQutC+0LQg0YDQsNCx0L7RgtCw0Lsg0L7QutGA0YPQs9C70LjQvCDQv9GA0L7RiNC70YPRjiDRgtC+0YfQutGDINC90LAgMSDQv9C40LrRgdC10LvRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC8vINC60L7QvtGA0LTQuNC90LDRgtCwINGE0L7RgNC80Ysg0LrQvtC70LvQuNC30LjQuCDQstC90YPRgtGA0Lgg0L/QtdGA0YHQvtC90LDQttCwICjQvdCw0YfQsNC70L7QvCDQvtGC0YHRh9GR0YLQsCDRgdC70YPQttC40YIg0LvQtdCy0YvQuSDQstC10YDRhdC90LjQuSDRg9Cz0L7QuyDQv9C10YDRgdC+0L3QsNC20LApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKiAqKtC4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0L7RgdC70LUg0L7QsdGK0LXQutGC0LAsINC30L3QsNGH0LjRgiDQv9C10YDRgdC+0L3QsNC2INGB0YLQvtC70LrQvdGD0LvRgdGPINGBINC/0YDQtdC/0Y/RgtGB0YLQstC40LXQvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0YHQvtC90LDQtiDQtNC+0LvQttC10L0g0LrQsNGB0LDRgtGM0YHRjyDQv9GA0LXQv9GP0YLRgdGC0LLQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7IC8vINCR0LXRgNC10Lwg0LHQu9C40LbQsNC50YjQuNC5INC+0LHRitC10LrRgiwg0LPQtNC1INC+0YHRgtCw0L3QvtCy0LjQvCDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLngpLy8gKNC90LDQstC10YDQvdC+0LUg0LzQvtC20L3QviDQsdGL0LvQviDQv9GA0L7RgdGC0L4g0L7RgdGC0LDQstC40YLRjCDQvtC00LjQvSBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyINGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4ICjQvdCw0L/RgNC40LzQtdGAINC/0L7RgdC70LUg0L/QvtC/0LDQtNCw0L3QuNGPINCyINC00LXRgNC10LLQviwg0YHRgtGA0LXQu9CwINC90LUg0LTQstC40LbQtdGC0YHRjylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgaWYgKGJvZHkgIT0gc2hhcGUpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgaWYgKCgob2xkWCAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopOy8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiAo0L3QsNC/0YDQuNC80LXRgCDRgdGC0YDQtdC70LAg0LHRjNGR0YIg0L7RgNC60LAsINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LAg0Lgg0YIu0LQuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeCA8IG9sZFgpIHsgLy8gbW92aW5nIGxlZnRcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCArIHNoYXBlLndpZHRoKSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLng7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFggKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSA+IG9sZFkpIHsgLy8gbW92aW5nIGRvd25cclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS55KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHkgPCBvbGRZKSB7IC8vIG1vdmluZyB1cFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5ib2RpZXNbal07XHJcbiAgICAgICAgICBpZiAoYm9keSAhPSBzaGFwZSkgeyAvLyDQldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICBpZiAoKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55O1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkueCA9IHg7XHJcbiAgICAgIGJvZHkueSA9IHk7XHJcbiAgICAgIGJvZHkub2JqLnggPSB4O1xyXG4gICAgICBib2R5Lm9iai55ID0geTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGluZGV4T2ZCb2R5LCBpbmRleE9mU2hhcGUpIHtcclxuICAgIGlmIChib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHNoYXBlLm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7IC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdC70YPRh9Cw0LksINC10YHQu9C4INC/0L7Qv9Cw0LTRkdGC0YHRjyDQvtCx0YrQtdC60YIg0LHQtdC3INC90LDQt9Cy0LDQvdC40Y9cclxuICAgICAgaWYgKGJvZHkub2JqLm5hbWUgPT0gJ2Fycm93JyAmJiBzaGFwZS5vYmoubmFtZSA9PSAnb3JjJykgeyAvLyDQldGB0LvQuCDRgdGC0YDQtdC70LAg0LrQvtGB0L3Rg9C70LDRgdGMINC+0YDQutCwXHJcbiAgICAgICAgLy8g0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCy0LzQtdGB0YLQviDQtNCy0YPRhSwg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQvtC00LjQvSDQstGL0LfQvtCyIHRoaXMucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5LGluZGV4T2ZTaGFwZSkuINCd0L4g0LzQvdC1INGC0LDQuiDRg9C00L7QsdC90LXQtSDQvtGC0LvQsNC20LjQstCw0YLRjFxyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gUmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLmJvZGllcywgaW5kZXhPZkJvZHkpOy8vINCh0YLRgNC10LvQsCDQuNGB0YfQtdC30LDQtdGCLCDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwLCDRg9C00LDQu9C40YLRjCDRgdCw0Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgYm9keS5vYmouZGVsZXRlKCk7Ly8g0KPQtNCw0LvRj9C10Lwg0YHRgtGA0LXQu9GDXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mU2hhcGUpOy8vINCe0YLQutC70Y7Rh9C40YLRjCDQtdCz0L4g0L7RgiDQutC+0LvQu9Cw0LnQtNC10YDQsCAo0YPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyDQuNC3INC80LDRgdGB0LjQstCwIHRoaXMuYm9kaWVzKVxyXG4gICAgICAgIHNoYXBlLm9iai5kZWF0aCgpOyAvLyDQntGA0Log0L/QvtCz0LjQsdCw0LXRglxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpbmRleE9mQm9keSkgeyAvL1xyXG4gICAgaWYgKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICBpZiAoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnKSB7XHJcbiAgICAgICAgYm9keS5vYmouc3RvcCgpOy8vINCh0YLRgNC10LvQsCDQv9C10YDQtdGB0YLQsNGR0YIg0LTQstC40LPQsNGC0YzRgdGPXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSk7Ly8g0YPQtNCw0LvQuNGC0Ywg0LjQtyDQutC+0LvQu9Cw0LnQtNC10YDQsFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgWzM3LCAnbGVmdCddLFxyXG4gICAgICBbMzksICdyaWdodCddLFxyXG4gICAgICBbMzgsICd1cCddLFxyXG4gICAgICBbNDAsICdkb3duJ10sXHJcbiAgICAgIFszMiwgJ2ZpcmUnXSxcclxuICAgICAgWzEzLCAnZW50ZXInXSxcclxuICAgIF0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xyXG4gICAgaWYgKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1vdmVyJztcclxuaW1wb3J0IHsgR2FtZVdpbiB9IGZyb20gJy4vc2NlbmVzL2dhbWUtd2luJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICBlbGY6ICdpbWcvZGFyay1lbGYucG5nJyxcclxuICAgICAgcGxheWVyOiAnaW1nL3BsYXllcjIucG5nJyxcclxuICAgICAgdGl0bGVfYmc6ICdpbWcvYmdfdGl0bGUucG5nJyxcclxuICAgICAgdGl0bGVfbmFtZTogJ2ltZy9nYW1lX25hbWUucG5nJyxcclxuICAgICAgdGl0bGVfc3RhcnQ6ICdpbWcvc3RhcnRfZ2FtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9vcHRpb246ICdpbWcvb3B0aW9uX2dhbWUucG5nJyxcclxuICAgICAgdGl0bGVfZXhpdDogJ2ltZy9leGl0X2dhbWUucG5nJyxcclxuICAgICAgeW91X3dpbjogJ2ltZy95b3Vfd2luLnBuZycsXHJcbiAgICAgIGdhbWVfb3ZlcjogJ2ltZy9nYW1lX292ZXIucG5nJyxcclxuICAgICAgdGlsZXM6ICdpbWcvdGlsZXMucG5nJyxcclxuICAgICAgdGlsZXMyOiAnaW1nL3RpbGVzMi5wbmcnLFxyXG4gICAgICBxdWVzdF9wZXJzb246ICdpbWcvZ2lybC1mb3ItY2F2ZS5wbmcnXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgICBnYW1lT3ZlcjogbmV3IEdhbWVPdmVyKHRoaXMpLFxyXG4gICAgICBnYW1lV2luOiBuZXcgR2FtZVdpbih0aGlzKSxcclxuICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgY2FzZSBTY2VuZS5HQU1FX09WRVI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVPdmVyO1xyXG4gICAgICBjYXNlIFNjZW5lLkdBTUVfV0lOOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lV2luO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGxldCBhbGxEZWF0aE9ya3MgPSAwO1xyXG5leHBvcnQgbGV0IHNob3dRdWVzdEludGVyZmFjZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF1ZXN0KCkge1xyXG4gICAgYWxsRGVhdGhPcmtzID0gMDtcclxuICAgIHNob3dRdWVzdEludGVyZmFjZSA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlc3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnWUVTISEhJyk7XHJcbiAgICBzaG93UXVlc3RJbnRlcmZhY2UgPSB0cnVlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYXRoT3JjcygpIHtcclxuICAgIGlmIChzaG93UXVlc3RJbnRlcmZhY2UpIHtcclxuICAgICAgICBhbGxEZWF0aE9ya3MrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGxEZWF0aE9ya3MpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XHJcbiAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xyXG4gIGVsdmVuU2NvdXQucnVuKCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygn0Jgg0YHQtdC50YfQsNGBINGA0LDQsdC+0YLQsNC10YInKTtcclxuIiwiaW1wb3J0IHsgVGV4dEluZm8gfSBmcm9tICcuL3RleHQtaW5mbyc7XHJcbmltcG9ydCB7IGlzQWdyZXNzaXZlIH0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQgeyBhbGxEZWF0aE9ya3MsIHNob3dRdWVzdEludGVyZmFjZSB9IGZyb20gJy4vZ2V0LXF1ZXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHdhdmVzKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy53YXZlcyA9IHdhdmVzO1xyXG4gICAgdGhpcy50ZXh0SW5mbyA9IG5ldyBUZXh0SW5mbyhnYW1lLnNjcmVlbik7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdhbWUuc2NyZWVuLmNvbnRleHQ7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMucGxheWVyID0gZ2FtZS5jdXJyZW50U2NlbmUucGxheWVyO1xyXG4gICAgdGhpcy5maWdodFRleHRTaG93ZWQgPSBmYWxzZTsvLyDQvdCw0LTQv9C40YHRjCBGaWdodCDQv9C+0LrQsNC20LXRgtGB0Y8g0LvQuNGI0Ywg0L7QtNC40L0g0YDQsNC3XHJcbiAgICAvL3RoaXMudGltZVRvU3Vydml2ZSA9IDIwMDAwMDA7Ly8g0JXRgdC70Lgg0Y3RgtC+INCy0YDQtdC80Y8g0LLRi9C50LTQtdGCINCyINC90L7Qu9GMLCDRgtC+INC40LPRgNCwINC30LDQutC+0L3Rh9C40YLRgdGPINC/0L7QsdC10LTQvtC5XHJcblxyXG4gICAgdGhpcy5vcmNzS2lsbGVkID0gMDtcclxuXHJcbiAgICB0aGlzLndpZHRoSGVhbHRoTGluZSA9IDE1MDtcclxuXHJcbiAgICB0aGlzLmVuZE9wYWNpdHkgPSAwOy8vINCf0YDQuCDQv9GA0L7QuNCz0YDRi9GI0LUg0Y3QutGA0LDQvSDQtNC40YHQutGA0LXRgtC90L4sINGB0YLRg9C/0LXQvdGH0LDRgtC+LCDRgtC10LzQvdC10LXRgi4gMCAtINCw0LHRgdC+0LvRjtGC0L3QviDRgdCy0LXRgtC70L4sIDEgLSDQsNCx0YHQvtC70Y7RgtC90L4g0YLQtdC80L3QvlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0hlYWx0aExpbmUoKTtcclxuICAgIGlmIChzaG93UXVlc3RJbnRlcmZhY2UpIHtcclxuICAgICAgdGhpcy5xdWVzdEludGVyZmFjZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuaGVhbHRoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuZW5kR2FtZSh0aW1lLCAnbG9zZScpOy8vINCf0YDQvtC40LPRgNCw0LtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBZ3Jlc3NpdmUuaXNPcmNBZ3Jlc3NpdmUoKSkge1xyXG4gICAgICB0aGlzLmZpZ2h0VGV4dCh0aW1lKTtcclxuICAgIH1cclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICB0aGlzLnNob3dUaW1lcigpOy8v0J7QsdGA0LDRgtC90YvQuSDQvtGC0YHRh9GR0YJcclxuICAgIC8vICAgdGhpcy50aW1lVG9TdXJ2aXZlIC09IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgLy8gICBpZiAodGhpcy50aW1lVG9TdXJ2aXZlIDwgMCkge1xyXG4gICAgLy8gICAgIHRoaXMudGltZVRvU3Vydml2ZSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy5lbmRHYW1lKHRpbWUsICd3aW4nKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMudGV4dEluZm8udXBkYXRlKHRpbWUpO1xyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gIH1cclxuXHJcbiAgZmlnaHRUZXh0KHRpbWUpIHtcclxuICAgIGlmICghdGhpcy5maWdodFRleHRTaG93ZWQpIHtcclxuICAgICAgdGhpcy5maWdodFRleHRTaG93ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRleHRJbmZvLnNob3dUZXh0KCdZb3UgYW5nZXJlZCB0aGUgb3JjcyEnLCB0aW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dIZWFsdGhMaW5lKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyM4NTI3MjcnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjYjIzZDNkJztcclxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSAyO1xyXG4gICAgdGhpcy5jb250ZXh0LnJlY3QoMjAsIDE1LCB0aGlzLndpZHRoSGVhbHRoTGluZSwgMTApO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDIwLCAxNSwgdGhpcy53aWR0aEhlYWx0aExpbmUgKiAodGhpcy5wbGF5ZXIuaGVhbHRoIC8gdGhpcy5wbGF5ZXIuaGVhbHRoU3RhcnQpLCAxMCk7XHJcbiAgICAvLyB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gc2hvd1RpbWVyKCkge1xyXG4gIC8vICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCh0aGlzLmdhbWUuc2NyZWVuLndpZHRoIC0gNTAsIDMwLCAvL9GFLCB5XHJcbiAgLy8gICAgIE1hdGguZmxvb3IodGhpcy50aW1lVG9TdXJ2aXZlIC8gMTAwMCksLy8ndGV4dCdcclxuICAvLyAgICAgMjIpOy8vZm9udHNpemVcclxuICAvLyB9XHJcblxyXG4gIHF1ZXN0SW50ZXJmYWNlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIyMHB4IHNlcmlmXCJcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgT3JjcyBraWxsZWQgLSAke2FsbERlYXRoT3Jrc30gb2YgMTBgLCAyMCwgNjApO1xyXG4gIH1cclxuXHJcbiAgZW5kR2FtZSh0aW1lLCBzdGF0dXMpIHtcclxuICAgIC8vINCf0L7RgdGC0LXQv9C10L3QvdC+INC/0L7Rj9Cy0LvRj9C10YLRgdGPINGH0LXRgNC90LDRjyDQt9Cw0YHRgtCw0LLQutCwINC4INGB0L7QvtCx0YnQsNC10Lwg0YHRhtC10L3QtSwg0YfRgtC+INC40LPRgNCwINC30LDQutC+0L3Rh9C10L3QsFxyXG4gICAgdGhpcy5lbmRPcGFjaXR5ICs9ICh0aW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwO1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDEuNSkgeyAvLyAxLjUsINCwINC90LUgMSwg0YfRgtC+0LHRiyDRh9C10YDQvdCw0Y8g0LfQsNGB0YLQsNCy0LrQsCDQtdGJ0ZEg0L/QvtCy0LjRgdC10LvQsCDQvdC10LzQvdC+0LPQvlxyXG4gICAgICB0aGlzLmNoYW5nZVNjZW5lKHN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9wYWNpdHkgPSAwO1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDAuMjUpIG9wYWNpdHkgPSAwLjI1O1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDAuNSkgb3BhY2l0eSA9IDAuNTtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAwLjc1KSBvcGFjaXR5ID0gMC43NTtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAxKSBvcGFjaXR5ID0gMTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYigwLDAsMCwke29wYWNpdHl9KWA7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLnNjcmVlbi53aWR0aCwgdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlICdsb3NlJzogcmV0dXJuIHRoaXMuZ2FtZS5jdXJyZW50U2NlbmUuZ2FtZU92ZXJUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgY2FzZSAnd2luJzogcmV0dXJuIHRoaXMuZ2FtZS5jdXJyZW50U2NlbmUud2luVHJpZ2dlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldFF1ZXN0LCB1cGRhdGVRdWVzdCB9IGZyb20gJy4vZ2V0LXF1ZXN0JztcclxuY29uc3QgVEFLRV9RVUVTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFrZV9xdWVzdFwiKTtcclxuY29uc3QgQURBTkRPTl9USEVfUVVFU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFiYW5kb25fdGhlX3F1ZXN0XCIpO1xyXG5leHBvcnQgbGV0IHJ1bk9uY2VRdWVzdCA9IGZhbHNlO1xyXG5cclxuVEFLRV9RVUVTVC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1lvdSB0YWtlIHF1ZXN0IScpO1xyXG4gICAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hpZGUnKTtcclxuICAgIHJ1bk9uY2VRdWVzdCA9IHRydWU7XHJcbiAgICBnZXRRdWVzdCgpO1xyXG59O1xyXG5BREFORE9OX1RIRV9RVUVTVC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0FiYW5kb24gdGhlIHF1ZXN0IScpO1xyXG4gICBcclxuICAgICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICBcclxuICAgIHJ1bk9uY2VRdWVzdCA9IGZhbHNlO1xyXG4gICAgLy8gdXBkYXRlUXVlc3QoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWxEaWFsb2coKSB7XHJcbiAgICAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgLy8gJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW9kYWxEaWFsb2coKSB7XHJcbiAgICAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBuZXh0TGV2ZWxJbmZvKCkge1xyXG4gICAgJCgnI2luZm9Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAvLyAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbn0iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tICcuL2Fpcy9kdW1teSc7XHJcbmltcG9ydCB7IEVuZFNjcmlwdCB9IGZyb20gJy4vYWlzL2VuZFNjcmlwdCc7XHJcbmltcG9ydCB7IFBlYWNlZnVsIH0gZnJvbSAnLi9haXMvcGVhY2VmdWwnO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZSB9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuaW1wb3J0IHsgZGVhdGhPcmNQbGF5QXVkaW8gfSBmcm9tICcuL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcyc7XHJcbmltcG9ydCB7IGRlYXRoT3JjcyB9IGZyb20gJy4vZ2V0LXF1ZXN0JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT3JjIGV4dGVuZHMgQm9keSB7XHJcbiAgY29uc3RydWN0b3IocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKSB7IC8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdvcmMnLCBzcGVlZDogNTAgfSk7XHJcbiAgICBpZiAoYWlUeXBlID09ICdkdW1teScpIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgIGlmIChhaVR5cGUgPT0gJ2VuZFNjcmlwdCcpIHRoaXMuYWkgPSBuZXcgRW5kU2NyaXB0KCk7XHJcbiAgICBpZiAoYWlUeXBlID09ICdwZWFjZWZ1bCcpIHRoaXMuYWkgPSBuZXcgUGVhY2VmdWwocGxheWVyKTtcclxuXHJcbiAgICB0aGlzLmFsbERlYXRoT3JrcyA9IDA7XHJcbiAgICB0aGlzLm5hbWUgPSAnb3JjJzsvLyDQlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxyXG4gICAgdGhpcy5haS5jb250cm9sKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmFpKSB7XHJcbiAgICAgIHRoaXMuYWkudXBkYXRlKHRpbWUpOy8vINCV0YHQu9C4INCY0Jgg0L3QtSDQvtGC0LrQu9GO0YfQtdC9XHJcbiAgICB9XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVhdGgoKSB7XHJcbiAgICBkZWF0aE9yY3MoKTtcclxuICAgIGRlYXRoT3JjUGxheUF1ZGlvKCk7XHJcbiAgICB0aGlzLmFpID0gbnVsbDsvLyDQntGC0LrQu9GO0YfQsNC10Lwg0JjQmFxyXG4gICAgaXNBZ3Jlc3NpdmUuYmVjb21lQWdyZXNzaXZlKCk7XHJcbiAgICBzdXBlci5kZWF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IHsgc3dvcmRQbGF5QXVkaW8gfSBmcm9tICcuL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQm9keSB7IC8vIFBsYXllciAtPiBCb2R5IH4gQ2hhcmFjdGVyU2hlZXQgLT4gU3ByaXRlU2hlZXQgfiBTcHJpdGVcclxuICBjb25zdHJ1Y3Rvcihjb250cm9sLCBnYW1lX2xldmVsKSB7IC8vIGNvbnRyb2wgLSDRg9C/0YDQsNCy0LvQtdC90LjQtSDQutC70LDQstC40LDRgtGD0YDQvtC5XHJcbiAgICBzdXBlcih7IGltYWdlTmFtZTogJ3BsYXllcicsIHNwZWVkOiAzMDAgfSk7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgdGhpcy5nYW1lX2xldmVsID0gZ2FtZV9sZXZlbDtcclxuICAgIHRoaXMuYXJyb3cgPSBmYWxzZTsvLyDQn9C+0LfQstC+0LvRj9C10Lwg0YHRgtGA0LXQu9GP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0L3QsCDRgNGD0LrQsNGFINC10YHRgtGMINGB0YLRgNC10LvQsFxyXG4gICAgdGhpcy50aW1lQXJyb3cgPSAxMDAwOy8vINCa0L7QvdGB0YLQsNC90YLQsCwg0LLRgNC10LzRjyDQvNC10LbQtNGDINC/0L7Rj9Cy0LvQtdC90LjQtdC8INGB0LvQtdC00YPRjtGJ0LXQuSDRgdGC0YDQtdC70YssINGH0YLQvtCx0Ysg0YHRgtGA0LXQu9GLINC90LUg0YHQvtC30LTQsNCy0LDQu9C40YHRjCDQutCw0Log0LjQtyDQv9GD0LvQtdC80ZHRgtCwXHJcbiAgICB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IDA7Ly8g0KLQsNC50LzQtdGAINC00LvRjyDRgdGC0YDQtdC7XHJcbiAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSAwO1xyXG4gICAgdGhpcy5uYW1lID0gJ3BsYXllcic7Ly8g0JTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwLCDRh9GC0L4g0L7Qv9C+0LfQvdCw0YLRjCDRjdGC0L7RgiDQvtCx0YrQtdC60YJcclxuXHJcbiAgICB0aGlzLmhlYWx0aFN0YXJ0ID0gMjA7Ly8g0J3QsNGH0LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuVxyXG4gICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aFN0YXJ0O1xyXG5cclxuICAgIHRoaXMudW5kZWFkID0gMTAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAg0LLRgNC10LzQtdC90Lgg0LHQtdGB0YHQvNC10YDRgtC40Y8sINC/0L7RgdC70LUg0L/QvtC70YPRh9C10L3QuNGPINGD0YDQvtC90LAg0LjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvVxyXG4gICAgdGhpcy50aW1lclVuZGVhZCA9IC0xOy8qINCi0LDQudC80LXRgCDQtNC70Y8g0L7QsdGA0LDRgtC90L7Qs9C+INC+0YLRgdGH0ZHRgtCwLiDQldGB0LvQuCDQvtC9INGA0LDQstC10L0g0LTQuNCw0L/QsNC30L7QvdGDINC+0YIgMCDQtNC+IHRoaXMudW5kZWFkLCDQt9C90LDRh9C40YIg0LjQtNGR0YIg0L7QsdGA0LDRgtC90YvQuSDQvtGC0YHRh9GR0YIg0Lgg0LjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCV0YHQu9C4IC0xLCDQuNCz0YDQvtC6INC80L7QttC10YIg0L/QvtC70YPRh9C40YLRjCDRg9GA0L7QvSAqL1xyXG4gICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IDA7XHJcbiAgfVxyXG5cclxuICBhZGRBcnJvdyhhcnJvdykge1xyXG4gICAgdGhpcy5hcnJvdyA9IGFycm93O1xyXG4gIH1cclxuXHJcbiAgZ2V0SGl0KCkgeyAvLyDQmNCz0YDQvtC6INC/0L7Qu9GD0YfQuNC7INGD0LTQsNGAXHJcbiAgICBzd29yZFBsYXlBdWRpbygpO1xyXG4gICAgaWYgKHRoaXMudGltZXJVbmRlYWQgPT09IC0xKSB7IC8vINCV0YHQu9C4INC40LPRgNC+0Log0YHQvNC10YDRgtC10L1cclxuICAgICAgaWYgKHRoaXMuaGVhbHRoID4gMCkgdGhpcy5oZWFsdGggLT0gMTtcclxuICAgICAgdGhpcy50aW1lclVuZGVhZCA9IHRoaXMudW5kZWFkOy8vINCU0LXQu9Cw0LXQvCDQuNCz0YDQvtC60LAg0LHQtdGB0YHQvNC10YDRgtC90YvQvCDQvdCwINCy0YDQtdC80Y9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZUZvckFycm93ID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPT09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udHJvbC5maXJlKSB7XHJcbiAgICAgIGlmICh0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9PT0gMCkgeyAvLyDQldGB0LvQuCDRgdGC0YDQtdC70YMg0LzQvtC20L3QviDRgdC+0LfQtNCw0LLQsNGC0YxcclxuICAgICAgICB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IHRoaXMudGltZUFycm93O1xyXG4gICAgICAgIHRoaXMuZ2FtZV9sZXZlbC5zaG9vdGluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFycm93KSB0aGlzLnNob290KHRoaXMuYXJyb3cpOy8vINCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQuNC80LXQvdC90L4g0Y3RgtGDINGB0YLRgNC10LvRgywg0YIu0LouINC/0LXRgNGB0L7QvdCw0LYg0LzQvtC20LXRgiDQuNC80LXRgtGMINGA0LDQt9C90YvQtSDRgdGC0YDQtdC70YtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcclxuICAgICAgdGhpcy53YWxrKCd1cCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wuZG93bikge1xyXG4gICAgICB0aGlzLndhbGsoJ2Rvd24nKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLmxlZnQpIHtcclxuICAgICAgdGhpcy53YWxrKCdsZWZ0Jyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5yaWdodCkge1xyXG4gICAgICB0aGlzLndhbGsoJ3JpZ2h0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPiAwKSB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyAtPSAodGltZSAtIHRoaXMubGFzdFRpbWVGb3JBcnJvdyk7XHJcbiAgICBlbHNlIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gMDtcclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xyXG5cclxuICAgIGlmICh0aGlzLnRpbWVyVW5kZWFkICE9IC0xKSB7IC8vINCY0LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L0sIHRoaXMudGltZXJVbmRlYWQgPiAwXHJcbiAgICAgIHRoaXMudGltZXJVbmRlYWQgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgICAgaWYgKHRoaXMudGltZXJVbmRlYWQgPCAwKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclVuZGVhZCA9IC0xOy8vINCY0LPRgNC+0Log0YHQvdC+0LLQsCDRgdC80LXRgNGC0LXQvVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7XHJcbiAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfS8vIHVwZGF0ZVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHsvLyDQldCz0L4g0YDQsNGB0YjQuNGA0Y/QtdGCIHByb2plY3RpbGVzL2Fycm93LmpzXHJcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7Ly8g0JXRgdC70Lgg0YHRgtGA0LXQu9CwINCw0LrRgtC40LLQvdCwLCDQvtC90LAg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINGH0LXRgNC10LcgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlINC4INC70LXRgtC40YIg0LIg0YbQtdC70YwuINCQINCy0L7QvtCx0YnQtSDRgdGC0YDQtdC70LAg0LIg0L3QtdCy0LjQtNC40LzQvtC8INGB0L7RgdGC0L7Rj9C90LjQuCDQstGB0LXQs9C00LAg0L3QsNGF0L7QtNC40YLRgdGPINC90LAg0Y3QutGA0LDQvdC1XHJcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xyXG4gICAgICB4OiAyNywgeTogMjcsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCxcclxuICAgIH07Ly8g0J3Rg9C20L3QviDQtNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAgKNGA0LDRgdGH0ZHRgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpLiDQoNCw0LfQvNC10YAg0YHQv9GA0LDQudGC0LAgNjTRhTY0XHJcbiAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTsvLyDQoNC+0LTQuNGC0LXQu9GMINCx0YPQtNC10YIg0L7RgtGB0LvQtdC20LjQstCw0YLRjCDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4sINC10YHQu9C4INC+0L3QsCB0cnVlLCDQt9C90LDRh9C40YIg0YDQvtC00LjRgtC10LvRjCDRg9C00LDQu9C40YIg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcbiAgfVxyXG5cclxuICBmbHkoeCwgeSwgZGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkgeyAvLyDQn9GA0Lgg0L/QvtC/0LDQtNCw0L3QuNC4INCyINGB0YLQsNGC0LjRh9C90L7QtSDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1LCBwcm9qZWN0aWxlINGC0LXRgNGP0LXRgiDRgdC60L7RgNC+0YHRgtGMXHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIHRoaXMuZGVsZXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyAgdGhpcy5sYXN0VGltZVxyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgIHRoaXMudmlldy5zZXRYWShNYXRoLnRydW5jKHRoaXMueCksIE1hdGgudHJ1bmModGhpcy55KSk7Ly8g0J3QsCDRjdGC0L7QvCDRjdGC0LDQv9C1INC/0L7QutCwINC90LUg0LjQt9Cy0LXRgdGC0L3QviDRh9GC0L4g0Y3RgtC+INCx0YPQtNC10YIg0YHQv9GA0LDQudGCINC40LvQuCDQsNC90LjQvNCw0YbQuNGPXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4uL3Byb2plY3RpbGUnO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcclxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkLCB4LCB5KSB7XHJcbiAgICBzdXBlcihkaXJlY3Rpb24sIHNwZWVkLCB4LCB5KTtcclxuICAgIHRoaXMuc3ByaXRlcyA9IHt9O1xyXG4gICAgdGhpcy5uYW1lID0gJ2Fycm93JztcclxuICAgIGNvbnN0IHRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDAsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ByaXRlcy5sZWZ0ID0gdGlsZXMuZ2V0U3ByaXRlKDkpO1xyXG4gICAgdGhpcy5zcHJpdGVzLnJpZ2h0ID0gdGlsZXMuZ2V0U3ByaXRlKDEwKTtcclxuICAgIHRoaXMuc3ByaXRlcy5kb3duID0gdGlsZXMuZ2V0U3ByaXRlKDE5KTtcclxuICAgIHRoaXMuc3ByaXRlcy51cCA9IHRpbGVzLmdldFNwcml0ZSgyMCk7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnNwcml0ZXNbZGlyZWN0aW9uXTtcclxuICB9XHJcblxyXG4gIGZseSh4LCB5LCBkaXJlY3Rpb24pIHtcclxuICAgIHN1cGVyLmZseSh4LCB5LCBkaXJlY3Rpb24pO1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJvZHkgfSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgeyBEdW1teSB9IGZyb20gJy4vYWlzL2R1bW15JztcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdFBlcnNvbiBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdxdWVzdF9wZXJzb24nLCBzcGVlZDogNSB9KTtcclxuICAgICAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XHJcbiAgICAgICAgdGhpcy5haS5jb250cm9sKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5haS51cGRhdGUodGltZSk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZW1vdmVGcm9tQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZShhcnIsIGluZGV4ZXMpIHsgLy8g0KPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YLRiyDQuNC3INC80LDRgdGB0LjQstCwINC/0L4g0LjQvdC00LXQutGB0YNcclxuICAgIC8vIGFyZ3VtZW50cyAtINC/0YHQtdCy0LTQviDQvNCw0YHRgdC40LIsINCyINC60L7RgtC+0YDQvtC8INGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiywg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cclxuICAgIC8vIFtdLnNsaWNlKCkgLSDRgdC+0LfQtNCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAvKiBhcnJheU9mSW5kZXhlcyAtINC80LDRgdGB0LjQsiwg0LrQvtGC0L7RgNGL0Lkg0YHQvtC00LXRgNC20LjRgiDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLICjQutGA0L7QvNC1INC/0LXRgNCy0L7Qs9C+KSDQv9C10YDQtdC00LDQvdC90YvQtSDQsiDRhNGD0L3QutGG0LjRjlxyXG4gICAgICAgICAgINCt0YLQviDQvNCw0YHRgdC40LIg0LjQvdC00LXQutGB0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQuNC3INC+0YHQvdC+0LLQvdC+0LPQviDQvNCw0YHRgdC40LLQsCBhcnIgKi9cclxuICAgIGNvbnN0IGFycmF5T2ZJbmRleGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cclxuICAgIC8vINCS0LXRgNC90YPRgtGMINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdC90YvQuSDQvNCw0YHRgdC40LJcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT5cclxuXHJcbiAgICAvLyDQndCw0L/RgNC40LzQtdGAIGFycmF5T2ZJbmRleGVzID0gWzFdLCDRgtC+INC10YHRgtGMINC90YPQttC90L4g0YPQtNCw0LvQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyAxXHJcbiAgICAvLyBpbmRleE9mIC0g0LLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdC00LXQutGBINC40YHQutC+0LzQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC4g0J3QsNC/0YDQuNC80LXRgDogWydhJywnYiddLmluZGV4T2YoJ2InKSAvLy0+IDFcclxuICAgIC8vINCa0LDQttC00YvQuSDRjdC70LXQvNC10L3RgiDQvNCw0YHRgdC40LLQsCBhcnIg0YHQstC10YDRj9C10YIg0YHQstC+0Lkg0LjQvdC00LXQutGBINGBINC40L3QtNC10LrRgdCw0LzQuCDQsiBhcnJheU9mSW5kZXhlcy5cclxuICAgIC8vINCV0YHQu9C4INC10LPQviDQuNC90LTQtdC60YHQsCDQsiBhcnJheU9mSW5kZXhlcyDQvdC10YIsINGC0L4g0LzQtdGC0L7QtCBpbmRleE9mINCy0LXRgNC90ZHRgiAtMSwg0LfQvdCw0YfQuNGCINCx0YPQtNC10YIgdHJ1ZSDQuCDRjdC70LXQvNC10L3RgiDQvdC1INCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INC40Lcg0LzQsNGB0YHQuNCy0LBcclxuICAgICAgYXJyYXlPZkluZGV4ZXMuaW5kZXhPZihpbmRleCkgPT0gLTEpO1xyXG4gIH0vLyByZW1vdmVcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICB9XHJcblxyXG4gIGZpbmlzaChzdGF0dXMpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuaW1wb3J0IHsgV2F2ZXMgfSBmcm9tICcuLi93YXZlcyc7XHJcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL3JlbW92ZS1mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQgeyBhcnJvd1BsYXlBdWRpbywgZ2FtZVBsYXlBdWRpbywgZ2FtZU92ZXJQbGF5QXVkaW8sIGdhbWVXaW5QbGF5QXVkaW8gfSBmcm9tICcuLi9hdWRpby1wbGF5YmFjay9hdWRpb3MnO1xyXG5pbXBvcnQgeyBRdWVzdFBlcnNvbiB9IGZyb20gJy4uL3F1ZXN0LXBlcnNvbic7XHJcbmltcG9ydCB7IHNob3dNb2RhbERpYWxvZyB9IGZyb20gJy4uL21vZGFsLWRpYWxvZ3VlJztcclxuaW1wb3J0IHsgc2hvd1RyYWluaW5nIH0gZnJvbSAnLi4vdHJhaW5pbmcnO1xyXG5pbXBvcnQgeyBuZXh0TGV2ZWxJbmZvIH0gZnJvbSAnLi4vbmV3TGV2ZWwnO1xyXG5pbXBvcnQgeyBhbGxEZWF0aE9ya3MsIHVwZGF0ZVF1ZXN0IH0gZnJvbSAnLi4vZ2V0LXF1ZXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaXNBZ3Jlc3NpdmUuYmVjb21lUGVhY2VmdWwoKTsvLyDQodC00LXQu9Cw0YLRjCDQvtGA0LrQvtCyINC80LjRgNC90YvQvNC4XHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wsIHRoaXMpO1xyXG5cclxuICAgIC8vIHRoaXMucGxheWVyLnggPSAyMjQ7XHJcbiAgICAvLyB0aGlzLnBsYXllci55ID0gMTE4O1xyXG5cclxuICAgIHRoaXMucGxheWVyLnggPSA5OTA7XHJcbiAgICB0aGlzLnBsYXllci55ID0gMTA0MDtcclxuXHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uID0gbmV3IFF1ZXN0UGVyc29uKCk7XHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnggPSA5NDA7XHJcbiAgICB0aGlzLnF1ZXN0UGVyc29uLnkgPSAxMDA7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpOy8vINCj0YfQuNGC0YvQstCw0LXRgiDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1INC80LXQttC00YMg0L7QsdGK0LXQutGC0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGALCDQvdC1INC00LDRkdGCINC/0YDQvtGF0L7QtNC40YLRjCDQvtCx0YrQtdC60YLQsNC8INGB0LrQstC+0LfRjCDQtNGA0YPQsyDQtNGA0YPQs9CwXHJcblxyXG4gICAgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwgd2VicGFjayDQv9C+0Y3RgtC+0LzRgyDQt9Cw0LPRgNGD0LfRh9C40LoganNvbiDRhNCw0LnQu9C+0LIg0YDQsNCx0L7RgtCw0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgbGV0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XHJcbiAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTsvLyBjcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkNhbWVyYS5zcGVjaWFsUG9zaXRpb24oKTsvLyDQl9Cw0LPQvdCw0YLRjCDQutCw0LzQtdGA0YMg0LIg0YHQsNC80YvQuSDRg9Cz0L7Qu1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRTdGF0aWNTaGFwZXMobWFwRGF0YSk7XHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucXVlc3RQZXJzb24pO1xyXG5cclxuICAgIHRoaXMub3JjQXJteSA9IFtdOy8vINCc0LDRgdGB0LjQsiDQvtGA0LrQvtCyLCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgIHRoaXMud2F2ZXMgPSBuZXcgV2F2ZXModGhpcy5nYW1lKTsvLyDQmtC+0L3RgtGA0L7Qu9C40YDRg9C10YIg0L/QvtGP0LLQu9C10L3QuNC1INC/0YDQvtGC0LjQstC90LjQutC+0LJcclxuXHJcbiAgICB0aGlzLndhdmVzLmluaXQoKTtcclxuXHJcbiAgICB0aGlzLmludGVyZmFjZSA9IG5ldyBJbnRlcmZhY2UodGhpcy5nYW1lLCB0aGlzLndhdmVzKTsvLyDQqNC60LDQu9CwINC30LTQvtGA0L7QstGM0Y8sINGC0LDQudC80LXRgCDQsiDRg9Cz0LvRgyDRjdC60YDQsNC90LBcclxuICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtGA0LXQuywg0L3QvtCy0YvQtSDRgdGC0YDQtdC70Ysg0LHRg9C00YPRgiDQtNC+0LHQsNCy0LvRj9GC0YzRgdGPINGB0Y7QtNCwLCDQsCDQvNC10YLQvtC0IHJlbmRlciDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0YvQstCw0YLRjCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwXHJcbiAgICB0aGlzLmdhbWVPdmVyVHJpZ2dlciA9IGZhbHNlOy8vINCV0YHQu9C4IGludGVyZmFjZSDRgdC00LXQu9Cw0LXRgiDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4gdHJ1ZSwg0L/QtdGA0LXRhdC+0LTQuNC8INC6INC/0YDQvtC40LPRgNGL0YjQvdC+0Lkg0YHRhtC10L3QtVxyXG4gICAgdGhpcy53aW5UcmlnZ2VyID0gZmFsc2U7Ly8g0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/QvtCx0LXQtNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICAvL3VwZGF0ZU1vZGFsRGlhbG9nKCk7XHJcbiAgICBzaG93VHJhaW5pbmcoKTtcclxuICAgIGdhbWVXaW5QbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgZ2FtZVBsYXlBdWRpbyh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAvLyBpZiAoYWxsRGVhdGhPcmtzID09IDEwKSB7XHJcbiAgICAvLyAgIGdhbWVQbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgLy8gICBnYW1lV2luUGxheUF1ZGlvKHRydWUpO1xyXG4gICAgLy8gICB1cGRhdGVRdWVzdCgpO1xyXG4gICAgLy8gICB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX1dJTik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXJUcmlnZ2VyKSB7IC8vINCX0LDQutC+0L3Rh9C40Lwg0LjQs9GA0YNcclxuICAgICAgZ2FtZVBsYXlBdWRpbyhmYWxzZSk7XHJcbiAgICAgIGdhbWVPdmVyUGxheUF1ZGlvKCk7XHJcbiAgICAgIHVwZGF0ZVF1ZXN0KCk7XHJcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkdBTUVfT1ZFUik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XHJcbiAgICBpZiAodGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgoYXJyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGFycm93LmFjdGl2ZSkgeyAvLyBhY3RpdmUg0YHRgtCw0L3QvtCy0LjRgtGB0Y8gdHJ1ZSDQsiDQvNC10YLQvtC00LUgUGxheWVyIC0+IEJvZHkuc2hvb3QoKVxyXG4gICAgICAgICAgYXJyb3cudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyb3cuZGVsZXRlZCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5wcm9qZWN0aWxlcywgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3JjQXJteS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMub3JjQXJteS5mb3JFYWNoKChvcmMpID0+IHtcclxuICAgICAgICBvcmMudXBkYXRlKHRpbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnF1ZXN0UGVyc29uLngsIHRoaXMucXVlc3RQZXJzb24ueSk7XHJcblxyXG5cclxuICAgIHRoaXMucXVlc3RQZXJzb24udXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5jb2xsaWRlci51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLm1haW5DYW1lcmEudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xyXG5cclxuICAgIGlmICh0aGlzLm9yY0FybXkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKG9yYy52aWV3KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA+IDApIHsgLy8g0J7RgtGA0LjRgdC+0LLQutCwINGB0YLRgNC10LtcclxuICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgICAgIGlmIChhcnJvdy5hY3RpdmUpIHsgLy8gYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShhcnJvdy52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5xdWVzdFBlcnNvbi52aWV3KTtcclxuICAgIHRoaXMud2F2ZXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5pbnRlcmZhY2UudXBkYXRlKHRpbWUpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG5cclxuXHJcbiAgICBpZiAodGhpcy5wbGF5ZXIueCA+PSA4NzAgJiYgdGhpcy5wbGF5ZXIueCA8PSA5NzAgJiYgdGhpcy5wbGF5ZXIueSA+PSAxMDAgJiYgdGhpcy5wbGF5ZXIueSA8PSAxMzApIHtcclxuICAgICAgc2hvd01vZGFsRGlhbG9nKCk7XHJcbiAgICAgIC8vc2V0VGltZW91dCgoKSA9PiBzaG93TW9kYWxEaWFsb2coKSwgNTAwKTtcclxuICAgICAgLy9nZXRRdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ28gdG8gbmV4dCBsZXZlbCBmb3IgbWFwXHJcbiAgICBpZiAodGhpcy5wbGF5ZXIueCA+PSAxMTAwICYmIHRoaXMucGxheWVyLnggPD0gMTIwMCAmJiB0aGlzLnBsYXllci55ID49IDMwICYmIHRoaXMucGxheWVyLnkgPD0gNjApIHtcclxuICAgICAgLy8g0LTQsNCy0LDQuSDRgdC00LXRgdGMINC00L7QsdCw0LLQuNC8INC/0YDQvtCy0LXRgNC60YMg0L3QsCDQstGL0L/QvtC70L3QtdC90L3Ri9C5INC60LLQtdGB0YIgXHJcbiAgICAgIGlmIChhbGxEZWF0aE9ya3MgPj0gMTApIHtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgIGltYWdlTmFtZTogJ3RpbGVzMicsXHJcbiAgICAgICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICBuZXh0TGV2ZWxJbmZvKClcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci54ID0gMjI0O1xyXG4gICAgICAgIHRoaXMucGxheWVyLnkgPSAxMTg7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTsvLyDQo9GH0LjRgtGL0LLQsNC10YIg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQtSDQvNC10LbQtNGDINC+0LHRitC10LrRgtCw0LzQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L3QtSDQtNCw0ZHRgiDQv9GA0L7RhdC+0LTQuNGC0Ywg0L7QsdGK0LXQutGC0LDQvCDRgdC60LLQvtC30Ywg0LTRgNGD0LMg0LTRgNGD0LPQsFxyXG5cclxuXHJcbiAgICAgICAgbGV0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMi5qc29uJyk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcCgnbGV2ZWwyJywgbWFwRGF0YSwgdGhpcy50aWxlcyk7Ly8gY3JlYXRlTWFwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiBUaWxlTWFwXHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnNwZWNpYWxQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS53YXRjaCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5tYWluQ2FtZXJhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRTdGF0aWNTaGFwZXMobWFwRGF0YSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgICAgLy8g0YPQsdC40YDQsNC10Lwg0L/QtdGA0YHQvtC90LDQttC10Lkg0LrRg9C00LAg0L/QvtC00LDQu9GM0YjQtVxyXG4gICAgICAgIHRoaXMucXVlc3RQZXJzb24ueCA9IDE0MDA7XHJcbiAgICAgICAgdGhpcy5xdWVzdFBlcnNvbi55ID0gMTAwMDtcclxuICAgICAgICAvL3RoaXMub3JjLnggPSAxNDAwO1xyXG4gICAgICAgIC8vdGhpcy5vcmMueSA9IDEwMDA7XHJcblxyXG4gICAgICAgIHRoaXMub3JjQXJteSA9IFtdOy8vINCc0LDRgdGB0LjQsiDQvtGA0LrQvtCyLCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgICAgICB0aGlzLndhdmVzID0gbmV3IFdhdmVzKHRoaXMuZ2FtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlID0gbmV3IEludGVyZmFjZSh0aGlzLmdhbWUpOy8vINCo0LrQsNC70LAg0LfQtNC+0YDQvtCy0YzRjywg0YLQsNC50LzQtdGAINCyINGD0LPQu9GDINGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtGA0LXQuywg0L3QvtCy0YvQtSDRgdGC0YDQtdC70Ysg0LHRg9C00YPRgiDQtNC+0LHQsNCy0LvRj9GC0YzRgdGPINGB0Y7QtNCwLCDQsCDQvNC10YLQvtC0IHJlbmRlciDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0YvQstCw0YLRjCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwXHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRyaWdnZXIgPSBmYWxzZTsvLyDQldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9GA0L7QuNCz0YDRi9GI0L3QvtC5INGB0YbQtdC90LVcclxuICAgICAgICB0aGlzLndpblRyaWdnZXIgPSBmYWxzZTsvLyDQldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9C+0LHQtdC00L3QvtC5INGB0YbQtdC90LVcclxuICAgICAgICAvL3VwZGF0ZU1vZGFsRGlhbG9nKCk7XHJcbiAgICAgICAgdXBkYXRlUXVlc3QoKTtcclxuICAgICAgICBnYW1lV2luUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgICAgICBnYW1lUGxheUF1ZGlvKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIueCA+PSA2MDAgJiYgdGhpcy5wbGF5ZXIueCA8PSA3MDAgJiYgdGhpcy5wbGF5ZXIueSA+PSAxMTUwICYmIHRoaXMucGxheWVyLnkgPD0gMTMwMCkgeyAvLyDQl9Cw0LrQvtC90YfQuNC8INC40LPRgNGDXHJcbiAgICAgIGdhbWVQbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgICB1cGRhdGVRdWVzdCgpO1xyXG4gICAgICBnYW1lV2luUGxheUF1ZGlvKHRydWUpO1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX1dJTik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc2hvb3RpbmcoKSB7IC8vINCh0YLRgNC10LvRjNCx0LAg0LjQs9GA0L7QutCwXHJcbiAgICBjb25zdCBhcnJvdyA9IG5ldyBBcnJvdygnZG93bicsIDQwMCwgdGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XHJcbiAgICB0aGlzLnBsYXllci5hZGRBcnJvdyhhcnJvdyk7XHJcbiAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goYXJyb3cpOy8vINCS0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LAg0LHRg9C00YPRgiDQvtGC0YDQuNGB0L7QstCw0L3RiyDQsiDQvNC10YLQvtC00LUgcmVuZGVyXHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkoYXJyb3cpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBhcnJvd1BsYXlBdWRpbygpLCA1MDApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikgeyAvLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcImVudGVyXCIg0L3QsNGH0LDRgtGMINC90L7QstGD0Y4g0LjQs9GA0YNcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfYmcnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICdnYW1lX292ZXInKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVdpbiBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikgeyAvLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcImVudGVyXCIg0L3QsNGH0LDRgtGMINC90L7QstGD0Y4g0LjQs9GA0YNcclxuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX2JnJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3lvdV93aW4nKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg2MCwgODAsICdMb2FkaW5nLi4uJyk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9iZycpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX25hbWUnKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9zdGFydCcpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX29wdGlvbicpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX2V4aXQnKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpdGUtbWFwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xyXG4gICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRTdHlsZXNUb0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3R5bGVzVG9DYW52YXMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbiA9ICdhdXRvJztcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkZGRkZGJztcclxuICB9XHJcblxyXG4gIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgdGhpcy5pc0NhbWVyYVNldCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcihpbWFnZUZpbGVzKTtcclxuICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcclxuICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcclxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcclxuICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xyXG4gICAgbGV0IHJvdzsgbGV0XHJcbiAgICAgIGNvbDtcclxuICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgIGlmIChsYXllci50eXBlID09ICd0aWxlbGF5ZXInKSB7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgIGxheWVyLmRhdGEuZm9yRWFjaCgoaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29sKys7XHJcbiAgICAgICAgICBpZiAoY29sID4gKG1hcERhdGEud2lkdGggLSAxKSkge1xyXG4gICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICByb3crKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAnb2JqZWN0Z3JvdXAnKSB7XHJcbiAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcCgob2JqKSA9PiAoe1xyXG4gICAgICAgICAgeDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodCxcclxuICAgICAgICB9KSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICByZXR1cm4gbmV3IFRpbGVNYXAoe1xyXG4gICAgICBpbWFnZU5hbWU6IG5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IDAsXHJcbiAgICAgIHNvdXJjZVk6IDAsXHJcbiAgICAgIHdpZHRoOiBtYXBJbWFnZS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXHJcbiAgICAgIGhpdGJveGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxsKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgIHRoaXMuY29udGV4dC5mb250ID0gJzIycHggR2VvcmdpYSc7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XHJcbiAgfVxyXG5cclxuICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZHJhd1Nwcml0ZShzcHJpdGUpIHtcclxuICAgIGxldCBzcHJpdGVYID0gc3ByaXRlLng7XHJcbiAgICBsZXQgc3ByaXRlWSA9IHNwcml0ZS55O1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ2FtZXJhU2V0KSB7XHJcbiAgICAgIHNwcml0ZVggLT0gdGhpcy5jYW1lcmEueDtcclxuICAgICAgc3ByaXRlWSAtPSB0aGlzLmNhbWVyYS55O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgKHNwcml0ZVggPj0gdGhpcy53aWR0aClcclxuICAgICAgfHwgKHNwcml0ZVkgPj0gdGhpcy5oZWlnaHQpXHJcbiAgICAgIHx8ICgoc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgPD0gMClcclxuICAgICAgfHwgKChzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgPD0gMClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgY29uc3Qgc291cmNlWSA9IHNwcml0ZS5zb3VyY2VZICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWSkpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbih0aGlzLndpZHRoLCBzcHJpdGVYICsgc3ByaXRlLndpZHRoKSAtIE1hdGgubWF4KDAsIHNwcml0ZVgpO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbc3ByaXRlLmltYWdlTmFtZV0sXHJcbiAgICAgIHNvdXJjZVgsXHJcbiAgICAgIHNvdXJjZVksXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQsXHJcbiAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVgpLFxyXG4gICAgICBNYXRoLm1heCgwLCBzcHJpdGVZKSxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCxcclxuICB9KSB7XHJcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XHJcbiAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICB0aGlzLnNwcml0ZVdpZHRoID0gc3ByaXRlV2lkdGg7XHJcbiAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcclxuICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcCgoaW5kZXgpID0+ICh7IHN4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSB9KSksXHJcbiAgICAgIHNwZWVkLFxyXG4gICAgICByZXBlYXQsXHJcbiAgICAgIGF1dG9ydW4sXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTcHJpdGUoaW5kZXgpIHtcclxuICAgIHJldHVybiBuZXcgU3ByaXRlKHtcclxuICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcclxuICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSxcclxuICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNvdXJjZVgoaW5kZXgpIHtcclxuICAgIHJldHVybiAoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpICUgdGhpcy5pbWFnZVdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgaW1hZ2VOYW1lLCBzb3VyY2VYLCBzb3VyY2VZLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NCxcclxuICB9KSB7XHJcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9XHJcblxyXG4gIHNldFhZKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGV4dEluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHNjcmVlbikge1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcclxuICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gZmFsc2U7Ly8g0J/QvtC60LDQt9GL0LLQsNGC0Ywg0LvQuCDRgtC10LrRgdGCXHJcbiAgICB0aGlzLnRleHQgPSAnJztcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5ob3dMb25nVG9TaG93ID0gNTAwMDsvLyDQodC60L7Qu9GM0LrQviDQstGA0LXQvNC10L3QuCDQv9C+0LrQsNC30YvQstCw0YLRjCDRgtC10LrRgdGCXHJcbiAgICB0aGlzLnRpbWVUb1N0b3AgPSAwOy8vINCS0YDQtdC80Y8g0LrQvtCz0LTQsCDQvdGD0LbQvdC+INC30LDQstC10YDRiNC40YLRjCDQv9C+0LrQsNC3XHJcbiAgICB0aGlzLmZvbnRTaXplID0gMDtcclxuICAgIHRoaXMuc3RhcnRGb250U2l6ZSA9IDE1MDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dUZXh0Qm9vbGVhbikge1xyXG4gICAgICB0aGlzLmZvbnRTaXplIC09ICh0aW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDtcclxuICAgICAgdGhpcy5zZXRYWSgpO1xyXG4gICAgICB0aGlzLnNjcmVlbi5wcmludCh0aGlzLngsIHRoaXMueSwgdGhpcy50ZXh0LCB0aGlzLmZvbnRTaXplKTtcclxuICAgICAgaWYgKHRpbWUgPiB0aGlzLnRpbWVUb1N0b3ApIHtcclxuICAgICAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICB9XHJcblxyXG4gIHNob3dUZXh0KHRleHQsIHRpbWUpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IHRydWU7XHJcbiAgICB0aGlzLnRpbWVUb1N0b3AgPSB0aW1lICsgdGhpcy5ob3dMb25nVG9TaG93O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuc3RhcnRGb250U2l6ZTtcclxuICAgIHRoaXMuc2V0WFkoKTtcclxuICB9XHJcblxyXG4gIHNldFhZKCkge1xyXG4gICAgdGhpcy54ID0gdGhpcy5zY3JlZW4ud2lkdGggLyAyIC0gdGhpcy5mb250U2l6ZSAqIDEuNTtcclxuICAgIHRoaXMueSA9IHRoaXMuc2NyZWVuLmhlaWdodCAvIDIgKyB0aGlzLmZvbnRTaXplIC8gNC41O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dUcmFpbmluZygpIHtcclxuICAgICQoJyNleGFtcGxlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgLy8gJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xyXG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgdGhpcy5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgfVxyXG5cclxuICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICB0aGlzLnkgPSAtc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICB0aGlzLnkgPSBzcGVlZDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICB0aGlzLnggPSBzcGVlZDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHRoaXMueCA9IC1zcGVlZDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUob2JqZWN0LCBkdCkge1xyXG4gICAgb2JqZWN0LnggKz0gZHQgKiAodGhpcy54IC8gMTAwMCk7XHJcbiAgICBvYmplY3QueSArPSBkdCAqICh0aGlzLnkgLyAxMDAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT3JjIH0gZnJvbSAnLi9vcmMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdhdmVzIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5vcmNBcm15ID0gZ2FtZS5jdXJyZW50U2NlbmUub3JjQXJteTsvLyDQnNCw0YHRgdC40LIsINGB0L7QtNC10YDQttCw0YnQuNC5INCy0YHQtdGFINGB0YPRidC10YHRgtCy0YPRjtGJ0LjRhSDQvtGA0LrQvtCyLiDQrdGC0L7RgiDQutC70LDRgdGBINC/0L7Qv9C+0LvQvdGP0LXRgiDRjdGC0L7RgiDQvNCw0YHRgdC40LIg0L3QvtCy0YvQvNC4INC+0YDQutCw0LzQuFxyXG5cclxuICAgIHRoaXMuY29sbGlkZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5jb2xsaWRlcjsvLyDQkdGD0LTQtdC8INC00L7QsdCw0LLQu9GP0YLRjCDQvtGA0LrQvtCyINCyINC60L7Qu9C70LDQudC00LXRgFxyXG4gICAgdGhpcy5wbGF5ZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5wbGF5ZXI7Ly8g0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA9IDUwMDsvLyDQotCw0LnQvNC10YAg0LTQu9GPINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9GR0YLQsC4g0J/QtdGA0LLQsNGPINCy0L7Qu9C90LAg0L3QsNGH0L3RkdGC0YHRjyDRh9C10YDQtdC3IDEwMDAg0LzRgVxyXG4gICAgdGhpcy50aW1lRm9yTmV4dFdhdmUgPSAxMDAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAsINGB0LvQtdC00YPRjtGJ0LDRjyDQstC+0LvQvdCw0Y8g0LHRg9C00LXRgiDRh9C10YDQtdC3INGN0YLQviDQstGA0LXQvNGPXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy8gdGhpcy53YXZlcyA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWVMZWZ0Rm9yTmV4dFdhdmUgPCAwKSB7XHJcbiAgICAgIHRoaXMubmV4dFdhdmUodGltZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWVMZWZ0Rm9yTmV4dFdhdmUgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gIH1cclxuXHJcbiAgbmV4dFdhdmUodGltZSkge1xyXG4gICAgbGV0IG9yY1NxdWFkID0gW107Ly8g0KHQvtC30LTQsNGC0Ywg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0L7RgNC60L7QslxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgbGV0IG9yYyA9IG5ldyBPcmModGhpcy5wbGF5ZXIpOy8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgICBvcmMueCA9IDEyNDY7Ly8g0J/QvtGB0LvQtSDQvtGC0LvQsNC00LrQuCDRgdC00LXQu9Cw0LkgMTM1MFxyXG4gICAgICBvcmMueSA9IDEwMzAgKyBpICogNzA7XHJcbiAgICAgIG9yY1NxdWFkLnB1c2gob3JjKTtcclxuICAgIH1cclxuICAgIG9yY1NxdWFkLmZvckVhY2goKG9yYykgPT4ge1xyXG4gICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkob3JjKTtcclxuICAgICAgdGhpcy5vcmNBcm15LnB1c2gob3JjKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA9IHRoaXMudGltZUZvck5leHRXYXZlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9