"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TnxBtn_1 = require("./TnxBtn");
var SryBtn_1 = require("./SryBtn");
var Image_1 = require("./Image");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        return (React.createElement("article", null, 
            React.createElement("main", null, "はじめまして!"), 
            React.createElement("br", null), 
            React.createElement(Image_1.Image, {compiler: "TypeScript", framework: "React"}), 
            React.createElement("section", {id: "btn-sec"}, 
                React.createElement(SryBtn_1.SryBtn, {compiler: "TypeScript", framework: "React"}), 
                React.createElement(TnxBtn_1.TnxBtn, {compiler: "TypeScript", framework: "React"}))));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map