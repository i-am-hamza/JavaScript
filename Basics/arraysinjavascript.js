// Arrays

/* 	1. Different from C++ and Java based array concepts
	2. Collection of data of different datatypes

*/

// Single dimensional Array
var exampleArray = ['John', 7, 9.01];
console.log(exampleArray);


// Mutil dimensional Array or Nested Array
// In JavaScript, nested arrays need not to have same length 

var nestedArray = [['First Name', 'Age'], ['Hamza', 22], 'Gogogogo'];
console.log(nestedArray);


// Access array data

// 1-D Array 
console.log(exampleArray[2])

// 2-D Array
var nestedArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = nestedArray[3][0][2] // Access number 12.
console.log(myData)

var myData = nestedArray[3][1] // Access number 13.
console.log(myData)


// Array Functions

//	1. Push Function
var inputArray = ['2', 5, 'Uchiha'];
inputArray.push('Good',96);
console.log(inputArray);


// 2. Pop Function - pops the last data from the array
// 3. Shift Function - removes the first element from the array
// 4. Unshift Function - shifts new element to first index of the array

 