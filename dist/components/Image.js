"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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
//# sourceMappingURL=Image.js.map