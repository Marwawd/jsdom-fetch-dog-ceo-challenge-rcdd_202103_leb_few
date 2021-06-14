console.log('%c HI', 'color: firebrick')
//challenge1
function fetchdogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(data => renderimgs(data));
}
//fetchdogs();
//console.log((message.array)[0]);
function renderimgs(img) {
    const dd = document.getElementById("dog-image-container");
    for (const q in img.message) {
    const i = document.createElement('img');
    i.src = img.message[q];
    dd.appendChild(i);
  }
}
fetchdogs();
// //challenge2
//const ddd = document.getElementById("dog-breeds");

function fetchdogss(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(datab => renderul(datab));
}
function changecolor(b) {

  let oo=document.querySelectorAll("li");
      console.log(oo.length);

   for (let ino in oo) {
  //document.addEventListener("DOMContentLoaded", function() {

  oo[ino].addEventListener("click", function() {
      //  console.log("b");

   oo[ino].style.color= "red";

 });}}
function renderul(b) {
    const ddd = document.getElementById("dog-breeds");
    for (const p in b.message) {
    const l = document.createElement('li');
    l.innerHTML =p;
    ddd.appendChild(l);
  }
  changecolor(b);
}
fetchdogss();
// //challenge3
// function fetchdogsss()
// {
//   fetch('https://dog.ceo/api/breeds/list/all')
//   .then(resp => resp.json())
//   .then(datab => changecolor(datab));
// }
// function changecolor(b) {
//   renderul(b);
//   let oo=document.querySelectorAll("li");
//       console.log(oo.length);
//
//    for (let ino in oo) {
//   //document.addEventListener("DOMContentLoaded", function() {
//
//   oo[ino].addEventListener("click", function() {
//       //  console.log("b");
//
//    oo[ino].style.color= "red";
//
//  });}}
// fetchdogsss();


//challenge4

var x = document.getElementById("breed-dropdown").selectedIndex;
var y = document.getElementById("breed-dropdown").options;
console.log(x)
console.log(y)