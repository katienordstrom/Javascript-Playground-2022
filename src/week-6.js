// const { isWindows } = require("nodemon/lib/utils")

/*console.log("hello")
var a = "hello"
a
console.log(a)*/

//window.alert("Hello World");
//alert("Hello World")
//Both result in popup saying hello world

/*var welcomeMessage = "Kia Ora" //declaring variable to value Kia ora
console.log(welcomeMessage) //prints kia ora to the console

var myName = "Katie" //declaring myName to the value of Katie
console.log(myName) //prints Katie to the console
myName = "Iain" // redeclaring the value of myName to Iain
console.log(myName) // prints iains name*/

// var message;
// console.log(message);
// message = null; //you can reassign with var
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if(myLight) {
//     console.log(myLight);
// }
// var score1, score2, score3, score4;
// var a = "Hello";
// var b = 10;
// var c = false; 
// console.log(a)
 
// let firstName = "Katie" //if this was const it would result in error bc you cant redclare const
// console.log(firstName)
// firstName = "Kdwang"
// console.log(firstName)

//Two types of Scope
//1. Local Scope
//2. Global Scope

// const msg = "Hello World";
// console.log(msg)

// if(true) {
// const  msg = "Hello World" 
 
// }

// console.log(msg) //this is outside the local scope above. If moved from line 53 to line 50 it would work correct bc would be in local scope
//local variables live within local scopes
//2 types of local scope - Block scope and function scope

//BLOCK SCOPE example: 

// if(false) {
//     const msg = "Hello World";
//     console.log(msg)
// } //blockscope is within conditions of if/while/for/loop/switch -anything between the 2 brackets is blockscope
//lives in their own corresponding block
//if you decalre something in the blockscope you cant use it outside of it - will declare an error -const outside of a blockscope would override the one in the block

// console.log(msg) // outside the scope doesnt have access to the scope so doesnt work.

//FUNCTION SCOPE
// function call() {
//     var msg = "Hello World"
//     console.log(msg)
// }
// console.log(call())
//console.log(msg)

//GLOBAL SCOPE
//outside of any boundaries of conditions
// can be accessed from outside -opposite of blockscope bascially

// var msg = "Hello World"

// function readMsg(){
//     console.log(msg)
// }

// console.log(readMsg())


//Keyword Lexical Scope
function outerFunc() {
    var msg = "Hello World"
    function innerFunc() {
        console.log(msg)
    }
    console.log(innerFunc())
    }
    console.log(outerFunc())

//What is lexical scope JavaScript MDN?
//Lexical Scope is where a variable is declared within the source code in order to determine where that variable is available. 




// run example - result - then provide in comment style and explanation of Lexical Scope