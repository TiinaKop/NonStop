function kymmenen() {
  var numerot = " ";
  for (var i = 0; i < 11; i++) {
    numerot += i;
    numerot += " ";
  }
  document.getElementById('TulostaNumerot').innerHTML = numerot;
}


function kymmenenSumma() {
  var numerot = " ";
  var summa = 0;
  for (var j = 1; j < 11; j++) {
    numerot += j;
    numerot += " ";
    summa+= j;
  }
  document.getElementById('TulostaSumma').innerHTML = "Numeroiden " + numerot + "summa on " + summa;
}


function kolmeSanaa() {
  var sanat = "haloo";
  var uusi = " ";
  for (var k = 0; k < sanat.length; k++) {
    uusi+= sanat[k];
    for (var l = 0; l < 3; l++) {
    uusi+= sanat[l];
    }
  }
  document.getElementById('TulostaSanat').innerHTML = uusi;
}

function kolmeSanaaUusi() {
  var sana = "hei!";
  sana+= "<br>";
  document.getElementById('TulostaSanatUusi').innerHTML = sana.repeat(3);
}

function numerotJarjestykseen() {
  var yksi = parseInt(document.getElementById('yksi').value);
  var kaksi = parseInt(document.getElementById('kaksi').value);
  var kolme = parseInt(document.getElementById('kolme').value);

  if (yksi < kaksi && yksi < kolme) {
    if (kaksi < kolme) {
      document.getElementById('jarjestaNumerot').innerHTML = yksi + " " + kaksi + " " + kolme;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = yksi + " " + kolme + " " + kaksi;
    }
  }
  else if (kaksi < kolme && kaksi < yksi) {
    if (kolme < yksi) {
      document.getElementById('jarjestaNumerot').innerHTML = kaksi + " " + kolme + " " + yksi;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = kaksi + " " + yksi + " " + kolme;
    }
  }
  else if (kolme < kaksi && kolme < yksi) {
    if (kaksi < yksi) {
      document.getElementById('jarjestaNumerot').innerHTML = kolme + " " + kaksi + " " + yksi;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = kolme + " " + yksi + " " + kaksi;
    }
}
}

/*function pieninSuurin() {
  var eka, toka, kolmas;
  eka = parseInt(document.getElementById('eka').value);
  toka = parseInt(document.getElementById('toka').value);
  kolmas = parseInt(document.getElementById('kolmas').value);
  document.getElementById('tulostaP').innerHTML = "Pienin numero on " + Math.min(eka, toka, kolmas);
  document.getElementById('tulostaS').innerHTML = "Suurin numero on " + Math.max(eka, toka, kolmas);
}*/

function pieninSuurin() {
  var eka, toka, kolmas;
  eka = parseInt(document.getElementById('eka').value);
  toka = parseInt(document.getElementById('toka').value);
  kolmas = parseInt(document.getElementById('kolmas').value);
if (eka < toka && kolmas < toka) {
  if (eka < kolmas) {
    document.getElementById('tulostaS').innerHTML = "Suurin numero on " + toka + "<br> Pienin numero on " + eka;
  }
  else {
      document.getElementById('tulostaS').innerHTML = "Suurin numero on " + toka + "<br> Pienin numero on " + kolmas;
  }
}
else if (toka < kolmas && eka < kolmas) {
  if (toka < eka) {
    document.getElementById('tulostaS').innerHTML = "Suurin numero on " + kolmas + "<br> Pienin numero on " + toka;
  }
  else {
      document.getElementById('tulostaS').innerHTML = "Suurin numero on " + kolmas + "<br> Pienin numero on " + eka;
  }
}
else if (kolmas < eka && toka < eka) {
  if (kolmas < toka) {
    document.getElementById('tulostaS').innerHTML = "Suurin numero on " + eka + "<br> Pienin numero on " + kolmas;
    }
  else {
    document.getElementById('tulostaS').innerHTML = "Suurin numero on " + eka + "<br> Pienin numero on " + toka;
    }
  }
}

function PariPariton() {
  var numero = parseInt(document.getElementById('Numero').value);
  if (numero%2 == 0) {
    document.getElementById('tulostaPari').innerHTML = "Numero on parillinen";
  }
  else {
    document.getElementById('tulostaPari').innerHTML = "Numero on pariton";
  }
}

function millaAjaa() {
  var ika = parseInt(document.getElementById('ika').value);
  if (ika >= 18) {
    document.getElementById('tulostaMenopeli').innerHTML = "Voit ajaa autolla";
  }
  else if (ika >= 16) {
    document.getElementById('tulostaMenopeli').innerHTML = "Voit ajaa mopolla";
  }
  else {
    document.getElementById('tulostaMenopeli').innerHTML = "Voit ajaa polkupyörällä";
  }
}


function kieli() {
  var kieli = document.getElementById('pudotus').value;
  if (kieli == "englanti") {
    document.getElementById('tulostaKieli').innerHTML = "Hello world";
    }
  else if (kieli == "ruotsi") {
    document.getElementById('tulostaKieli').innerHTML = "Hej världen";
    }
  else {
    document.getElementById('tulostaKieli').innerHTML = "Hola Mundo";
  }
}
