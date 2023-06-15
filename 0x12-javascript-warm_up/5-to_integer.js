#!/usr/bin/node

// Prints a number if the first argument can be converted to an interger

const num = parseInt(process.argv[2]);

isNaN(num) ? console.log("Not a number") : console.log("My number: " + num);
