//create pull
//console.log("Hello World!");

// setTimeout(function() {
//     console.log("Hello World Again!");
// }, 10000);

function every10Seconds() {
    console.log("Hello World!");
     setTimeout(every10Seconds, 10000)
    }

setTimeout(every10Seconds, 10000);

