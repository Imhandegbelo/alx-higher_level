#!/usr/bin/node

// Prints a number if the first argument can be converted to an interger

const num = parseInt(process.argv[2]);

num ? console.log("My number: " + num) : console.log("Not a number");
