// Configure dotenv package
require('dotenv').config()

// Import keys.js file
var keys = require('./keys.js')

// Constants for require imports
var fs = require('fs')
var request = require('request')
var moment = require('moment')
var Spotify = require('node-spotify-api');


var spotify = new Spotify(keys.spotify);


var action = process.argv[2];
var value = process.argv.slice(3).join(" ");


switch (action) {
    case "concert-this":
    console.log("Let me find those concerts for you...")
      concerts();
      break;
    
    case "spotify-this-song":
    console.log("Let me find that song for you...")
      songs();
      break;
    
    case "movie-this":
    console.log("Let me find the information on that movie for you...")  
      movies();
      break;
    
    case "do-what-it-says":
    console.log("Let me find that song for you...")
      randomText();
      break;
}

function concerts() {
request("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp", function (err, res, body) {
    
    for (i = 0; i < body.length; i++) {
    var concertInfo = JSON.parse(body)[i]
    // console.log(concertInfo);
    console.log("Venue: " + concertInfo.venue.name);
    console.log("Location: " + concertInfo.venue.city + ", " + concertInfo.venue.region);
    console.log(moment(concertInfo.datatime).format("LLLL"));
    console.log("")
    }
})

}

function songs() {

    spotify.search({ type: 'track', query: value}, function(error, data) {
        
        // console.log(data.tracks.items[0]);

        var songInfo = data.tracks.items[0];
        console.log("Artist: " + songInfo.artists[0].name);
        console.log("Song Name: " + songInfo.name);    
        console.log("Preview Link: " + songInfo.preview_url);
        console.log("Album: " + songInfo.album.name);
    })
}

function movies() {

    request("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy", function(err, res, body) {

        var movieInfo = JSON.parse(body)

        // console.log(movieInfo);
        console.log("Title: " + movieInfo.Title)
        console.log("Year: " + movieInfo.Year)    
        console.log("IMDB Rating: " + movieInfo.imdbRating)
        console.log("Rotten Tomatoes Rating: " +movieInfo.Ratings[1].Value)
        console.log("Language: " + movieInfo.Language)    
        console.log("Actors: " + movieInfo.Actors)
        console.log("Plot: " + movieInfo.Plot)

    })

}

function randomText() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        var random =data.split(",")
        console.log(random)
    })
    
}