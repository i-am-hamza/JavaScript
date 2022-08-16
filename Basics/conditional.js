// If - else statement


function isTrueOrFalse(isTrue){
	if(isTrue){
		return "Yes, it is true."
	}
	else{
		return "No, it is not true."
	}
}

console.log(isTrueOrFalse(true))


// Equality Operators..


/* 
 == -> not strict equality operator
 === -> strict equality operator
*/


function strictEquality(data){
	val = 10;
	if(val === data){
		return "True"
	}
	else{
		return "False"
	}
}

console.log(strictEquality('10'));

// Inequality Operators

/* 
!= ---> checks for inequality
!== ----> checks for strict inequality
*/

function strictInequality(data){
	var val = '10';
	if(val !== data)	return "Not Equal";
	else 				return "Equal";
}


console.log(strictInequality(10))


/* Other Conditional Operators

1. >
2. <
3. >=
4. <=
*/ 

/* Logical Operators

1. && ---> both conditions must be true to execute the statement
2. || ----> either one condition must be true to execute the statement

*/


//Switch statement

function switchMe(val){
	switch(val){
		case 1:
			console.log("The value is 1");
			break;
		case 2:
			console.log("The value is 2");
			break;
		default:
			console.log("Please enter either 1 or 2");
			break;
	}


}

switchMe(2);


