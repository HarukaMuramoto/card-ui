"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        _super.apply(this, arguments);
    }
    Card.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("img", {src: this.props.frontimg}), 
            React.createElement("img", {src: this.props.backimg})));
    };
    return Card;
}(React.Component));
exports.Card = Card;
//# sourceMappingURL=Image.js.map