function scrabble() {
let sana = document.getElementById('KayttajanSana').value;
let pisteet = 0;

if(sana in A || E || I || N || S || T){
pisteet+= 1; }
else if(sana in O || Ä || K || L) {
pisteet+= 2; }
else if (sana in U|| M) {
pisteet+= 3;
}
else if (sana in Y || H || J || P || R || V) {
pisteet+= 4;
}
else if (sana in Ö|| D) {
pisteet+= 7;
}
else if (sana in B|| F || G) {
pisteet+= 8;
}
else if (sana in C) {
pisteet+= 10;
}
else {
pisteet+= 12;
}

document.getElementById('Sanapisteet').innerHTML = pisteet;
}
