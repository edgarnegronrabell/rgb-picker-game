

function randomNumber() {
  return Math.floor(Math.random() * 255 );
}
let colors = [`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`, 
              `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
              `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
              `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
              `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
              `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`];

const squares = document.querySelectorAll(".squares");

for( let i = 0; i < squares.length; i++ ) {
  squares[i].style.background = colors[i];
}
