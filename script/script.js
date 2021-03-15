let checkPriority = document.querySelector('.checkbox');
let divPriority = document.querySelector('.priority');

function enterPriority(){
    if(!checkPriority.checked){
        divPriority.innerHTML = 'Low';
    }else{
        divPriority.innerHTML = 'High';
    }
}