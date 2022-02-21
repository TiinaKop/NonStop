function numero() {
  return Math.floor(Math.random()* 10 + 1);
}

var numero = numero();
var arvaus = document.getElementById('arvaus').value;
var pisteet = 0;
var kerrat = 1;

function arvauspeli() {
  document.getElementById('arvauskerta').innerHTML = kerrat;
  document.getElementById('pisteet').innerHTML = pisteet;

if (kerrat <= 3) {
}
if (arvaus == numero) {
  document.getElementById('vastaus').innerHTML = "oikein. aloitetaan uusi peli";
  kerrat = 1;
  pisteet++;
  numero = numero();
}
else if (arvaus >= 3) {
  document.getElementById('alusta').innerHTML = "Arvasit 3 kertaa";
  kerrat = 1;
  numero = numero();
}
else if (arvaus < numero) {
  document.getElementById('vastaus').innerHTML = "liian pieni";
  kerrat++;
}
else if (arvaus > numero) {
  document.getElementById('vastaus').innerHTML = "liian suuri";
  kerrat++;
}
document.getElementById('arvauskerta').innerHTML = kerrat;
document.getElementById('pisteet').innerHTML = pisteet;
}
