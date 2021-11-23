const randomNumber = Math.floor(Math.random() * 10) + 1


function checkGuess() {
  let myGuess = document.getElementById("guess").value;
  if (myGuess === randomNumber) {
    alert("You got it right!");
  } else if (myGuess > randomNumber) {
    alert("Your guess was " + myGuess + ". That's too high. Try Again!");
  } else if (myGuess < randomNumber) {
   alert("Your guess was " + myGuess + ". That's too low. Try Again!");
 }
}
submitGuess.addEventListener('click', checkGuess)
