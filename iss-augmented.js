var prompt = require("prompt");
var request = require("request");
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }


prompt.get('city', function(err, input){

    if(err) { console.log("Oh shit son there's an error"); }
    else {
       request('https://maps.googleapis.com/maps/api/geocode/json?address=' + input.city, 
       function(err, input) {
          if(err) { console.log("well shit..."); }
          else {
            var longLat = JSON.parse(input.body);
             longLat = longLat.results[0].geometry['location']
             request("http://api.open-notify.org/iss-now.json", function(err, input) {
                 if(err) { console.log("beat it nerd!"); }
                 else {
                    var issLongLat = JSON.parse(input.body);
                    issLongLat = issLongLat.iss_position;
                    //console.log(issLongLat);
              var yourLoc = new LatLon(longLat.lat, longLat.lng);
              var issLoc = new LatLon(issLongLat.latitude, issLongLat.longitude);
              var distance = yourLoc.distanceTo(issLoc);
              console.log("You are currently " + distance + " from ISS");       
                     
                 }
                })
              }
           }); 
        } 
    }); 


    
function LatLon(lat, lon) {
    if (!(this instanceof LatLon)) return new LatLon(lat, lon);

    this.lat = Number(lat);
    this.lon = Number(lon);
}
LatLon.prototype.distanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var R = radius;
    var φ1 = this.lat.toRadians(),  λ1 = this.lon.toRadians();
    var φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
    var Δφ = φ2 - φ1;
    var Δλ = λ2 - λ1;

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2)
          + Math.cos(φ1) * Math.cos(φ2)
          * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
};   



