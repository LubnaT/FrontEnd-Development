function valid(){
    window.location.assign("bankui1.html");
}

let User = {
    name : "Lubna Tahreem",
    age : 25 ,
    phoneNumber : 82454954165,
    address : "Hyderabad , telangana India",
    pin : 8789,
    currBal : 2000 ,
    changeName : function (newName){ this.name = newName} ,
    changeAge : function (newAge){this.age = newAge} ,
    changePin : function (newPin){ this.pin = newPin} ,
    printDetails : function () {return { name : this.name , age :this.age ,address : this.address }},
    creditBalance : function (x) { if(x<=0){return alert("Enter Positive number");}
                                this.currBal = this.currBal +  x;
         } ,
    debitBalance : function (x) { this.currBal = this.currBal -  x },
    checkBalance : function () { return this.currBal}
}

const CP = (x) => {User.changePin(x)}
const DB = (x) => {User.debitBalance(x)}
const CB = (x) => {User.creditBalance(x)}


const Handler = (value , fn) => {
    if (value <= 0) return;
    fn(value)
} 
console.log(User);
