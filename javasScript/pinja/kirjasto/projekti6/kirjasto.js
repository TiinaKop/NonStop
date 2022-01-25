function tallenna() {
  var etunimi = document.getElementById('etunimi').value;
  var sukunimi = document.getElementById('sukunimi').value;
  var osoite = document.getElementById('lahiosoite').value;
  var postinumero = document.getElementById('postinumero').value;
  var postitoimipaikka = document.getElementById('postitoimipaikka').value;
  var puhelin = document.getElementById('puhelin').value;
  var sahkoposti = document.getElementById('sposti').value;
  var key = document.getElementById('key').value;

  const x = {
    etunimi: etunimi,
    sukunimi: sukunimi,
    osoite: osoite,
    pnumero: postinumero,
    ptoimipaikka: postitoimipaikka,
    puhelin: puhelin,
    sposti: sahkoposti,
  }
  window.localStorage.setItem(key,JSON.stringify(x));
  console.log("Tiedot tallennettu");
  var teksti = "Tiedot tallennettu";
  var paragraph = document.createElement("p");
  var p = document.createTextNode(teksti);
  paragraph.appendChild(p);
  var element = document.getElementById('tulosta');
  element.appendChild(paragraph);
  }

  
