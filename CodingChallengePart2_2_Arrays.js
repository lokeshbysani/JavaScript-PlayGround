function calcTip(billAmount){
    let tipAmount;
    if(billAmount>=50 && billAmount<=300){
        tipAmount = billAmount *0.15;
    }else{
        tipAmount = billAmount*0.2
    }
    return tipAmount
}

//function with ternary operator

function calculateTip(billAmount){
    return billAmount>=50 && billAmount<=300 ? billAmount*0.15 :billAmount*0.2
}

//Arrow function

const calculateTipAmount = billAmount => billAmount>=50 && billAmount<=300 ? billAmount*0.15 :billAmount*0.2

function totalAmount(billAmount,tipAmount){
    return billAmount+tipAmount;
}

const bills = [125,555,44]
let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
let totalBill = [totalAmount(bills[0],tips[0]),totalAmount(bills[1],tips[1]),totalAmount(bills[2],tips[2])]

console.log(tips)
console.log(totalBill)


tips = [calculateTip(bills[0]),calculateTip(bills[1]),calculateTip(bills[2])]
totalBill = [totalAmount(bills[0],tips[0]),totalAmount(bills[1],tips[1]),totalAmount(bills[2],tips[2])]

console.log(tips)
console.log(totalBill)