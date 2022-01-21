let important = ""

function uusi() { //funktio millä luon uuden luvun
  return Math.floor(Math.random()* 10 + 1);
}
//floor pyöristää alaspäin kokonaislukuun
//random antaa luvun desimaaliluvun 0- ja 1 mutta ei ikinä kuitenkaan tasan 1.välilstä.
//sen takia kerrotaan 10:llä jotta luku on desimaalikuku 0 ja 10 välistä..
//ja lisätään 1 niin se antaa luvun 1 ja 11 joten alaspäin pyöristäessä se on 1-10 välistä.



//luodaan muutama muuttuja
let number = uusi()
let voitot = 0;
let pelit = 0;
let yritykset = 1;
let lol = 0
let geg = 't:woemg2/m0h'


//Rupesin rakentamaan tämän poohjalta koko juttua...
function piippeli() {
  console.log(number);
  document.getElementById("numberOfGames").innerHTML = "pelatut pelit " + pelit;
  document.getElementById("wins").innerHTML = "Voitot " + voitot;
  document.getElementById("yritys").innerHTML = "yritykset " + yritykset;
  let answer = document.getElementById("vastaus").value;
  //yllä olevat lukee ja laittaa tietoa html elementteihin

  //alla perus if else lausekkeet mihin arvaus peli perustuu.
  if (answer == number){
    document.getElementById("palaute").innerHTML = "Oikein!! aloitetaan uusi peli."
    voitot ++;
    pelit ++;
    yritykset = 1;
    number = uusi()
  }
  else if (yritykset >= 3 ) {
    pelit ++;
    yritykset = 1;
    number = uusi()
    document.getElementById("palaute").innerHTML = "Arvauksia oli jo 3 aloitetaan uusi peli."
  }
  else if (answer < number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

  }
  else if (answer > number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;

  }
}
let beg = "p/.gcls1anim"
