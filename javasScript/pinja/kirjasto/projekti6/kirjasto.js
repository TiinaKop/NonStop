function tallenna() {

  var etunimi = document.getElementById('etunimi').value;
  var sukunimi = document.getElementById('sukunimi').value;
  var osoite = document.getElementById('lahiosoite').value;
  var postinumero = parseInt(document.getElementById('postinumero').value);
  var postitoimipaikka = document.getElementById('postitoimipaikka').value;
  var puhelin = parseInt(document.getElementById('puhelin').value);
  var sahkoposti = document.getElementById('sposti').value;
  var key = document.getElementById('key').value;

  if (etunimi == "" || sukunimi == "" || osoite == "" || postinumero == "" || postitoimipaikka == "" || puhelin == "" || sahkoposti == "" || key == "") {
    alert("Täytä tyhjät kentät")
    return false;
  }

  if (etunimi.length<2 || sukunimi.length<2 || postitoimipaikka.length<2) {
    alert("Tarkista nimet ja postitoimipaikka");
    return false;
  }

  if (/\d/.test(etunimi) || /\d/.test(sukunimi)) { // tarkistaa sisältääkö numeroita
    alert("Syötä nimiin vain tekstiä");
    return false;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sahkoposti)) { //tarkistaa onko sähköpostiosoite muodossa a@b.cde ja onko siinä välilyöntejä
    alert("annoit sähköpostiosoitteesi oikein")
  }
  else {
    alert("Anna oikea sähköpostiosoitteesi");
    return false;
  }



  if (/[a-zA-Z]/.test(puhelin)) { // tarkistaa sisältääkö tekstiä
    alert("Syötä puhelimeen vain numeroita");
    return false;
  }

  if (/[a-zA-Z]/.test(postinumero)) {
    alert("Syötä postinumeroon vain numeroita");
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


window.onload =function(){ //varmistaa, että sivu ladataan ennen toimintojen suorittamista.
    //document.getElementById("pehmot").onsubmit = tallenna
    document.getElementById("etsi").onclick = find
    document.getElementById("poista").onclick = poista
    document.getElementById("poistaKaikki").onclick = poistaKaikki
}
