const prompt = require("prompt-sync")()


const name=prompt("What is your name? "); //space after
console.log("Hello ",name,",welcome to our game!");
const shouldWePlay=prompt("Would you like to play it?(yes/no) ").toLowerCase();
if(shouldWePlay==="yes"){
    console.log("Let's start the game :) You have to reach the treasure.... ");
    const  leftRightOrStraight=prompt("There are 3 paths in front of you .Would you like to go on the left,right or straight. ").toLowerCase();
    if(leftRightOrStraight==="left"){
        console.log("There is a river in front of you.You can't cross it because of it's flow. You lost. ")
    }
    else if(leftRightOrStraight==="right"){
        console.log("Right is always right!You found the treasure ,You won ...");
    }
    else if(leftRightOrStraight==="straight"){
        const crossOrNot=prompt("There is a bridge in front of you. Do you want to cross it? ");
        if(crossOrNot==="cross" || crossOrNot==="yes"){
            console.log("The bridge was too weak.You fell off. You lost. ");
        }
        else if(crossOrNot==="no"){
            console.log("Restart the game to choose the left or the right path. ");
        }
        else{
            console.log("Invalid input...");
        }
    }
    else{
        console.log("Invalid input...");
    }
}
else if(shouldWePlay==="no"){
    console.log("Okay :(");    
}
else{
    console.log("Invalid answer...");
}