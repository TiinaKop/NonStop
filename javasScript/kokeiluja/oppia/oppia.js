function kaikki() {
  taas()
  testi()
  nimet()
  tulos()
  toimiiko()
}

function taas() {
  var numerot = [2,6,9];
  var summa = 0;
  for (var i in numerot) {
    summa += numerot[i];
  }
  var numeroidenMaara = numerot.length;
  var keskiarvo = summa / numeroidenMaara;
  document.getElementById('taas').innerHTML = keskiarvo.toFixed(2);
}

function harjoitus() {
    document.getElementById('oppia').innerHTML = "Ja nyt näin";
}

function uusiHarjoitus() {
  document.getElementById('oppiaTaas').innerHTML = "ja taas vaihtui";
}


function testi() {
  let muuttuja = 5 * 10;
  document.getElementById('demo').innerHTML = muuttuja;
}

function nimet() {
  var henkilo = {etuNimi: "Maija", sukuNimi: "Mehiläinen", ika: 10};
  document.getElementById('tiedot').innerHTML =
  henkilo["etuNimi"] + " <br> " +
  henkilo["sukuNimi"] + " <br> " +
  henkilo["ika"] + " vuotta";
}

function tulos() {
  let muuttuja = 5 * 100;
  document.getElementById('demot').innerHTML = muuttuja;
}

function toimiiko() {
  document.getElementById('toimiiko').innerHTML = "uudestaan";
}

function haloo() {
  document.getElementById('halo').innerHTML = "uusi teksti";
}

function plus() {
  let eka = parseInt(document.getElementById('eka').value);
  let toka = parseInt(document.getElementById('toka').value);
  let tulos = eka + toka;
  document.getElementById('tulos').innerHTML = tulos;
}

function keskiArvo() {
  var a = parseInt(document.getElementById('eka').value);
  var b = parseInt(document.getElementById('toka').value);
  var numero = [a, b];
  var summa = 0;
  for(var i in numero) {
    summa += numero[i]
}
  numeroidenMaara = numero.length;
  keskiarvo = summa / numeroidenMaara;
  document.getElementById('tulosUusi').innerHTML = keskiarvo;
}
