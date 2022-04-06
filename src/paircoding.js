//Create a function that takes two strings and return either true or flase depending on whether
//the total number of characters in the first string is equal to the total numbers of characters in the second string

function nordstrom(name1, name2) {
return name1.length === name2.length //=== strict on datatypes
}
console.log(nordstrom("AB", "CD")) //returns true, if you chnage to 3 letters=false