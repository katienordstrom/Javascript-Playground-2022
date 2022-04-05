// WEEK 7

//Write a function to reverse and array
// Example: reverseArray([1,2,3,4]) > [4,3,2,1]

// console.log("Hello World")

// function reverseArray(arr) {
//     return arr.reverse()
// }
// console.log(reverseArray([1,2,3,4]))

// Create a function that accepts an array and return the last element
//Example: lastELement(["Katie", 23, "Purple"]) --try return purple

// function lastElement(arr) {
//     return arr.length-1
  
// }
//   console.log(lastElement([1,2,3,4,5]))



//Create a function that takes an array and returns it as a string

// function tostringarray(arr) {

//     return arr.toString()

// }

// const result = tostringarray(["ali", 2, 3, 4, "green"])
// console.log(typeof result)

function ArrayToString(arr){
    return arr.join('')

}
console.log(ArrayToString(["Katie ", 23, " Purple"]))