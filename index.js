var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Generates the filename of the dice image
var randomImageSource = "images/" + randomDiceImage; // Constructs the full image source path
var image1 = document.querySelectorAll("img")[0]; // Selects the first <img> element on the page

image1.setAttribute("src", randomImageSource); // Sets the 'src' attribute of the selected image element to the randomly chosen dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
var randomDiceImage = "dice" + randomNumber2 + ".png"; // Generates the filename of the dice image
var randomImageSource2 = "images/" + randomDiceImage; // Constructs the full image source path
var image1 = document.querySelectorAll("img")[1]; // Selects the first <img> element on the page

image1.setAttribute("src", randomImageSource2); // Sets the 'src' attribute of the selected image element to the randomly chosen dice image

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}