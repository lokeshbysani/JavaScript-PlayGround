//Working with Strings. Strings are primitives and immutables
const airline = 'Indigo';
const plane = 'A320';

let testVar ;
testVar =  airline[0];
testVar = airline.length;
testVar =  airline.indexOf('n') 
testVar =airline.lastIndexOf('na')  //returns -1 if  does not exists
testVar = airline.slice(1,4) //returns substring does not include end parameter 

console.log(testVar)

const checkMiddleSeat = function(seat){
    //B and E are midde seats
    if(seat.slice(-1) === 'B' || seat.slice(-1) === 'E'){
        console.log('Middle Seat')
    }else{
        console.log('Not a Middle Seat')
    }
}

airline.toLowerCase();
airline.toUpperCase();
airline.trim();
airline.trimStart ();
airline.trimEnd();
airline.replace('n','H') //returns a new string does not mutate the original string
const multiNames = 'InghItgh'
const testReplace = multiNames.replaceAll('I','H'); //replace all occuranc
multiNames.startsWith('I');
multiNames.endsWith('j');
multiNames.includes('HJ');
let newString = 'A+Very+Nice+String';
newString.split('+'); //returns an array
const employeeName = ['Mr','Lokesh'.toLowerCase(),'Bysani'.toUpperCase()].join(' ') // Create a string by joining all elements of array
console.log(employeeName)

const capitalizeName = function(name){
    const names = name.split(' ');
    const nameArray = []
    for(const word of names){
       nameArray.push(word[0].toUpperCase()+word.slice(1))
    }
    return nameArray.join(' ')
}

const properName = capitalizeName('he is mr lokesh bysani');
properName.padStart(30,' ')
properName.padEnd(30,' ')

const maskCreditCard = function(number){
    const strNumber = String(number);
    const lastFour = strNumber.slice(-4)
    return lastFour.padStart(strNumber.length,'*')

}

console.log(maskCreditCard(78457895478597854))

const message = 'Bad Weather...All Departures Delayed   '

console.log(message.repeat(5))