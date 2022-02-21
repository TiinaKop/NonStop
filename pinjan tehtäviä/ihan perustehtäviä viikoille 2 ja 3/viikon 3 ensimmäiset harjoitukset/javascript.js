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



function onkoKirjain() {
let sana = document.getElementById('Sana').value;
if (sana.includes("Ö")) {
    document.getElementById('onkoKirjainta').innerHTML = "on";
} else
    document.getElementById('onkoKirjainta').innerHTML = "ei ole";
}

function kertoma() {
  var numero = parseInt(document.getElementById('numero').value);
  let tulos = 1;
  for (var k = 1; k <= numero; k++) {
    tulos*=k;
  }
  document.getElementById('tulostaKertoma').innerHTML =
  "Annoit numeron " + numero + ". Tämän kertoma on " + tulos;
}
//littel big planet / rainman / little nightmares
//steam tietokonepaikka

function hipheijaa() {
  var hip = "";
  for(var z = 1; z < 101; z++) {
      if (z%5 == 0 && z%3 == 0) {
        hip+= " hipheijaa ";
      }
      else if (z%3 == 0) {
        hip+= " hip ";
      }
      else if (z%5 == 0) {
        hip+= " heijaa ";
      }
      else {
        hip+= z+" ";
      }
  }
    document.getElementById('tulostaHipHei').innerHTML = hip;
  }

  function kymmenen() {
    var numerot = "<p>";
    for (var i = 1; i <= 10; i++) {
      numerot+=i;
      numerot+= " ";
    }
    numerot+= "</p>";
    document.getElementById('tulosta10').innerHTML = numerot;
  }

function kymmenenYhteen() {
  var summa = 0;
  for (var i = 1; i < 11; i++) {
    summa+=i;
  }
  document.getElementById('kymmenenSumma').innerHTML = summa;
}

function potenssiin() {
  var korotettava = document.getElementById('korotettava').value;
  var potenssi = document.getElementById('potenssi').value;
  document.getElementById('tulostaPotenssi').innerHTML = Math.pow(korotettava,potenssi);
}

/*function potenssiin() {
  var korotettava = document.getElementById('korotettava').value;
  var potenssi = document.getElementById('potenssi').value;
  var yhteensa = korotettava;
  for (var i = 1; i < potenssi; i++) {
    yhteensa*= korotettava;
  }
  document.getElementById('tulostaPotenssi').innerHTML = korotettava;
}*/

function PieniSuuri() {
  var eka = document.getElementById('eka').value;
  var toka = document.getElementById('toka').value;
  var kolmas = document.getElementById('kolmas').value;
  var neljas = document.getElementById('neljas').value;
  var viides = document.getElementById('viides').value;
  document.getElementById('tulostaPienin').innerHTML = "Pienin on " + Math.min(eka, toka, kolmas, neljas, viides);
  document.getElementById('tulostaSuurin').innerHTML = "Suuron on " + Math.max(eka, toka, kolmas, neljas, viides);
}

/*function PieniSuuri()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('tulostaSuurin').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}*/


function muokkaaSalasana() {

  var osaYksi, osaKaksi;
  sana = document.getElementById('sanaMuokattu').value;
  var taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var taulu = [];
  for (var i = 0; i < sana.length; i++) {
    osaYksi = sana[i];
    taulu.push(osaYksi);
    var aakkoset = Math.floor(Math.random()*taulukko.length);
    osaKaksi = taulukko[aakkoset];
    taulu.push(osaKaksi);
  }
  salasana = taulu.join('');
  document.getElementById('tulostaSalasana').innerHTML = salasana;
}

function parillisetParittomat() {
    var eka, toka, parillinenLuku, parintonLuku, parillisetSumma=0, parittomatSumma=0, parillisetLuvut='', parittomatLuvut='';
    eka = parseInt(document.getElementById('lukuPieni').value);
    toka = parseInt(document.getElementById('lukuIso').value);
    if(eka%2 == 0)
    {
      parillinenLuku = eka;
    }
    else {
      parillinenLuku = eka+1;
    }
    for(var b = parillinenLuku; b<=toka; b+=2)
    {
      parillisetLuvut += b + ' ';
      parillisetSumma += b;
    }
    if(eka%2 == 0)
    {
      paritonLuku = eka+1;
    }
    else {
      paritonLuku = eka;
    }
    for(var r = paritonLuku; r<=toka; r+=2)
    {
      parittomatLuvut += r + ' ';
      parittomatSumma += r;
    }
    document.getElementById('tulostaEka').innerHTML = '<p>Parilliset numerot: ' + parillisetLuvut +' ja niiden summa: ' + parillisetSumma + '</p><p>Parittomat luvut: ' + parittomatLuvut + ' ja niiden summa: '+ parittomatSumma + '</p>'
}
