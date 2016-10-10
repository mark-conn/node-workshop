// Generate a random number between 1 and 100. Using the browser functions prompt and alert, 
// ask the user to guess the number. You should give them 4 tries to guess the number. 
// If they guess wrong, tell them if it’s higher or lower. If they guess right, congratulate them. 
// Otherwise, give them a message saying what the correct number was, as well as their list of guesses.

var prompt = require('prompt');


// console.log(randomNumber);
var answerArr = [];
var randomNumber = Math.floor(Math.random() * 100);
function promptMofo(num) {
    prompt.get("guess", function(err, input) {
    var inputNum = parseInt(input.guess) 
    if(err) { console.log("please insert a number, dingus"); }
    
        else {
        
        
        //if user has submitted 4 or more answers, game ends, function returns
        if (answerArr.length === 3) { answerArr.push(inputNum); console.log ("Game Over", answerArr); return; };
        
        //if correct, user is notified and function returns
        if(inputNum === num) {
            console.log("holy shit you got it!");
            return;
            
            
        //if wrong, user is notified, answer is pushed to array, function returns
        } else if(inputNum < num) {
            answerArr.push(inputNum);
            console.log("hmm, guess a little higher");
            return promptMofo(num);
            
            
         //if wrong, user is notified, answer is pushed to array, function returns    
        } else {
            answerArr.push(inputNum);
            console.log("hmm, guess a little lower");
            return promptMofo(num);
        }
    } 
    
})
}
console.log(promptMofo(randomNumber));
//console.log(answerArr);


