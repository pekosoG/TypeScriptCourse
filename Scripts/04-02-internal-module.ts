interface IRectangle{
    heigth:number;
    width:number;
    getArea():number;
}

namespace Shapes{
    export class Rectangle implements IRectangle{
        constructor(public heigth: number, public width: number){}
        getArea(){ return this.heigth* this.width;}
    }
}

var rect: IRectangle = new Shapes.Rectangle(10,4);