// // // Create a function that takes an array and returns both the minimum and maximum numbers in order.
// // // Declaring function findmax that will take the value of an array
// // function findmax (arr) {
// //     let array = [];
// //     let min = arr[0];
// //     let max = arr[0];
// // // For loop to set index to 0, then if index is less than array length, increment. This will happen until the array length is hit
// // for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] < min) {
// //             min = arr[i];
// //         } 
// //         if (arr[i] > max) {
// //             max = arr[i];
// //         }
// //     }
// //     array.push(min);
// //     array.push(max);
// //     return array;
// //    }
// // //    console.log(findmax([1,2,3,4,5]))





// //Create a function that concantenates a number of arrays together
// //
// // let array1 = ([1,2,3,4,5], [6,7,8,9])

// // function arraysConcat (... args){
// // return[].concat(...args)
// // }
// // console.log(arraysConcat(array1))

// // Spread Operator 
// /*Spread syntax (...) allows an an array expression or string 
// to be expanded in places where zero or more arguments (for function calls) or 
// elements (for array literals) are expected, or an object expression to be 
// expanded in places where zero or more key-value pairs (for object literals) are expected.*/
// // Infinity
// // The global property Infinity is a numeric value representing infinity.




// //create a function that takes an array of numbers, a string and returns an array of numbers as 
// //per the following rules:
// //Array rules:

// // let a1 = [4,3,2,1]
// // let a2 = [5,6,7,8,9]
// // let a3 = [,4,5,6,7]

// // function arrayRules (arr, str) {
// // switch(str){
// // case 'Asc':
// //     return arr.sort(a, b => a-b);

// // case 'Dec':
// //     return arr.sort(a, b => b - a);

// // case 'same':
// //     return arr;
// // }
// // }

// //Create a function that returns the total number it itemas in an nested array

// // let a1 = [[1,2], [3,4], [5,6],['katie']]

// // const nestedArrays = arr => arr.flat(Infinity).length;
// // console.log(nestedArrays(a1)) //returns 7


// //Arrays -Minesweeper

// // let array = [5,4,3,2,1]
// // // for(i=0, i < array.length, i++){
// // //     console.log(array[i])
// // // }

// // array.forEach((element,i) => { //element goes first, i is in the increment spot (can eb called anything)
// //     console.log(array[i]);
// //   })

// let array1 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ]
  
  
// //   for (let i = 0; i < array1.length; i++) {
// //     for (let j = 0; j < array1.length; j++) {
// //       // console.log(array1[i][j])
// //     }
// //   }
  
//   array1.forEach(sub => {
//     sub.forEach(elem => {
//       // console.log(elem);
//     })
//   })



//   // // Create a function that takes an array and returns both the minimum and maximum numbers in order.
// // // Declaring function findmax that will take the value of an array
// // function findmax (arr) {
// //     let array = [];
// //     let min = arr[0];
// //     let max = arr[0];
// // // For loop to set index to 0, then if index is less than array length, increment. This will happen until the array length is hit
// // for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] < min) {
// //             min = arr[i];
// //         } 
// //         if (arr[i] > max) {
// //             max = arr[i];
// //         }
// //     }
// //     array.push(min);
// //     array.push(max);
// //     return array;
// //    }
// // //    console.log(findmax([1,2,3,4,5]))





// //Create a function that concantenates a number of arrays together
// //
// // let array1 = ([1,2,3,4,5], [6,7,8,9])

// // function arraysConcat (... args){
// // return[].concat(...args)
// // }
// // console.log(arraysConcat(array1))

// // Spread Operator 
// /*Spread syntax (...) allows an an array expression or string 
// to be expanded in places where zero or more arguments (for function calls) or 
// elements (for array literals) are expected, or an object expression to be 
// expanded in places where zero or more key-value pairs (for object literals) are expected.*/
// // Infinity
// // The global property Infinity is a numeric value representing infinity.




