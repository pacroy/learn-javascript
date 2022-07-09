// This is a comment
console.log('Hello world!')

let nickName = 'Max'
console.log(nickName)

let firstName = 'Maxine', lastName = 'Mayfield'

const interestRate = 0.3
// interestRate = 1 // This will end up in TypeError
console.log(interestRate)

let isApproved = false
let undefinedVariable = undefined   // Variable is undefined when declared
let nullVariable = null // We use null to clear the value

// JavaScript is a dynamic (dynamically-typed) language
console.log(typeof(nickName))   // string
nickName = 1
console.log(nickName)
console.log(typeof(nickName))   // number
nickName = 30.1
console.log(nickName)
console.log(typeof(nickName))   // number
nickName = undefined
console.log(nickName)
console.log(typeof(nickName))   // undefined
nickName = null
console.log(nickName)
console.log(typeof(nickName))   // object
