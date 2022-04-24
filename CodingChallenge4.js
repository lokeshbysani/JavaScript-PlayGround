'use strict';
const billAmount = 52;
let tipAmount ;

//Ternary Operator
tipAmount = billAmount >=50 && billAmount <=300 ? billAmount*0.15 : billAmount*0.2;

console.log(`The bill was ${billAmount}, the tip was ${tipAmount}, and the total value ${billAmount+tipAmount}`)
