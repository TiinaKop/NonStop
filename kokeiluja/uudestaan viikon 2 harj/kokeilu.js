function kokeilu() {
var luku = document.getElementById('numero').value;
if (luku >= 0) {
  document.getElementById('tulosta').innerHTML = "Luku on positiivinen";
}
else {
  document.getElementById('tulosta').innerHTML = "Luku on negatiivinen";
}
}

function kokeiluTaas() {
var luku = document.getElementById('numero').value;
if (luku >= 0) {
  document.getElementById('tulostaT').innerHTML = "Luku on positiivinen";
}
else {
  document.getElementById('tulostaT').innerHTML = "Luku on negatiivinen";
}
}

function numero() { // yllä olevat funktiot, jotka on HTML:ssä ONLOAD:na saadaan toimimaan näin.
  kokeilu()
  kokeiluTaas()
}



function uusiN() {
  var luku = document.getElementById('uusiN').value;
  if (luku >= 0) {
    document.getElementById('tulostaN').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulostaN').innerHTML = "Luku on negatiivinen";
  }
}
