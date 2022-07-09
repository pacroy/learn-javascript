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

// Reference Types
// - Object
// - Array
// - Function

// Object
let person = {
    name: 'Maxine',
    age: 15
}
console.log(person)
person.name = 'Lucas'
person['age'] = 16
console.log(person)

// Array
let selectedColors = ['red', 'blue']
console.log(selectedColors)
console.log(selectedColors[0])
selectedColors[2] = 'green'
selectedColors[3] = 1
console.log(selectedColors)
console.log(selectedColors.length)
console.log(typeof(selectedColors)) // Array is also an Object

// Function
function greet(name, lastName) {  // Parameter is variable declared for function
    console.log('Hello, ' + name + ' ' + lastName)
}
greet('Dustin') // Argument is the actual value supplied to the function
greet('Dustin', 'Henderson')

function square(number) {
    return number * number
}
console.log(square(2))
