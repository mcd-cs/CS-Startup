const display = document.getElementById("game_text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function choice_1() {
  if (button2.style.display === "none") {
    text_reset()
  } else {
    display.innerHTML = "You made Choice 1!"
    button1.innerHTML = "Yay"
    button2.style.display = "none";
  }
}

function choice_2() {
  if (button1.style.display === "none") {
    text_reset()
  } else {
    display.innerHTML = "You made Choice 2!"
    button2.innerHTML = "Yay"
    button1.style.display = "none";
  }
}

function text_reset(){
  display.innerHTML = "You have to make a decision. What do you do?"
  button1.innerHTML = "Choice 1";
  button2.innerHTML = "Choice 2";
  button1.style.display = "block";
  button2.style.display = "block";   
}

