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



function jsFunction(value)
{
  const expr = document.getElementById("breed-dropdown").selectedIndex;
const ddd = document.getElementById("dog-breeds");
  ddd.innerHTML =" ";
  if(expr===0) {
    function renderujl(b) {
            const ddd = document.getElementById("dog-breeds");
            for (const p in b.message) {
              if(p.startWith("a")){
                console.log(p)
            const l = document.createElement('li');
            l.innerHTML =p;
            ddd.appendChild(l);
          }}
          changecolor(b);
        }
        function fetchdogssf(){
          fetch('https://dog.ceo/api/breeds/list/all')
          .then(resp => resp.json())
          .then(datab => renderujl(datab));
        }
        fetchdogssf();
  }}
// switch (expr) {
//   case '0':{
//     console.log('Oranges are $0.59 a pound.');
//     function renderujl(b) {
//         const ddd = document.getElementById("dog-breeds");
//         for (const p in b.message) {
//           if(p.startWith("a")){
//             console.log(p)
//         const l = document.createElement('li');
//         l.innerHTML =p;
//         ddd.appendChild(l);
//       }}
//       changecolor(b);
//     }
// function fetchdogssf(){
//   fetch('https://dog.ceo/api/breeds/list/all')
//   .then(resp => resp.json())
//   .then(datab => renderujl(datab));
// }
//
//
// fetchdogssf();
// }
//
//     break;
//   case '1':{
//   function fetchdogssf(){
//     fetch('https://dog.ceo/api/breeds/list/all')
//     .then(resp => resp.json())
//     .then(datab => renderujl(datab));
//   }
//
//   function renderujl(b) {
//       const ddd = document.getElementById("dog-breeds");
//       for (const p in b.message) {
//         if(p.startsWith("b")){
//               console.log("hola")
//       const l = document.createElement('li');
//       l.innerHTML =p;
//       ddd.appendChild(l);
//     }}
//     changecolor(b);
//   }
//   fetchdogssf();
// }
//   case '2':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//     case '3':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       // expected output: "Mangoes and papayas are $2.79 a pound."
//       break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
//
// }
