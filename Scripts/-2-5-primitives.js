var demo_02_05;
(function (demo_02_05) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    var age = 21;
    var score = 34.34;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    //Sctring array
    function getArrayLenght(x) {
        var len = x.length;
        return len;
    }
    var names = ['Pekoso', 'Garcia', 'Herrera'];
    var firstPerson = names[0];
    console.log(getArrayLenght(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
})(demo_02_05 || (demo_02_05 = {}));
//# sourceMappingURL=-2-5-primitives.js.map