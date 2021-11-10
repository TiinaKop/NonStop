function lahetaVastaukset() {

var pisteet = 3;
var pisteet = 0;
var huom = 0;

var k1 = document.forms[”kyselyLomake][”k1”].value;
var k1 = document.forms[”kyselyLomake][”k2”].value;
var k1 = document.forms[”kyselyLomake][”k3”].value;

for(i= 1; i <= yhteensa; i++)
{
  if(eval('k'+i) == null | | eval('k'+i) =='')
  {
    alert('Et vastannut kysymykseen numero: ' +i);
    huom = 1;
  }
  if(huom ==1) return false;
  }

var vastaukset = ["c", "b", "a"];

for(i = 1; i <= yhteensa; i++)
{
  if(eval('k'+i) == vastaukset[i-1])
  {
    pisteet++;
  }
}
}
