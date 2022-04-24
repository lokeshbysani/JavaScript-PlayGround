const markDetails = {
    firstName : 'Mark',
    lastName: 'Miller',
    mass : 92,
    height:1.95,
    completeName : function(){
        this.fullName = this.firstName+" "+this.lastName
        return this.fullName
    }
}

const johnDetails = {
    firstName : 'John',
    lastName: 'Smith',
    mass : 78,
    height:1.69,
    completeName : function(){
        this.fullName = this.firstName+" "+this.lastName
        return this.fullName
    }
}

const calcBMI = (mass,height) => mass/(height ** 2)

console.log(markDetails.completeName())
console.log(johnDetails.completeName())


markDetails.BMI = calcBMI(markDetails.mass,markDetails.height)
johnDetails.BMI = calcBMI(johnDetails.height,johnDetails.height)

if (markDetails.BMI>johnDetails.BMI){
    console.log(`${markDetails.firstName}'s (${markDetails.BMI}) BMI is higher than ${johnDetails.firstName}'s (${johnDetails.BMI}) `)
}else{
    console.log(`${johnDetails.firstName}'s (${johnDetails.BMI}) BMI is higher than ${markDetails.firstName}'s (${markDetails.BMI}) `)
}

/*
const johnDetails = ['John Smith',78,1.69]

const calcBMI = (mass,height) => mass/(height ** 2)

const markBMI = calcBMI(markDetails[1],markDetails[2])
const johnBMI = calcBMI(johnDetails[1],johnDetails[2])

if (markBMI>johnBMI){
    console.log(`${markDetails[0]} (${markBMI}) BMI is higher than ${johnDetails[0]} (${johnBMI}) `)
}else{
    console.log(`${johnDetails[0]} (${johnBMI}) BMI is higher than ${markDetails[0]} (${markBMI}) `)
}
*/