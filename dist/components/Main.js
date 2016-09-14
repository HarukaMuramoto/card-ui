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
    { id: 1, img: "img/img1.jpg" },
    { id: 2, img: "img/img2.jpg" },
    { id: 3, img: "img/img3.jpg" },
    { id: 4, img: "img/img4.jpg" },
    { id: 5, img: "img/img5.jpg" }
];
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.state = { index: 0 };
    }
    Main.prototype.changeCard = function () {
        this.setState({
            index: this.state.index + 1
        });
        console.log(this.state.index);
        return this.state.index;
    };
    Main.prototype.render = function () {
        return (React.createElement("article", null, 
            React.createElement(CardList_1.CardList, {data: data, index: this.state.index}), 
            React.createElement("section", {id: "btn-sec"}, 
                React.createElement(SryBtn_1.SryBtn, {func: this.changeCard.bind(this)}), 
                React.createElement(TnxBtn_1.TnxBtn, {compiler: "TypeScript", framework: "React"}))));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map