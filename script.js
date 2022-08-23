var PLS=document.querySelectorAll(".plus");
for (let i = 0; i < PLS.length; i++) {
    PLS[i].addEventListener("click",flous)
}
function flous(event) {
  var cible=event.target;
  var div=cible.parentElement;
  var count=Number(div.querySelector("p").innerHTML)
  count++;
  div.querySelector("p").innerHTML=count;
  var tr=div.parentElement.parentElement;
  var PU=Number(tr.querySelector(".unitPrice").innerHTML)
  var prix=PU*count
  tr.querySelector(".price").innerHTML=prix
  som()
}

var MIN=document.querySelectorAll(".minus");
for (let i = 0; i < MIN.length; i++) {
    MIN[i].addEventListener("click",sarf)
}
function sarf(event) {
  var cible=event.target;
  var div=cible.parentElement;
  var count=Number(div.querySelector("p").innerHTML)
  count--; 
  if (count>=0) { 
  div.querySelector("p").innerHTML=count;
  var tr=div.parentElement.parentElement;
  var PU=Number(tr.querySelector(".unitPrice").innerHTML)
  var prix=PU*count
  tr.querySelector(".price").innerHTML=prix
  som()
}
}

var HRT=document.querySelectorAll(".like");
for (let i = 0; i < HRT.length; i++) {
    HRT[i].addEventListener("click",color)
}
function color(event) {
  var cible=event.target;
  if (cible.style.color!=="red") {
    cible.style.color="red"
  }  
  else{
    cible.style.color="#424242"
  }
}
var DLT=document.querySelectorAll(".delete");
for (let i = 0; i < DLT.length; i++) {
    DLT[i].addEventListener("click",fasakh)
}
function fasakh(event) {
  var cible=event.target;
  var tr=cible.parentElement.parentElement.parentElement.parentElement;
  tr.querySelector(".price").innerHTML=0;
  som();
  tr.remove();
}
var TOT=document.querySelectorAll(".price");
function som() {
var sum=0;
for (let i = 0; i < TOT.length; i++) {
    sum+=Number(TOT[i].innerHTML)
    document.getElementById("total").innerHTML=sum
}
}