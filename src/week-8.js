// // //PRACTISING DATES

// // var myDate = new Date (),
// // month = myDate.getMonth();
// // date = myDate.getDate();
// // day = myDate.getDay(); 


// // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// // console.log(months[month])


// //WEEK 8 STUDY PERIOD - TUESDAY

// // TODO Create function that takes an array as a parameter ["1", "2", "3"] and return the array values
// // all in number datatypes

// // take array - convert to array as numbers

// // const arrOfStr = ['1', '2', '3'];

// // const arrOfNum = arrOfStr.map(str => {
// //   return Number(str);
// // });

// // console.log(arrOfNum);

// //refactor
// // const numbers = arr => arr.map(Number)
// //const numbers = arr => arr.map(elem => +elem)

// //Create a function that takes any argumet -Number. Tell me if its odd or event. 

// // function evenOrOdd(num) {
// // if(num % 2 === 0){ //modulas or remainder - dived num by two and gives you the remainder // could use for years // remainder operator
// // return "even"
// // } else() {
// //     return "odd"
// // }
// // }

// function AND(a,b){
// return a && b
// }
// console.log(AND(1,1))

// function OR(a,b){
//  return a || b
// }
// console.log(OR(0,1))

// function NOT(n){
// if (n===1) {
//     return 0
// } else { 
//     return 1
// }
// }
// console.log(NOT(0))


//WEEK 8 WEDNESDAY CLASS

//Create a function that takes a number from 1-12 and returns its corresponding month

// var myDate = new Date (),
// month = myDate.getMonth(month);
// var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[8])

// function nameOfMonth(num) {
//     let answer = ""
//   if(num === 1) {
// console.log("January");
//   } else if(num === 2) {
// console.log("February");
// } else if(num === 3) {
// console.log("March"); 
// }else if(num===4){
// console.log("April");
// }else if(num===5) {
// console.log("May");
// }else if (num===6){
// console.log("June");
// } else if(num===7) {
//  console.log("July");
// } else if(num===8) {
// console.log("August");
// } else if(num===9) {
// console.log("September");
// } else if(num === 10) {
// console.log("October");
// } else if(num ===11) {
// console.log("November");
// } else(num ===12) {
// console.log("December");
//     }
//     return answer;
// nameOfMonth(2)

// var Xmas95 = new Date('May 15, 1998');
// var weekday = Xmas95.getDay();

// console.log(weekday); //Prints out day of week //5 = friday
//create a function that given date (mm/dd/yyyy) return the day of the week as string

// function getDay(day){
//  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"]
//     var date = new Date(day)
//     return days[date.getDay()];
// }
// console.log(getDay(05/15/1998));

//create a function that returns true if the length of a string is even and false if the length of string is odd

//tristians way 
// function isEven(string) {
// var len = string.length; 
// return len/2 == Math.round(len/2) 
// }
// console.log(isEven("hello"))

//Alis way - ES6

// const isEven = (string) => string.length % 2 == 0
// console.log(isEven("katies")) //katie is false //katies is true

//Create a function that takes 2 arguments - first one is and array and second is string
//example - indexArray(["Katie", "Nordstrom", "NMIT"])

// function getIndex (array, string) {
//     return array.indexOf(string)
// }
// console.log(getIndex(["Q", "W", "R"], "W")) 

//create a function which returns the total of all odd numbers up to 
//and including the number passes as a param

// function oddNumbersSum(num){
//     let total = 0;
//     for (i = 1; i <= num; i+2) {
//     total += i; 
//     }
//     return total
// }
// console.log(oddNumbersSum(7))


// create a function that takes an array of strings and numbers and 
//filter out the array so that it retruns an array of numbers

// const arr = [1, 'katie', 3, 5, 'hello'];
// const validNumbers = arr.filter(Number);

// console.log(validNumbers);

// function onyNumbers(arr){
//     return arr.filter(val => Number.isInteger(val));
// }
// console.log(onlyNumbers)

//create a function that takes a number as an argument and increment it by one 

function addbyOne (num) {
    return num+1;
}
console.log(addbyOne(9))





















