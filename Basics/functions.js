/* Functions in JavaScripts:
	1. keyword - function
	2. First-class objects
*/


// Global Scope
var globalScope = 90;

// Local Scope
function f1(){
	var localScope = 80;
	localScope1 = 60;
}


function f2(){
	console.log(globalScope); // prints globalScope variable
	// console.log(localScope); //  will print error due to local declaration of a variable
	console.log(localScope1)
}

f1();
f2();

/* 
	1. variable initialized with no keyword will act as global scope variable.
	2. if local scope and global scope variable name are same, local scope variable will take precedence upon function call.

*/



// Write a program to that performs the following:
//  1. Prints the array
//  2. Adds an element to the last of the array
//  3. Shift and Prints first element of the array
//  4. Prints new array


function nextInLine(arr, element){
	arr.push(element)

	return arr.shift()
}

var array = [1,2,3,4,5,6]

console.log("Before: " + array);
console.log(nextInLine(array, 7));
console.log("After: " + array)





/* Arrow Functions */

/*

var magic = function(){
	return new Date();
}

*/

// The same can be written as below
/*
const magic = () => new Date();
*/

const myArray = (arr1, arr2) => arr1.concat(arr2);

console.log(myArray([1,2],[3,4]))



// Higher Order Functions



// Default Paramater

const decreament = function(number, value =1){
	return number - value;
}

console.log(decreament(5,2))
console.log(decreament(5))


// Rest Operator

const sum = (function(){
	return function sum(...args){
		return args.reduce((a,b) => a + b , 0);
	};
})();

console.log(sum(1,2,3))


// Spread Operator

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

let arr2;
let arr3;

(function(){
	arr2 = arr1;//this will make arr2 same with arr1
	arr3 = [...arr1] //This will only copy contents of arr1 to arr3
	arr1[0] = 'potato';
})();

console.log(arr2);
console.log(arr3)

// ----------------
// Destructuring Assignment
// ----------------

var voxel = {x:3.6, y:7.4, z:9.8}

// below code for destructing assignment

const {x:a, y:b, z:c} = voxel // a = 3.6 , b = 7.4 , c = 9.8

// Examples of destruction assignment

const weatherForecast = {
	today: {min: 23 , max: 39},
	tomorrow: {min: 20 , max: 35}
};

function getMaxWeatherTomorrow(weather){
	const {today: {max: temperature }} = weather;
	return temperature;
}

const temperature = getMaxWeatherTomorrow(weatherForecast);
console.log(temperature)

// ------------------
// Destructing in Array
// -----------------

const [z, , , y] = [1,2,3,4,5,6] // z = 1 ; y = 4
console.log(y)

let num1 = 8, num2 = 6;
(() => {
	"use strict";
	[num1 , num2] = [num2 , num1]

})();

console.log(num1);
console.log(num2)


// --------------
// Destruction assignment in rest operator
// --------------


const source = [1,2,3,4,5,6,7,8,9,0]

function removeFirstTwo(list){
	const [ , ,...arr] = list

	return arr;

}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);



// Concise Declarative Functions

const bicycle = {
	gear: 2,
	setGear(newGear){
		"use strict";

		this.gear = newGear;
		return newGear;
	}
};


bicycle.setGear(3)
console.log(bicycle.setGear(3));
console.log(bicycle.gear);


// Use class Syntax to define a constructor function
class Coaching{
	constructor(name){
		this.name = name;
	}
};

const coachingName = new Coaching('Thought Wing Coaching');
console.log(coachingName.name)


// Getter and Setter

function makeClass(){
	class Thermostat{
		constructor(temp){
			this._temp = 5/9 * (temp -32);
		}
		get temperature(){
			return this._temp;
		}

		set temperature(updatedTemperature){
			this._temp = updatedTemperature;
		}
	}
	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature; //getter and setters do generally not have parenthesis as functions do have.
thermos.temperature = 26;
temp = thermos.temperature; //getter and setters do generally not have parenthesis as functions do have.
console.log(temp);
