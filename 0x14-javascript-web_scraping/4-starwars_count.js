#!/usr/bin/node
// Prints the number of movies where the character "Wedge Antilles" is present

const request = require('request');

request(process.argv[2], function (err, res, body) {
  if (err) {
    console.error(err);
  }
  const nb = JSON.parse(body).results.filter((elem) => {
    return elem.characters.filter((url) => { return url.includes('18'); }).length;
  }).length;
  console.log(nb);
});
