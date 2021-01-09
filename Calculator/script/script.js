let output = document.getElementById("out-bottom");
let memory = document.getElementById("out-top");
let dataMemory;
function insert(num) {
    if(output.innerText.length <= 10){
        if(output.innerText === '0'){
            output.innerText = num;
        }else {
            output.innerText += num;
        }
    }
    if(num === '/' || num === '*' || num === '+' || num === '-'){
        memory.innerText += output.innerText;
        output.innerText = '0';
    }
}
function clean() {
    output.innerText = '0';
    memory.innerText = '';
}
function backspace() {
    let num = output.innerText;
    if(num.length < 1){
        output.innerText = '0';
    }else {
        output.innerText = num.substring(0, num.length - 1);
    }
}
function result() {

}
function memoryWrite() {
    dataMemory = output.innerText;

}
function memoryRead() {
    output.innerText = dataMemory;
}