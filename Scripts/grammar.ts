//in here we define the parameters as numbers
function addNumbers(n1: number, n2:number){
    alert(n1+n2);
}
//Doesnt let us use the function like that because the parameter is suppossed to be a number
addNumbers(1,'ee');

init:(s:string, p:string,c:string)=> void 
    = function(start,pause,cancel){
        console.log(start);
    };

