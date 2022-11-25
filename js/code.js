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
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    try{
        document.getElementById("result").value = eval(document.getElementById("result").value);
    }
    catch(err)
    {
        alert("invalid");
    }
}
function clear(params) {
    
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function del(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}
