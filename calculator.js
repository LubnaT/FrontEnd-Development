function handler(fn){
    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);

    fn(a,b);
}

function add(a,b){
    console.log(a+b+": Addition");
}

function sub(a,b){
    console.log(a-b+": Subtraction");
}

function mul(a,b){
    console.log(a*b+": Multiplication");
}

function div(a,b){
    console.log(a/b+": Division");
}

function remain(a,b){
    console.log(a%b+": Remainder");
}

function avg(a,b){
    console.log(a+b/2+": Average");
}

function reset(){
    document.getElementById("input1").value=" ";
    document.getElementById("input2").value=" ";
}
// let btn = document.querySelector('button');
// let inputs = document.querySelectorAll('input');

// btn.addEventListener('click', () => {
//     inputs.forEach(input => input.value = ' ');
// });