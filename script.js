let input = document.querySelector("#input");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let numbers = document.querySelectorAll(".btn");
let arrayNum = Array.from(numbers);
let operators = document.querySelectorAll(".operators");
let arrayOp = ["+", "-", "*", "%", ".", "/"]
let equalsBtn = document.querySelector("#equals");
console.log(arrayOp);

let operation = "";

function equals(){
    try{
        let result = eval(operation);
        input.value = result;
        operation = result.toString();
    } catch (error){
        console.error(`Invalid Operation : ${error}`);
        input.value = "Error";
        operation = "";
    }
}
equalsBtn.addEventListener("click", equals);

function clearFunc() {
    input.value = "";
    operation = "";
}
clear.addEventListener("click", clearFunc)

function backspaceFunc(){
    if (input.value != ""){
        input.value = input.value.slice(0, -1);
        operation = operation.slice(0, -1)
    }
}
backspace.addEventListener("click", backspaceFunc);

arrayNum.slice(2,18).forEach(element => {
    element.addEventListener("click", () => {
        input.value += element.innerHTML
        operation += element.innerHTML
        console.log(operation)
    })
});
