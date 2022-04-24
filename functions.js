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