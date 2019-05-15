// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the
//contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const revNums = array => {
	return array.reverse()
}
console.log(revNums(originalArray));

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])

//
// 3. Write a function called letterCounter that logs the number
// of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

const letterCounter = () => {
let newArr = ourString.toLowerCase().split('')
let newLetter = newArr.filter(value => value.includes('l'))
return newLetter.length
}

console.log(letterCounter());


// 4. Write a function called getFib that returns the first 10 numbers of
// the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//find a method to add and return the value of each index together

var myNum = [1, 1]
const getFib = (arr) => {
	for(let i=1; i<9; i++){
	myNum.push(arr[i] + (arr[i-1]))
	} return myNum
}

console.log(getFib(myNum))





//5. Write a function called oddChecker that takes in the fullArr and uses
// a for loop to return a new array of only odd numbers. Copy and paste your code
// and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddNums(num){
	var newArr = []
	for (let i=0; i < num.length; i++) {
 	if (num[i] % 2 !== 0 && num[i] !== 'string' && num[i]!== Boolean){
		newArr.push(num[i])
 	}
	}
	return newArr
}
	console.log(oddNums(fullArr));
	//Couldn't figure out how to return without strings or booleans
