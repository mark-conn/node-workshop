// Create a file called iss.js. In it, write a simple node program that will output 
// the latitude and longitude of the International Space Station.
var request = require("request")


request('http://api.open-notify.org/iss-now.json', function(err, result) {
    if(err) { console.log("error bruh"); }
    else {
        var longLat = JSON.parse(result.body)
        console.log(longLat.iss_position);
    }
})

