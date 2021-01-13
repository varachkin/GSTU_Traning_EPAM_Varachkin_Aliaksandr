let output = document.getElementById("out-bottom");
let memory = document.getElementById("out-top");
let history = document.getElementById("history_content");
let integer = document.getElementById('int');
let d = document.getElementById('_dot');
let res = document.getElementById('_result')
let pr = document.getElementById('priority');
let dataMemory;
let arrResult = [];
let arr = [];

function dot(num){
    if (num === '1'){
        res.classList.add('btn_big');
        d.disabled = true;
    }else{
        res.classList.remove('btn_big');
        d.disabled = false;
    }
}
function insert(num) {
    for(let i = 0; i < memory.innerText.length; i++){
        if(memory.innerText[i] === '='){
            memory.innerHTML = '';
            output.innerHTML = '';
            output.innerHTML += num;
            memory.innerHTML += num;
            return;
        }
    }
    if(output.innerHTML === '0' && num === '.' && output.innerHTML[output.innerHTML.length - 1] === undefined){
        output.innerHTML += num;
        memory.innerHTML = output.innerHTML;
        return;
    }
    if(output.innerHTML.length <= 10){
        if(output.innerHTML === '0' && num !== '.'){
            output.innerHTML = num;
            memory.innerHTML = num;
        }else {
            output.innerHTML += num;
            memory.innerHTML += num;
        }
        if(memory.innerText[memory.innerText.length - 1] === '/' || memory.innerText[memory.innerText.length - 1] === '*' || memory.innerText[memory.innerText.length - 1] === '+' || memory.innerText[memory.innerText.length - 1] === '-'){
            output.innerHTML = '';
            output.innerHTML += num;
        }
    }
}

function act(symbol){
    let x = symbol;
    if(output.innerHTML === '0'){
        memory.innerHTML += output.innerText + symbol;
        output.innerText = '';
        return;
    }
    if(memory.innerText[memory.innerText.length - 1] === '/' || memory.innerText[memory.innerText.length - 1] === '*' || memory.innerText[memory.innerText.length - 1] === '+' || memory.innerText[memory.innerText.length - 1] === '-') {
        let num = memory.innerText;
        memory.innerHTML = num.substring(0, num.length - 1);
        memory.innerText += x;
        console.log(memory.innerText[memory.innerText.length - 1]);
        console.log(memory.innerText[memory.innerText.length - 2]);
        console.log(memory.innerText[memory.innerText.length - 3]);
    }else {
        memory.innerText += symbol;
        output.innerText = '';
    }
}

function clean() {
    output.innerHTML = '0';
    memory.innerHTML = '';
}

function backspace() {
    let num = output.innerHTML;
    let memoryNum = memory.innerHTML;
    if(num.length === 1 && memoryNum.length === 1){
        output.innerHTML = '0';
        memory.innerHTML = '';
    }else {
        output.innerHTML = output.innerHTML.slice(0, -1);
        if(memory.innerText[memory.innerText.length - 1] === '/' || memory.innerText[memory.innerText.length - 1] === '*' || memory.innerText[memory.innerText.length - 1] === '+' || memory.innerText[memory.innerText.length - 1] === '-'){

        }else{
            memory.innerText = memory.innerText.slice(0, -1);
        }
    }
}

function result(symbol) {
    if(memory.innerText[memory.innerText.length - 1] === '0' && memory.innerText[memory.innerText.length - 2] === '/'){
        memory.innerText = '';
        memory.innerText = 'Cannot be divided by 0';
        alert('Cannot be divided by 0');
        return;
    }

    let mem = memory.innerText;

    if(pr.checked){
        let x;
        let y;
        x = eval(mem);
        y = Math.round(x);
        if(integer.checked){
            output.innerText = y;
            arrResult.push(output.innerText);
            console.log(arrResult);
            memory.innerText += symbol + y;
            arr.push(memory.innerText);
            console.log(arr);
            history.innerHTML += '<span style="margin-right: 20px">integer: </span>' +  memory.innerText + '<hr>';
        }else{
            x = +x.toFixed(9);
            x = x.toString();
            output.innerText = x;
            arrResult.push(output.innerText);
            console.log(arrResult);
            memory.innerText += symbol + x;
            arr.push(memory.innerText);
            console.log(arr);
            history.innerHTML += '<span style="margin-right: 20px">float: </span>' +  memory.innerText + '<hr>';
        }
    }else{
        // Доделать приоритеты вычислений
        // console.log(memory.innerText.length);
        // console.log(mem);
        //
        // let x = mem.length[0];
        // for(let i = 0; i < mem.length; i+3){
        //     x = x + mem.length[i + 1] + mem.length[i + 2];
        //     x = eval(x);
        // }
    }
}
function memoryWrite() {
    dataMemory = +output.innerHTML;
    if(dataMemory < 0){
        dataMemory = '(' + String(dataMemory) + ')';
    }else{
        dataMemory = String(dataMemory);
    }
}

function memoryRead() {
    if(dataMemory){
        let x = memory.innerText;
        if(x.length >= 2){
            output.innerHTML += dataMemory;
            memory.innerText += dataMemory;
        }else{
            output.innerHTML = dataMemory;
            memory.innerText = output.innerHTML;
        }
    }else{
        alert('no stored values');
    }

}