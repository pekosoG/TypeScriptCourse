interface IPoint{
    getDist(): number;
}

class Point implements IPoint{
    constructor(public x:number, public y:number){}
    getDist(){return 0}
}

var p: IPoint = new Point(1,2);
var dist = p.getDist();
toastr.info("distance :"+dist);