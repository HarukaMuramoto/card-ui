"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SryBtn = (function (_super) {
    __extends(SryBtn, _super);
    function SryBtn() {
        _super.apply(this, arguments);
    }
    SryBtn.prototype.render = function () {
        return (React.createElement("span", null, 
            React.createElement("button", {class: "btn", id: "sry-btn"}, "sorry")
        ));
    };
    return SryBtn;
}(React.Component));
exports.SryBtn = SryBtn;
//# sourceMappingURL=SryBtn.js.map