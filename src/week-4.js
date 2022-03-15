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

// JavaScript if Statements - you can put conditions for a specific type of data you need - eg login credentials
var number = 10
if (number === 10) {
    console.log("answer = " + number)
} 
else {
    console.log("error")
} 
// === is strict quality. dont just just check the type of variable but check that it is 10! Otherwise JS might manipulate it and change something.

// const and let - var you can reassign the value-causes problems eg name, you could go back and change. 
//if you dont want to change the data type of that  - const will keep this STRICLY thesame. 

let num = 3 //swap let to const to see it stay strictly the same. 
console.log(num)


// num = "5" does not work bc youre reassigning. Says error. Cannot chnage the value PERIOD with const. 
//Let allows a bit of flexibilty. You can use the number decalare in any other datatype. 
//eg address - you can move house. const would not let you update it. let would allow you to update. 



 
