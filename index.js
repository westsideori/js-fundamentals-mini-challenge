// ***** Question 1 *****
// *** Uncomment the lines below to test

let counter = 1;
counter = 2;

console.log("%cQuestion 1", "color: red") 

console.log(counter) 
// => 2
console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running

const name = "Ori";

console.log("%cQuestion 2", "color: red") 

console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
console.log("%c----------", "color: red") 



// ***** Question 3 *****
// *** Uncomment the lines below to test

function drinkWater(currentThirstLevel){
  console.log("Man I sure am thirsty");
  currentThirstLevel -= 1;
  console.log("Ahh that hits the spot");
  return currentThirstLevel;
};

console.log("%cQuestion 3", "color: red") 

console.log(drinkWater(12))
// => "Man I sure am thirsty"
// => "Ahh that hits the spot"
// => 11
console.log("%c----------", "color: red") 



// ***** Question 4 *****
// *** Uncomment the lines below to test

function sameSameButDifferent(num, maybeNum){
  if (typeof num === 'number' && typeof maybeNum === 'number' && num === maybeNum){
    return "same same";
  } else if (num === parseInt(maybeNum)) {
    return "same same (but different)"
  } else {
    return 'different'
  };
};

console.log("%cQuestion 4", "color: red") 

console.log(sameSameButDifferent(5, 5)) 
// => "same same"

console.log(sameSameButDifferent(123, "123")) 
// => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// => "different"

console.log(sameSameButDifferent(123, "122")) 
// => "different"
console.log("%c----------", "color: red") 



// ***** Question 5 *****
// *** Uncomment the lines below to test

function updateGrade(student, grade){
  student.grade = grade;
};

console.log("%cQuestion 5", "color: red")
const student1 = { name: "Duane", grade: 88 }
updateGrade(student1, 92)
console.log(student1)
// => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red")



// ***** Question 6 *****
// *** Uncomment the lines below to test

function printNameAndPhones(users){
  for (let i = 0; i < users.length; i++){
    console.log(users[i].name);
    console.log(`Cell: ${users[i].phones.cell}`)
    console.log(`Office: ${users[i].phones.office}`)
  };
};


console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]
printNameAndPhones(users)
// => "Duane"
// => "Cell: 555-123-4567"
//=> "Office: 555-456-7890"
// => "Liza"
//=> "Cell: 555-234-5678"
//=> "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test

// Write a function `triple` to be used as a callback function with the `myMap` function, 
// so that calling `myMap` with an array of numbers and your `triple` function will return a new array with each value from the original array tripled.

function triple(num){
  return num * 3
};

console.log("%cCallbacks - Question 1", "color: red")

console.log(myMap([1,2,3,4,5], triple)) 
// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
// *** Uncomment the lines below to test

// Write a function `greet` to be used as a callback function with the `myMap` function, 
// so that calling `myMap` with an array of names and your `greet` function will return a new array with a greeting for each name.

function greet(name){
  return `Hello, ${name}`;
};

console.log("%cCallbacks - Question 2", "color: red")

console.log(myMap(["Raffy", "Chase"], greet)) 
// => ["Hi, Raffy!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test

// Create a `takeATicketNumber` function that will replace the `takeANumber` function. It only takes in one argument, a `line` (array). 
// Instead of working with names, we'll have it work with ticket numbers. Calling `takeATicketNumber` should do two things:

// - Add a ticket number to the line (starting with ticket number 1)
// - Return a message `"Welcome. You are ticket number 1"`

// You will need to create a new variable to solve this; think about where that variable should be in terms of *scope*. You should not have to change the `nowServing` function.

let ticketNumber = 0;
function takeATicketNumber(line) {
  ticketNumber++
  line.push(ticketNumber)
  return `Welcome. You are ticket number ${ticketNumber}.`
};

console.log("%cScope & Closures - Question 1", "color: red")

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 2`

console.log(nowServing(line))
// => `Currently serving 1.`

console.log(nowServing(line))
// => `Currently serving 2.`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test

// Try to solve the problem above using a higher order function, and without using a global variable for the ticket number. 
// Write a higher order function called `ticketNumberGeneratorFunc` that returns a nested `takeATicketNumber` function. 
// The other functionality should remain the same. 

function ticketNumberGeneratorFunc(){
  ticketNumber = 0
  function takeATicketNumber(line) {
    ticketNumber++
    line.push(ticketNumber)
    return `Welcome. You are ticket number ${ticketNumber}.`
  };
  return takeATicketNumber;
};


console.log("%cScope & Closures - Question 2", "color: red")

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 