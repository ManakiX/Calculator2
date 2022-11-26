// //addition
// function addition() {
//     console.log(2 + 2);
// }
// // subtraction
// function subtraction() {
//     console.log(5 - 2);
// }
// // Multiplication
// function multiplication() {
//     console.log(2 * 2);
// }

// function division() {
//     console.log(2 / 2);
// }
// function exponents() {
//     console.log(2 ** 2);
// }
// function modulus(){
//     console.log(5 % 2);
// }
// //call all functions
// // addition();
// // subtraction();
// // multiplication();
// // division();
// // exponents();
// // modulus()
// // call
// let numb1 = 3;
// numb1 %= 2;
// console.log(numb1);

function display(value) {
    document.getElementById("result").value += value;
}
let allowed = true;
 
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }
function clear(params) {
    
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function del(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}
function calculate(){
    try{
        document.getElementById("result").value = eval(document.getElementById("result").value);
    }
    catch(err)
    {
        alert("invalid");
    }
}
function decimalCal (value) {
    if (allowed === true) {
        value += value ;
        allowed = false;
    }
}
function operator (value) {
    value += value ;
    allowed: true;
}
const toggleAllowed = () => {
    allowed = true;
}
function _________() {
    let x = (InputValue.value.length - 1);
    if ((InputValue.value[x]).includes('.') ) {
        return false;
    }
    else {
        return true;
    }
}
// decimal.addEventListener('click', function(){
//     if (allowed) {
//         result.value += decimal.textContent;
//         allowed = false;
//     }
// })



