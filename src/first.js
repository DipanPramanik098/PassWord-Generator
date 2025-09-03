console.log("Closure");
let b =20;
function greet(){
    let a = 10;
    // console.log(a);
    // console.log(b);

    function meet(){
        console.log(a)
    }
    return meet;
}

// greet();
// console.log(a); error

const num = greet();
num();
