function haloo() {
  var numero = parseInt(document.getElementById('kayttajanNumero').value);
  var teksti = " ";
  for (var i = 2; i <= numero; i+=2) {
    teksti+=i;
    teksti+= " ";
  }
  document.getElementById('halo').innerHTML = teksti;
}



function salasana() {
  var sana = document.getElementById('kayttajanSana').value;
  var salasana = " ";
  for (var j = 0; j < sana.length; j++) {
    salasana+=sana[j];
    salasana+="Ö";
  }
  document.getElementById('tulostaSalasana').innerHTML = salasana;
}

function sana() {
  var sanat = document.getElementById('kayttajanS').value;
  if (sanat.includes("ö") || sanat.includes("Ö")) {
    document.getElementById('tulostaSana').innerHTML = "On";
  }
  else {
    document.getElementById('tulostaSana').innerHTML = "Ei ole";
}
}


function sanaUusi() {
  var sanax = document.getElementById('kayttajanSa').value;
  var vastaus = "Ei ole";
  for (var k = 0; k < sanax.length; k++) {
    if (sanax[k] == "ö" || sanax[k] == "Ö") {
        vastaus = "On";
    }
  }
    document.getElementById('tulostaSanaUusi').innerHTML = vastaus;
}

function kertoma() {
  var number = parseInt(document.getElementById('kayttajanNu').value);
  var t = " ";
  var summa = 1;
  for (var l = 1; l <= number; l++) {
    t+=l;
    t+="*" // kuinka saa viimeisen * pois?
    summa*=l;
  }
  document.getElementById('tulostaKertoma').innerHTML = t + " = " + summa;
}


function summa() {
  var num = parseInt(document.getElementById('kayttajanNum').value);
  var tekstia = " ";
  let summa = 0;
  for (var m = 1; m <= num; m++) {
    tekstia+=m;
    tekstia+="+"; // kuinka saa viimeisen * pois?
    summa+=m;
  }
  document.getElementById('tulostaSumma').innerHTML = tekstia + " = " + summa;
}


function hipHei() {
  var teks = " ";
  for (var n = 1; n < 101; n++) {
    if (n%3 == 0) {
      teks+= " hip ";
    }
    else if (n%5 == 0) {
      teks+= " heijaa ";
    }
    else if (n%5 == 0 && n%3 == 0) {
      teks+= " hipheijaa ";
    }
    else {
      teks+= n + " ";
    }
}
  document.getElementById('tulostaHip').innerHTML = teks;
}


function kymmenen() {
  var x = "";
  for (var p = 1; p < 11; p++) {
    x+= p + " ";
  }
  document.getElementById('tulostaKymmenen').innerHTML = x;
}


function kymmenenYhteen() {
  var y = "";
  var summa = 0;
  for (var r = 1; r < 11; r++) {
    y+= r + " + ";
    summa+= r;
  }
  document.getElementById('tulostaKyhteen').innerHTML = y + " = " + summa;
}


function potenssiin() {
  var eka, toka;
  eka = parseInt(document.getElementById('kayttajanEka').value);
  toka = parseInt(document.getElementById('kayttajanToka').value);
  document.getElementById('tulostaPotenssi').innerHTML = Math.pow(eka,toka);
}



function potenssiinU() {
  var kor = parseInt(document.getElementById('kayttajanE').value);
  var pot = parseInt(document.getElementById('kayttajanT').value);
  var potenssiin = kor;
  for (var s = 1; s < pot; s++) {
    potenssiin*= kor;
  }
  document.getElementById('tulostaPotenssiU').innerHTML = potenssiin;
}



function suuriPieni() {
  var yksi = parseInt(document.getElementById('kayttajanYksi').value);
  var kaksi = parseInt(document.getElementById('kayttajanKaksi').value);
  var kolme = parseInt(document.getElementById('kayttajanKolme').value);
  var nelja = parseInt(document.getElementById('kayttajanNelja').value);
  var viisi = parseInt(document.getElementById('kayttajanViisi').value);
  document.getElementById('tulostaSP').innerHTML = "Suurin on " +
  Math.max(yksi, kaksi, kolme, nelja, viisi) + "<br> Pienin on " +
  Math.min(yksi, kaksi, kolme, nelja, viisi);
}


function suuriP()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('tulostaS').innerHTML = "Pienin luku on " + taulu[0] + "<br>Suurin luku on " + taulu[taulu.length-1];
}


function salasanaRandom() {
  var osayksi, osakaksi;
  var sana = document.getElementById('kayttajanSanaR').value;
  var taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var taulu = [];
  for (var z = 0; z < sana.length; z++) {
    osayksi = sana[z]; // kayttajan antamat kirjaimet
    taulu.push(osayksi);
    var aakkoset = Math.floor(Math.random()*taulukko.length);
    osakaksi = taulukko[aakkoset];
    taulu.push(osakaksi);
  }
  var salasana = taulu.join("");
document.getElementById('tulostaSalasanaR').innerHTML = salasana;
}

function salasanaRandom() {
  var osayksi, osakaksi;
  var sana = document.getElementById('kayttajanSanaR').value;
  var taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var taulu = [];
  for (var z = 0; z < sana.length; z++) {
    osayksi = sana[z]; // kayttajan antamat kirjaimet
    taulu.push(osayksi);
    var aakkoset = Math.floor(Math.random()*taulukko.length);
    osakaksi = taulukko[aakkoset];
    taulu.push(osakaksi);
  }
  var salasana = taulu.join("");
document.getElementById('tulostaSalasanaR').innerHTML = salasana;
}
