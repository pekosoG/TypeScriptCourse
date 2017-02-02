var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(heigth, width) {
            this.heigth = heigth;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () { return this.heigth * this.width; };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(10, 4);
//# sourceMappingURL=04-02-internal-module.js.map