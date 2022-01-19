function arvauspeli() {
var arvaus = document.getElementById('arvaus').value;
var x = Math.floor(Math.random()*10 +1);
if (arvaus == x) {
  document.getElementById('vastaus').innerHTML = "oikein";
}
else if (arvaus < x) {
  document.getElementById('vastaus').innerHTML = "liian pieni";
}
else if (arvaus > x) {
  document.getElementById('vastaus').innerHTML = "liian suuri";
}
}
