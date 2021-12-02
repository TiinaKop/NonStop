function myFunction() {
  return Math.floor(Math.random()* 10 + 1);
}

let random = myFunction()
let voitot = 1;
let pelit = 0;
let yritykset = 1;

let buttons = Array.from(document.getElementsByClassName("button"));
function tulokset() {
  document.getElementById("pelikerrat").innerHTML = "pelatut pelit " + pelit;
  document.getElementById("voitot").innerHTML = "Voitot " + voitot;
  document.getElementById("yritykset").innerHTML = "yritykset " + yritykset;
  console.log(number);
}

buttons.map(button => {
  button.addEventListener('click', (e) => {

  let answer = e.target.innerText;

  if (annaNumero == random) {
    voitot ++;
    pelit ++;
    yritykset = 1;
    random = myFunction()
    tulokset()
    document.getElementById("kommentit").innerHTML = "Arvasit oikean numeron";
  }
  else if (yritykset >= 3) {
    pelit ++;
    yritykset = 1;
    random = myFunction()
    tulokset()
    document.getElementById("kommentit").innerHTML = "Arvauksia oli 3. Uusi peli alkaa."
  }
  else if (annaNumero > random) {
    yritykset ++;
    tulokset()
    document.getElementById("kommentit").innerHTML = "Arvauksesi on liian suuri";
  }
  else if (annaNumero < random) {
    yritykset ++;
    tulokset()
    document.getElementById("kommentit").innerHTML = "Arvauksesi on liian pieni";
  }
});
});
