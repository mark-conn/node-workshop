// In this file, write a program that will let the user play hangman. The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:

// Ask the user to guess a letter

// If the user guessed a wrong letter, then add one step to the hangman “drawing”

// Display the current completion of the word next to a hangman ASCII "drawing". 
// You can get some inspiration from either here or here

// Keep looping until either the word is found or the hangman is hanged!

// Display a message to the user letting them know what happened
var prompt = require('prompt');
var rightLetter = [];
var wordList = [];
var string = 'Unlike Syrian refugees Afghans are not eligible for the European Unions refugee relocation scheme that relocates asylum seekers in Greece and Italy to other countries Afghans therefore remain in limbo stranded in Greece and unable to return';
wordList = string.toLowerCase().split(' ');

//pick a random word in the array
function randomWord(arr) {
    var pick = '';
    pick = Math.floor(Math.random() * arr.length)
    return arr[pick];
} 


var guessCount = 0;


var myWord = randomWord(wordList).split("")
//console.log(myWord);

function guessLetter(word) {
   if(guessCount < 6) {
   prompt.get("letterpick", function(err, input) {
       
       var letterPick = input.letterpick;
       
       //error condition
       if(err) { console.log("you fucked up"); }
       
       //win condition

       if(rightLetter.length === word.length) { 
           console.log("You are Winner!"); 
           return; 
           
       }
           
       //game begins   
       else {
        console.log(letterPick);
        var match =  word.indexOf(letterPick) > -1;
        
        //loops through 'word' array, if letter matches, match is 'true'
        
        if(match) { 
            
            console.log("Well done, keep going..."); 
            //push 'good' letters to an array to keep track
            
            
                rightLetter.push(letterPick);
                if()
                rightLetter[letterPick] = word.indexOf(letterPick);
                rightLetter.sort();
                console.log(rightLetter);
                if(rightLetter.length === word.length) { 
                console.log("You are Winner!"); 
                return; 
           
       }
            console.log(rightLetter);
            return guessLetter(word);
        }
        
        else {
            //track guess count.  number = case for print hangman function
            guessCount += 1;
            printHangMan(guessCount);
            return guessLetter(word);
        }
            
    }
           
    });
} return;
} 


guessLetter("larry");
// console.log(guessCount);


function printHangMan(num) {
    switch(num) {
        case 1:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            return;
        case 2:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            console.log("|        |     \n");
            return;
        case 3:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            console.log("|       /|     \n");
            return;
        case 4:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            console.log("|       /|/    \n");
            return;
        case 5:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            console.log("|       /|/    \n");
            console.log("|       /      \n");
            return;
        case 6:
            console.log(" _________     \n");
            console.log("|        |     \n");
            console.log("|        0     \n");
            console.log("|       /|/    \n");
            console.log("|       / |    \n");
            console.log("This man is DEAD\n");
            return;
        default: 
            return;
    }
};


