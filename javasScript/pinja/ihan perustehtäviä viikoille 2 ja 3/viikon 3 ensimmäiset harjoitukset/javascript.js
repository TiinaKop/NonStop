function tehtava1() {
  var x = document.getElementById('annaLuku').value;

  for (var i = 0; i <= x ; i++) {
    document.getElementById('tulostaLuvut').innerHTML = i;
  }
}
