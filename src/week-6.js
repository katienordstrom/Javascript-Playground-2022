// // const { isWindows } = require("nodemon/lib/utils")

// /*console.log("hello")
// var a = "hello"
// a
// console.log(a)*/

// //window.alert("Hello World");
// //alert("Hello World")
// //Both result in popup saying hello world

// /*var welcomeMessage = "Kia Ora" //declaring variable to value Kia ora
// console.log(welcomeMessage) //prints kia ora to the console

// var myName = "Katie" //declaring myName to the value of Katie
// console.log(myName) //prints Katie to the console
// myName = "Iain" // redeclaring the value of myName to Iain
// console.log(myName) // prints iains name*/

// // var message;
// // console.log(message);
// // message = null; //you can reassign with var
// // console.log(message);
// // var myLight = false;
// // console.log(myLight);
// // myLight = true;
// // if(myLight) {
// //     console.log(myLight);
// // }
// // var score1, score2, score3, score4;
// // var a = "Hello";
// // var b = 10;
// // var c = false; 
// // console.log(a)
 
// // let firstName = "Katie" //if this was const it would result in error bc you cant redclare const
// // console.log(firstName)
// // firstName = "Kdwang"
// // console.log(firstName)

// //Two types of Scope
// //1. Local Scope
// //2. Global Scope

// // const msg = "Hello World";
// // console.log(msg)

// // if(true) {
// // const  msg = "Hello World" 
 
// // }

// // console.log(msg) //this is outside the local scope above. If moved from line 53 to line 50 it would work correct bc would be in local scope
// //local variables live within local scopes
// //2 types of local scope - Block scope and function scope

// //BLOCK SCOPE example: 

// // if(false) {
// //     const msg = "Hello World";
// //     console.log(msg)
// // } //blockscope is within conditions of if/while/for/loop/switch -anything between the 2 brackets is blockscope
// //lives in their own corresponding block
// //if you decalre something in the blockscope you cant use it outside of it - will declare an error -const outside of a blockscope would override the one in the block

// // console.log(msg) // outside the scope doesnt have access to the scope so doesnt work.

// //FUNCTION SCOPE
// // function call() {
// //     var msg = "Hello World"
// //     console.log(msg)
// // }
// // console.log(call())
// //console.log(msg)

// //GLOBAL SCOPE
// //outside of any boundaries of conditions
// // can be accessed from outside -opposite of blockscope bascially

// // var msg = "Hello World"

// // function readMsg(){
// //     console.log(msg)
// // }

// // console.log(readMsg())


// function outerFunc() {
//     var msg = "Hello World" 
//     function innerFunc() {
//         console.log(msg)
//     }
//     console.log(innerFunc())
//     }
//     console.log(outerFunc())


// /*Hello World
// Undefined
// Undefined*/ 

// //Lexical Scope is where a variable is declared within the source code in order to determine where that variable is available. 




// // run example - result - then provide in comment style and explanation of Lexical Scope


//WEEK 6 CATCHUP LESSON

// Data Types 
/*
What types? 
-Numbers
-Booleans
-Strings
-Objects

*/

// let a = 1 //A Number Data type
// let b = "Hello" //B is a String
// let c = true //C is a Boolean Datatype 
// let d; //d is undefined Datatype 

// let sum = 1+1 //with quotes = 11 without quotes = 2
// console.log(sum)

// let num = 3.334
// console.log(num)

// let test = 100 / "2" //Divided by my name = NaN. Divided by 0 = infinty/ 100/"2" in quotes = 50 (JS automatically converted it -type coercion (MDN))
// console.log(test)

// const value1 = '5';
// const value2 = 9;
// sum = Number(value1) + value2; //Add this line to make sure that value 1 is converted to number and not string.
// console.log(sum);

// let output = `The sum of value1 and value2 is ${sum}`
// // console.log(output)

// let output = `The sum of value1 ${value1} and value 2 ${value2} is sum ${sum}`
// console.log(output)

// let Str = "Katie Nordstrom"
// let Str1 = "study at NMIT"
// let fullStr = Str + " started " + Str1 //add space to make sure space between two strings
// console.log(fullStr)

// let newStr = `Hello to my new string! My name is ${Str} who started ${Str1}` //Better way to combine string values. ${adds string needed}
// console.log(newStr)


//BOOLEAN
//Boolean only has two datatypes; true and false

// let bol = true
// console.log(bol)

// console.log(5 > 3)
//explore greater than or equal 

// console.log(12<=1)
// console.log(12==12)
// console.log(2<=7)

// let test = ["Hello", "Katie", 23, 2021] // Square brackets are arrays
// console.log(test[3])

// for (i=0; i<test.length; i++) { //starts at 0; then says stop less than lenth of array; add 1 each time
// console.log(test[i])
// } 

//OBJECTS

// var cat = {
//     fur: 'black',
//     whiskers: 'many',
//     paws: 5

// }
// console.log(cat)

// let aboutCat = `my pet cat is ${fur}`

//function 

// function div(num1, num2) { //functions always return a value keyword name(values){}
//     return num1/num2;
// } 

// console.log(div(6, 3))

function fourNumbers(num1, num2, num3, num4) { //names inside function definition are parameters -must have commas
let result = num1 + num2 + num3 + num4
return`the sum of Four Numbers is ${result}`
}
console.log(fourNumbers(1, 2, 3 , 4)) // these are arguments - arguments are the values that the function is recieving - when you call the function is happens here

function test1() {

}
console.log(test1()) -will return undefined