var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () { return 0; };
    return Point;
}());
var p = new Point(1, 2);
var dist = p.getDist();
toastr.info("distance :" + dist);
//# sourceMappingURL=04-01-global-module.js.map