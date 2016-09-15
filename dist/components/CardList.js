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
        return (React.createElement(Card_1.Card, {cardname: this.props.data[this.props.index].name, cardage: this.props.data[this.props.index].age, cardpref: this.props.data[this.props.index].pref, cardmsg: this.props.data[this.props.index].msg, cardjob: this.props.data[this.props.index].job, cardheight: this.props.data[this.props.index].height, precardname: this.props.data[this.props.index + 1].name, precardage: this.props.data[this.props.index + 1].age, precardpref: this.props.data[this.props.index + 1].pref, precardmsg: this.props.data[this.props.index + 1].msg, precardjob: this.props.data[this.props.index + 1].job, precardheight: this.props.data[this.props.index + 1].height, class: this.props.left, frontid: this.props.data[this.props.index].id, frontimg: this.props.data[this.props.index].img, backid: this.props.data[this.props.index + 1].id, backimg: this.props.data[this.props.index + 1].img}));
    };
    return CardList;
}(React.Component));
exports.CardList = CardList;
//# sourceMappingURL=CardList.js.map