'use strict'
const jonas = {
    firstName : 'Lokesh',
    lastName : 'Bysani',
    age : 2022-1994,
    job : 'SoftwareEngineer',
    friends : ['Sameer','Pradeep','Naveen']
}
/*
console.log(jonas.age)
console.log(`${jonas.firstName} has ${jonas.friends.length} freinds, and his best friend is ${jonas.friends[0]}`)
*/

const openingHours = {
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
};

//Destructuring Objects

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order : function(straterIndex,mainIndex){
      return [this.starterMenu[straterIndex],this.mainMenu[mainIndex]]
    },
    
  };


 //Destructuring objects. It should be in curly braces and name of variables should be same as the name of items in object 
  const {name,location,categories} = restaurant;

  console.log(name,location,categories)
//different variable Names
  const {name:restaurantName,location:restaurantLocation,openingHours:hours} = restaurant;
  console.log(restaurantName,restaurantLocation,hours)

  //set default values
  const {menu = [],starterMenu =[]} = restaurant
  console.log(menu,starterMenu)

  //mutating variables - changing values from one variable to another varaible
  let a = 111;
  let b =222;
  const obj ={a:2,b:3,c:4};
  console.log(obj);
  
 ({a,b} = obj) ; // As if line starts with { javascript considers it as a code block. so we cannot assign anything to code block . so we have to wrap it to paranthesis

 console.log(a,b)

//Logical Assignment operators

const rest1 ={
  name:'Kritunga',
  numguests:0
};

const rest2 = {
  name:'Meghana',
  owner:'Meghana Owner'
}; 
/*
rest1.numguests = rest1.numguests || 10;
rest2.numguests = rest2.numguests ||200;
*/

//Logical or assignment operator
rest1.numguests ||= 10;
rest2.numguests ||= 10;


//Logical Nullish Operator
rest1.numguests ??= 10;
rest2.numguests ??= 10;

//Logical And Assignment
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1)
console.log(rest2)


//loop through keys in objects

for(let item in restaurant){
  console.log(item + restaurant[item])
}
//console.log(restaurant.openingHours.mon.open) // this gives error as we dont have any property as mon and we are trying to get an object on undefined
//optional chaining

console.log(restaurant.openingHours?.mon?.open) // here it checks for nullish check and if exists then it returns undefined without processing further


