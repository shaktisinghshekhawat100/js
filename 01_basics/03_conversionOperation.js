let score = true
//console.log(typeof score) // 33 'number'
//.log(typeof (score)) // 33 'number'

let valueInNumber = Number(score) // converts the string to a number
//console.log(typeof valueInNumber) // 33 'number'
//console.log(valueInNumber) 


//"33" -> 33
//"33ab" -> NaN
// true -> 1
// false -> 0
//undefined -> NaN
//null -> 0


let isLoggedIn = "ssbf"

let bolleanIsLoggedIn = Boolean(isLoggedIn) // converts the number to a boolean
//console.log(typeof bolleanIsLoggedIn) // 'boolean'
//console.log(bolleanIsLoggedIn) // true

// 1 = true
// 0 = false
// "" = false   
// "avad" = true

let someNumber = 33
let stringNumber = String(someNumber) // converts the number to a string
//console.log(typeof stringNumber) // 'string'
//console.log(stringNumber) // "33"

// *******operations********

let value = 3
let negValue = -value // unary negation
//console.log(negValue) // -3


//console.log((3+3)) // 6
//console.log((3-3)) // 0
//console.log((3*3)) // 9
//console.log((3/3)) // 1
//console.log(3 % 2) // 1 (modulus operator gives the remainder of the division)
//console.log(3 ** 2) // 9 (exponentiation operator raises the first operand to the power of the second operand)


let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2 // string concatenation
//console.log(str3) // "Hello World"

console.log("1" + 2) // "12" (string concatenation, number is converted to string)
console.log(1 + "2") // "12" (string concatenation, number is converted to string)
console.log("1" + 2 + 3) // "123" (string concatenation, numbers are converted to strings)
console.log(1 + 2 + "3") // "33" (string concatenation, numbers are added first, then converted to string)
