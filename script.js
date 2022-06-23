let btn0 = document.querySelector("#b0").innerText;
let btn1 = document.querySelector("#b1").innerText;
let btn2 = document.querySelector("#b2").innerText;
let btn3 = document.querySelector("#b3").innerText;
let btn4 = document.querySelector("#b4").innerText;
let btn5 = document.querySelector("#b5").innerText;
let btn6 = document.querySelector("#b6").innerText;
let btn7 = document.querySelector("#b7").innerText;
let btn8 = document.querySelector("#b8").innerText;
let btn9 = document.querySelector("#b9").innerText;

//*
let btnSum = document.querySelector("#suma").innerText;
let btnClear = document.querySelector("#clear").innerText;
let btnNeg = document.querySelector("#negative").innerText;
let btnProc = document.querySelector("#procent").innerText;
let btnImp = document.querySelector("#impartire").innerText;
let btnInm = document.querySelector("#inmultire").innerText;
let btnDif = document.querySelector("#dif").innerText;
let btnPunct = document.querySelector("#punct").innerText;
let btnRez = document.querySelector("#rezultat").innerText;
console.log(btnClear);


//* BUTOANELE CU NUMERE
let rezolvare = document.querySelector("#rezolvare")
function clicked0(){
    rezolvare.innerText += parseInt(btn0);
}
function clicked1(){
    // console.log(parseInt(btn1));
    rezolvare.innerText += parseInt(btn1);
}
function clicked2(){
    // console.log(parseInt(btn2));
    rezolvare.innerText += parseInt(btn2);
}
function clicked3(){
    // console.log(parseInt(btn3));
    rezolvare.innerText += parseInt(btn3);
}
function clicked4(){
    // console.log(parseInt(btn4));
    rezolvare.innerText += parseInt(btn4);
}
function clicked5(){
    // console.log(parseInt(btn5));
    rezolvare.innerText += parseInt(btn5);
}
function clicked6(){
    // console.log(parseInt(btn6));
    rezolvare.innerText += parseInt(btn6);
}
function clicked7(){
    // console.log(parseInt(btn7));
    rezolvare.innerText += parseInt(btn7);
    // console.log(e.target.dataset.number)
}
function clicked8(){
    // console.log(parseInt(btn8));
    rezolvare.innerText += parseInt(btn8);
}
function clicked9(){
    // console.log(parseInt(btn9));
    rezolvare.innerText += parseInt(btn9);
}

const numere = document.querySelectorAll(`[data-number]`);
console.log(numere);
console.log(numere[0].dataset.number);

for(let btn of numere){
    
}