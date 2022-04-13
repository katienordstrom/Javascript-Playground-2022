// // // //PRACTISING DATES

// // // var myDate = new Date (),
// // // month = myDate.getMonth();
// // // date = myDate.getDate();
// // // day = myDate.getDay(); 


// // // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// // // console.log(months[month])


// // //WEEK 8 STUDY PERIOD - TUESDAY

// // // TODO Create function that takes an array as a parameter ["1", "2", "3"] and return the array values
// // // all in number datatypes

// // // take array - convert to array as numbers

// // // const arrOfStr = ['1', '2', '3'];

// // // const arrOfNum = arrOfStr.map(str => {
// // //   return Number(str);
// // // });

// // // console.log(arrOfNum);

// // //refactor
// // // const numbers = arr => arr.map(Number)
// // //const numbers = arr => arr.map(elem => +elem)

// // //Create a function that takes any argumet -Number. Tell me if its odd or event. 

// // // function evenOrOdd(num) {
// // // if(num % 2 === 0){ //modulas or remainder - dived num by two and gives you the remainder // could use for years // remainder operator
// // // return "even"
// // // } else() {
// // //     return "odd"
// // // }
// // // }

// // function AND(a,b){
// // return a && b
// // }
// // console.log(AND(1,1))

// // function OR(a,b){
// //  return a || b
// // }
// // console.log(OR(0,1))

// // function NOT(n){
// // if (n===1) {
// //     return 0
// // } else { 
// //     return 1
// // }
// // }
// // console.log(NOT(0))


// //WEEK 8 WEDNESDAY CLASS

// //Create a function that takes a number from 1-12 and returns its corresponding month

// // var myDate = new Date (),
// // month = myDate.getMonth(month);
// // var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // console.log(months[8])

// // function nameOfMonth(num) {     //experimenting
// //     let answer = ""
// //   if(num === 1) {
// // console.log("January");
// //   } else if(num === 2) {
// // console.log("February");
// // } else if(num === 3) {
// // console.log("March"); 
// // }else if(num===4){
// // console.log("April");
// // }else if(num===5) {
// // console.log("May");
// // }else if (num===6){
// // console.log("June");
// // } else if(num===7) {
// //  console.log("July");
// // } else if(num===8) {
// // console.log("August");
// // } else if(num===9) {
// // console.log("September");
// // } else if(num === 10) {
// // console.log("October");
// // } else if(num ===11) {
// // console.log("November");
// // } else(num ===12) {
// // console.log("December");
// //     }
// //     return answer;
// // nameOfMonth(2)

// // var Xmas95 = new Date('May 15, 1998');
// // var weekday = Xmas95.getDay();

// // console.log(weekday); //Prints out day of week //5 = friday
// //create a function that given date (mm/dd/yyyy) return the day of the week as string

// // function getDay(day){
// //  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"]
// //     var date = new Date(day)
// //     return days[date.getDay()];
// // }
// // console.log(getDay(05/15/1998));

// //create a function that returns true if the length of a string is even and false if the length of string is odd

// //tristians way 
// // function isEven(string) {
// // var len = string.length; 
// // return len/2 == Math.round(len/2) 
// // }
// // console.log(isEven("hello"))

// //Alis way - ES6

// // const isEven = (string) => string.length % 2 == 0
// // console.log(isEven("katies")) //katie is false //katies is true

// //Create a function that takes 2 arguments - first one is and array and second is string
// //example - indexArray(["Katie", "Nordstrom", "NMIT"])

// // function getIndex (array, string) {
// //     return array.indexOf(string)
// // }
// // console.log(getIndex(["Q", "W", "R"], "W")) 

// //create a function which returns the total of all odd numbers up to 
// //and including the number passes as a param

// // function oddNumbersSum(num){
// //     let total = 0;
// //     for (i = 1; i <= num; i+2) {
// //     total += i; 
// //     }
// //     return total
// // }
// // console.log(oddNumbersSum(7))


// // // create a function that takes an array of strings and numbers and 
// // //filter out the array so that it retruns an array of numbers

// // // const arr = [1, 'katie', 3, 5, 'hello'];
// // // const validNumbers = arr.filter(Number);

// // // console.log(validNumbers);

// // // function onyNumbers(arr){
// // //     return arr.filter(val => Number.isInteger(val));
// // // }
// // // console.log(onlyNumbers)

// // //create a function that takes a number as an argument and increment it by one 

// // function addbyOne (num) {
// //     return num+1;
// // }
// // console.log(addbyOne(9))

// //Create a function that takes a boolean variable and return it as a string
// //example bolToStr(true) -> "true"

// // function bolToString(param){
// //     return param.toString()
// // }
// // console.log(bolToString(false))


// //Create a function that takes two numbers -num1, num2 -  in an array and returns an array 
// // containing all numbers greater than num1 and less that num 2
// //Example: 

// // function greaterThan (num1, num2, arr) {
// //    let filtered = [];
// //    let n = arr.length;
// //    for (var i=0; i<n; i++) {
// //        if (arr[i]>num1 && (arr[i]<num2)) {
// //            filtered.push(arr[i])
// //        }
// //    }
// //    return filtered
// // }
// // console.log(greaterThan(2,7,[1,2,3,4,5,6,7,8,9,10]))

// //create a function the calculates the area of a rectangle. if the arguements are 
// //invalid return an error message 

// // function rectArea(h,w){
// //     if(h < 0 || w < 0); {
// //     return "error";
// //     }
// //     return h*w
// // }
// // console.log(rectArea())

// //CLASSES

// //Example - template of class

// // class Classname {
// // constructor(param1, param2, ....){
// // this.prop1 = param1
// // this.prop2 = param2 
// // }
// // }

// // class Person { //created blueprint of class called Person -Class names have to have capital to be defined //MUST always say class
// //     constructor(name, age){ //constructor is a special method for initialising the instance of eaxh class we create - must be called constructor
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // let personOne = new Person("Katie", 23);
// // let personTwo = new Person("Iain", 26);
// // let personThree = new Person("Sarah", 44);
// // let personFour = new Person("Nicole", 21);

// // console.log(personOne.name) //Prints Katie



// // class Student {}

// // const first_year = new Student()

// // //first_year.name //calling a class

// // class Student {
// //     constructor(name, id, age){
// //         this.name = name;
// //         this.id = id;
// //         this.age = age;
// //     }
// // }

// // let studentOne = new Student("Katie", 1234, 23);
// // let studentTwo = new Student("Iain", 4321, 26);
// // let studentThree = new Student("Keith", 6789, 19);
// // let studentFour = new Student("Rhylei", 9876, 20); 
// // let studentFive = new Student("Brittany", 4567, 30);

// // console.log(studentFive.name)


// // const x = function() {} //function
// // const y = class { } //class

// // Object.getPropertyOf(x)

// // Object.getPropertyOf(y)

// // function Student(name, age) {
// //     this.name = name
// //     this.age = age
// // } //class in plain js

// // class Student {
// //     constructor(name, age){
// //     this.name = name;
// //     this.age = age;
// //     }
// // } //ES6


// //create a class called greeting
// class Greeting {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
// }

// const new_person = new Greeting("Katie", "Nordstrom")

// console.log(new_person.greet()) //brackets cause function

class Date {
    constructor (year, monthIndex, day){
this.year = year;
this.monthIndex = monthIndex;
this.day = day;
    }


    var date1 = new Date(1998, 4, 15)


console.log(date1)










