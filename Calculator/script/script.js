let output = document.getElementById("out-bottom");
let memory = document.getElementById("out-top");
let dataMemory;
function insert(num) {
    if(output.innerHTML.length <= 10){
        if(output.innerHTML === '0'){
            output.innerHTML = num;
        }else {
            output.innerHTML += num;
        }
    }
    if(num === '/' || num === '*' || num === '+' || num === '-'){
        memory.innerText += output.innerText;
        output.innerText = '0';
    }
}
function clean() {
    output.innerHTML = '0';
    memory.innerHTML = '';
}
function backspace() {
    let num = output.innerHTML;
    if(num.length === 1){
        output.innerHTML = '0';
    }else {
        output.innerHTML = num.substring(0, num.length - 1);
    }
}
function result() {
    if(output.innerHTML){
        memory.innerHTML += output.innerHTML;
    }
    let mem = memory.innerText;
    let x = eval(mem);
    output.innerText = x;
    memory.innerText += "=" + x;
}
function memoryWrite() {
    dataMemory = output.innerHTML;

}
function memoryRead() {
    if(dataMemory){
        output.innerHTML = dataMemory;
    }else{
        alert('no stored values');
    }

}