/*
very useful. 
Map values and keys - Keys can be of any type unlike objects where keys should be always strings
Keywords: set(),get(),has(),delete(),size,clear()
*/

const rest = new Map();
rest.set('name','Kritunga');
rest.set(1,'Marthalli')
rest.set(2,'Koramangala')

console.log(rest)
rest
    .set('Categories',['Non-Veg','Veg'])
    .set('open',10)
    .set('close',23)
    .set(true,'We are open')
    .set(false,'We are closed')

console.log(rest)
console.log(rest.get(true)) // used to get values from Map.

const time = 21;

console.log(rest.size);
rest.delete(1); //removes the key and returns true if deleted else returns false
console.log(rest.has(1)); 
//rest.clear();

const openingHours = {
    'fri':{
        'Open' : 10,
        'close':23
    }
}

//convert objet to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)
console.log(hoursMap.get('fri'))

for(const[key,value] of rest){
    console.log(key,value)
}

//convert map to array
const newArray = [...rest]
console.log(newArray)
console.log(rest.keys())  //get all keys
console.log(rest.values()) //get all Values