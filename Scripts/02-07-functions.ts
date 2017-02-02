module demo_02_07{

    var squareItSimple = function(h: number, w: number){
        return h * w;
    }

    var squareSimplest = (h: number, w: number) => h * w;

    var helloWorld: (name?: string) => void;
    helloWorld=(name?: string)=>{
        console.log('Hello '+ (name || 'unknown'));
    }

    var squareIt: (rect: {h: number, w?: number;})=> number;
    
    var rectA={h:7};
    var rectB={h:7, w:3};
    
    squareIt= function(rect){
        if(rect.w !== undefined)
            return rect.h * rect.h;
        else
            return rect.h * rect.w;
    }

}