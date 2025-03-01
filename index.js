let min = 1;
let max = 6;

var randomNumber1 =  Math.floor(Math.random()*(max-min+1))+min;
//For Dice 1
document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`)

//For Dice 2
var randomNumber2 =  Math.floor(Math.random()*(max-min+1))+min;
document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`)

//Result for winner
if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").textContent = "🤝Draw🤝";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}