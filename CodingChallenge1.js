// 
const markWeight = 78
const markHeight = 1.69
const johnWeight = 92
const johnHeight = 1.98
let markBMI = 0
let johnBMI = 0


markBMI = markWeight / (markHeight ** 2)
johnBMI = johnWeight / (johnHeight ** 2)

console.log(markBMI)
console.log(johnBMI)
let markHigherBMI = markBMI>johnBMI
if (markHigherBMI) {
    markHigherBMI = true
    console.log("Mark's BMI is higher than John's!")
    console.log("Mark's BMI (" + markBMI + ") is higher than John's!(" + johnBMI + ")")
    console.log(`Mark's BMI ${markBMI}`)
} else {
    markHigherBMI = false
    console.log("John's BMI is higher than Mark's!")
    console.log("John's BMI (" + johnBMI + ") is higher than Mark's!(" + markBMI + ")")
    console.log(`John's BMI ${johnBMI}`)
}