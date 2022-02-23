function jarjestaLuvut() {
  var eka, toka, kolmas;
  eka = parseInt(document.getElementById('yksi').value);
  toka = parseInt(document.getElementById('kaksi').value);
  kolmas = parseInt(document.getElementById('kolme').value);
  if (eka < toka && eka < kolmas) {
    if (toka < kolmas) {
        document.getElementById('nayta').innerHTML =
        eka + " " +  toka + " " + kolmas;
    }
    else {
        document.getElementById('nayta').innerHTML =
        eka + " " + kolmas + " " + toka;
    }
    }
  else if (toka < eka && toka < kolmas) {
    if (eka < kolmas) {
        document.getElementById('nayta').innerHTML =
        toka + " " + eka + " " + kolmas;
    }
    else {
        document.getElementById('nayta').innerHTML =
        toka + " " + kolmas + " " + eka;
    }
  }
  else if (kolmas < eka && kolmas < toka) {
    if (eka < toka) {
        document.getElementById('nayta').innerHTML =
        kolmas + " " + eka + " " + toka;
    }
    else {
        document.getElementById('nayta').innerHTML =
        kolmas + " " + toka + " " + eka;
    }
  }
  }

  function etsiSuurin() {
    var eka, toka, kolmas, neljas, viides;
    ekat = parseInt(document.getElementById('ekat').value);
    toka = parseInt(document.getElementById('toinen').value);
    kolmas = parseInt(document.getElementById('kolmas').value);
    neljas = parseInt(document.getElementById('neljas').value);
    viides = parseInt(document.getElementById('viides').value);
    document.getElementById('naytaSuurin').innerHTML = "Annoit numerot: " + ekat + " " + toka + " " + kolmas + " " + neljas + " " + viides;
    document.getElementById('naytaSuurinToinen').innerHTML = "Suurin numero on " + Math.max(ekat, toka, kolmas, neljas, viides);
  }

  function paritonParillinen() {
    var numero = parseInt(document.getElementById('numero').value);
    if (numero%2 == 0) {
      document.getElementById('paritonParillinen').innerHTML = "Luku on parillinen";
    }
    else {
      document.getElementById('paritonParillinen').innerHTML = "Luku on pariton";
    }
  }

  function millaAjat() {
    var ikaa = parseInt(document.getElementById('ikaa').value);
    if (ikaa < 1 || ikaa > 120) {
      document.getElementById('millaAjat').innerHTML = "Anna ikä välillä 1-120";
    }
    else if (ikaa < 16) {
        document.getElementById('millaAjat').innerHTML = "polkupyörä";
    }
    else if (ikaa < 18) {
        document.getElementById('millaAjat').innerHTML = "Mopo";
    }
    else {
      document.getElementById('millaAjat').innerHTML = "Auto";
    }
}

function kieli() {
  var kieli = document.getElementById('kieli').value;
  if (kieli == "englanti") {
    document.getElementById('kaanna').innerHTML = "Hello World!"
  }
  else if (kieli == "ruotsi") {
    document.getElementById('kaanna').innerHTML = "Hej världen!"
  }
  else {
    document.getElementById('kaanna').innerHTML = "Hallo Welt!"
  }
}
