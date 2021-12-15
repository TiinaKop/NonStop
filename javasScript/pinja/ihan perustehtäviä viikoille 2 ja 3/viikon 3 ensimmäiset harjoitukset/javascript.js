function tehtava() {
  var x = parseInt(document.getElementById('annaLuku').value);
  var jono = "<p>";
  for(var i = 2; i <= x; i = i+2) {
    jono+=i;
    jono+=" ";
  }
    jono+="</p>";
    document.getElementById('tulostaLuvut').innerHTML = jono;
  }

function luvut() {
  var y = parseInt(document.getElementById('luku').value);
  var uusi = "<p>";
  for (var i = 1; i <= y; i= i+2) {
    uusi+=i;
    uusi+=" ";
  }
  uusi+="</p>";
  document.getElementById('luvut').innerHTML = uusi;
}

function salasana() {
  var sana = document.getElementById('annaSana').value;
  var uusit = "<p>";
  for (var j = 0; j < sana.length; j++) {
    uusit+=sana[j];
    uusit+="Ö";
  }
  uusit+="</p>";
  document.getElementById('tulostaSana').innerHTML = uusit;
}
