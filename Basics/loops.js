// Loops

// While loops

var myArray = [];

var i = 0;
while (i < 5){
	myArray.push(i);
	i++;
}
// console.log(myArray);

// For Loop

var forLoop = [];

for(var i = 0; i < 9; i++){
	forLoop.push(i)
}

console.log(forLoop)


// array.length - gives the length of the array


/*
Modify function multiplyAll so that it 
returns the product of all the numbers in the sub-arrays of arr.
*/

function multiplyAll(arr) {
  let product = 1;

  for(var i = 0; i < arr.length; i++){
  	for(var j = 0; j < arr[i].length; j++){
  		product *= arr[i][j];
  	}
  }


  return product;
}

product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product)



// Do-While loop

var doLoop = [];

var i = 10;

do{
	doLoop.push(i);
	i++;
}while (i < 5)

console.log(i, doLoop)


// LookUp Profile

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

	for(var i = 0; i < contacts.length; i++){
		if(contacts[i].firstName === name){
			if(contacts[i].hasOwnProperty(prop)){
				return contacts[i][prop]
			}else{
				return "No such property"
			}
		}
	}
	return "No such contact"

}

var contact = lookUpProfile("Bob", "potato");
console.log(contact)


