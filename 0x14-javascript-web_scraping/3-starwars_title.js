#!/usr/bin/node
// Prints the title of a StarWars movie given the episode number

const request = require('request');
const Api = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request(Api, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
