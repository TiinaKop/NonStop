function arvauspeli() {
  kayttajanArvaus = document.getElementById('arvaus').value;
  tietokoneenNumero = Math.floor(Math.Random()*10+1);

  if (kayttajanArvaus == tietokoneenNumero) {
    document.getElementById('tulos').innerHTML = "Arvasit oikein"
  }
}
