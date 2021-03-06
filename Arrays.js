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




const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order : function(straterIndex,mainIndex){
      return [this.starterMenu[straterIndex],this.mainMenu[mainIndex]]
    },
    orderPasta : function(ing1,ing2,ing3){
        return console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`)
    },
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

/*
The spread operator (...) unpacks the elements of an iterable object.
spread operator ...{arrayname} always on the right side of equal sign
The rest parameter (...) packs the elements into an array / always on the left side of the equal sign 
*/
 
const userNames = ['a','b','c']
console.log(userNames)
const newUserNames = ['e','f',...userNames]
console.log(newUserNames)
console.log(...newUserNames)

const newMenu = [...restaurant.mainMenu,'newmenuitem']
console.log(newMenu)

//copy array
const mainMenuCopy = [...restaurant.mainMenu]
//join 2 arrays
const updatedMenu = [...newMenu,...mainMenuCopy]
console.log(updatedMenu)

const fullName = 'Lokesh Bysani'
console.log(...fullName)




/*
The spread operator (...) unpacks the elements of an iterable object.
The rest parameter (...) packs the elements into an array.
*/

const arrJS = [1,2,3,5,8,9,'Hello','JavaScript']
arrJS.length // return total number of elements in array
const [a,b,...newArrJS] = arrJS
console.log("New ArrayJS"+ newArrJS) 

//Adding / removing elements


arrJS.push(26)  // addds element at the end
arrJS.unshift(89) // adds element at the start
console.log(arrJS)
arrJS.pop() // removes element at the end
arrJS.shift() // removes element at the start
console.log(arrJS)

//splice() - This method modifies the original array and returns the removed elements as a new array.
// Array.splice(start, removeCount, newItem, newItem, newItem, ...)

arrJS.splice(2,2) //removes two elements from the start index 
arrJS.splice(2,2,'Bysani','Hello') // removes two elements at index 2 and adds elements to array at the index 2
arrJS.splice(2,0,'abcd','hyiu') // adds element at index 2 without removing any elements
let days = ['Mon','Tue','Wed','Thu','Fri','Sat']
arrJS.splice(2,0,...days)
console.log(arrJS)

//arr.slice(start, end) - slice method returns new array with the elements specified  start and end are optional 
const new_arr = days.slice() // copy all elements
console.log(new_arr)
const new_arr2 = days.slice(1) // copy elements from index 1 till end
console.log(new_arr2)
const new_arr3 = days.slice(1,3) //copy elemnts from index 1 till 3 .end index is not included
console.log(new_arr3)
const new_arr4 = days.slice(-3) // slicing the array from third-to-last.-1 is last,-2 is last but one and soon
console.log(new_arr4)
days = ['Mon','Tue','Wed','Thu']
console.log(new_arr4)


let human = {
    name: "David",
    age: 23,
  };

let arr = [human, "Nepal", "Manager"]; // it copies the reference of human object to arr.
let new_arr5 = arr.slice();  //if any changes done to the human object in this array it reflects in arr as well.


new_arr5[0].name = 'Lokesh'
console.log(new_arr5)
console.log(arr)


//Methods to Find Elements
const starterMenu = ['a','b','c','d','Lokesh Bysani']
const userName = 'a'
console.log(starterMenu.indexOf('e'));  //retunrs index of search element. If element not found then -1. i multiple then returns first index
console.log([NaN].indexOf(NaN)) // returns -1
console.log(starterMenu.includes(userName)); //return true or false
console.log([NaN].includes(NaN));
console.log([-0].includes(+0));
//find and find index - check videos

/*
Logical Operators
Can use any data type 
can return any datatype
short-circuting 
*/
console.log(3 || 'hello') //  || (if first operand is truthy then that operator is returned. in this case JS does not consider second operand itself) 
console.log(0 || 'hello') 
console.log(true || 0)
console.log(undefined || null)  // As both are falsy values JS checks for both operands and returns the second one
console.log(null || undefined)
let ab;
console.log('g' && 'h') // it checks for all values in the expression. Both && and || checks for truthy or falsy values
console.log(ab && 0) //if both are falsy then returns first value

//nullish coalescing operator ?? check for only null or undefined
console.log('h' ?? 'g')
console.log(ab ?? 'h') // only if first operand is null or undefined then it would proceed to next operand


//Looping arrays
//for of loop. Can use continue and break
const allPlayers = [
  'Neuer',       'Pavard',
  'Martinez',    'Alaba',
  'Davies',      'Kimmich',
  'Goretzka',    'Coman',
  'Muller',      'Gnarby',
  'Lewandowski', 'Burki',
  'Schulz',      'Hummels',
  'Akanji',      'Hakimi',
  'Weigl',       'Witsel',
  'Hazard',      'Brandt',
  'Sancho',      'Gotze'
];
console.log('Writing all players')
for(const player of allPlayers){
  console.log(player)
};

console.log([...allPlayers.entries()])
//get index of item using for of loop
for(const [index,playerName] of allPlayers.entries()){
  console.log(`${index+1} : ${playerName}`)
}


for(let i=0;i<allPlayers.length;i++){
  console.log(allPlayers[i]+'at index'+i)
}
//for in loop . it provides the index of each element in array. Its mainly used to loop through objects
for(let x in allPlayers){
  console.log(x,allPlayers[x])
}

