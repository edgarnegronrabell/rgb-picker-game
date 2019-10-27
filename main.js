let colors = [
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`, 
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
];

let pickedColor = colors[3]
const body = document.querySelector("body");
const squares = document.querySelectorAll(".squares");
const randomizer = document.querySelector("#randomize");
const rgbDisplay = document.querySelector("#rgbDisplay");
const message = document.querySelector("#message");
rgbDisplay.innerHTML = `${pickedColor}`;

for( let i = 0; i < squares.length; i++ ) {
  //Initial color of squares
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.background;
    if(pickedColor === clickedColor) {
      message.innerHTML = `Correct!`
      body.style.background = `${pickedColor}`;
    } else {
      message.innerHTML = `Try again!`
      this.style.transition = "ease .2s"
      this.style.visibility = "hidden";
    }
  })
}

randomizer.addEventListener("click", function(){
  for( let i = 0; i < squares.length; i++ ) {
    squares[i].style.background = colors[i];
    rgbDisplay.innerHTML = `${pickedColor}`
  }
}); 
function randomNumber() {
  return Math.floor(Math.random() * 255 );
}


