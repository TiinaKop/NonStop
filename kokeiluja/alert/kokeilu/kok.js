function nimet() {
let nimi = document.getElementById("nimi").value;
if (nimi < 10) {
  alert("Nimi puuttuu");
  return false;
}
  else { //jos edellinen if lauseke täyty tulee toteuttaa tämän.
    return true; // palauttaa arvon totta eli true.
    }
}
