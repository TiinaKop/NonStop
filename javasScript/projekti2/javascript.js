

document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {




  let annaNumero = document.getElementById("annaNumero").value;
  let random = [Math.floor(Math.random()* 10)]
  if (annaNumero == random) {
    document.getElementById("demo").innerHTML = "Arvasit oikean numeron";
  }
  else if (annaNumero > random) {
      document.getElementById("demo").innerHTML = "Arvauksesi on liian suuri";
  }
  else if (annaNumero < random) {
      document.getElementById("demo").innerHTML = "Arvauksesi on liian pieni";
  }

  var yhteens = 1;
  var pisteet = 0;

  var k1 = document.getElementById("annaNumero")

  var vastaukset = ["random"];

  for(i = 1; i <= yhteensa; i++)
  {
    if(eval("annaNumero"+i) == vastaukset[i-1])
  }
    pisteet++;
  }

var tulokset = document.getElementById("tulokset");
tulokset.innerHTML = "<h3>Sait " + pisteet + "pistettä</h3>"
}
