let colors = ["rgb(255, 0, 0)", 
              "rgb(127, 255, 0)",
              "rgb(250, 128, 114)",
              "rgb(255, 69, 0)",
              "rgb(34, 0, 255)",
              "rgb(186, 60, 182)"];

const squares = document.querySelectorAll(".squares");

for( let i = 0; i < squares.length; i++ ) {
  squares[i].style.background = colors[i];
}
