var numero = [34, 566, 71, 89];

function yksi(a,b)
{
  console.log(a+b);
}

function kaksi()
{
  console.log(numero[0]);
}

function kolme(a,b)
{
  if((a + b) < 100)
  {
    console.log("Lukujen summa on alle 100");
  }
  else
  {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}

function nelja(a,b) {
  if(a == b)
  {
    console.log("Samat luvut");
  }
  else
  {
    console.log("Eri luvut");
  }
}

function viisi(a,b,c) {
  console.log(a * 3600 + b * 60 + c);
}

function kuusi(a,b,c) {
  function vuodet(c) {
    return c * 362.25;
  }
  function kuukaudet(b) {
    switch (b-1) {
      case 0:
        return 0;
        break;
      case 1:
        return 31;
        break;
      case 2:
        return 59;
        break;
      case 3:
        return 90;
        break;
      case 4:
        return 120;
        break;
      case 5:
        return 151;
        break;
      case 6:
        return 181;
        break;
      case 7:
        return 212;
        break;
      case 8:
        return 243;
        break;
      case 9:
        return 273;
        break;
      case 10:
        return 301;
        break;
      case 11:
        return 334;
        break;
      default:
      return 0;
    }
  }
  Syntymaaika = vuodet(c) + kuukaudet + a;
  Nyt = vuodet(2021) + kuukaudet(11) + 4;
  console.log(Nyt-Syntymaaika);
}
