// // WEEK 7

// //Write a function to reverse and array
// // Example: reverseArray([1,2,3,4]) > [4,3,2,1]

// // console.log("Hello World")

// // function reverseArray(arr) {
// //     return arr.reverse()
// // }
// // console.log(reverseArray([1,2,3,4]))

// // Create a function that accepts an array and return the last element
// //Example: lastELement(["Katie", 23, "Purple"]) --try return purple

// // function lastElement(arr) {
// //     return arr.length-1
  
// // }
// //   console.log(lastElement([1,2,3,4,5]))



// //Create a function that takes an array and returns it as a string

// // function tostringarray(arr) {

// //     return arr.toString()

// // }

// // const result = tostringarray(["ali", 2, 3, 4, "green"])
// // console.log(typeof result)

// // function ArrayToString(arr){
// //     return arr.join('')

// // }
// // console.log(ArrayToString(["Katie ", 23, " Purple"]))


// //create a function that takes an array and return the datatypes of the array values in a new array
// //ArrayValueTypes=(["Ali", 12, "Blue", [], True,]) -> [string, number, string, object, boolean]

// // function arrayValueTypes(arr) {
// //     var newArray = []; 

// // for (var i=0; i < arr.length; i++){
// //     newArray[i] = typeof arr[i]
// // }
// // return newArray
// // }

// // const arrayValueTypes = arr => arr.map(x => typeof x)

// //AT HOME LEARNING 
// // function plus (a, b) { //declared a function | named it plus | gave it the parameters a and b
// // var sum = a+b; //told the function to add a and b
// // return sum; //tells it to retrun the sum
// // }
// // console.log(plus(7,4)) //prints the function to console

// // //Another way to write a function -Definition expression
// // var plus = function(a, b) { 
// //     return console.log(a+b);
// // }
// // plus(2,2)

// //Revising objects

// // var calc = {
// //     status: "awesome",
// //     plus: function(a, b) {
// //         return (
// //             console.log(this),
// //             console.log(a+b),
// //             console.log(this.status)
// //         )
// //     }
// // }
// // calc.plus(2,3)

// //Revising if statements

// // let price = 27;
// // if (price > 20) {
// //     console.log("More than 5")
// // }

// // else if (price < 5) {
// //     console.log("less than 5")
// // }

// // const dateCreate = {
// //     month1: ["January", 01, 31], 
// //     month2: ["February", 02, 28],
// //     month3: ["March", 03, 31],
// //     month4: ["April", 04, 30],
// //     month5: ["May", 05, 31],
// //     month6: ["June", 06, 30],
// //     month7: ["July", 07, 31],
// //     month8: ["August", 08, 31],
// //     month9: ["September", 09, 30],
// //     month10: ["October", 10, 31],
// //     month11: ["November", 11, 30],
// //     month12: ["December", 12, 31]
// //   };
  
// //   // Display some data from the object:
// //  console.log(dateCreate.month1.num)



 

// //BRAD TRAVERSY CRASH COURSE

// // const person = {
// //   firstName: 'Katie',
// //   lastName: 'Nordstrom',
// //   age: 23,
// //   hobbies: ['Crochet', 'Music', 'Eating'],
// //   address: {
// //     street: '31B Abraham Heights',
// //     city: 'Nelson',
// //     country: 'New Zealand'
// //   }
// // }
// // // console.log(person.firstName, person.hobbies[2], person.address.city) //how to print object

// // person.email = "katien@windowslive.com"; //added email to object
// // console.log(person) //shows email is present in object

// // ARRAY OF OBJECTS
// // const todos = [
// //   {
// //     id: 1,
// //     text: "Take out trash",
// //     isCompleted: true
// //   },
// //   {
// //     id: 2,
// //     text: "Meeting with boss",
// //     isCompleted: true
// //   },
// //   {
// //     id: 3,
// //     text: "Dentist Appointment",
// //     isCompleted: false
// //   },
// // ]; 
// // console.log(todos[1].text) //access array and then the object

// // //FOR LOOPS
// // for(let i=0; i<10; i++) { //this is going to run until i<10 is true. Starts at 0, gets to 1 beacuse of the increment. Once it gets to 9 it is no longer true bc i has to be less than 10
// // console.log(`For Loop Number: ${i}`); //prints 0-9
// // }

// // //WHILE LOOPS  -bit oldschool. variable is set outside of the loop
// // let i=0;
// // while(i < 10) {
// //   console.log(`While Loop Number: ${i}`);
// //   i++;
// // }

// //LOOP THROUGH ARRAYS
// //could use for loop
// // for(let i=0; i < todos.length; i++) { //because length will give us the number of items in the array
// // console.log(todos[i].text);
// // } 
// //this is not really the best way to loop through an array

// //FOR OF LOOPS
// // for (let todo of todos) {
// //   console.log(todo.text)
// // }

// //HIGH ORDER ARRAY METHODS -suggested iteration with arrays
// //forEach, map, filter

// //forEach

// // todos.forEach(function(todo) {
// //   console.log(todo.text);
// // })

// //Map

// // const todoText = todos.map(function(todo) {
// //   return todo.text;

// // });

// //Filter
// // const todoCompleted = todos.filter(function(todo) {
// // return todo.isCompleted === true;

// // }).map(function(todo){
// //   return todo.text
// // })

// // console.log(todoCompleted)


// //CONDITIONALS

// // const x = 5; //change number here to see results

// // if(x === 10) { 
// // console.log("x is 10")
// // } else if(x > 10) { 
// // console.log("x is greater than 10")
// // } else {
// //   console.log("x is less than 10")
// // }

// // const x = 7; //change number here to see results
// // const y = 11;


// // if(x > 5 && y > 10) { // || means or. && means and(both must be true)
// //   console.log("X is more than 5 or Y is is more than 10")
// // } 

// //Turnary Operator --assigns variables based on conditon 
// //if its true or not true in simple terms
// // const x =  11 

// // const colour = x > 10 ? "red" : "blue" ;  //? is term for then(turnary operator)

// // console.log(colour) //greater than 10 will show red. Less than 10 will show blue

// //SWITCHES -another way to evauate condition

// //  const x =  11

// // const colour = "green" ; //prints colour is not red or blue

// // switch(colour) {
// //   case 'red':
// //   console.log("Colour is red");
// //   break;
// //   case 'blue':
// //   console.log("Colour is blue");
// //   default:
// //     console.log("Colour is not red or blue");
// //     break;
// // }

// //FUNCTION

// // function addNums(num1 = 1, num2 = 1) { 
// // return num1 + num2;
// // }
// // console.log(addNums(5, 5));

// //ES6 Way 
// // const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// // console.log(addNums(5,5));

// //OBJECT ORIENTATED PROGRAMMING

// // //Constructer Function
// // function Person(firstName, lastName, dob){
// // this.firstName = firstName;
// // this.lastName = lastName;
// // this.dob = new Date (dob);
// // }

// // Person.prototype.getBirthYear = function () {
// //   return this.dob.getFullYear();
// // }

// // Person.prototype.getFullName = function() {
// //   this.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`
// //   }
// // }

// //ES6 CLASSES -looks nicer and easier
// class Person{
//   constructor(firstName, lastName, dob) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.dob = new Date (dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// //Instantiate object
// const person1 = new Person("Katie", "Nordstrom", "05-15-1998"); //needs to be american format
// const person2 = new Person("Iain", "Henderson", "04-05-1996");

// // // console.log(person2.dob.getFullYear());

// // // console.log(person1.getBirthYear());
// // // console.log(person1.getFullName());

// // //prototypes
// console.log(person2.getFullName)
// console.log(person1)








