var myNodelist = document.getElementsByTagName("LI"); //
for (var i = 0; i < myNodelist.length; i++) { // alkaen nollasta, päättyy ,myNodelistoom
  var span = document.createElement("SPAN"); // luodaan span elementti
  var txt = document.createTextNode("\u00D7"); // luodaan teksti
  span.className = "close"; // luodaan span:lle className
  span.appendChild(txt); // liitetään teksti spaniin
  myNodelist[i].appendChild(span);
}


// Piitottaa tehtävän, kun painaa X painiketta
var close = document.getElementsByClassName("close"); // haetaan yllä luotu class close
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() { tehdään functio
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// tehtävä tulee tehdyksi, kun painaa tehtävää
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) { // lisää tapahtuman hiiren klikkaus, toimii functiolla ev
  if (ev.target.tagName === 'LI') { // Jos on valittu li
    ev.target.classList.toggle('checked'); // saa valittua pois ja päälle (checked määritellään css:ssä, mikä muuttuu kun painaa)
  }
}, false);

// lisää uuden tehtävän, kun painaa add
function newElement() {
  var li = document.createElement("li"); //Luodaan li elementti
  var inputValue = document.getElementById("myInput").value; // haetaan käyttäjän kirjoittama teksti
  var t = document.createTextNode(inputValue); // luodaan tekstiä
  li.appendChild(t); // liitetään teksti li elementtiin
  if (inputValue === '') {  //
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li); // liitetään teksti myUL elementtiin
  }
  document.getElementById("myInput").value = ""; // tyhjennetään teksti syöttölaatikosta

  var span = document.createElement("SPAN"); // ludaan span elementti
  var txt = document.createTextNode("\u00D7"); // ludaan tekstiä (X)
  span.className = "close"; // luodaan className span:lle
  span.appendChild(txt); // liitetään teksti span:n
  li.appendChild(span); // liitetään span li elementtiin

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() { // tehdään functio
      var div = this.parentElement;
      div.style.display = "none"; // poistaa (X) taustavärin
    }
  }
}
