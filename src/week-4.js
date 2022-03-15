//TODO 
/* 
Javascript Variables
*/
var fullName = "Katie Nordstrom"
var classCode = 503

console.log(fullName)
console.log(classCode)

//Javascript Objects
var full_name = 
{
first_name: "Katie",
last_name: "Nordstrom",
course_number:503
}
console.log(full_name)
console.log(full_name.first_name)
//NOTE stick with dot notation
console.log(full_name["last_name"])
//NOTE bracket notation works but requires brackets and quotations - more difficult.

//JavaScript Functions -help us to write code more effectiently and reuse that block of code anywhere we want in our software files. IMproves readability of our code. 

function addTwoNumbers(num1, num2) {
return num1+num2
}
console.log(addTwoNumbers(2, 3))

function addThreeNumbers(num1, num2, num3) {
    return num1+num2+num3
}

console.log(addThreeNumbers(2,5,7))

//JavaScript Loops -there to be used to execute a certain part of code several times. Happens repeatedly -until the condition is completed. 
for (var i=0; i<10; i++){
console.log(i)
}

// JavaScript if Statements
var number = 9
if (number === 10) {
    console.log("answer = " + number)
} else {
    console.log("error")
}


 
