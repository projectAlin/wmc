
function dark(){
  document.body.style.backgroundColor="black";
  document.getElementById("header").style.backgroundColor = "gray";
  document.getElementById("header").style.color = "white";
  document.getElementById("header").style.borderColor = "black";
  document.getElementById("start").style.borderColor = "black";
  document.getElementById("start").style.backgroundColor = "gray";
  document.getElementById("game").style.color = "white";
}
function light(){
  document.body.style.backgroundColor="white";
  document.getElementById("header").style.backgroundColor = "white";
  document.getElementById("header").style.color = "black";
  document.getElementById("start").style.borderColor = "black";
  document.getElementById("start").style.backgroundColor = "white";
  document.getElementById("game").style.color = "black";
}
function start() {
  const game = document.getElementById("game"); // Get the game element
  const button = document.getElementById("startbutton"); // Get the button element

  if (button.textContent === "Start Game") {
    game.style.display = "block"; // Show the game
    button.textContent = "Stop"; // Change button text to "Stop"
  } else {
    game.style.display = "none"; // Hide the game
    button.textContent = "Start Game"; // Change button text back to "Start Game"

  }
}
