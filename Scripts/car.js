var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (engine) {
            if (engine == undefined)
                throw 'Please supply an engine';
            this._engine = engine;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car Engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car(new Engine(300, "v8"));
    alert(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=car.js.map