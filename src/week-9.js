// // Create a function that takes an array and returns both the minimum and maximum numbers in order.
// // Declaring function findmax that will take the value of an array
// function findmax (arr) {
//     let array = [];
//     let min = arr[0];
//     let max = arr[0];
// // For loop to set index to 0, then if index is less than array length, increment. This will happen until the array length is hit
// for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         } 
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     array.push(min);
//     array.push(max);
//     return array;
//    }
// //    console.log(findmax([1,2,3,4,5]))





//Create a function that concantenates a number of arrays together
//
// let array1 = ([1,2,3,4,5], [6,7,8,9])

// function arraysConcat (... args){
// return[].concat(...args)
// }
// console.log(arraysConcat(array1))

// Spread Operator 
/*Spread syntax (...) allows an an array expression or string 
to be expanded in places where zero or more arguments (for function calls) or 
elements (for array literals) are expected, or an object expression to be 
expanded in places where zero or more key-value pairs (for object literals) are expected.*/
// Infinity
// The global property Infinity is a numeric value representing infinity.




//create a function that takes an array of numbers, a string and returns an array of numbers as 
//per the following rules:
//Array rules:

// let a1 = [4,3,2,1]
// let a2 = [5,6,7,8,9]
// let a3 = [,4,5,6,7]

// function arrayRules (arr, str) {
// switch(str){
// case 'Asc':
//     return arr.sort(a, b => a-b);

// case 'Dec':
//     return arr.sort(a, b => b - a);

// case 'same':
//     return arr;
// }
// }

//Create a function that returns the total number it itemas in an nested array

let a1 = [[1,2], [3,4], [5,6],['katie']]

const nestedArrays = arr => arr.flat(Infinity).length;
console.log(nestedArrays(a1)) //returns 7