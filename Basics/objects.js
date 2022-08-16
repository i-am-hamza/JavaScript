/* 

Object is a datatype in javascript that is used to store various keyed collections.

*/

var player = {
	'firstName' : "Hamza",
	'lastName'	: "Hamza",
	'age'		: "22",
	'profession': "Senior Analyst",
	1 			: 'Code 1'

}

console.log(player.age);

var job = 'profession'  // initialize variable "job" to key "profession"
console.log(player[job]); // cannot use dot notation when calling variable

var number = 1;			
console.log(player[number]); // Output : Code 1
console.log(player[1]); // Output : Code 1



// 1. Updating existing values in objects

player.lastName = 'Ahmad'
console.log(player.lastName);

// 2. Add new property to object

player.company = 'EnY India'
console.log(player.company);



// You can use objects instead of switch statements to do the same task


// Delete a property

delete player.company 

console.log(Object.keys(player));



// hasOwnProperty() returns true if the object has that property

function checkPropObj(val){

	if(player.hasOwnProperty(val)){
		return player[val];
	}
	else{
		return "Nothing Found"
	}
}

console.log(checkPropObj("lastName"))



// Nested Objects

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

	if(value === "" ){
		delete records[id][prop];
	}else if(prop === 'tracks'){
		records[id][prop] = records[id][prop] || []
		records[id][prop].push(value)
	}else{
		records[id][prop] = value
	}
  	return records;
}

console.log(updateRecords(recordCollection, 5439, 'tracks', 'Let me Love You'))