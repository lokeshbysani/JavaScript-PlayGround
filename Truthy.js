/*
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean(NaN))
*/
console.log(18 === 18)
console.log(18 == 18)

console.log('18' === 18)
console.log('18' == 18)

const hasDriversLicense = true;
const hasGoodVision = false;
const shouldDrive = hasDriversLicense && hasGoodVision
const canDrive = hasDriversLicense || hasGoodVision
console.log(shouldDrive)
console.log(canDrive)
console.log(!canDrive)
