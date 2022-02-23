function pari() {
  var yksi = document.getElementById('pariLuku').value;
  if (yksi%2 == 0) {
    document.getElementById('tulostaYksi').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulostaYksi').innerHTML = "Luku on negatiivinen";
  }
}

function viikonpaivat() {
  var kaksi = document.getElementById('viikonpvLuku').value;
  var sana = "";

  switch (kaksi) {
    case "1":
      sana = "Maanantai";
      break;
    case "2":
      sana = "Tiistai";
      break;
    case "3":
      sana = "Keskiviikko";
      break;
    case "4":
      sana = "Torstai";
        break;
    case "5":
      sana = "Perjantai";
        break;
    case "6":
      sana = "Lauantai";
        break;
    case "7":
      sana = "Lauantai";
        break;
    default:
      sana = "Syötä luku väliltä 1-7";
  }
  document.getElementById('viikonpv').innerHTML = sana;
}

function vuosi() {
  vuosiluku = document.getElementById('vuosiLuku').value;
  if (vuosiluku %4 == 0 && !(vuosiluku %100 == 0)) {
    document.getElementById('tulostaVuosi').innerHTML = "Vuosi on karkausvuosi";
  }
  else if (vuosiluku %400 == 0) {
    document.getElementById('tulostaVuosi').innerHTML = "Vuosi on karkausvuosi";
  }
  else {
    document.getElementById('tulostaVuosi').innerHTML = "Vuosi ei ole karkausvuosi";

  }
}