// //create a function that takes an array of numbers, a string and returns an array of numbers as 
// //per the following rules:
// //Array rules:

// // let a1 = [4,3,2,1]
// // let a2 = [5,6,7,8,9]
// // let a3 = [,4,5,6,7]

// // function arrayRules (arr, str) {
// // switch(str){
// // case 'Asc':
// //     return arr.sort(a, b => a-b);

// // case 'Dec':
// //     return arr.sort(a, b => b - a);

// // case 'same':
// //     return arr;
// // }
// // }

// //Create a function that returns the total number it itemas in an nested array

// // let a1 = [[1,2], [3,4], [5,6],['katie']]

// // const nestedArrays = arr => arr.flat(Infinity).length;
// // console.log(nestedArrays(a1)) //returns 7


// //Arrays -Minesweeper

// // let array = [5,4,3,2,1]
// // // for(i=0, i < array.length, i++){
// // //     console.log(array[i])
// // // }

// // array.forEach((element,i) => { //element goes first, i is in the increment spot (can eb called anything)
// //     console.log(array[i]);
// //   })

// let array1 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ]
  
// for (let i = 0; i < grid.length; i++) {
//   // for (let j = 0; j < grid.length; j++) {
//     console.log(grid[i])
//   // }
// }
  
//   array1.forEach(sub => {
//     sub.forEach(elem => {
//       // console.log(elem);
//     })
//   })
  // function minesweeper(grid){
  //   function getCell (row,col){
  //     if (row < 0 || col < 0) return 0
  //     if (row >= grid.length) return 0
  //     if (col >= grid[row].length) return 0
  //     if (grid[row][col] === 1) return 1
  //   }
  // } 


  let grid = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]]

 
  for (let i = 0; i < grid.length; i++) {
      console.log(grid[i])}
     
      function minesweeper(grid) {
        var newArr = [];
     
        for(var i=0; i < grid.length; i++){
          newArr.push([]);
          for(var j=0; j < grid[i].length; j++){
            var empty= 0;
            if(i>0){
              if(grid[i-1][j]){
                empty+= 1;
              }
              if(grid[i-1][j+1]){
                empty+= 1;
              }
              if(grid[i-1][j-1]){
                empty+= 1;
              }
            }
            if(i < grid.length - 1){
              if(grid[i+1][j]){
                empty+=1;
              }
              if(grid[i+1][j+1]){
                empty+= 1;
              }
              if(grid[i+1][j-1]){
                empty+=1;
              }
            }
      
            if(grid[i][j+1]){
              empty+=1;
            }
            if(grid[i][j-1]){
              empty+=1;
            }
            newArr[i].push(empty)
          }
        }
        return newArr
      }
       
      console.log(minesweeper(grid))

      

// function minesweeper(grid) {
//     function getCell (row, col) {
//       if (row < 0 || col < 0) return 0
//       if (row >= grid.length) return 0 
//       if (col >= grid.length) return 0 
//       if (grid[row][col] === 1) return 1
//       return 0
//     }

//     for (let row = 0; row < grid.length; row++){
//       let line = '';
//       for (let col = 0; col < grid.length; col++) {
//         if (getCell(row, col) === 1) {
//           line += 'x';
//         } else {
//           let bombs = 0
// //top
//           bombs += getCell(row-1, col-1)
//           bombs += getCell(row-1, col)
//           bombs += getCell(row-1, col+1)

//           bombs += getCell(row, col-1) // left
//           bombs += getCell(row, col+1) //right

//           //bottom
//           bombs += getCell(row+1, col-1)
//           bombs += getCell(row+1, col)
//           bombs += getCell(row+1, col+1)

//           line += bombs
//         }
//       }
//       console.log(line)
//     }

// }

// for (let j=0; j<9; j++){
//   let bombs = 'x'
// }



 



 








  // [[1, x, 2, 1],  [2, 3, x, 2],[3, x, 4, x],[x, x, 3, 1],]

  
