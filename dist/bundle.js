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
	var CardList_1 = __webpack_require__(6);
	var data = [
	    { id: 1, name: "ゆりこ", age: "20歳", pref: "東京都", msg: "よろしく", job: "社会人", height: "170cm", img: "img/img1.jpg" },
	    { id: 2, name: "ふぁにー", age: "28歳", pref: "石川県", msg: "はろー", job: "学生", height: "167cm", img: "img/img2.jpg" },
	    { id: 3, name: "がくちゃん", age: "42歳", pref: "奈良県", msg: "こんにちは", job: "医者", height: "172cm", img: "img/img3.jpg" },
	    { id: 4, name: "ふみや", age: "33歳", pref: "京都府", msg: "(^o^)", job: "先生", height: "168cm", img: "img/img4.jpg" },
	    { id: 5, name: "つかちゃん", age: "30歳", pref: "茨城県", msg: "はろはろ", job: "看護師", height: "190cm", img: "img/img5.jpg" },
	    { id: 999, name: "enpty", age: "30歳", pref: "茨城県", msg: "はろはろ", job: "看護師", height: "190cm", img: "img/img6.jpg" },
	    { id: 9999, name: "つかちゃん", age: "30歳", pref: "茨城県", msg: "はろはろ", job: "看護師", height: "190cm", img: "img/img6.jpg" }
	];
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        _super.call(this);
	        this.state = { index: 0, left: '' };
	    }
	    Main.prototype.changeCardLeft = function () {
	        this.setState({
	            left: "shift-left",
	            index: this.state.index
	        });
	        setTimeout(function () {
	            this.setState({
	                left: "",
	                index: this.state.index + 1
	            });
	        }.bind(this), 1000);
	        console.log(this.state.index);
	        // return this.state.index;
	    };
	    Main.prototype.changeCardRight = function () {
	        this.setState({
	            left: "shift-right",
	            index: this.state.index
	        });
	        setTimeout(function () {
	            this.setState({
	                left: "",
	                index: this.state.index + 1
	            });
	        }.bind(this), 1000);
	        //  console.log(this.state.index);
	        // return this.state.index;
	    };
	    Main.prototype.render = function () {
	        var _this = this;
	        //  this.state.index = 0;
	        return (React.createElement("article", {className: "main-bg"}, React.createElement(CardList_1.CardList, {left: this.state.left, data: data, index: this.state.index}), (function () {
	            console.log(_this.state.index);
	            if (_this.state.index === data.length - 2) {
	                return (React.createElement("section", {id: "btn-sec"}));
	            }
	            return (React.createElement("section", {id: "btn-sec"}, React.createElement(SryBtn_1.SryBtn, {func: _this.changeCardLeft.bind(_this)}), React.createElement(TnxBtn_1.TnxBtn, {func: _this.changeCardRight.bind(_this)})));
	        })()));
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
	        return (React.createElement("span", null, React.createElement("button", {className: "btn", id: "tnx-btn", onClick: this.props.func}, "thanks")));
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
	        return (React.createElement("span", null, React.createElement("button", {className: "btn", id: "sry-btn", onClick: this.props.func}, "sorry")));
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
	var Card_1 = __webpack_require__(7);
	var CardList = (function (_super) {
	    __extends(CardList, _super);
	    function CardList() {
	        _super.apply(this, arguments);
	    }
	    CardList.prototype.render = function () {
	        // console.log(this.props.index);
	        return (React.createElement(Card_1.Card, {cardname: this.props.data[this.props.index].name, cardage: this.props.data[this.props.index].age, cardpref: this.props.data[this.props.index].pref, cardmsg: this.props.data[this.props.index].msg, cardjob: this.props.data[this.props.index].job, cardheight: this.props.data[this.props.index].height, class: this.props.left, frontid: this.props.data[this.props.index].id, frontimg: this.props.data[this.props.index].img, backid: this.props.data[this.props.index + 1].id, backimg: this.props.data[this.props.index + 1].img}));
	    };
	    return CardList;
	}(React.Component));
	exports.CardList = CardList;
	// a = data.map(function(value){
	//   return <Image id="1" img="dfd"/>
	// })


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Card = (function (_super) {
	    __extends(Card, _super);
	    function Card() {
	        _super.apply(this, arguments);
	    }
	    Card.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("img", {className: "back-img", src: this.props.backimg}), React.createElement("div", {className: "front-img " + this.props.class}, React.createElement("img", {src: this.props.frontimg}), React.createElement("article", {className: "card-contents"}, this.props.cardname, ":", this.props.cardage, ":", this.props.cardpref))));
	    };
	    return Card;
	}(React.Component));
	exports.Card = Card;
	// a = data.map(function(value){
	//   return <Image id="1" img="dfd"/>
	// })


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map