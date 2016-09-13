/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Main_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Main_1.Main, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TnxBtn_1 = __webpack_require__(4);
	var SryBtn_1 = __webpack_require__(5);
	var Image_1 = __webpack_require__(6);
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        _super.apply(this, arguments);
	    }
	    Main.prototype.render = function () {
	        return (React.createElement("article", null, React.createElement("main", null, "はじめまして!"), React.createElement("br", null), React.createElement(Image_1.Image, {compiler: "TypeScript", framework: "React"}), React.createElement("section", {id: "btn-sec"}, React.createElement(SryBtn_1.SryBtn, {compiler: "TypeScript", framework: "React"}), React.createElement(TnxBtn_1.TnxBtn, {compiler: "TypeScript", framework: "React"}))));
	    };
	    return Main;
	}(React.Component));
	exports.Main = Main;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TnxBtn = (function (_super) {
	    __extends(TnxBtn, _super);
	    function TnxBtn() {
	        _super.apply(this, arguments);
	    }
	    TnxBtn.prototype.render = function () {
	        return (React.createElement("span", null, React.createElement("button", {class: "btn", id: "tnx-btn"}, "thanks")));
	    };
	    return TnxBtn;
	}(React.Component));
	exports.TnxBtn = TnxBtn;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SryBtn = (function (_super) {
	    __extends(SryBtn, _super);
	    function SryBtn() {
	        _super.apply(this, arguments);
	    }
	    SryBtn.prototype.render = function () {
	        return (React.createElement("span", null, React.createElement("button", {class: "btn", id: "sry-btn"}, "sorry")));
	    };
	    return SryBtn;
	}(React.Component));
	exports.SryBtn = SryBtn;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var data = [
	    { id: 1, img: "img/img1.jpg" },
	    { id: 2, img: "img/img2.jpg" },
	    { id: 3, img: "img/img3.jpg" },
	    { id: 4, img: "img/img4.jpg" },
	    { id: 5, img: "img/img5.jpg" }
	];
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image() {
	        _super.apply(this, arguments);
	    }
	    Image.prototype.render = function () {
	        return (React.createElement("img", {src: 'img/ex1.png'}));
	    };
	    return Image;
	}(React.Component));
	exports.Image = Image;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map