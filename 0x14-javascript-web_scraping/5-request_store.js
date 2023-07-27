#!/usr/bin/node
// gets the contents of a webpage and stores it in a file

const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const file = process.argv[3];

request(URL).pipe(fs.createWriteStream(file));
