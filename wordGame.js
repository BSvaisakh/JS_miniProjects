const prompt = require("prompt-sync")()

const name = prompt("what is your name? ")
console.log("Hello", name, "Welcome to our game")

const shouldWePlay = prompt("Do you want to play? ")

if (shouldWePlay.toLowerCase() ===  "yes"){
    //Game logic
    const leftOrRight  = prompt("You enter a maze,Do you want to go left or right? ")
    if (leftOrRight === "left"){
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge? ")
        if (cross === "yes"){
            console.log("You cross but the bridge was weak and you fell.You lost...")
        }else{
            console.log("Good choice... You win!")
        }
    }else{
        console.log("You go right and fall off a cliff...")
    }
}else if (shouldWePlay.toLowerCase() ===  "no"){
    console.log("okay :( ")
}else{
    console.log("Invalid input...")
}  