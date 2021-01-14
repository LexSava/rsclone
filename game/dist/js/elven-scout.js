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

              _this2.checkInteractiveWithStatic(body, i);
            }
          });
        } //moving left


        if (x < oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });
        } //moving down


        if (y > oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });
        } //moving up


        if (y < oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      });
    }
  }, {
    key: "checkInteractive",
    value: function checkInteractive(body, shape, indexOfBody, indexOfShape) {
      if (body.obj.hasOwnProperty('name') && shape.obj.hasOwnProperty('name')) {
        //Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow' && shape.obj.name == 'orc') {
          //Если стрела коснулась орка
          //На самом деле вместо двух, можно сделать один вызов this.remove(this.bodies,indexOfBody,indexOfShape). Но мне так удобнее отлаживать
          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); //Стрела исчезает, удалить из коллайдера, удалить сам объект

          body.obj.delete(); //Удаляем стрелу

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfShape); //Отключить его от коллайдера (удалить элемент по индексу из массива this.bodies)

          shape.obj.death(); //Орк погибает
        } // if(body.obj.name == 'player' && shape.obj.name == 'orc'){
        //     shape.obj.gotPlayer = true;
        // }

      }
    } //checkInteractive

  }, {
    key: "checkInteractiveWithStatic",
    value: function checkInteractiveWithStatic(body, indexOfBody) {
      //
      if (body.obj.hasOwnProperty('name')) {
        //Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow') {
          body.obj.stop(); //Стрела перестаёт двигаться

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); //удалить из коллайдера
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
      player: 'img/player2.png',
      title: 'img/title.jpg',
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
      //Удалить элементы из массива по индексу
      //arguments - псевдо массив, в котором хранятся все аргументы, переданные в функцию
      //[].slice() - создает пустой массив

      /*arrayOfIndexes - массив, который содержит все аргументы (кроме первого) переданные в функцию
         Это массив индексов, которые нужно удалить из основного массива arr*/
      var arrayOfIndexes = [].slice.call(arguments, 1); //Вернуть отфильтрованный массив

      return arr.filter(function (item, index) {
        //Например arrayOfIndexes = [1], то есть нужно удалить один элемент по индексу 1
        //indexOf - возвращает индекс искомого элемента. Например: ['a','b'].indexOf('b') //-> 1
        //Каждый элемент массива arr сверяет свой индекс с индексами в arrayOfIndexes.
        //Если его индекса в arrayOfIndexes нет, то метод indexOf вернёт -1, значит будет true и элемент не будет удалён из массива
        return arrayOfIndexes.indexOf(index) == -1;
      });
    } //remove

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
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../orc */ "./src/orc.js");
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


    _this.orc = new _orc__WEBPACK_IMPORTED_MODULE_7__["Orc"]();
    _this.orc.x = 500;
    _this.orc.y = 300; //this.arrow = new Arrow("down", 200);

    _this.player = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100; //this.player.addArrow(this.arrow);

    _this.collider = new _collider__WEBPACK_IMPORTED_MODULE_6__["Collider"]();
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.orc); //this.collider.addKinematicBody(this.arrow);

      this.projectiles = [];
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this2 = this;

      this.orc.update(time);
      this.player.update(time);
      this.collider.update(time);
      this.mainCamera.update(time); //this.arrow.update(time);

      if (this.projectiles.length > 0) {
        this.projectiles.forEach(function (arrow, index) {
          if (arrow.active) {
            //active становится true в методе Player -> Body.shoot()
            arrow.update(time);
          }

          if (arrow.deleted) {
            _this2.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_3__["RemoveFromArray"].remove(_this2.projectiles, index);
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
      this.game.screen.drawSprite(this.map); //this.game.screen.drawSprite(this.tree);

      this.game.screen.drawSprite(this.orc.view);
      this.game.screen.drawSprite(this.player.view); // if (this.arrow.active) {
      //     this.game.screen.drawSprite(this.arrow.view);
      // }

      if (this.projectiles.length > 0) {
        //Отрисовка стрел
        this.projectiles.forEach(function (arrow) {
          if (arrow.active) {
            //active становится true в методе Player -> Body.shoot()
            _this3.game.screen.drawSprite(arrow.view);
          }
        });
      }

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }, {
    key: "shooting",
    value: function shooting() {
      //Стрельба игрока
      var arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__["Arrow"]('down', 400, this.player.x, this.player.y);
      this.player.addArrow(arrow);
      this.projectiles.push(arrow); //Все объекты из этого массива будут отрисованы в методе render

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
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(250, 500, 'Нажмите Enter');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbW92ZS1mcm9tLWFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGl0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyJdLCJuYW1lcyI6WyJBSSIsImJvZHkiLCJ0aW1lIiwiRHVtbXkiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsImxhc3RUaW1lIiwic3BsaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuZ2VEaXJlY3Rpb24iLCJ3YWxrIiwiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJvbkVuZCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwiQm9keSIsIngiLCJ5IiwidmVsb2NpdHkiLCJWZWN0b3IiLCJhbmltYXRpb25zIiwiY29sbGlzaW9uU2hhcGUiLCJpc1Nob290aW5nIiwiYW5pbWF0aW9uU2hlZXQiLCJDaGFyYWN0ZXJTaGVldCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwic3RhbmQiLCJhcnJvdyIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrU3RhdGljIiwib2xkWCIsIm9sZFkiLCJzaGFwZSIsImNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlbGV0ZSIsImRlYXRoIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsInBsYXllciIsInRpdGxlIiwidGlsZXMiLCJjb250cm9sIiwic2NlbmVzIiwibG9hZGluZyIsIkxvYWRpbmciLCJtZW51IiwiTWVudSIsImdhbWVMZXZlbCIsIkdhbWVMZXZlbCIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJzdGF0dXMiLCJTY2VuZSIsIkxPQURFRCIsIlNUQVJUX0dBTUUiLCJXT1JLSU5HIiwiY2hhbmdlU2NlbmUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwiZWx2ZW5TY291dCIsIk9yYyIsImFpIiwiUGxheWVyIiwic2hvb3QiLCJQcm9qZWN0aWxlIiwiYWN0aXZlIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiYXJyIiwiaW5kZXhlcyIsImFycmF5T2ZJbmRleGVzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiaXRlbSIsImluZGV4T2YiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ0cmVlIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsInByb2plY3RpbGVzIiwiZGVsZXRlZCIsImZpbGwiLCJkcmF3U3ByaXRlIiwiYWRkQXJyb3ciLCJsb2FkZWRBdCIsImlzSW1hZ2VzTG9hZGVkIiwiZmluaXNoIiwicHJpbnQiLCJlbnRlciIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2FtZXJhIiwiaXNDYW1lcmFTZXQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngxIiwieDIiLCJ5MSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlWCIsInNwcml0ZVkiLCJhYnMiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsInByb3BzIiwib2JqZWN0IiwiZHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUE2QnRMLDhDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU1LLE1BQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQVlsQyxTQUFaLEVBQXVCVyxLQUF2QixFQUE4QjtBQUFBOztBQUMxQixTQUFLcUMsWUFBTCxDQUFrQmhELFNBQWxCLEVBQTZCVyxLQUE3QjtBQUNIOztBQUhMO0FBQUE7QUFBQSxpQ0FLaUJYLFNBTGpCLEVBSzRCVyxLQUw1QixFQUttQztBQUMzQixXQUFLWCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUtXLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtvQixDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBUyxDQUFUOztBQUNBLGNBQVFoQyxTQUFSO0FBQ0ksYUFBSyxJQUFMO0FBQ0ksZUFBS2dDLENBQUwsR0FBUyxDQUFDckIsS0FBVjtBQUNBOztBQUVKLGFBQUssTUFBTDtBQUNJLGVBQUtxQixDQUFMLEdBQVNyQixLQUFUO0FBQ0E7O0FBRUosYUFBSyxPQUFMO0FBQ0ksZUFBS29CLENBQUwsR0FBU3BCLEtBQVQ7QUFDQTs7QUFFSixhQUFLLE1BQUw7QUFDSSxlQUFLb0IsQ0FBTCxHQUFTLENBQUNwQixLQUFWO0FBQ0E7QUFmUjtBQWtCSDtBQTVCTDtBQUFBO0FBQUEseUJBOEJTK04sTUE5QlQsRUE4QmlCQyxFQTlCakIsRUE4QnFCO0FBQ2JELFlBQU0sQ0FBQzNNLENBQVAsSUFBWTRNLEVBQUUsSUFBSSxLQUFLNU0sQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNBMk0sWUFBTSxDQUFDMU0sQ0FBUCxJQUFZMk0sRUFBRSxJQUFJLEtBQUszTSxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0g7QUFqQ0w7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb250cm9sKGJvZHkpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FJIH0gZnJvbSBcIi4uL2FpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHVtbXkgZXh0ZW5kcyBBSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAxMDAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duLHVwLGxlZnQscmlnaHRcIi5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KV07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0IH0pIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2VYOiBmcmFtZXNbMF0uc3gsXHJcbiAgICAgICAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gYXV0b3J1bjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLm9uRW5kID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcmFtZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0RnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25FbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyU2hlZXQgfSBmcm9tIFwiLi9jaGFyYWN0ZXItc2hlZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaW1hZ2VOYW1lLCBzcGVlZCB9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcihcImRvd25cIiwgMCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25TaGFwZSA9IHsgeDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDkgfTtcclxuICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoeyBpbWFnZU5hbWU6IGltYWdlTmFtZSB9KTtcclxuICAgICAgICBcIndhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0XCIuc3BsaXQoXCIsXCIpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcInNob290X2Rvd24sc2hvb3RfdXAsc2hvb3RfbGVmdCxzaG9vdF9yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgMjAsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YW5kKFwiZG93blwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdChhcnJvdykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9uc1tcInNob290X1wiICsgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcub25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGFycm93LmZseSh0aGlzLngsIHRoaXMueSwgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FsayhkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob290aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcclxuICAgICAgICB0aGlzLnZpZXcucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhbmQoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG9vdGluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wid2Fsa19cIiArIGRpcmVjdGlvbl07XHJcbiAgICAgICAgdGhpcy52aWV3LnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTtcclxuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59ICIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAsIGxpbWl0WCA9IDUwMDAwLCBsaW1pdFkgPSA1MDAwMCwgc2Nyb2xsRWRnZSA9IDIwMH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW1pdFggPSBsaW1pdFg7XHJcbiAgICAgICAgdGhpcy5saW1pdFkgPSBsaW1pdFk7XHJcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JqID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjcm9sbEVkZ2UgPSBzY3JvbGxFZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKG9iaikge1xyXG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy53YXRjaE9iamVjdCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLm9iai54ID4gKHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLmxpbWl0WCwgdGhpcy5vYmoueCAtIHRoaXMud2lkdGggKyB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm9iai54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnggLSB0aGlzLnNjcm9sbEVkZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm9iai55ID4gKHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPCAodGhpcy55ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueSAtIHRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL3Nwcml0ZS1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZX0pIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcXVlbmNlcygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9tYXBzL2FuaW1hdGlvbnMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xyXG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBzZXF1ZW5jZXNbbGF5ZXIubmFtZV0gPSBsYXllci5kYXRhLmZpbHRlcihpID0+IGkgPiAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VxdWVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4vcmVtb3ZlLWZyb20tYXJyYXknO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RhdGljU2hhcGVzKGRhdGEpIHtcclxuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHsgeDogMCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSB9KTtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHsgeDogMCwgeTogMCwgd2lkdGg6IDEsIGhlaWdodDogMTMwMCB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjEyODAseTowLHdpZHRoOjEsaGVpZ2h0OjEzMDB9KTtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHsgeDogMTI4MCwgeTogMCwgd2lkdGg6IDEzMDAsIGhlaWdodDogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRLaW5lbWF0aWNCb2R5KGJvZHkpIHtcclxuICAgICAgICB0aGlzLmJvZGllcy5wdXNoKHtcclxuICAgICAgICAgICAgeDogYm9keS54LFxyXG4gICAgICAgICAgICB5OiBib2R5LnksXHJcbiAgICAgICAgICAgIG9iajogYm9keVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1N0YXRpYyh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXRpYyh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgbGV0IG9sZFggPSBib2R5Lng7XHJcbiAgICAgICAgICAgIGxldCBvbGRZID0gYm9keS55O1xyXG4gICAgICAgICAgICBsZXQgeCA9IGJvZHkub2JqLng7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYm9keS5vYmoueTtcclxuICAgICAgICAgICAgLy9tb3ZpbmcgcmlnaHRcclxuICAgICAgICAgICAgaWYgKHggPiBvbGRYKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWCAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIDwgc2hhcGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIGxlZnRcclxuICAgICAgICAgICAgaWYgKHggPCBvbGRYKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLnggKyBzaGFwZS53aWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9tb3ZpbmcgZG93blxyXG4gICAgICAgICAgICBpZiAoeSA+IG9sZFkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKChvbGRZIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpIDwgc2hhcGUueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS55KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIHVwXHJcbiAgICAgICAgICAgIGlmICh5IDwgb2xkWSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJvZHkueCA9IHg7XHJcbiAgICAgICAgICAgIGJvZHkueSA9IHk7XHJcbiAgICAgICAgICAgIGJvZHkub2JqLnggPSB4O1xyXG4gICAgICAgICAgICBib2R5Lm9iai55ID0geTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaW5kZXhPZkJvZHksIGluZGV4T2ZTaGFwZSkge1xyXG4gICAgICAgIGlmIChib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHNoYXBlLm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7Ly/Qn9GA0L7QstC10YDQutCwINC90LAg0YHQu9GD0YfQsNC5LCDQtdGB0LvQuCDQv9C+0L/QsNC00ZHRgtGB0Y8g0L7QsdGK0LXQutGCINCx0LXQtyDQvdCw0LfQstCw0L3QuNGPXHJcbiAgICAgICAgICAgIGlmIChib2R5Lm9iai5uYW1lID09ICdhcnJvdycgJiYgc2hhcGUub2JqLm5hbWUgPT0gJ29yYycpIHsvL9CV0YHQu9C4INGB0YLRgNC10LvQsCDQutC+0YHQvdGD0LvQsNGB0Ywg0L7RgNC60LBcclxuICAgICAgICAgICAgICAgIC8v0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCy0LzQtdGB0YLQviDQtNCy0YPRhSwg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQvtC00LjQvSDQstGL0LfQvtCyIHRoaXMucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5LGluZGV4T2ZTaGFwZSkuINCd0L4g0LzQvdC1INGC0LDQuiDRg9C00L7QsdC90LXQtSDQvtGC0LvQsNC20LjQstCw0YLRjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSkvL9Ch0YLRgNC10LvQsCDQuNGB0YfQtdC30LDQtdGCLCDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwLCDRg9C00LDQu9C40YLRjCDRgdCw0Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICBib2R5Lm9iai5kZWxldGUoKTsvL9Cj0LTQsNC70Y/QtdC8INGB0YLRgNC10LvRg1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mU2hhcGUpLy/QntGC0LrQu9GO0YfQuNGC0Ywg0LXQs9C+INC+0YIg0LrQvtC70LvQsNC50LTQtdGA0LAgKNGD0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGCINC/0L4g0LjQvdC00LXQutGB0YMg0LjQtyDQvNCw0YHRgdC40LLQsCB0aGlzLmJvZGllcylcclxuICAgICAgICAgICAgICAgIHNoYXBlLm9iai5kZWF0aCgpOyAvL9Ce0YDQuiDQv9C+0LPQuNCx0LDQtdGCXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYoYm9keS5vYmoubmFtZSA9PSAncGxheWVyJyAmJiBzaGFwZS5vYmoubmFtZSA9PSAnb3JjJyl7XHJcbiAgICAgICAgICAgIC8vICAgICBzaGFwZS5vYmouZ290UGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH0vL2NoZWNrSW50ZXJhY3RpdmVcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaW5kZXhPZkJvZHkpIHsvL1xyXG4gICAgICAgIGlmIChib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7Ly/Qn9GA0L7QstC10YDQutCwINC90LAg0YHQu9GD0YfQsNC5LCDQtdGB0LvQuCDQv9C+0L/QsNC00ZHRgtGB0Y8g0L7QsdGK0LXQutGCINCx0LXQtyDQvdCw0LfQstCw0L3QuNGPXHJcbiAgICAgICAgICAgIGlmIChib2R5Lm9iai5uYW1lID09ICdhcnJvdycpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkub2JqLnN0b3AoKTsvL9Ch0YLRgNC10LvQsCDQv9C10YDQtdGB0YLQsNGR0YIg0LTQstC40LPQsNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZCb2R5KTsvL9GD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgWzM3LCAnbGVmdCddLFxyXG4gICAgICAgICAgICBbMzksICdyaWdodCddLFxyXG4gICAgICAgICAgICBbMzgsICd1cCddLFxyXG4gICAgICAgICAgICBbNDAsICdkb3duJ10sXHJcbiAgICAgICAgICAgIFszMiwgJ2ZpcmUnXSxcclxuICAgICAgICAgICAgWzEzLCAnZW50ZXInXVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XHJcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gJy4vc2NlbmVzL2dhbWUtbGV2ZWwnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IHdpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAgfSA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICAgICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyMi5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxyXG4gICAgICAgICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcclxuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSx0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWx2ZW5TY291dCA9IG5ldyBHYW1lKCk7XHJcbiAgICBlbHZlblNjb3V0LnJ1bigpO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coXCLQmCDRgdC10LnRh9Cw0YEg0YDQsNCx0L7RgtCw0LXRglwiKTsiLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xyXG5pbXBvcnQgeyBEdW1teSB9IGZyb20gXCIuL2Fpcy9kdW1teVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yYyBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoeyBpbWFnZU5hbWU6IFwib3JjXCIsIHNwZWVkOiA1MCB9KTtcclxuICAgICAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XHJcbiAgICAgICAgdGhpcy5haS5jb250cm9sKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5haS51cGRhdGUodGltZSk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBzdXBlcih7IGltYWdlTmFtZTogXCJwbGF5ZXJcIiwgc3BlZWQ6IDUwIH0pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5hcnJvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFycm93KGFycm93KSB7XHJcbiAgICAgICAgdGhpcy5hcnJvdyA9IGFycm93O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5maXJlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFycm93KSB0aGlzLnNob290KHRoaXMuYXJyb3cpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLnVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcInVwXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sLmRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwiZG93blwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwicmlnaHRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgICAgIHRoaXMudmlldy5zZXRYWShNYXRoLnRydW5jKHRoaXMueCksTWF0aC50cnVuYyh0aGlzLnkpKTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tIFwiLi4vcHJvamVjdGlsZVwiO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuLi9zcHJpdGUtc2hlZXRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgICAgICBzdXBlcihkaXJlY3Rpb24sIHNwZWVkKTtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnYXJyb3cnO1xyXG4gICAgICAgIGNvbnN0IHRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbXCJsZWZ0XCJdID0gdGlsZXMuZ2V0U3ByaXRlKDM2KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbXCJyaWdodFwiXSA9IHRpbGVzLmdldFNwcml0ZSgzNyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW1wiZG93blwiXSA9IHRpbGVzLmdldFNwcml0ZSg0Nik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW1widXBcIl0gPSB0aWxlcy5nZXRTcHJpdGUoNDcpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gICAgfVxyXG5cclxuICAgIGZseSh4LCB5LCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBzdXBlci5mbHkoeCwgeSwgZGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLnNwcml0ZXNbZGlyZWN0aW9uXTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSZW1vdmVGcm9tQXJyYXl7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbW92ZSAoYXJyLCBpbmRleGVzKSB7Ly/Qo9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgtGLINC40Lcg0LzQsNGB0YHQuNCy0LAg0L/QviDQuNC90LTQtdC60YHRg1xyXG4gICAgICAgIC8vYXJndW1lbnRzIC0g0L/RgdC10LLQtNC+INC80LDRgdGB0LjQsiwg0LIg0LrQvtGC0L7RgNC+0Lwg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLLCDQv9C10YDQtdC00LDQvdC90YvQtSDQsiDRhNGD0L3QutGG0LjRjlxyXG4gICAgICAgIC8vW10uc2xpY2UoKSAtINGB0L7Qt9C00LDQtdGCINC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcclxuICAgICAgICAvKmFycmF5T2ZJbmRleGVzIC0g0LzQsNGB0YHQuNCyLCDQutC+0YLQvtGA0YvQuSDRgdC+0LTQtdGA0LbQuNGCINCy0YHQtSDQsNGA0LPRg9C80LXQvdGC0YsgKNC60YDQvtC80LUg0L/QtdGA0LLQvtCz0L4pINC/0LXRgNC10LTQsNC90L3Ri9C1INCyINGE0YPQvdC60YbQuNGOXHJcbiAgICAgICAgICAg0K3RgtC+INC80LDRgdGB0LjQsiDQuNC90LTQtdC60YHQvtCyLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INGD0LTQsNC70LjRgtGMINC40Lcg0L7RgdC90L7QstC90L7Qs9C+INC80LDRgdGB0LjQstCwIGFyciovXHJcbiAgICAgICAgdmFyIGFycmF5T2ZJbmRleGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cclxuICAgICAgICAvL9CS0LXRgNC90YPRgtGMINC+0YLRhNC40LvRjNGC0YDQvtCy0LDQvdC90YvQuSDQvNCw0YHRgdC40LJcclxuICAgICAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAvL9Cd0LDQv9GA0LjQvNC10YAgYXJyYXlPZkluZGV4ZXMgPSBbMV0sINGC0L4g0LXRgdGC0Ywg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQvtC00LjQvSDRjdC70LXQvNC10L3RgiDQv9C+INC40L3QtNC10LrRgdGDIDFcclxuICAgICAgICAgICAgLy9pbmRleE9mIC0g0LLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdC00LXQutGBINC40YHQutC+0LzQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC4g0J3QsNC/0YDQuNC80LXRgDogWydhJywnYiddLmluZGV4T2YoJ2InKSAvLy0+IDFcclxuICAgICAgICAgICAgLy/QmtCw0LbQtNGL0Lkg0Y3Qu9C10LzQtdC90YIg0LzQsNGB0YHQuNCy0LAgYXJyINGB0LLQtdGA0Y/QtdGCINGB0LLQvtC5INC40L3QtNC10LrRgSDRgSDQuNC90LTQtdC60YHQsNC80Lgg0LIgYXJyYXlPZkluZGV4ZXMuXHJcbiAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXQs9C+INC40L3QtNC10LrRgdCwINCyIGFycmF5T2ZJbmRleGVzINC90LXRgiwg0YLQviDQvNC10YLQvtC0IGluZGV4T2Yg0LLQtdGA0L3RkdGCIC0xLCDQt9C90LDRh9C40YIg0LHRg9C00LXRgiB0cnVlINC4INGN0LvQtdC80LXQvdGCINC90LUg0LHRg9C00LXRgiDRg9C00LDQu9GR0L0g0LjQtyDQvNCw0YHRgdC40LLQsFxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlPZkluZGV4ZXMuaW5kZXhPZihpbmRleCkgPT0gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9Ly9yZW1vdmVcclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuICAgIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cclxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goc3RhdHVzKXtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1c1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyU2hlZXQgfSBmcm9tICcuLi9jaGFyYWN0ZXItc2hlZXQnO1xyXG5pbXBvcnQgeyBSZW1vdmVGcm9tQXJyYXkgfSBmcm9tICcuLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQgeyBPcmMgfSBmcm9tICcuLi9vcmMnO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogNjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XHJcbiAgICAgICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XHJcbiAgICAgICAgLy90aGlzLm9yY1RpbGVzID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IFwib3JjXCJ9KTtcclxuICAgICAgICB0aGlzLm9yYyA9IG5ldyBPcmMoKTtcclxuICAgICAgICB0aGlzLm9yYy54ID0gNTAwO1xyXG4gICAgICAgIHRoaXMub3JjLnkgPSAzMDA7XHJcblxyXG4gICAgICAgIC8vdGhpcy5hcnJvdyA9IG5ldyBBcnJvdyhcImRvd25cIiwgMjAwKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lLmNvbnRyb2wpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIueSA9IDEwMDtcclxuICAgICAgICAvL3RoaXMucGxheWVyLmFkZEFycm93KHRoaXMuYXJyb3cpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xyXG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoXCJsZXZlbDFcIiwgbWFwRGF0YSwgdGhpcy50aWxlcyk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICAgICAgbGltaXRZOiB0aGlzLm1hcC5oZWlnaHQgLSB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS53YXRjaCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5tYWluQ2FtZXJhKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRTdGF0aWNTaGFwZXMobWFwRGF0YSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5vcmMpO1xyXG4gICAgICAgIC8vdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMuYXJyb3cpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS51cGRhdGUodGltZSk7XHJcbiAgICAgICAgLy90aGlzLmFycm93LnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKGFycm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycm93LmFjdGl2ZSkgey8vYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyb3cuZGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMucHJvamVjdGlsZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMub3JjLnZpZXcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuICAgICAgICAvLyBpZiAodGhpcy5hcnJvdy5hY3RpdmUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMuYXJyb3cudmlldyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA+IDApIHsvL9Ce0YLRgNC40YHQvtCy0LrQsCDRgdGC0YDQtdC7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaChhcnJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyb3cuYWN0aXZlKSB7Ly9hY3RpdmUg0YHRgtCw0L3QvtCy0LjRgtGB0Y8gdHJ1ZSDQsiDQvNC10YLQvtC00LUgUGxheWVyIC0+IEJvZHkuc2hvb3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShhcnJvdy52aWV3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxuICAgIHNob290aW5nKCkgey8v0KHRgtGA0LXQu9GM0LHQsCDQuNCz0YDQvtC60LBcclxuICAgICAgICBsZXQgYXJyb3cgPSBuZXcgQXJyb3coJ2Rvd24nLCA0MDAsIHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmFkZEFycm93KGFycm93KTtcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2goYXJyb3cpOy8v0JLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsCDQsdGD0LTRg9GCINC+0YLRgNC40YHQvtCy0LDQvdGLINCyINC80LXRgtC+0LTQtSByZW5kZXJcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkoYXJyb3cpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjUwLCA1MDAsICfQndCw0LbQvNC40YLQtSBFbnRlcicpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aXRlLW1hcCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0Q2FtZXJhKGNhbWVyYSkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xyXG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICAgICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDtcclxuICAgICAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcclxuICAgICAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb25zdCBoaXRib3hlcyA9IFtdO1xyXG4gICAgICAgIGxldCByb3csIGNvbDtcclxuICAgICAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ3RpbGVsYXllcicpIHtcclxuICAgICAgICAgICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMubWFwKG9iaiA9PiAoeyB4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0IH0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xyXG4gICAgICAgIHJldHVybiBuZXcgVGlsZU1hcCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc291cmNlWDogMCxcclxuICAgICAgICAgICAgc291cmNlWTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcEltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgaGl0Ym94ZXM6IGhpdGJveGVzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHJpbnQoeCwgeSwgdGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMjJweCBHZW9yZ2lhJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSwgeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZSkge1xyXG5cclxuICAgICAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xyXG4gICAgICAgIGxldCBzcHJpdGVZID0gc3ByaXRlLnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQ2FtZXJhU2V0KSB7XHJcbiAgICAgICAgICAgIHNwcml0ZVggLT0gdGhpcy5jYW1lcmEueDtcclxuICAgICAgICAgICAgc3ByaXRlWSAtPSB0aGlzLmNhbWVyYS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoc3ByaXRlWCA+PSB0aGlzLndpZHRoKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlWSA+PSB0aGlzLmhlaWdodCkgfHxcclxuICAgICAgICAgICAgKChzcHJpdGVYICsgc3ByaXRlLndpZHRoKSA8PSAwKSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PSAwKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMoTWF0aC5taW4oMCwgc3ByaXRlWCkpO1xyXG4gICAgICAgIGxldCBzb3VyY2VZID0gc3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5oZWlnaHQsIHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSAtIE1hdGgubWF4KDAsIHNwcml0ZVkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICBzb3VyY2VYLFxyXG4gICAgICAgICAgICBzb3VyY2VZLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSxcclxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgaW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjQgfSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgICAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmltYXRpb24oaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKGluZGV4ID0+ICh7IHN4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSB9KSksXHJcbiAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgICAgICAgcmVwZWF0OiByZXBlYXQsXHJcbiAgICAgICAgICAgIGF1dG9ydW46IGF1dG9ydW4sXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3VyY2VZKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoeyBpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0IH0pIHtcclxuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYO1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRYWSh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVNYXAgZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IC1zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShvYmplY3QsIGR0KSB7XHJcbiAgICAgICAgb2JqZWN0LnggKz0gZHQgKiAodGhpcy54IC8gMTAwMCk7XHJcbiAgICAgICAgb2JqZWN0LnkgKz0gZHQgKiAodGhpcy55IC8gMTAwMCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9