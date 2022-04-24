const fruits = ['Apple','Mangoes','Gauva','Pomegronate']
/*
for (let i = 0;i<fruits.length;i++){
    console.log(fruits[i],typeof(fruits[i]))
}
*/
for (let fruit in fruits ){
    console.log(fruit)
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
    console.log(x)
  text += person[x];
}

console.log(text)

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    console.log(x)
  txt += numbers[x];
}
console.log(txt)

const cars = ["BMW", "Volvo", "Mini"];

text = "";
for (let x of cars) {
    console.log(x)
  text += x;
}
console.log(text)