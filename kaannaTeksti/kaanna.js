function kaanna()
{
  var haettuTeksti = document.getElementById('teskti').value;
  var sananPituus = haettuTeksti.length;
  var uusiSana = '';
  for(var x = sananPituus-1; x >=0; x--)
  /*määritellään x, mihin asti käytetään, mitä tehdään*/
  {
  uusiSana = uusiSana + haettuTeksti[x];
  }
  document.getElementById('vastaus').innerHTML = uusiSana;
}
