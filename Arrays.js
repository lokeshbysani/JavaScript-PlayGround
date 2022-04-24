/*
const fruits = ['Apple','Mangoes','Gauva','Pomegronate']
const years = new Array(1991,1992,1993,1994)
console.log(fruits.length)
console.log(fruits[fruits.length])
console.log(years[0])
fruits[1] = 'Ice Apple'
console.log(fruits)

console.log(years+10)   //converts etire array to string and then appends it
console.log(years-10)  // NaN
*/
function printForecast(temparatures){
    let text = '';
    for(let i = 0;i<temparatures.length;i++){
        text += `...${temparatures[i]}ºC in ${i+1} days`
    }
    return text
}

console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))