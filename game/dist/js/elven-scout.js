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
    _this.direction = "down";
    _this.lastTime = 0;
    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      this.direction = "down,up,left,right".split(',')[Math.floor(Math.random() * 4)];
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
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0);
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
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 20, false);
    });
    this.stand("down");
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot(arrow) {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations["shoot_" + this.velocity.direction];

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
      this.view = this.animations["walk_" + direction];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_" + direction];
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
        if (layer.type == "objectgroup") {
          var _this$staticShapes;

          (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
        }
      }); //Добавим ограничение по краям карты. За карту нельзя выйти

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
        var y = body.obj.y; //moving right

        if (x > oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;
            }
          });
        } //moving left


        if (x < oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;
            }
          });
        } //moving down


        if (y > oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;
            }
          });
        } //moving up


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
      imageName: "elf",
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

console.log("И сейчас работает");

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
      imageName: "orc",
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
      imageName: "player",
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
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
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
    _this.sprites["left"] = tiles.getSprite(36);
    _this.sprites["right"] = tiles.getSprite(37);
    _this.sprites["down"] = tiles.getSprite(46);
    _this.sprites["up"] = tiles.getSprite(47);
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

    _this.tree.setXY(10, 10); //this.orcTiles = new CharacterSheet({imageName: "orc"});


    _this.orc = new _orc__WEBPACK_IMPORTED_MODULE_6__["Orc"]();
    _this.orc.x = 500;
    _this.orc.y = 300;
    _this.elf = new _elf__WEBPACK_IMPORTED_MODULE_7__["Elf"]();
    _this.elf.x = 510;
    _this.elf.y = 310;
    _this.arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__["Arrow"]("down", 200);
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

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
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
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

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
      this.game.screen.fill("#000000");
      this.game.screen.print(50, 70, "Загрузка...");

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
      var row, col;
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

        if (layer.type == "objectgroup") {
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
        case "up":
          this.y = -speed;
          break;

        case "down":
          this.y = speed;
          break;

        case "right":
          this.x = speed;
          break;

        case "left":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29yYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlcy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLWxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiXSwibmFtZXMiOlsiQUkiLCJib2R5IiwidGltZSIsIkR1bW15IiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJsYXN0VGltZSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbmdlRGlyZWN0aW9uIiwid2FsayIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlWCIsInN4Iiwic291cmNlWSIsInN5IiwicnVubmluZyIsImN1cnJlbnRGcmFtZSIsInRvdGFsRnJhbWVzIiwibGVuZ3RoIiwib25FbmQiLCJpbmRleCIsInNldEZyYW1lIiwic3RvcCIsIm5leHRGcmFtZSIsIlNwcml0ZSIsIkJvZHkiLCJ4IiwieSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImNvbGxpc2lvblNoYXBlIiwiaXNTaG9vdGluZyIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJmb3JFYWNoIiwibmFtZSIsImdldEFuaW1hdGlvbiIsInN0YW5kIiwiYXJyb3ciLCJ2aWV3IiwiZmx5IiwicnVuIiwic2V0RGlyZWN0aW9uIiwibW92ZSIsInNldFhZIiwidHJ1bmMiLCJ1cGRhdGUiLCJDYW1lcmEiLCJsaW1pdFgiLCJsaW1pdFkiLCJzY3JvbGxFZGdlIiwid2F0Y2hPYmplY3QiLCJvYmoiLCJtaW4iLCJtYXgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29sbGlkZXIiLCJzdGF0aWNTaGFwZXMiLCJib2RpZXMiLCJ0eXBlIiwicHVzaCIsIm9iamVjdHMiLCJjaGVja1N0YXRpYyIsIm9sZFgiLCJvbGRZIiwic2hhcGUiLCJDb250cm9sU3RhdGUiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJmaXJlIiwia2V5TWFwIiwiTWFwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmVzc2VkIiwiaGFzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkVsZiIsImFpIiwiY29udHJvbCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwiZWxmIiwicGxheWVyIiwidGl0bGVfYmciLCJ0aXRsZV9uYW1lIiwidGl0bGVfc3RhcnQiLCJ0aXRsZV9vcHRpb24iLCJ0aXRsZV9leGl0IiwidGlsZXMiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiT3JjIiwiUGxheWVyIiwic2hvb3QiLCJQcm9qZWN0aWxlIiwiYWN0aXZlIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiZ2FtZSIsImNvbnN0cnVjdG9yIiwidHJlZSIsImFkZEFycm93IiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZW50ZXIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsImlzQ2FtZXJhU2V0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZSIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwicHJvcHMiLCJvYmplY3QiLCJkdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtE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aE0sQ0FBUCxJQUFZaU0sRUFBRSxJQUFJLEtBQUtqTSxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0FnTSxZQUFNLENBQUMvTCxDQUFQLElBQVlnTSxFQUFFLElBQUksS0FBS2hNLENBQUwsR0FBUyxJQUFiLENBQWQ7QUFDSDtBQWpDTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvZWx2ZW4tc2NvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2woYm9keSkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7QUkgfSBmcm9tIFwiLi4vYWlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd24sdXAsbGVmdCxyaWdodFwiLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsRnJhbWVzID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMub25FbmQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZyYW1lKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1tpbmRleF0uc3g7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN5O1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRGcmFtZSgpIHtcclxuICAgICAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbkVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3RvclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IoeyBpbWFnZU5hbWUsIHNwZWVkIH0pIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKFwiZG93blwiLCAwKTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0geyB4OiAxOCwgeTogMTUsIHdpZHRoOiAyOCwgaGVpZ2h0OiA0OSB9O1xyXG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb25TaGVldCA9IG5ldyBDaGFyYWN0ZXJTaGVldCh7IGltYWdlTmFtZTogaW1hZ2VOYW1lIH0pO1xyXG4gICAgICAgIFwid2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFwic2hvb3RfZG93bixzaG9vdF91cCxzaG9vdF9sZWZ0LHNob290X3JpZ2h0XCIuc3BsaXQoXCIsXCIpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCAyMCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhbmQoXCJkb3duXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290KGFycm93KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob290aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wic2hvb3RfXCIgKyB0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXJyb3cuZmx5KHRoaXMueCwgdGhpcy55LCB0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWV3LnJ1bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YWxrKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvb3RpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcIndhbGtfXCIgKyBkaXJlY3Rpb25dO1xyXG4gICAgICAgIHRoaXMudmlldy5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFuZChkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob290aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcclxuICAgICAgICB0aGlzLnZpZXcuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNTaG9vdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpO1xyXG4gICAgICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0gIiwiZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmxpbWl0WCA9IGxpbWl0WDtcclxuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmogPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2gob2JqKSB7XHJcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLndhdGNoT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWluKHRoaXMubGltaXRYLCB0aGlzLm9iai54IC0gdGhpcy53aWR0aCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnggPCAodGhpcy54ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1pbih0aGlzLmxpbWl0WSwgdGhpcy5vYmoueSAtIHRoaXMuaGVpZ2h0ICsgdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLm9iai55IC0gdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4vc3ByaXRlLXNoZWV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDgzMixcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHRoaXMuZ2V0U2VxdWVuY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VxdWVuY2VzKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0ge307XHJcbiAgICAgICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKGkgPT4gaSA+IDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZXF1ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0aW9uKG5hbWUsIHNwZWVkID0gMTAwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRBbmltYXRpb24odGhpcy5zZXF1ZW5jZXNbbmFtZV0sIHNwZWVkLCByZXBlYXQsIGF1dG9ydW4pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdGF0aWNTaGFwZXMoZGF0YSkge1xyXG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL9CU0L7QsdCw0LLQuNC8INC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDQutGA0LDRj9C8INC60LDRgNGC0YsuINCX0LAg0LrQsNGA0YLRgyDQvdC10LvRjNC30Y8g0LLRi9C50YLQuFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goeyB4OiAwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goeyB4OiAwLCB5OiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxMzAwIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MTI4MCx5OjAsd2lkdGg6MSxoZWlnaHQ6MTMwMH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goeyB4OiAxMjgwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEtpbmVtYXRpY0JvZHkoYm9keSkge1xyXG4gICAgICAgIHRoaXMuYm9kaWVzLnB1c2goe1xyXG4gICAgICAgICAgICB4OiBib2R5LngsXHJcbiAgICAgICAgICAgIHk6IGJvZHkueSxcclxuICAgICAgICAgICAgb2JqOiBib2R5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdGljKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGljKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2xkWCA9IGJvZHkueDtcclxuICAgICAgICAgICAgbGV0IG9sZFkgPSBib2R5Lnk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYm9keS5vYmoueDtcclxuICAgICAgICAgICAgbGV0IHkgPSBib2R5Lm9iai55O1xyXG4gICAgICAgICAgICAvL21vdmluZyByaWdodFxyXG4gICAgICAgICAgICBpZiAoeCA+IG9sZFgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChvbGRYIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9tb3ZpbmcgbGVmdFxyXG4gICAgICAgICAgICBpZiAoeCA8IG9sZFgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCArIHNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL21vdmluZyBkb3duXHJcbiAgICAgICAgICAgIGlmICh5ID4gb2xkWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5taW4oeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQsIHNoYXBlLnkpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIHVwXHJcbiAgICAgICAgICAgIGlmICh5IDwgb2xkWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJvZHkueCA9IHg7XHJcbiAgICAgICAgICAgIGJvZHkueSA9IHk7XHJcbiAgICAgICAgICAgIGJvZHkub2JqLnggPSB4O1xyXG4gICAgICAgICAgICBib2R5Lm9iai55ID0geTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59ICIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbMzcsICdsZWZ0J10sXHJcbiAgICAgICAgICAgIFszOSwgJ3JpZ2h0J10sXHJcbiAgICAgICAgICAgIFszOCwgJ3VwJ10sXHJcbiAgICAgICAgICAgIFs0MCwgJ2Rvd24nXSxcclxuICAgICAgICAgICAgWzMyLCAnZmlyZSddLFxyXG4gICAgICAgICAgICBbMTMsICdlbnRlciddXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tIFwiLi9haXMvZHVtbXlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbGYgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwiZWxmXCIsIHNwZWVkOiA2MH0pO1xyXG4gICAgICAgIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgICAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xyXG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoeyB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNjQwIH0gPSB7fSkge1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XHJcbiAgICAgICAgICAgIG9yYzogJ2ltZy9vcmMucG5nJyxcclxuICAgICAgICAgICAgZWxmOiAnaW1nL2RhcmstZWxmLnBuZycsXHJcbiAgICAgICAgICAgIHBsYXllcjogJ2ltZy9wbGF5ZXIyLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlX2JnOiAnaW1nL2JnX3RpdGxlLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlX25hbWU6ICdpbWcvZ2FtZV9uYW1lLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlX3N0YXJ0OiAnaW1nL3N0YXJ0X2dhbWUucG5nJyxcclxuICAgICAgICAgICAgdGl0bGVfb3B0aW9uOiAnaW1nL29wdGlvbl9nYW1lLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlX2V4aXQ6ICdpbWcvZXhpdF9nYW1lLnBuZycsXHJcbiAgICAgICAgICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2xTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICAgICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcmFtZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcclxuICAgIGVsdmVuU2NvdXQucnVuKCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhcItCYINGB0LXQudGH0LDRgSDRgNCw0LHQvtGC0LDQtdGCXCIpOyIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XHJcbmltcG9ydCB7IER1bW15IH0gZnJvbSBcIi4vYWlzL2R1bW15XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JjIGV4dGVuZHMgQm9keSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7IGltYWdlTmFtZTogXCJvcmNcIiwgc3BlZWQ6IDUwIH0pO1xyXG4gICAgICAgIHRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgICAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiBcInBsYXllclwiLCBzcGVlZDogNTAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgICAgICB0aGlzLmFycm93ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3coYXJyb3cpIHtcclxuICAgICAgICB0aGlzLmFycm93ID0gYXJyb3c7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250cm9sLmZpcmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHRoaXMuc2hvb3QodGhpcy5hcnJvdyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwidXBcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wuZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLndhbGsoXCJkb3duXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwibGVmdFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLndhbGsoXCJyaWdodFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3RvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUge1xyXG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmbHkoeCwgeSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuLi9wcm9qZWN0aWxlXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJvdyBleHRlbmRzIFByb2plY3RpbGUge1xyXG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgICAgIHN1cGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdhcnJvdyc7XHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6IDY0MCxcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tcImxlZnRcIl0gPSB0aWxlcy5nZXRTcHJpdGUoMzYpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tcInJpZ2h0XCJdID0gdGlsZXMuZ2V0U3ByaXRlKDM3KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbXCJkb3duXCJdID0gdGlsZXMuZ2V0U3ByaXRlKDQ2KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbXCJ1cFwiXSA9IHRpbGVzLmdldFNwcml0ZSg0Nyk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN1cGVyLmZseSh4LCB5LCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaChzdGF0dXMpe1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gJy4uL2NoYXJhY3Rlci1zaGVldCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQgeyBPcmMgfSBmcm9tICcuLi9vcmMnO1xyXG5pbXBvcnQgeyBFbGYgfSBmcm9tICcuLi9lbGYnO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogNjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XHJcbiAgICAgICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XHJcbiAgICAgICAgLy90aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcclxuICAgICAgICB0aGlzLm9yYyA9IG5ldyBPcmMoKTtcclxuICAgICAgICB0aGlzLm9yYy54ID0gNTAwO1xyXG4gICAgICAgIHRoaXMub3JjLnkgPSAzMDA7XHJcblxyXG4gICAgICAgIHRoaXMuZWxmID0gbmV3IEVsZigpO1xyXG4gICAgICAgIHRoaXMuZWxmLnggPSA1MTA7XHJcbiAgICAgICAgdGhpcy5lbGYueSA9IDMxMDtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJvdyA9IG5ldyBBcnJvdyhcImRvd25cIiwgMjAwKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIueSA9IDEwMDtcclxuICAgICAgICB0aGlzLnBsYXllci5hZGRBcnJvdyh0aGlzLmFycm93KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKFwibGV2ZWwxXCIsIG1hcERhdGEsIHRoaXMudGlsZXMpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYSA9IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICAgICAgbGltaXRYOiB0aGlzLm1hcC53aWR0aCAtIHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGxpbWl0WTogdGhpcy5tYXAuaGVpZ2h0IC0gdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMub3JjKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5lbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5vcmMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZWxmLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmFycm93LnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICAgICAgLy90aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50cmVlKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMudmlldyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMuZWxmLnZpZXcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuICAgICAgICBpZiAodGhpcy5hcnJvdy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMuYXJyb3cudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9iZycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9uYW1lJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX3N0YXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX29wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9leGl0Jyk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpdGUtbWFwJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRDYW1lcmEoY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQoKS50aGVuKChuYW1lcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcclxuICAgICAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcEltYWdlLndpZHRoID0gbWFwRGF0YS53aWR0aCAqIG1hcERhdGEudGlsZXdpZHRoO1xyXG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IGhpdGJveGVzID0gW107XHJcbiAgICAgICAgbGV0IHJvdywgY29sO1xyXG4gICAgICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgcm93ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXllci5kYXRhLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNldC5nZXRTb3VyY2VYKGluZGV4KSwgdGlsZXNldC5nZXRTb3VyY2VZKGluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2wrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sID4gKG1hcERhdGEud2lkdGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcclxuICAgICAgICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAob2JqID0+ICh7IHgxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHQgfSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwcmludCh4LCB5LCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMnB4IEdlb3JnaWEnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVYID0gc3ByaXRlLng7XHJcbiAgICAgICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW1lcmFTZXQpIHtcclxuICAgICAgICAgICAgc3ByaXRlWCAtPSB0aGlzLmNhbWVyYS54O1xyXG4gICAgICAgICAgICBzcHJpdGVZIC09IHRoaXMuY2FtZXJhLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApIHx8XHJcbiAgICAgICAgICAgICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzb3VyY2VYID0gc3ByaXRlLnNvdXJjZVggKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVYKSk7XHJcbiAgICAgICAgbGV0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcclxuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLm1pbih0aGlzLndpZHRoLCBzcHJpdGVYICsgc3ByaXRlLndpZHRoKSAtIE1hdGgubWF4KDAsIHNwcml0ZVgpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLmhlaWdodCwgc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbc3ByaXRlLmltYWdlTmFtZV0sXHJcbiAgICAgICAgICAgIHNvdXJjZVgsXHJcbiAgICAgICAgICAgIHNvdXJjZVksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVgpLFxyXG4gICAgICAgICAgICBNYXRoLm1heCgwLCBzcHJpdGVZKSxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24nO1xyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xyXG4gICAgY29uc3RydWN0b3IoeyBpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCB9KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoaW5kZXggPT4gKHsgc3g6IHRoaXMuZ2V0U291cmNlWChpbmRleCksIHN5OiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpIH0pKSxcclxuICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxyXG4gICAgICAgICAgICByZXBlYXQ6IHJlcGVhdCxcclxuICAgICAgICAgICAgYXV0b3J1bjogYXV0b3J1bixcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpICUgdGhpcy5pbWFnZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVkoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFhZKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC1zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gLXNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKG9iamVjdCwgZHQpIHtcclxuICAgICAgICBvYmplY3QueCArPSBkdCAqICh0aGlzLnggLyAxMDAwKTtcclxuICAgICAgICBvYmplY3QueSArPSBkdCAqICh0aGlzLnkgLyAxMDAwKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=