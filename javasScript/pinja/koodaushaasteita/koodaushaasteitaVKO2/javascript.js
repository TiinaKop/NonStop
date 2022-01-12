function taulukko() {
document.getElementById('pieni').innerHTML = "Pienin numero on " + Math.min(8, 4, 9, 6, 2);
document.getElementById('suuri').innerHTML = "Suurin numero on " + Math.max(8, 4, 9, 6, 2);
}

function Paritonko() {
  var n = document.getElementById('numero').value;
  if (n%2 == 0)
    document.getElementById('vastaus').innerHTML = "Numero on parillinen";
  else {
    document.getElementById('vastaus').innerHTML = "Numero on pariton";
  }
}

function kuukausi() {
var text;
var day = document.getElementById('kuukausi').value;
switch (day) {
  case "1":
    text = "Tammikuu";
    break;
  case "2":
    text = "Helmikuu";
    break;
  case "3":
    text = "Maaliskuu";
    break;
  case "4":
    text = "Huhtikuu";
    break;
  case "5":
    text = "Toukokuu";
    break;
  case "6":
    text = "Kesäkuu";
    break;
  case "7":
    text = "Heinäkuu";
    break;
  case "8":
    text = "Elokuu";
    break;
  case "9":
    text = "Syyskuu";
    break;
  case "10":
    text = "Lokakuu";
    break;
  case "11":
    text = "Marraskuu";
    break;
  case "12":
    text = "Joulukuu";
}
document.getElementById('TulostaKuukausi').innerHTML = text;
}
