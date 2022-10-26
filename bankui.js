function valid(){
    window.location.assign("bankui1.html");
}

function creditfntn(){
    const value = creditinput.value;
    const creditValue = Number(credit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    credit.innerText = creditValue;
    balance.innerText = balanceValue;
    creditinput.value = '';

}

function debitfntn(){
    const value = debitinput.value;
    if (Number(value) === 0) {
        alert("You don't have any balance to withdraw");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const debitValue = Number(debit.innerText) + Number(value);
        debit.innerText = debitValue;
        balance.innerText = balanceValue;
        debitinput.value = '';
    }
}