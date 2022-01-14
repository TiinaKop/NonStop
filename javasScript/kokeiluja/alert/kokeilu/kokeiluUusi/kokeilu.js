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

function numerotJarjestykseen(() {
  var yksi = document.getElementById('yksi').value;
  var kaksi = document.getElementById('kaksi').value;
  var kolme = document.getElementById('kolme').value;
  if (yksi < kaksi && yksi < kolme) {
    if (kaksi < kolme) {
      document.getElementById('jarjestaNumerot').innerHTML = yksi + kaksi + kolme;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = yksi + kolme + kaksi;
    }
  }
  else if (kaksi < kolme && kaksi < yksi) {
    if (kolme < yksi) {
      document.getElementById('jarjestaNumerot').innerHTML = kaksi + kolme + yksi;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = kaksi + yksi + kolme;
    }
  }
  else if (kolme < kaksi && kolme < yksi) {
    if (kaksi < yksi) {
      document.getElementById('jarjestaNumerot').innerHTML = kolme + kaksi + yksi;
    }
    else {
      document.getElementById('jarjestaNumerot').innerHTML = kolme + yksi + kaksi;
    }
}
}
