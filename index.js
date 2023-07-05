// creating random number between 1-6
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;


// changing diece img dice1 -dice6
var randomDiceImage ="dice"+randomNumber1+".png";
// dice 1-6 source
var randomDiceSource = "images/"+randomDiceImage;

//changing img using attribute manipulation for 1st image

document.querySelectorAll("img")[0].setAttribute("src",randomDiceSource);

//follow the same code for creating second img
//changing img using attribute manipulation for 2nd image

var randomNumber2 = Math.random();
randomNumber2=randomNumber2 * 6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2="dice"+randomNumber2+".png";
var randomDiceSource2 = "images/"+randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

// ELSE IF STATEMENT
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else  {
    document.querySelector("h1").innerHTML="DRAW!!";
}
    
