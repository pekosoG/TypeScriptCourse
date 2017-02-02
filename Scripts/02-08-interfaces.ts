module demo_02_08{
    interface SquareFunction{
        (x: number): number;
    }
    var squareItBasic:SquareFunction = (num: number ) => num * num;

    interface Rectangle{
        h: number;
        w?: number;
    }

    var squareIt: (rect: Rectangle)=> number;
    var rectA={h:7};
    var rectB={h:7, w:3};
    
    squareIt= function(rect){
        if(rect.w !== undefined)
            return rect.h * rect.h;
        else
            return rect.h * rect.w;
    }

    interface Person{
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }
    var p: Person = {
        name: 'Pekoso',
        age: 24,
        kids: 1,
        calcPets: function(){
            return this.kids * 2;
        },
        makeYounger: function(years: number){
            this.age-years;
        },
        greet: function(msg: string){
            return msg +', '+this.name;
        }
    }
}