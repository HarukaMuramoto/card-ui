"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TnxBtn_1 = require("./TnxBtn");
var SryBtn_1 = require("./SryBtn");
var CardList_1 = require("./CardList");
var data = [
    { id: 1, name: "ゆりこ", age: "20歳", pref: "東京都", msg: "よろしく", job: "社会人", height: "170cm", img: "img/img1.jpg" },
    { id: 2, name: "ふぁにー", age: "28歳", pref: "石川県", msg: "はろー", job: "学生", height: "167cm", img: "img/img2.jpg" },
    { id: 3, name: "がくちゃん", age: "42歳", pref: "奈良県", msg: "こんにちは", job: "医者", height: "172cm", img: "img/img3.jpg" },
    { id: 4, name: "ふみや", age: "33歳", pref: "京都府", msg: "(^o^)", job: "先生", height: "168cm", img: "img/img4.jpg" },
    { id: 5, name: "つかちゃん", age: "30歳", pref: "茨城県", msg: "はろはろ", job: "看護師", height: "190cm", img: "img/img5.jpg" },
    { id: 6, name: "つかちゃん", age: "30歳", pref: "茨城県", msg: "はろはろ", job: "看護師", height: "190cm", img: "img/img6.jpg" },
    { id: 7, name: "ゆりこ", age: "20歳", pref: "東京都", msg: "よろしく", job: "社会人", height: "170cm", img: "img/img7.jpg" },
    { id: 8, name: "ふぁにー", age: "28歳", pref: "石川県", msg: "はろー", job: "学生", height: "167cm", img: "img/img8.jpg" },
    { id: 9, name: "がくちゃん", age: "42歳", pref: "奈良県", msg: "こんにちは", job: "医者", height: "172cm", img: "img/img9.jpg" },
    { id: 10, name: "ふみや", age: "33歳", pref: "京都府", msg: "(^o^)", job: "先生", height: "168cm", img: "img/img9.jpg" }
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
    };
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("article", {className: "main-bg"}, 
            React.createElement(CardList_1.CardList, {left: this.state.left, data: data, index: this.state.index}), 
            (function () {
                console.log(_this.state.index);
                if (_this.state.index === data.length - 2) {
                    return (React.createElement("section", {id: "btn-sec"}));
                }
                return (React.createElement("section", {id: "btn-sec"}, 
                    React.createElement(SryBtn_1.SryBtn, {func: _this.changeCardLeft.bind(_this)}), 
                    React.createElement(TnxBtn_1.TnxBtn, {func: _this.changeCardRight.bind(_this)})));
            })()));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map