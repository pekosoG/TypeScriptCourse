var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 3 };
    squareIt = function (rect) {
        if (rect.w !== undefined)
            return rect.h * rect.h;
        else
            return rect.h * rect.w;
    };
    var p = {
        name: 'Pekoso',
        age: 24,
        kids: 1,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age - years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=02-08-interfaces.js.map