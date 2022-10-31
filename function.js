let a=25;

function mul(){
    let b=2;
    return a*b;
    
}


// const Increment= (function(){
//     let counter =2;
//     return function(){
//        counter= counter * 2; 
//        return counter;
//     }

// })();

// for(let i=0;i<10;i++){
//     console.log(Increment())
// }

// Increment();
// console.log(Increment());


const Inccrement= (function(x){
    let counter =5;
    return function(){
       counter= counter * x; 
       return counter;
    }

})(2);

for(let i=0;i<10;i++){
    console.log(Inccrement())
}

Inccrement();
console.log(Inccrement());