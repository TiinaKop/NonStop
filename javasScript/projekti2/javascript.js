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
}
