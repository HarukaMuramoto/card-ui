"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Card_1 = require("./Card");
var CardList = (function (_super) {
    __extends(CardList, _super);
    function CardList() {
        _super.apply(this, arguments);
    }
    CardList.prototype.render = function () {
        return (React.createElement(Card_1.Card, {class: this.props.left, frontid: this.props.data[this.props.index].id, frontimg: this.props.data[this.props.index].img, backid: this.props.data[this.props.index + 1].id, backimg: this.props.data[this.props.index + 1].img}));
    };
    return CardList;
}(React.Component));
exports.CardList = CardList;
//# sourceMappingURL=CardList.js.map