//function declartion
function calAge(birthYear){
    return 2022-birthYear;
}

console.log(calAge(1994))


//function expression

const age = function(birthYear){
    return 2022-birthYear
}
console.log(age(1994))
console.log(typeof(age))

const age2 = birthyear => 2022-birthyear

console.log(age2(1998))

const yearsUntilRetirement = birthYear => {
    const age = 2022-birthYear;
    const retirementAge = 62 - age;
    return  retirementAge
}

console.log(yearsUntilRetirement(1998))

//default parameters

const bookings = [];

const bookFlight = function(flighName,noOfPassengers =1,ticketPrice = 199){
    const booking = {
        flighName,noOfPassengers,ticketPrice
    }
    console.log(booking)
}

bookFlight('Indigo',5,199);

//pass by Value

const flight = 'Indigo1234';

const personJonas = {
    name : 'Lokesh Bysani',
    passport : '12346789'

}

function checkIn(flight,personJonas){
    flight = 'Indigo4321';
    personJonas.name = 'Mr. '+personJonas.name;
}
// Pass By Value and refernce .
checkIn(flight,personJonas);
// As its primitive value its value is not changed outside of the function
console.log(flight);
// As its an object . Changed value is refelected outside of the function as well. 
console.log(personJonas);

/*Higher Order Functions 
1. Functions that accepts other functions as an input Ex: Event listeners
2. Functions that returns other functions as an output
3. Or both 1 and 2

Helps with Abstraction. 
*/

const convertLower = function(str){
    return str.toLowerCase();
}

const convertUpper = function(str){
    return str.toUpperCase();
}

//This is a higher order function which transforms the string but really does not concern about how actually the string is transformed .
//Actual details about the transformation is included in other functions
const transformer = function(str,fn){
    console.log('Before transformation :'+str);
    console.log('After Transformation:'+fn(str));
    console.log('Transformed By:'+fn.name)
}

transformer('Lokesh Bysani',convertLower)
transformer('Lokesh Bysani',convertUpper)