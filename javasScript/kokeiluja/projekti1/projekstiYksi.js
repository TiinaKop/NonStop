function validateform(){
var nimi=document.myform.nimi.value;
var ika=document.myform.ika.value;
var email=document.myform.email.value;

if (nimi==""){
  alert("Name can't be blank");
  return false;
}
else if (ika=="") {
  alert("ikä");
  return false;
}
else if (email=="") {
  alert("email");
  return false;
}
}
