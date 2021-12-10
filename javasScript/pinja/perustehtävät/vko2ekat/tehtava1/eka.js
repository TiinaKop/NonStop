function jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById("yksi").value);
  luku2 = parseInt(document.getElementById("kaksi").value);
  luku3 = parseInt(document.getElementById("kolme").value);
  document.write("Annoit luvut: " + luku1 + "" + luku2 + "" + luku3 + "<br>");
  if (luku1 < luku2 && luku1 < luku3) {
    if (luku2 < luku3) {
      document.getElementById("teksti").innerHTML = (luku1 + "" + luku2 + "" + luku3);
    }
    else {
      document.getElementById("teksti").innerHTML = (luku1 + "" + luku3 + "" + luku2);
    }
  }
  else if (luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku3) {
      document.getElementById("teksti").innerHTML = (luku2 + "" + luku1 + "" + luku3);
    }
    else {
      document.getElementById("teksti").innerHTML = (luku2 + "" + luku3 + "" + luku1);
    }
  }
  else if (luku3 < luku1 && luku3 < luku2) {
    if (luku1 < luku2) {
      document.getElementById("teksti").innerHTML = (luku3 + "" + luku1 + "" + luku2);
    }
    else {
      document.getElementById("teksti").innerHTML = (luku3 + "" + luku2 + "" + luku1);
    }
  }
}

jarjesta()
