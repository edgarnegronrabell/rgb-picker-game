//Array of random colors that will be generated for Squares. 
let colors = [
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`, 
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
];
//The Colored Square that wins the game.
let winningColor = pickWinningColor();

//Select elements that work with events. 
const h1 = document.querySelector("h1");
const rgbDisplay = document.querySelector("#rgbDisplay");
const randomizer = document.querySelector("#randomize");
const message = document.querySelector("#message");
const squares = document.querySelectorAll(".squares");

// Changes the title so that it shows the color that needs to be guessed. 
rgbDisplay.innerHTML = `${winningColor}`;

// Loops through all squares to add functionality and randomize colors. 
for( let i = 0; i < squares.length; i++ ) {
  //Initial color of squares
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", clickEvents)
}
//Button that randomizes all squares.
randomizer.addEventListener("click", randomizeColor); 

// Returns a random number from 0 to 255.
function randomNumber() {
  let rgbValue = Math.floor(Math.random() * 255 + 1 );
  return rgbValue;
}
// Gives color to squares once button is pushed. 
function randomizeColor() {
  for( let i = 0; i < squares.length; i++ ) {
    colors[i] = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    squares[i].style.background = colors[i];
    winningColor = pickWinningColor();
    rgbDisplay.innerHTML = `${winningColor}`;
  }
  
}

//Adds a click event that generates a message and changes color of square to winning color.
function clickEvents() {
  let clickedColor = this.style.background;
    if(winningColor === clickedColor) {
      message.innerHTML = `Correct!`
      changeColors(clickedColor)
    } else {
      message.innerHTML = `Try again!`;
      this.style.transition = "ease .2s";
      this.style.background = `#232323`;
    }
}
// Changes h1 background and squares to winning color. 
function changeColors(rgb) {
  if(rgb === winningColor) {
    h1.style.background = `${winningColor}`;
    for( let i = 0; i < squares.length; i++) {
      squares[i].style.background = `${winningColor}`;
    }
  }
}

function pickWinningColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}