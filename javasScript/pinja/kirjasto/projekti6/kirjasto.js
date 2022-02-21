function tallenna() {

  var etunimi = document.getElementById('etunimi').value;
  var sukunimi = document.getElementById('sukunimi').value;
  var osoite = document.getElementById('lahiosoite').value;
  var postinumero = document.getElementById('postinumero').value;
  var postitoimipaikka = document.getElementById('postitoimipaikka').value;
  var puhelin = document.getElementById('puhelin').value;
  var sahkoposti = document.getElementById('sposti').value;
  var key = document.getElementById('key').value;

  if (key == "") {
    alert("Syötä avain");
    return false;
  }

  if (etunimi == "" || etunimi.length<2) {
    alert("Syötä etunimi");
    return false;
  }

  if (/\d/.test(etunimi)) { // tarkistaa sisältääkö numeroita
    alert("Syötä etunimeen vain tekstiä");
    return false;
  }

  if (sukunimi == "" || sukunimi.length<2) {
    alert("Syötä sukunimi");
    return false;
  }

  if (/\d/.test(sukunimi)) { // tarkistaa sisältääkö numeroita
    alert("Syötä sukunimeen vain tekstiä");
    return false;
  }

  if (osoite == "" || osoite.length<2) {
    alert("Syötä osoite");
    return false;
  }

  if (postinumero == "" || postinumero.length !=5) {
    alert("Syötä postinumero (5 numeroa)");
    return false;
  }

  if (/[a-zA-Z]/.test(postinumero)) { // tarkistaa sisältääkö tekstiä
    alert("Syötä postinumeroon vain numeroita");
    return false;
  }

  if (postitoimipaikka == "" || postitoimipaikka.length<2) {
    alert("Syötä postitoimipaikka");
    return false;
  }

  if (puhelin == "" || puhelin.length !=10) {
    alert("Syötä puhelinnumero muodossa 0401234567");
    return false;
  }

  if (/[a-zA-Z]/.test(puhelin)) { // tarkistaa sisältääkö tekstiä
    alert("Syötä puhelinnumeroon vain numeroita");
    return false;
  }

  if (sahkoposti == "") {
    alert("Syötä sähköpostiosoite");
    return false;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sahkoposti)) { //tarkistaa onko sähköpostiosoite muodossa a@b.cde ja onko siinä välilyöntejä
    alert("annoit sähköpostiosoitteesi oikein");
  }
  else {
    alert("Anna sähköpostiosoite muodossa marika.koponen@gmail.com");
    return false;
  }




  const tiedot = { // objekti
    etunimi: etunimi,
    sukunimi: sukunimi,
    osoite: osoite,
    pnumero: postinumero,
    ptoimipaikka: postitoimipaikka,
    puhelin: puhelin,
    sposti: sahkoposti,
  }
  window.localStorage.setItem(key,JSON.stringify(tiedot));
  console.log("Tiedot tallennettu");
  var teksti = "Tiedot tallennettu"; // tästä alaspäin domilla tehty innerHTML
  var paragraph = document.createElement("p");
  var p = document.createTextNode(teksti);
  paragraph.appendChild(p);
  var element = document.getElementById('nayta');
  element.appendChild(paragraph);
  }


function find() {
  var key = document.getElementById('AvainEtsi').value;
  console.log("Etsii tiedoston");
  var records = window.localStorage.getItem(key); // hakee avaimen
  document.getElementById('nayta').innerHTML = records; // jos ei tee domilla
}

function poista() {
  var key = document.getElementById('AvainPoista').value;
  localStorage.clear(key);
  console.log("poistettu");
  var teksti = "Tiedosto poistettu";
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(teksti);
  paragraph.appendChild(infor);
  var element = document.getElementById("nayta").appendChild(paragraph);
}

function poistaKaikki() {
  localStorage.clear();
  console.log("kaikki tiedostot poistettu");
  document.getElementById('nayta').innerHTML = "Kaikki tiedostot poistettu";
}


window.onload = function(){ //varmistaa, että sivu ladataan ennen toimintojen suorittamista.
    document.getElementById("etsi").onclick = find
    document.getElementById("poista").onclick = poista
    document.getElementById("poistaKaikki").onclick = poistaKaikki
}
