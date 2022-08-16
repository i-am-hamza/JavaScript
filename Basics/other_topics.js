// Random Fractions and Whole Numbers

/* 

	Math.random() -----> generate random decimal number between 0 and 1

*/

function randomWholeNum(){

	return Math.floor(Math.random() * 10) // generates random whole number between 0 and 9

}

console.log(randomWholeNum())	


// parseInt Function

function convertToInteger(str){
	number = parseInt(str) // converts string to integer
	number1 = parseInt(str, 2) // converts string to integer from base 2 (argument given as 2) to decimal
	return [number,number1]
}

console.log(convertToInteger('10'))


// Ternary Operator

// condition ? statment-if-true : condition-if-false


function checkEqual (a,b){

	return a === b ? true : false;
}

console.log(checkEqual(4,3))


function checkSign(val){
	return val > 0 ? "positive" : val < 0 ? "negative" : "zero"
}

console.log(checkSign(0))


// let and const keyword

/* 
	let ----> does not allow to declare variable more than once
	const --> does not allow to declare and initalize variable more than once

*/	

/* 

	"use strict"; ----> allows to write code in strict mode, 
						can be placed at the top of the program file or anywhere.

*/


// Major difference between let and var

/* 
	var ----> can either be global scope or local scope to a function
	let ----> block scope, i.e., between { } notation 

*/



/* const keyword ----> 	read-only
						variable is written with all caps
*/


// Mutate an array declared with const

const array = [1,2,3]

function mutate(){

	// array = [3, 2, 1]; //Syntax Error: read-only

	// Work-around to mutate an array declared with const

	array[0] = 3;
	array[1] = 2;
	array[2] = 1;

	// Output: [3,2,1]

	return array;

}


console.log(mutate())



// To overcome the const keyword drawback in array and objects
// We use Object.freeze(object-variable);


function freezeObj(){
	"use strict";

	const MATHS_CONSTANTS = {
		"PI" : 3.14
	};

	Object.freeze(MATHS_CONSTANTS);

	try{
		MATHS_CONSTANTS.PI = 99;
	}catch(err){
		console.log("Error Found: Variable freezed")
	}

	return MATHS_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);


// Tempate Literals

const person = {
	name: "Hamza",
	age : 22
};

// Template literal with multi-line and string interpolation

const greeting = `Hello, my name ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// Simple Fields

const createPerson = (name, age, hobbies) =>{
	return{
		name: name,
		age: age,
		hobbies: hobbies
	};
}

console.log(createPerson("Hamza",22,"Nothing"))


// Import vs Require

import {stringLower} from "./export_function"

const lower = stringLower("HELLO!");

console.log(lower);