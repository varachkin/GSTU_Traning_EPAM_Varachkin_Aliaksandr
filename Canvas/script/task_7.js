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

let paper = document.getElementById('img-1');
let apple = document.getElementById('img-2');
let banana = document.getElementById('img-3');
let banka = document.getElementById('img-4');
let bankaTwo = document.getElementById('img-5');
let butle = document.getElementById('img-6');
let newspaper = document.getElementById('img-7');
let newspaperTwo = document.getElementById('img-8');

let cursorX;
let cursorY;

paper.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

paper.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   paper.style.top = (x.pageY - cursorY)  + 'px';
   paper.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         paper.style.display = 'none';
      }
   }
   console.log(top);
   console.log(left);
   console.log('Y' + x.pageY);
   console.log('X' + x.pageX);
})
apple.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

apple.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   apple.style.top = (x.pageY - cursorY)  + 'px';
   apple.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         apple.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
banana.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

banana.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   banana.style.top = (x.pageY - cursorY)  + 'px';
   banana.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         banana.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
banka.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

banka.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   banka.style.top = (x.pageY - cursorY)  + 'px';
   banka.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         banka.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
bankaTwo.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

bankaTwo.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   bankaTwo.style.top = (x.pageY - cursorY)  + 'px';
   bankaTwo.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         bankaTwo.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
butle.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

butle.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   butle.style.top = (x.pageY - cursorY)  + 'px';
   butle.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         butle.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
newspaper.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

newspaper.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   newspaper.style.top = (x.pageY - cursorY)  + 'px';
   newspaper.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         newspaper.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
newspaperTwo.addEventListener("dragstart", function (x){
   cursorX = +x.offsetX;
   cursorY = +x.offsetY;
   console.log(x.offsetX);
   console.log(x.offsetY);
})

newspaperTwo.addEventListener("dragend", function (x){
   let top = x.pageY - cursorY;
   let left = x.pageX - cursorX;
   newspaperTwo.style.top = (x.pageY - cursorY)  + 'px';
   newspaperTwo.style.left = (x.pageX - cursorX) + 'px';
   if(top > 320 && top < 800){
      if(left > 60 && left < 460){
         newspaperTwo.style.display = 'none';
      }
   }
   console.log(x.pageY);
   console.log(x.pageX);
})
