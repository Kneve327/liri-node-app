require('dotenv').config();
var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var nodeSpotify = require("node-spotify-api");
var moment = require("moment");

// The first will be the action (i.e. "song", "movie", etc.)
// The second will be the song, movie, etc selected.
var action = process.argv[2];
var value = process.argv.slice(3).join(" ");

// Then I would create a switch-case statement.
// The switch-case will direct which function gets run.
// switch (action) {
// case "total":
//   total();
//   break;

// case "deposit":
//   deposit();
//   break;

// case "withdraw":
//   withdraw();
//   break;

// case "lotto":
//   lotto();
//   break;
// }



// So at this point I would write out what happens when the functions are called in the switch-case statement, similar to activity 15.



// function total() {

//   fs.readFile("bank.txt", "utf8", function(err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     data = data.split(", ");
//     var result = 0;

//     for (var i = 0; i < data.length; i++) {
//       if (parseFloat(data[i])) {
//         result += parseFloat(data[i]);
//       }
//     }

//     console.log("You have a total of " + result.toFixed(2));
//   });
// }

// function deposit() {

//   fs.appendFile("bank.txt", ", " + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   console.log("Deposited " + value + ".");
// }

// function withdraw() {

//   fs.appendFile("bank.txt", ", -" + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   console.log("Withdrew " + value + ".");
// }


// function lotto() {

//   fs.appendFile("bank.txt", ", -.25", function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

// }