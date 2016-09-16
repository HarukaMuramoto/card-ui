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
            React.createElement("div", {className: "front-img " + this.props.class}, 
                React.createElement("img", {src: this.props.frontimg}), 
                React.createElement("article", {className: "card-contents"}, 
                    React.createElement("div", {className: "upper-txt"}, 
                        React.createElement("p", {className: "main-detail"}, 
                            this.props.cardname, 
                            ":", 
                            this.props.cardage, 
                            ":", 
                            this.props.cardpref), 
                        React.createElement("p", {className: "massage"}, this.props.cardmsg)), 
                    React.createElement("p", {className: "more-detail"}, 
                        this.props.cardjob, 
                        "  |  ", 
                        this.props.cardheight)))
        ));
    };
    return Card;
}(React.Component));
exports.Card = Card;
//# sourceMappingURL=Card.js.map