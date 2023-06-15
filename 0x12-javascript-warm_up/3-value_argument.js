#!/usr/bin/node

// Prints the first argument

const myArg = process.argv[2];
if (myArg === undefined){
	console.log("No argument");
} else {
	console.log(myArg);
}
