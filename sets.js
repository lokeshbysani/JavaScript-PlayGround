/*
All About Sets - collection of unique values
no duplicates 
order of elements is iterable
you cannot get any values from the set. Non indexable
*/
//declaration
const orderSet = new Set(['pasta','Pizza','pasta']);
const stringSet = new Set('Jonas')

console.log(orderSet.size) // returns no of elemnts
console.log(orderSet.has('paasta')) //checks if elements exists in set
console.log(orderSet)
console.log(stringSet)
orderSet.add('GarlicBread')  //adds an element to Sets
orderSet.delete('pasta') //delete an elements from Set
console.log(orderSet)
orderSet.clear() //deletes all elements from the sets

//Looping through elements in sets
for(const order of orderSet) console.log(order)

const staffRoles = ['Waiter','Cleaner','Receptionaist','Waiter','Cleaner','Manager']

const uniqueStaffRoles = new Set(staffRoles)
console.log(uniqueStaffRoles)
//creating an array from set using spread operator
const uniqueStaff = [...uniqueStaffRoles]
console.log(uniqueStaff)