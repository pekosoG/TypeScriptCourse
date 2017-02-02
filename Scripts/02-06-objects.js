var demo_02_06;
(function (demo_02_06) {
    //object
    var points = { x: 10, y: 20 };
    var x = points.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log(rectangle.calcArea());
    //Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    //squareIt1('2');
    squareIt1(2);
    //The '?' indicates that w is a optional value
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        else
            return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 1 });
    //var sq2: string  = squareIt({h:1,w:2}); //Doesnt work because of the sq2 type
    //var sq3 = squareIt({h:1, w:2,x:3}); //Doesnt work because the object doesnt match
    var myFunc = function (h, w) {
        return h * w;
    };
    var myFunc2 = function (h, w) { return h * w; };
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=02-06-objects.js.map