const body = document.querySelector("body");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const textInner = document.querySelector(".text");
const randomColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const div = document.querySelector(".container");

btn1.addEventListener("click", bgChanger);
btn2.addEventListener("click", hexChanger);

function bgChanger(){
   hexCode = "#"
   for (let i=0; i<6; i++){
      let random = Math.floor(Math.random() * randomColor.length);
      hexCode += randomColor[random];
   }
   body.style.backgroundColor = hexCode;
   textInner.textContent = "";
}

function hexChanger(){
   hexCode = "#"
   for (let i=0; i<6; i++){
      let random = Math.floor(Math.random() * randomColor.length);
      hexCode += randomColor[random];
   }
   body.style.backgroundColor = hexCode;
   textInner.textContent = hexCode;
   
}