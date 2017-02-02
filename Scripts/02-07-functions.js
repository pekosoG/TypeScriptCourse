var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknown'));
    };
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 3 };
    squareIt = function (rect) {
        if (rect.w !== undefined)
            return rect.h * rect.h;
        else
            return rect.h * rect.w;
    };
})(demo_02_07 || (demo_02_07 = {}));
//# sourceMappingURL=02-07-functions.js.map