//   функция открытия крышки
function openCap() {
   let cap = document.querySelector('.cap');
   return cap.classList.add('open-cap');
}

//   функция закрытия крышки
function closeCap() {
   let cap = document.querySelector('.cap');
   return cap.classList.remove('open-cap');
}