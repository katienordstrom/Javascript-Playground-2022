// //PRACTISING DATES

// var myDate = new Date (),
// month = myDate.getMonth();
// date = myDate.getDate();
// day = myDate.getDay(); 


// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log(months[month])


//WEEK 8 STUDY PERIOD - TUESDAY

// TODO Create function that takes an array as a parameter ["1", "2", "3"] and return the array values
// all in number datatypes

// take array - convert to array as numbers

// const arrOfStr = ['1', '2', '3'];

// const arrOfNum = arrOfStr.map(str => {
//   return Number(str);
// });

// console.log(arrOfNum);

//refactor
// const numbers = arr => arr.map(Number)
//const numbers = arr => arr.map(elem => +elem)

//Create a function that takes any argumet -Number. Tell me if its odd or event. 

// function evenOrOdd(num) {
// if(num % 2 === 0){ //modulas or remainder - dived num by two and gives you the remainder // could use for years // remainder operator
// return "even"
// } else() {
//     return "odd"
// }
// }

function AND(a,b){
return a && b
}
console.log(AND(1,1))

function OR(a,b){
 return a || b
}
console.log(OR(0,1))

function NOT(n){
if (n===1) {
    return 0
} else { 
    return 1
}
}
console.log(NOT(0))
















