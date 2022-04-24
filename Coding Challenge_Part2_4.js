const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const totals = [] ;


const calculateTipAmount = billAmount => billAmount>=50 && billAmount<=300 ? billAmount*0.15 :billAmount*0.2

for(let bill of bills){
    const tip = calculateTipAmount(bill);
    tips.push(calculateTipAmount(bill));
    totals.push(tip+bill)
}

console.log(tips,totals)
/*
for(i=0;i<bills.length;i++){
    totals.push(bills[i]+tips[i])
}
*/
function calcAverage(bills){
    let totalBill =0 ;
    for (let bill of bills){
        totalBill += bill;
    }
    return totalBill/bills.length
}

console.log(calcAverage(totals))