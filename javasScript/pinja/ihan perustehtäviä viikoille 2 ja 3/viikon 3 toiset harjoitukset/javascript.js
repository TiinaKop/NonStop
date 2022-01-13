function scrabble() {
var sana = document.getElementById('KayttajanSana').value;
var pisteet = 0;
for (var i = 0; i < sana.length; i++) {
  switch (sana[i])
case 'a':
case 'e':
case 'i':
case 'n':
case 's':
case 't':
case 'A':
case 'E':
case 'I':
case 'N':
case 'S':
case 'T':
  pisteet++;
  break;
case 'o':
case 'Ã¤':
case 'k':
case 'l':
case 'O':
case 'Ã„':
case 'K':
case 'L':
  pisteet+=2;
  break;
case 'u':
case 'm':
case 'U':
case 'M':
  pisteet+=3;
  break;
case 'y':
case 'h':
case 'j':
case 'p':
case 'r':
case 'v':
case 'Y':
case 'H':
case 'J':
case 'P':
case 'R':
case 'V':
  pisteet+=4;
  break;
case 'Ã¶':
case 'd':
case 'Ã–':
case 'D':
  pisteet+=7;
  break;
case 'b':
case 'f':
case 'g':
case 'B':
case 'F':
case 'G':
  pisteet+=8;
  break;
case 'c':
case 'C':
  pisteet+=10;
  break;
default:
  pisteet+=12;
}
document.getElementById('SanaPisteet').innerHTML = "Sanan pisteet ovat: " + pisteet;
}

function arvoNumerot() {
  return Math.floor(Math.random()*40 + 1);
}

function lotto() {
  for (var i = 0; i < 7; i++)
  document.getElementById('TulostaLotto').innerHTML = lottonumerot;
}
