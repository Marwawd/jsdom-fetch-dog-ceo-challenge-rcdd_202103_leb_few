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

function fetchdogssss()
{
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(datab => yaa(datab));
}
function order(b){
  renderul(b);
let x = document.getElementById("breed-dropdown");
let list = x.options[x.selectedIndex].value;
const dddd = document.getElementById("dog-breeds");
for (const p in b.message) {
  if(p.charAt(0)===list){

const y= document.createElement('li');
y.innerHTML =p;
dddd.appendChild(y);}
// switch (list){
//   case "a":console.log("a") ;break;
//   case "b":console.log("ya");break;
//   case "c":console.log("ya");break;
//   case "d":console.log("ya");break;
//   default:break;
//
// }
//b.message.filter(item=>item.startWith(list))



}}
function  yaa(){
  let x = document.getElementById("breed-dropdown");
  let list = x.options[x.selectedIndex].value;
  updateBreedList(breeds.filter(breed => breed.startsWith(list)));

  let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}
fetchdogssss();


var x = document.getElementById("breed-dropdown").selectedIndex;
var y = document.getElementById("breed-dropdown").options;
console.log(x)
console.log(y)