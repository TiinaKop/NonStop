function scrabble() {
var sana = document.getElementById('sana').value;
var pisteet = 0;
for (var i = 0; i < sana.length; i++) {
  switch (sana[i]) {
    case "A":
    case "E":
    case "I":
    case "N":
    case "S":
    case "T":
      pisteet++;
      break;
    case "O":
    case "Ä":
    case "K":
      pisteet+= 2;
      break;
    case "U":
    case "M":
      pisteet+= 3;
      break;
    case "Y":
    case "H":
    case "J":
    case "P":
    case "R":
    case "V":
      pisteet+= 4;
      break;
    case "Ö":
    case "D":
      pisteet+= 7;
      break;
    case "B":
    case "F":
    case "G":
      pisteet+= 8;
      break;
    case "C":
      pisteet+= 10;
      break;
    default:
      pisteet+= 12;
    }
    document.getElementById('pisteet').innerHTML = "Sanan pisteet ovat: " + pisteet;
    }
    }


    function lotto() {
      var numerot = [];
      var arvonta;
      for (var j = 0; j < 7; j++) {
        arvonta = Math.floor(Math.random()*40 +1) ;
        numerot[j] = arvonta;
      }
      document.getElementById('arvottu').innerHTML = numerot;
    }


    function taulukko() {
      var numero = []
      numero = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
      [7, 4, 28, 14], [3, 10, 26, 7]];
      var taulu = '<table border="1">';
      for (var i = 0; i < numero.length; i++) {
        taulu += '<tr>';
        for (var j = 0; j < numero[i].length; j++) {
          taulu += '<td>' + numero[i][j] + '<td>'
        }
        taulu += '</tr>';
      }
      taulu += '</table>';
      document.getElementById('taulukko').innerHTML = taulu;
    }
