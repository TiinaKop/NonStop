var kirjain = [
  ["H","A","T","T","U"],
  ["E","L","Ä","M","Y","S"],
  ["K","I","S","S","A","N","P","E","N","T","U"],
  ["K","O","U","L","U","T","U","S"],
  ["S","U","O","M","E","N","L","I","N","N","A"],
  ["Y","R","I","T","Y","S"],
  ["V","I","I","K","O","N","L","O","P","P","U"],
  ["A","U","T","O"],
  ["T","I","E","T","O","K","O","N","E"]
]
var sekoitus = Math.floor((Math.random()*(kirjain.length-1)));

var sana = kirjain[sekoitus]; // arvattava sana valitaan yllä olevasta taulukosta
var sananPituus = new Array(sana.length); // arvattavan sanan pituus
var vaaraKirjain = 0;

// sanan jokaista kirjainta symboloi alaviiva arvauskentässä
for (var i = 0; i < sananPituus.length; i++){
	sananPituus[i] = "_ ";
}

// tulostaa alaviivat arvattavan sanan kirjainten paikalle
function tulostaViiva(){
	for (var i = 0; i < sananPituus.length; i++){
	var viivanPaikka = document.getElementById("viivanPaikka");
	var viiva = document.createTextNode(sananPituus[i]);
	viivanPaikka.appendChild(viiva);
	}
}

// tarkistaa, vastaako käyttäjän antama kirjain yhtä tai useampaa sanan kirjainta
var pruefeZeichen = function(){
	var formName = document.rateformular;
	var b = formName.elements["ratezeichen"];
	var kayttajanKirjain = b.value; // käyttäjän antama kirjain
	kayttajanKirjain = kayttajanKirjain.toUpperCase();
	for (var i = 0; i < sana.length; i++){
		if(sana[i] === kayttajanKirjain){
			sananPituus[i] = kayttajanKirjain + " ";
			var oikeaKirjain = true;
		}
	b.value = ""; // tyhejentää kentän, jossa arvataa kirjain
	}

	//poistaa arvauskentän ja korvaa sen uudella
	var viivanPaikka = document.getElementById("viivanPaikka");
	viivanPaikka.innerHTML="";
	tulostaViiva();

	// jos arvattu kirjain ei ole sanassa, kirjain laitetaan "väärät kirjaimet" -listalle
  	if(!oikeaKirjain){
		var vaaraKirjainPaikka = document.getElementById("vaaraKirjainPaikka");
		var viiva = document.createTextNode(" " + kayttajanKirjain);
		vaaraKirjainPaikka.appendChild(viiva);
		vaaraKirjain++;
	}

	//Tarkistaa onko kaikki kirjaimet oikein
	var oikeaSana = true;
	for (var i = 0; i < sananPituus.length; i++){
		if(sananPituus[i] === "_ "){
			oikeaSana = false;
		}
	}
  // jos sana on oikein, voitat
	if(oikeaSana){
		alert("Voiti!");
	}

	// Kun olet arvannut 10 numeroa, häviät pelin
	if(vaaraKirjain === 1){
		alert("Hävisit pelin");
	}
}

function init(){
	tulostaViiva();
}

window.onload = init;
