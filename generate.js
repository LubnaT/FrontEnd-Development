const arr =[1,2,3,4,5,6,7,8,9,10];

const array = [];

function generate(){
    let y = document.getElementById("in1").value;
    arr.forEach(x =>{
        array.push(x*y);
        
    })
    console.log(array);
}



