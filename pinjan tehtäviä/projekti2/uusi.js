let numero = Math.floor(Math.random()*10+1);
let arvaukset = 1;
let pelikerrat = 0;
let voitot = 0;


function arvauspeli() {
  console.log(numero);
  document.getElementById("arvaukset").innerHTML = "arvaukset " + arvaukset;
  document.getElementById("pelikerrat").innerHTML = "pelikerrat " + pelikerrat;
  document.getElementById("voitot").innerHTML = "voitot " + voitot;
  let kayttajanArvaus = document.getElementById('arvaus').value;



  if (kayttajanArvaus == numero) {
    document.getElementById('vihje').innerHTML = "Arvasit oikein, peli alkaa alusta"
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
    arvaukset++;
    document.getElementById('vihje').innerHTML = "Numero on suurempi kuin " + kayttajanArvaus;
  }
  else if (kayttajanArvaus > numero) {
    arvaukset++;
    document.getElementById('vihje').innerHTML = "Numero on pienempi kuin " + kayttajanArvaus;
  }
}
