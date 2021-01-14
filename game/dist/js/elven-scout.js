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
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
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
        if (this.onEnd) {
          this.onEnd();
        }

        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
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
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
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



var Body =
/*#__PURE__*/
function () {
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]('down', 0);
    this.lastTime = 0;
    this.animations = {};
    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
    this.isShooting = false;
    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    'walk_down,walk_up,walk_left,walk_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    'shoot_down,shoot_up,shoot_left,shoot_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 20, false);
    });
    this.stand('down');
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

        this.view.run();
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_".concat(direction)];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_".concat(direction)];
      this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (!this.isShooting) {
        this.velocity.move(this, time - this.lastTime);
      }

      this.lastTime = time;
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
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

    this.staticShapes = [];
    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        if (layer.type == 'objectgroup') {
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
        y: body.y,
        obj: body
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkStatic(time);
    }
  }, {
    key: "checkStatic",
    value: function checkStatic(time) {
      var _this2 = this;

      this.bodies.forEach(function (body) {
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y; // moving right

        if (x > oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;
            }
          });
        } // moving left


        if (x < oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;
            }
          });
        } // moving down


        if (y > oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;
            }
          });
        } // moving up


        if (y < oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;
            }
          });
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      });
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

  function Orc() {
    var _this;

    _classCallCheck(this, Orc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orc).call(this, {
      imageName: 'orc',
      speed: 50
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Orc, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);

      _get(_getPrototypeOf(Orc.prototype), "update", this).call(this, time);
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

  function Player(control) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: 'player',
      speed: 50
    }));
    _this.control = control;
    _this.arrow = false;
    return _this;
  }

  _createClass(Player, [{
    key: "addArrow",
    value: function addArrow(arrow) {
      this.arrow = arrow;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.control.fire) {
        if (this.arrow) this.shoot(this.arrow);
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
  function Projectile(direction, speed) {
    _classCallCheck(this, Projectile);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](direction, speed);
    this.lastTime = 0;
    this.active = false;
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
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      this.velocity.move(this, time - this.lastTime);
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
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

  function Arrow(direction, speed) {
    var _this;

    _classCallCheck(this, Arrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Arrow).call(this, direction, speed));
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
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10); // this.orcTiles = new CharacterSheet({imageName: "orc"});


    _this.orc = new _orc__WEBPACK_IMPORTED_MODULE_6__["Orc"]();
    _this.orc.x = 500;
    _this.orc.y = 300;
    _this.elf = new _elf__WEBPACK_IMPORTED_MODULE_7__["Elf"]();
    _this.elf.x = 310;
    _this.elf.y = 110;
    _this.arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__["Arrow"]('down', 200);
    _this.player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;

    _this.player.addArrow(_this.arrow);

    _this.collider = new _collider__WEBPACK_IMPORTED_MODULE_5__["Collider"]();
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles);
      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.orc);
      this.collider.addKinematicBody(this.elf);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
      this.elf.update(time);
      this.player.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);
      this.arrow.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); // this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc.view);
      this.game.screen.drawSprite(this.elf.view);
      this.game.screen.drawSprite(this.player.view);

      if (this.arrow.active) {
        this.game.screen.drawSprite(this.arrow.view);
      }

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlcy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiXSwibmFtZXMiOlsiQUkiLCJib2R5IiwidGltZSIsIkR1bW15IiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJsYXN0VGltZSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmdlRGlyZWN0aW9uIiwid2FsayIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImN1cnJlbnRGcmFtZSIsInRvdGFsRnJhbWVzIiwibGVuZ3RoIiwib25FbmQiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkJvZHkiLCJ4IiwieSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImNvbGxpc2lvblNoYXBlIiwiaXNTaG9vdGluZyIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJmb3JFYWNoIiwibmFtZSIsImdldEFuaW1hdGlvbiIsInN0YW5kIiwiYXJyb3ciLCJ2aWV3IiwiZmx5IiwicnVuIiwic2V0RGlyZWN0aW9uIiwibW92ZSIsInNldFhZIiwidHJ1bmMiLCJ1cGRhdGUiLCJDYW1lcmEiLCJsaW1pdFgiLCJsaW1pdFkiLCJzY3JvbGxFZGdlIiwid2F0Y2hPYmplY3QiLCJvYmoiLCJtaW4iLCJtYXgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29sbGlkZXIiLCJzdGF0aWNTaGFwZXMiLCJib2RpZXMiLCJ0eXBlIiwicHVzaCIsIm9iamVjdHMiLCJjaGVja1N0YXRpYyIsIm9sZFgiLCJvbGRZIiwic2hhcGUiLCJDb250cm9sU3RhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJmaXJlIiwia2V5TWFwIiwiTWFwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmVzc2VkIiwiaGFzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkVsZiIsImFpIiwiY29udHJvbCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwiZWxmIiwicGxheWVyIiwidGl0bGVfYmciLCJ0aXRsZV9uYW1lIiwidGl0bGVfc3RhcnQiLCJ0aXRsZV9vcHRpb24iLCJ0aXRsZV9leGl0IiwidGlsZXMiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiT3JjIiwiUGxheWVyIiwic2hvb3QiLCJQcm9qZWN0aWxlIiwiYWN0aXZlIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiZ2FtZSIsImNvbnN0cnVjdG9yIiwidHJlZSIsImFkZEFycm93IiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZW50ZXIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsImlzQ2FtZXJhU2V0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwicHJvcHMiLCJvYmplY3QiLCJkdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtE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LEVBQUUsSUFBSSxLQUFLak0sQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNBZ00sWUFBTSxDQUFDL0wsQ0FBUCxJQUFZZ00sRUFBRSxJQUFJLEtBQUtoTSxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0Q7QUFoQ0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnRyb2woYm9keSkge1xyXG4gICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBSSB9IGZyb20gJy4uL2FpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duLHVwLGxlZnQscmlnaHQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgaW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBpbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XHJcbiAgICB0aGlzLm9uRW5kID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldEZyYW1lKGluZGV4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xyXG4gICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN5O1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5leHRGcmFtZSgpIHtcclxuICAgIGlmICgodGhpcy5jdXJyZW50RnJhbWUgKyAxKSA9PSB0aGlzLnRvdGFsRnJhbWVzKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uRW5kKSB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnJlcGVhdCkge1xyXG4gICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XHJcbiAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3Rvcic7XHJcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi9jaGFyYWN0ZXItc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKHsgaW1hZ2VOYW1lLCBzcGVlZCB9KSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKCdkb3duJywgMCk7XHJcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5jb2xsaXNpb25TaGFwZSA9IHtcclxuICAgICAgeDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoeyBpbWFnZU5hbWUgfSk7XHJcbiAgICAnd2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICB9KTtcclxuICAgICdzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgMjAsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFuZCgnZG93bicpO1xyXG4gIH1cclxuXHJcbiAgc2hvb3QoYXJyb3cpIHtcclxuICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgc2hvb3RfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcclxuICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGFycm93LmZseSh0aGlzLngsIHRoaXMueSwgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnZpZXcucnVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YWxrKGRpcmVjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgd2Fsa18ke2RpcmVjdGlvbn1gXTtcclxuICAgIHRoaXMudmlldy5ydW4oKTtcclxuICB9XHJcblxyXG4gIHN0YW5kKGRpcmVjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tgd2Fsa18ke2RpcmVjdGlvbn1gXTtcclxuICAgIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTtcclxuICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAsIGxpbWl0WCA9IDUwMDAwLCBsaW1pdFkgPSA1MDAwMCwgc2Nyb2xsRWRnZSA9IDIwMCxcclxuICB9ID0ge30pIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmxpbWl0WCA9IGxpbWl0WDtcclxuICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xyXG4gICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vYmogPSBudWxsO1xyXG4gICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcclxuICB9XHJcblxyXG4gIHdhdGNoKG9iaikge1xyXG4gICAgdGhpcy53YXRjaE9iamVjdCA9IHRydWU7XHJcbiAgICB0aGlzLm9iaiA9IG9iajtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy53YXRjaE9iamVjdCkge1xyXG4gICAgICBpZiAodGhpcy5vYmoueCA+ICh0aGlzLnggKyB0aGlzLndpZHRoIC0gdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWluKHRoaXMubGltaXRYLCB0aGlzLm9iai54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9iai55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLm9iai55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4vc3ByaXRlLXNoZWV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTaGVldCBleHRlbmRzIFNwcml0ZVNoZWV0IHtcclxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSB9KSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGltYWdlTmFtZSxcclxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxyXG4gICAgICBpbWFnZUhlaWdodDogMTM0NCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VxdWVuY2VzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcclxuICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xyXG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgc2VxdWVuY2VzW2xheWVyLm5hbWVdID0gbGF5ZXIuZGF0YS5maWx0ZXIoKGkpID0+IGkgPiAwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlcXVlbmNlcztcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcclxuICAgIHJldHVybiBzdXBlci5nZXRBbmltYXRpb24odGhpcy5zZXF1ZW5jZXNbbmFtZV0sIHNwZWVkLCByZXBlYXQsIGF1dG9ydW4pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTtcclxuICAgIHRoaXMuYm9kaWVzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRTdGF0aWNTaGFwZXMoZGF0YSkge1xyXG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJykge1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g0JTQvtCx0LDQstC40Lwg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INC60YDQsNGP0Lwg0LrQsNGA0YLRiy4g0JfQsCDQutCw0YDRgtGDINC90LXQu9GM0LfRjyDQstGL0LnRgtC4XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7XHJcbiAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAxLCBoZWlnaHQ6IDEzMDAsXHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MTI4MCx5OjAsd2lkdGg6MSxoZWlnaHQ6MTMwMH0pO1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7XHJcbiAgICAgIHg6IDEyODAsIHk6IDAsIHdpZHRoOiAxMzAwLCBoZWlnaHQ6IDEsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEtpbmVtYXRpY0JvZHkoYm9keSkge1xyXG4gICAgdGhpcy5ib2RpZXMucHVzaCh7XHJcbiAgICAgIHg6IGJvZHkueCxcclxuICAgICAgeTogYm9keS55LFxyXG4gICAgICBvYmo6IGJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmNoZWNrU3RhdGljKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdGF0aWModGltZSkge1xyXG4gICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgoYm9keSkgPT4ge1xyXG4gICAgICBjb25zdCBvbGRYID0gYm9keS54O1xyXG4gICAgICBjb25zdCBvbGRZID0gYm9keS55O1xyXG4gICAgICBsZXQgeyB4IH0gPSBib2R5Lm9iajtcclxuICAgICAgbGV0IHsgeSB9ID0gYm9keS5vYmo7XHJcbiAgICAgIC8vIG1vdmluZyByaWdodFxyXG4gICAgICBpZiAoeCA+IG9sZFgpIHtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoKG9sZFggLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG1vdmluZyBsZWZ0XHJcbiAgICAgIGlmICh4IDwgb2xkWCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCArIHNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtb3ZpbmcgZG93blxyXG4gICAgICBpZiAoeSA+IG9sZFkpIHtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUueSkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtb3ZpbmcgdXBcclxuICAgICAgaWYgKHkgPCBvbGRZKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKChvbGRZICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpID4gKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkueCA9IHg7XHJcbiAgICAgIGJvZHkueSA9IHk7XHJcbiAgICAgIGJvZHkub2JqLnggPSB4O1xyXG4gICAgICBib2R5Lm9iai55ID0geTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXHJcbiAgICAgIFszNywgJ2xlZnQnXSxcclxuICAgICAgWzM5LCAncmlnaHQnXSxcclxuICAgICAgWzM4LCAndXAnXSxcclxuICAgICAgWzQwLCAnZG93biddLFxyXG4gICAgICBbMzIsICdmaXJlJ10sXHJcbiAgICAgIFsxMywgJ2VudGVyJ10sXHJcbiAgICBdKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpIHtcclxuICAgIGlmICh0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tICcuL2Fpcy9kdW1teSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWxmIGV4dGVuZHMgQm9keSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGltYWdlTmFtZTogJ2VsZicsIHNwZWVkOiA2MCB9KTtcclxuICAgIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcclxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS1sZXZlbCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XHJcbiAgICAgIG9yYzogJ2ltZy9vcmMucG5nJyxcclxuICAgICAgZWxmOiAnaW1nL2RhcmstZWxmLnBuZycsXHJcbiAgICAgIHBsYXllcjogJ2ltZy9wbGF5ZXIyLnBuZycsXHJcbiAgICAgIHRpdGxlX2JnOiAnaW1nL2JnX3RpdGxlLnBuZycsXHJcbiAgICAgIHRpdGxlX25hbWU6ICdpbWcvZ2FtZV9uYW1lLnBuZycsXHJcbiAgICAgIHRpdGxlX3N0YXJ0OiAnaW1nL3N0YXJ0X2dhbWUucG5nJyxcclxuICAgICAgdGl0bGVfb3B0aW9uOiAnaW1nL29wdGlvbl9nYW1lLnBuZycsXHJcbiAgICAgIHRpdGxlX2V4aXQ6ICdpbWcvZXhpdF9nYW1lLnBuZycsXHJcbiAgICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZycsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgfTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZUxldmVsO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XHJcbiAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xyXG4gIGVsdmVuU2NvdXQucnVuKCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygn0Jgg0YHQtdC50YfQsNGBINGA0LDQsdC+0YLQsNC10YInKTtcclxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XHJcbmltcG9ydCB7IER1bW15IH0gZnJvbSAnLi9haXMvZHVtbXknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yYyBleHRlbmRzIEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdvcmMnLCBzcGVlZDogNTAgfSk7XHJcbiAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XHJcbiAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgdGhpcy5haS51cGRhdGUodGltZSk7XHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJvZHkgfSBmcm9tICcuL2JvZHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiAncGxheWVyJywgc3BlZWQ6IDUwIH0pO1xyXG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgIHRoaXMuYXJyb3cgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZEFycm93KGFycm93KSB7XHJcbiAgICB0aGlzLmFycm93ID0gYXJyb3c7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbC5maXJlKSB7XHJcbiAgICAgIGlmICh0aGlzLmFycm93KSB0aGlzLnNob290KHRoaXMuYXJyb3cpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcclxuICAgICAgdGhpcy53YWxrKCd1cCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wuZG93bikge1xyXG4gICAgICB0aGlzLndhbGsoJ2Rvd24nKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLmxlZnQpIHtcclxuICAgICAgdGhpcy53YWxrKCdsZWZ0Jyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5yaWdodCkge1xyXG4gICAgICB0aGlzLndhbGsoJ3JpZ2h0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHtcclxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpO1xyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tICcuLi9wcm9qZWN0aWxlJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycm93IGV4dGVuZHMgUHJvamVjdGlsZSB7XHJcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgc3VwZXIoZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgICB0aGlzLnNwcml0ZXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9ICdhcnJvdyc7XHJcbiAgICBjb25zdCB0aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNwcml0ZXMubGVmdCA9IHRpbGVzLmdldFNwcml0ZSgzNik7XHJcbiAgICB0aGlzLnNwcml0ZXMucmlnaHQgPSB0aWxlcy5nZXRTcHJpdGUoMzcpO1xyXG4gICAgdGhpcy5zcHJpdGVzLmRvd24gPSB0aWxlcy5nZXRTcHJpdGUoNDYpO1xyXG4gICAgdGhpcy5zcHJpdGVzLnVwID0gdGlsZXMuZ2V0U3ByaXRlKDQ3KTtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gIH1cclxuXHJcbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgc3VwZXIuZmx5KHgsIHksIGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnNwcml0ZXNbZGlyZWN0aW9uXTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuXHJcbiAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cclxuXHJcbiAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgfVxyXG5cclxuICBmaW5pc2goc3RhdHVzKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gJy4uL2NoYXJhY3Rlci1zaGVldCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQgeyBPcmMgfSBmcm9tICcuLi9vcmMnO1xyXG5pbXBvcnQgeyBFbGYgfSBmcm9tICcuLi9lbGYnO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDAsXHJcbiAgICB9KTtcclxuICAgIHRoaXMudHJlZSA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDcpO1xyXG4gICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XHJcbiAgICAvLyB0aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcclxuICAgIHRoaXMub3JjID0gbmV3IE9yYygpO1xyXG4gICAgdGhpcy5vcmMueCA9IDUwMDtcclxuICAgIHRoaXMub3JjLnkgPSAzMDA7XHJcblxyXG4gICAgdGhpcy5lbGYgPSBuZXcgRWxmKCk7XHJcbiAgICB0aGlzLmVsZi54ID0gMzEwO1xyXG4gICAgdGhpcy5lbGYueSA9IDExMDtcclxuXHJcbiAgICB0aGlzLmFycm93ID0gbmV3IEFycm93KCdkb3duJywgMjAwKTtcclxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmdhbWUuY29udHJvbCk7XHJcbiAgICB0aGlzLnBsYXllci54ID0gMTAwO1xyXG4gICAgdGhpcy5wbGF5ZXIueSA9IDEwMDtcclxuICAgIHRoaXMucGxheWVyLmFkZEFycm93KHRoaXMuYXJyb3cpO1xyXG4gICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICAgIGNvbnN0IG1hcERhdGEgPSByZXF1aXJlKCcuLi9tYXBzL2xldmVsMS5qc29uJyk7XHJcbiAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTtcclxuICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkNhbWVyYS53YXRjaCh0aGlzLnBsYXllcik7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xyXG5cclxuICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucGxheWVyKTtcclxuICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keSh0aGlzLm9yYyk7XHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5lbGYpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMub3JjLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZWxmLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMucGxheWVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuYXJyb3cudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xyXG4gICAgLy8gdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMudmlldyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5lbGYudmlldyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5wbGF5ZXIudmlldyk7XHJcbiAgICBpZiAodGhpcy5hcnJvdy5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMuYXJyb3cudmlldyk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX2JnJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfbmFtZScpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX3N0YXJ0Jyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfb3B0aW9uJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfZXhpdCcpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGl0ZS1tYXAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRDYW1lcmEoY2FtZXJhKSB7XHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4oKG5hbWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XHJcbiAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcclxuICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcclxuICAgIGxldCByb3c7IGxldFxyXG4gICAgICBjb2w7XHJcbiAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgY29sID0gMDtcclxuICAgICAgICBsYXllci5kYXRhLmZvckVhY2goKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJykge1xyXG4gICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAoKG9iaikgPT4gKHtcclxuICAgICAgICAgIHgxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHQsXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xyXG4gICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICBoaXRib3hlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaW50KHgsIHksIHRleHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMnB4IEdlb3JnaWEnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xyXG4gICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpXHJcbiAgICAgICAgICAgIHx8IChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICB8fCAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApXHJcbiAgICAgICAgICAgIHx8ICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvdXJjZVggPSBzcHJpdGUuc291cmNlWCArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVgpKTtcclxuICAgIGNvbnN0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzb3VyY2VYLFxyXG4gICAgICBzb3VyY2VZLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSxcclxuICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgaW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoKGluZGV4KSA9PiAoeyBzeDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6IHRoaXMuZ2V0U291cmNlWShpbmRleCkgfSkpLFxyXG4gICAgICBzcGVlZCxcclxuICAgICAgcmVwZWF0LFxyXG4gICAgICBhdXRvcnVuLFxyXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3VyY2VYKGluZGV4KSB7XHJcbiAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICB9XHJcblxyXG4gIGdldFNvdXJjZVkoaW5kZXgpIHtcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpICogdGhpcy5zcHJpdGVIZWlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRYWSh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVNYXAgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgdGhpcy55ID0gLXNwZWVkO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgdGhpcy55ID0gc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgdGhpcy54ID0gc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB0aGlzLnggPSAtc3BlZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlKG9iamVjdCwgZHQpIHtcclxuICAgIG9iamVjdC54ICs9IGR0ICogKHRoaXMueCAvIDEwMDApO1xyXG4gICAgb2JqZWN0LnkgKz0gZHQgKiAodGhpcy55IC8gMTAwMCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=