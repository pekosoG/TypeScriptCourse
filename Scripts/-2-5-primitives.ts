module demo_02_05{

    var data:any;
    var info;
    
    var doSomething = function(arg){
        return arg;
    }

    var x = doSomething(5);

    var age: number = 21;
    var score: number= 34.34;
    var rating= 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function(){ return 'yes';}
    var hasHair = !!isBald();

    //Sctring array
    function getArrayLenght(x: string[]){
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['Pekoso', 'Garcia', 'Herrera'];
    var firstPerson: string = names[0];
    console.log(getArrayLenght(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

}