function taulukko() {
document.getElementById('pieni').innerHTML = "Pienin numero on " + Math.min(8, 4, 9, 6, 2);
document.getElementById('suuri').innerHTML = "Suurin numero on " + Math.max(8, 4, 9, 6, 2);
}

function Paritonko() {
  var n = document.getElementById('numero').value;
  if (n%2 == 0)
    document.getElementById('vastaus').innerHTML = "Numero on parillinen";
  else {
    document.getElementById('vastaus').innerHTML = "Numero on pariton";
  }
}

function kuukausi() {
var text;
var day = document.getElementById('kuukausi').value;
switch (day) {
  case "1":
    text = "Tammikuu";
    break;
  case "2":
    text = "Helmikuu";
    break;
  case "3":
    text = "Maaliskuu";
    break;
  case "4":
    text = "Huhtikuu";
    break;
  case "5":
    text = "Toukokuu";
    break;
  case "6":
    text = "Kesäkuu";
    break;
  case "7":
    text = "Heinäkuu";
    break;
  case "8":
    text = "Elokuu";
    break;
  case "9":
    text = "Syyskuu";
    break;
  case "10":
    text = "Lokakuu";
    break;
  case "11":
    text = "Marraskuu";
    break;
  case "12":
    text = "Joulukuu";
}
document.getElementById('TulostaKuukausi').innerHTML = text;
}


function tieto(etunimi, sukunimi, puh, osoite) {
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.puh = puh,
  this.osoite = osoite
}
var Marika = new tieto("Marika", "Koponen", "0407432100", "Katu 1");
console.log(Marika.puh);


function Sana(sana) {
  var y = Array.from(sana);
  y.sort();
  var text = y.join('');
  console.log(text);
}

function arvosana() {
  var taulu = [], temp;
  for (var i = 0; i < 5; i++) {
    temp = document.getElementById('A['+i+']').value;
    taulu.push(temp);
  }
  var nimi = [], temp;
  for (var j = 0; j < 5; j++) {
    temp = document.getElementById('B['+j+']').value;
    nimi.push(temp);
  }
  if (taulu < 50) {
    console.log(nimi + "hylätty");
  }
  else if (taulu < 60) {
    console.log(nimi + "T1");
  }
  else if (taulu < 70) {
    console.log(nimi + "T2");
  }
  else if (taulu < 80) {
    console.log(nimi + "H3");
  }
  else if (taulu < 90) {
    console.log(nimi + "H4");
  }
  else if (taulu < 100) {
    console.log(nimi + "H5");
  }
  document.getElementById('arvosana').innerHTML = taulu + nimi;
}

function Grade(){
  var sub1 = parseInt(document.getElementById("eng").value);
  var sub2 = parseInt(document.getElementById("mat").value);
  var sub3 = parseInt(document.getElementById("phy").value);
  var sub4 = parseInt(document.getElementById("chm").value);
  var sub5 = parseInt(document.getElementById("cmp").value);

   if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
  {
    alert("Please Enter Marks in range of 100");
  }else {
     var total= sub1 + sub2 + sub3 + sub4 + sub5;
     var avg=total/5;

     if(avg>=80 && avg<=100)
     {
       document.getElementById("grade").innerHTML="You Got A+ Grade";
     }
     else if(avg>=75 && avg<=80)
     {
       document.getElementById("grade").innerHTML="You Got A+ Grade";
     }
     else if(avg>=70 && avg<=75)
     {
       document.getElementById("grade").innerHTML="You Got A Grade";
     }
     else if(avg>=65 && avg<=70)
     {
       document.getElementById("grade").innerHTML="You Got B Grade";
     }
     else if(avg>=50 && avg<=60)
     {
       document.getElementById("grade").innerHTML="You Got C Grade";
     }
     else if(avg>=40 && avg<=50)
     {
       document.getElementById("grade").innerHTML="You Got C Grade";
     }

     else {
       document.getElementById("grade").innerHTML="You Got F Grade";
     }
