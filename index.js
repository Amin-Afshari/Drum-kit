var i = document.querySelectorAll(".drum").length;
for (var j = 0; j < i; j++) {
  document.querySelectorAll(".drum")[j].addEventListener("click", function() {

    var btnInnerHTML = this.innerHTML;

    playSound(btnInnerHTML);

    pressedAnimation(btnInnerHTML);
  })
}

document.addEventListener("keydown", function(event) {

  playSound(event.key);

  pressedAnimation(event.key);
})

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      break;
  }
}

function pressedAnimation(key) {
  if ((key === "w") || (key === "a") || (key === "s") || (key === "d") || (key === "j") || (key === "k") || (key === "l")) {
        document.querySelector("." + key).classList.add("pressed");
        setTimeout(function() {
          document.querySelector("." + key).classList.remove("pressed");
        }, 100);
      }

    }
