class Engine {
    constructor(public horsePower: number, public engineType: string){}
}

class Car{
    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(engine: Engine){
        if(engine == undefined) throw 'Please supply an engine';
        this._engine=engine;
    }

    start(): void{
        alert('Car Engine started '+this._engine.engineType);
    }
}

window.onload=function(){
    var car= new Car(new Engine(300,"v8"));
    alert(car.engine.engineType);
    car.start();
}