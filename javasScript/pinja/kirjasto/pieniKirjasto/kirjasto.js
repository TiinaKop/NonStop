function tallenna() {
  var avain = document.getElementById('avain').value;
  var elain = document.getElementById('elain').value;
  var vari = document.getElementById('vari').value;

  const pehmolelu = { // objekti
    elain: elain,
    vari: vari,
  }
  window.localStorage.setItem(avain,JSON.stringify(pehmolelu));
  console.log("tallennettu");
  // tekee objektista merkkijonon localStorageen
  document.getElementById('nayta').innerHTML = "tallennettu";
}

function find() {
  var avain = document.getElementById('AvainEtsi').value;
  console.log("Etsii tiedoston");
  var records = window.localStorage.getItem(avain); // hakee avaimen
  document.getElementById('nayta').innerHTML = records; // jos ei tee domilla
}

function poista() {
  var avain = document.getElementById('AvainPoista').value;
  localStorage.clear(avain);
  console.log("poistettu");
  var teksti = "Pehmolelu poistettu";
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(teksti);
  paragraph.appendChild(infor);
  var element = document.getElementById("nayta").appendChild(paragraph);
}

function poistaKaikki() {
  localStorage.clear();
  console.log("kaikki poistettu");
  document.getElementById('nayta').innerHTML = "Kaikki pehmolelut poistettu";
}


window.onload =function(){ //varmistaa, että sivu ladataan ennen toimintojen suorittamista.
    //document.getElementById("pehmot").onsubmit = tallenna
    document.getElementById("etsi").onclick = find
    document.getElementById("poista").onclick = poista
    document.getElementById("poistaKaikki").onclick = poistaKaikki
}
