
let numero = Math.floor(Math.random()*10+1);
let arvaukset = 1;
let pelikerrat = 0;
let voitot = 0;
let voittoVari =
"linear-gradient(217deg, rgba(138, 159, 211,.8), rgba(255,0,0,0), rgba(138, 159, 211,.8))";

function arvauspeli() {
  console.log(numero);
  document.getElementById("arvaukset").innerHTML = "arvaukset " + arvaukset;
  document.getElementById("pelikerrat").innerHTML = "pelikerrat " + pelikerrat;
  document.getElementById("voitot").innerHTML = "voitot " + voitot;
  let kayttajanArvaus = document.getElementById('arvaus').value;


  if (kayttajanArvaus < 1 || kayttajanArvaus > 10) {
    document.getElementById('vihje').innerHTML = "Syötä numero 1-10 väliltä"
  }
  else if (kayttajanArvaus == numero) {
    document.getElementById("peli").style.background = voittoVari;
    document.getElementById('vihje').innerHTML = "Arvasit oikein";
    document.getElementById("vihje").style.fontSize = "x-large";
    voitot++;
    arvaukset = 1;
    pelikerrat++;
    numero = Math.floor(Math.random()*10+1);

  }
  else if (arvaukset == 3) {
    document.getElementById("vihje").innerHTML = "Arvauksia oli 3. Peli aloitetaan alusta";
    arvaukset = 1;
    pelikerrat++;
    numero = Math.floor(Math.random()*10+1);
  }
  else if (kayttajanArvaus < numero) {
    document.getElementById("peli").style.background = "white";
    arvaukset++;
    document.getElementById('vihje').innerHTML = "Numero on suurempi kuin " + kayttajanArvaus;
    document.getElementById("vihje").style.fontSize = "medium";
  }
  else if (kayttajanArvaus > numero) {
    document.getElementById("peli").style.background = "white";
    arvaukset++;
    document.getElementById('vihje').innerHTML = "Numero on pienempi kuin " + kayttajanArvaus;
    document.getElementById("vihje").style.fontSize = "medium";
  }
}
