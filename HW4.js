'use strict';

/*function min(a, b) {

	var c;
	if (a < b) {
		c = a;

	} else {
		c = b;
	}
	return c;
}

console.log(min(0, 2));
console.log(min(0, 3)); */

/*function countBs(a) {
	
	var B = a.length;
	return B;	
}

console.log(countBs("Привет"))*/

function countChar(a,cr) {
	
	if(a.indexOf(cr)>-1){
		
		return a.indexOf(cr);
	}
	
}

console.log(countChar("Привет","р"))
