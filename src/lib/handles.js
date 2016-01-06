'use strict'; 

function rootHandler() {
	console.log('root handler');
	let objectOne = {};
	let array = [1, 2];
	let {first, second} = array;
	
	objectOne = {one: first,two: second};   
	console.log(objectOne);
}


exports.rootHandler = rootHandler;