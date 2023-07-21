// https://www.w3schools.com/js/js_arrays.asp

// JavaScript Arrays
// An array is a special variable, which can hold more than one value:
// we can use let or const

const cars = ['Toyota', 'Volvo', 'BMW']

// Accessing
console.log(cars[0])

const cars_1 = []
cars_1[0] = 'Toyota'
cars_1[1] = 'Volvo'
cars_1[2] = 'BMW'

// Access the Full Array
const cars_all = ['Toyota', 'Volvo', 'BMW']
document.getElementById('test').innerHTML = cars

// Converting an Array to a String
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
document.getElementById('test').innerHTML = fruits.toString()

// The length
let length = fruits.length

// Accessing the Last Array Element.
let fruit = fruits[fruits.length - 1]
