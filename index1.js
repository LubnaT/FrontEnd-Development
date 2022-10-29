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
    creditBalance : function (x) { 
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


let arr =[]

const creditfntn =() =>
{
    let x= Number(document.getElementById("creditinput").value);
    if(x<=0){
        return alert("enter positive no");
    }
    User.creditBalance(x)
    document.getElementById("balance").innerHTML=User.currBal;
    const creditValue=Number(credit.innerHTML)+Number(x)
    document.getElementById("credit").innerHTML=creditValue;
    console.log(arr.push(x));
    console.log("Credit: "+arr);

}

const debitfntn =() => 
{
    let x= Number(document.getElementById("debitinput").value);
    if(x<=0 || x>User.currBal){
        return alert("Amount is Not sufficient to debit");
    }
    User.debitBalance(x)
    document.getElementById("balance").innerHTML=User.currBal;
    const debitValue = Number(debit.innerHTML)+Number(x);
    document.getElementById("debit").innerHTML=debitValue;
    console.log(arr.push(x));
    console.log("Debit:  "+arr);
}

