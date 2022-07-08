var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  // mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();


function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
};


function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
  // Add click listener to squares
    squares[i].addEventListener('click', function() {
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to the variable pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct !";
        resetButton.textContent = "Play Again ?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
reset();
}


resetButton.addEventListener('click', function(){
  reset();
});

function reset(){
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random colors from array
  pickedColor = pickColor();
  // change colorDisplay to match pickedColors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = 'steelblue';
};


// Change each color to match the picked color (the right color)
// for this, we have to make a loop through each square
function changeColors(colors){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
};


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Repeat num times
  for (var i = 0; i < num; i++) {
    //get ramdom colors and push them in the array
    arr.push(randomColor()) * num;
  }
  // return that array
  return arr;
}

function randomColor(){
  //pick a red from 0 to -255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to -255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};


/* old events , useless with our refactoring way by metho
easyButton.addEventListener('click', function() {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
});
*/


