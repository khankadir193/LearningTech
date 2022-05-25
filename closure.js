function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    //y();
    a = 100;
    return y;
}
let z = x();
console.log(z)
z()


/////////////////////////////// second approach............................

function first(){
    let b = 900;
    function second(){
        var a = 7;
        
        function third(){
            console.log(a,b)
        }
        third();
    }
    second()
}

first()
