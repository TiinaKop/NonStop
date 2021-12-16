function taulukko() {
  taulu = [8, 4, 9, 6, 2];
  document.getElementById('taulukko').innerHTML =
  '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
