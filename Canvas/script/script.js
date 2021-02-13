let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//  Рисунок 1
ctx.lineWidth = 6;
ctx.strokeStyle = '#31515c';
ctx.fillStyle = '#91cbd7';
ctx.ellipse(canvas.width / 2 - 600, 300, 100, 90, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2 - 600, 230, 110, 20, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2 - 600, 70, 60, 10, 0,  0, 360);
ctx.lineTo(canvas.width / 2 + 60 - 600, 213);
ctx.ellipse(canvas.width / 2 - 600, 213, 60, 10, 0,  220, 160);
ctx.lineTo(canvas.width / 2 - 60 - 600, 70);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2 - 600, 70, 60, 10, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

//  Глаз

ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 60 - 600, 285, 15, 10, 0,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Зрачек
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 65 - 600, 285, 5, 8, 0,  0, 360);
ctx.fill();
ctx.beginPath();

//  Глаз
ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 + 5 - 600, 285, 15, 10, 0,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Зрачек
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 600, 285, 5, 8, 0,  0, 360);
ctx.fill();
ctx.beginPath();

//   Нос
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.lineTo(canvas.width / 2 - 32 - 600, 285);
ctx.lineTo(canvas.width / 2 - 47 - 600, 317);
ctx.lineTo(canvas.width / 2 - 32 - 600, 317);
ctx.stroke();
ctx.beginPath();

//   Рот

ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 25 - 600, 350, 42, 10, 0.15,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Рисунок 2

ctx.lineWidth = 6;
ctx.strokeStyle = '#387e8b';
ctx.fillStyle = '#91cbd7';
ctx.arc(canvas.width / 2 - 130 - 600, 700, 75, 0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#387e8b';
ctx.fillStyle = '#91cbd7';
ctx.arc(canvas.width / 2 + 130 - 600, 700, 75, 0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.moveTo(canvas.width / 2 - 130 - 600, 700);
ctx.lineTo(canvas.width / 2 - 600, 700);
ctx.lineTo(canvas.width / 2 +100 - 600, 600);
ctx.lineTo(canvas.width / 2 +130 - 600, 700);
ctx.lineTo(canvas.width / 2 +85 - 600, 550);
ctx.lineTo(canvas.width / 2 +110 - 600, 520);
ctx.lineTo(canvas.width / 2 +85 - 600, 550);
ctx.lineTo(canvas.width / 2 +50 - 600, 570);
ctx.lineTo(canvas.width / 2 +85 - 600, 550);
ctx.lineTo(canvas.width / 2 +100 - 600, 600);
ctx.lineTo(canvas.width / 2 -50 - 600, 600);
ctx.lineTo(canvas.width / 2 - 600, 700);
ctx.lineTo(canvas.width / 2 -75 - 600, 550);
ctx.lineTo(canvas.width / 2 -90 - 600, 550);
ctx.lineTo(canvas.width / 2 -60 - 600, 550);
ctx.lineTo(canvas.width / 2 -75 - 600, 550);
ctx.lineTo(canvas.width / 2 -50 - 600, 600);
ctx.lineTo(canvas.width / 2 -130 - 600, 700);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = '#387e8b';
ctx.arc(canvas.width / 2 - 600, 700, 15, 0, 360);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(canvas.width / 2 + 13 - 600, 707);
ctx.lineTo(canvas.width / 2 + 27 - 600, 717);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(canvas.width / 2 - 13 - 600, 693);
ctx.lineTo(canvas.width / 2 - 27 - 600, 683);
ctx.stroke();
ctx.beginPath();

//  Рисунок 3

ctx.lineWidth = 6;
ctx.strokeStyle = '#010101';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 700 - 600, 250);
ctx.lineTo(canvas.width / 2 + 500 - 600, 400);
ctx.lineTo(canvas.width / 2 + 500 - 600, 600);
ctx.lineTo(canvas.width / 2 + 900 - 600, 600);
ctx.lineTo(canvas.width / 2 + 900 - 600, 400);
ctx.lineTo(canvas.width / 2 + 697 - 600, 250);

ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = '#010101';
ctx.moveTo(canvas.width / 2 + 900 - 600, 400);
ctx.lineTo(canvas.width / 2 + 500 - 600, 400);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#010101';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 785 - 600, 375);
ctx.lineTo(canvas.width / 2 + 785 - 600, 280);
ctx.lineTo(canvas.width / 2 + 815 - 600, 280);
ctx.lineTo(canvas.width / 2 + 815 - 600, 375);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#975b5b';
ctx.ellipse(canvas.width / 2 + 800 - 600, 280, 15, 5, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 510 - 600, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 565 - 600, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 565 - 600, 445, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 510 - 600, 445, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785 - 600, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840 - 600, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840 - 600, 445, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785 - 600, 445, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785 - 600, 525, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840 - 600, 525, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840 - 600, 560, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785 - 600, 560, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.fillStyle = '#000000';
ctx.ellipse(canvas.width / 2 +565 - 600, 500, 45, 10, 0,  220, 160, true);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.fillStyle = '#000000';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 520 - 600, 500);
ctx.lineTo(canvas.width / 2 + 520 - 600, 600);
ctx.lineTo(canvas.width / 2 + 610 - 600, 600);
ctx.lineTo(canvas.width / 2 + 610 - 600, 500);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.fillStyle = '#000000';
ctx.moveTo(canvas.width / 2 + 565 - 600, 490);
ctx.lineTo(canvas.width / 2 + 565 - 600, 600);
ctx.stroke();
ctx.beginPath();

ctx.arc(canvas.width / 2 + 555 - 600, 550, 5,0,360);
ctx.stroke();
ctx.beginPath();

ctx.arc(canvas.width / 2 + 575 - 600, 550, 5,0,360);
ctx.stroke();
ctx.beginPath();