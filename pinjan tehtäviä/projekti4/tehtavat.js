

// Luodaan X painike jokaiseen tehtävään
var myNodelist = document.getElementsByTagName("LI"); //
for (var i = 0; i < myNodelist.length; i++) { // alkaen nollasta, päättyy myNodelistiin
  var span = document.createElement("SPAN"); // luodaan span elementti
  var ruksi = document.createTextNode("\u00D7"); // luodaan teksti (x)
  span.className = "close"; // luodaan span:lle className
  span.appendChild(ruksi); // liitetään teksti spaniin
  myNodelist[i].appendChild(span);
}

// Luodaan toiminto, joka poistaa tehtävän painamalla X
var close = document.getElementsByClassName("close"); // haetaan className close
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() { // luodaan functio, joka toimii napauttamalla
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) { // lisää tapahtuman hiiren klikkaus, toimii functiolla ev
  if (ev.target.tagName === 'LI') { // Jos elementti on li
    ev.target.classList.toggle('checked'); // saa valittua pois ja päälle (checked määritellään css:ssä, mikä muuttuu)
  }
}, false);



// lisää uuden tehtävän, kun painaa lisää
function add() {
  var li = document.createElement("li"); //Luodaan li elementti
  var kayttajanTehtava = document.getElementById("kayttajanTehtava").value; // haetaan käyttäjän kirjoittama teksti
  var teksti = document.createTextNode(kayttajanTehtava); // luodaan teksti
  li.appendChild(teksti); // liitetään teksti li elementtiin
  if (kayttajanTehtava === '') {  // käyttäjä painaa liitä, muttei ole tekstiä
    alert("Kirjoita tehtävä");
  } else {
    document.getElementById("tekemattomat").appendChild(li); // liitetään teksti tehtavat elementtiin
  }
  document.getElementById("kayttajanTehtava").value = ""; // tyhjennetään teksti syöttölaatikosta

  // Luodaan X jokaiseen tehtävään
  var span = document.createElement("SPAN"); // ludaan span elementti
  var ruksi = document.createTextNode("\u00D7"); // ludaan teksti (X)
  span.className = "close"; // luodaan className span:lle
  span.appendChild(ruksi); // liitetään teksti span:n
  li.appendChild(span); // liitetään span li elementtiin

  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
