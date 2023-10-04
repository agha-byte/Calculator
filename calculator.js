'use strict'
let noCalculations = true;
let displayForLeadingZeroes;


const dot = document.getElementById("dot").onclick = () => {
    displayNumbers("."); 
}

const zero = document.getElementById("zero").onclick = () => {
    displayForLeadingZeroes= document.getElementById("display").innerHTML;

   if (noCalculations){
    displayNumbers(0)
    
   }else {
    if (!(displayForLeadingZeroes.charAt(0)=="0") || displayForLeadingZeroes.length>1) {
        displayNumbers(0);
    }
   }
    ;
   
}
const one = document.getElementById("one").onclick = () => {
    displayNumbers(1); 
}
const two = document.getElementById("two").onclick = () => {
    displayNumbers(2); 
}
const three = document.getElementById("three").onclick = () => {
    displayNumbers(3); 
}
const four = document.getElementById("four").onclick = () => {
    displayNumbers(4); 
}

const five = document.getElementById("five").onclick = () => {
    displayNumbers(5); 
}
const six = document.getElementById("six").onclick = () => {
    displayNumbers(6); 
}

const seven = document.getElementById("seven").onclick = () => {
    displayNumbers(7); 
}
const eight = document.getElementById("eight").onclick = () => {
    displayNumbers(8); 
}

const nine = document.getElementById("nine").onclick = () => {
    displayNumbers(9); 
}
const add = document.getElementById("add").onclick = () => {
    displayNumbers("+");
}
const subtract = document.getElementById("subtract").onclick = () => {
    displayNumbers("-");
}
const multiply = document.getElementById("multiply").onclick = () => {
    displayNumbers("*");
}
const divide = document.getElementById("divide").onclick = () => {
    displayNumbers("/");
}
const equal = document.getElementById("equal").onclick = () => {
    calculate();
}


/////////////////////////////////////////////////////////////////////////////////////////////

const AC = document.getElementById("AC").onclick = () => {
    document.getElementById("display").innerHTML=0;
    noCalculations = true;  /* Since user pressed AC we have to clear all previous calculations 
                             so  i reinitialized it true so that new calculation does not contain 
                                0 in display*/    
}


function displayNumbers (num) {
    let display = document.getElementById("display");

    if (noCalculations){
        display.innerHTML=""
        noCalculations = false; 
    }
 
    display.innerHTML += num;
}
function calculate () {
    const display= document.getElementById("display");
    let displayContainer = display.innerHTML;

    try{
        display.innerHTML= math.evaluate(displayContainer)//"evaluate is the math.js lib function that evaluates an expression"
    }catch (error){
        window.alert("Invalid mathematical expression");
    }
        
    
     

}