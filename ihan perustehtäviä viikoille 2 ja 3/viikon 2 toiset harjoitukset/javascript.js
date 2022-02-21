function functionName() {
  muuttuja = document.getElementById('luku').value;
  if (muuttuja >= 0) {
    document.getElementById('tulostaLuku').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulostaLuku').innerHTML = "Luku on negatiivinen";
  }
}



function lukuUusi() {
  x = document.getElementById('lukuKaksi').value;
  if (x >= 0) {
    document.getElementById('tulostaKaksi').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulostaKaksi').innerHTML = "Luku on negatiivinen";
  }
}

function kaikki() {
  functionName()
}
