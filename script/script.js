let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//  Рисунок 1
ctx.lineWidth = 6;
ctx.strokeStyle = '#31515c';
ctx.fillStyle = '#91cbd7';
ctx.ellipse(canvas.width / 2, 300, 100, 90, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2, 230, 110, 20, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2, 70, 60, 10, 0,  0, 360);
ctx.lineTo(canvas.width / 2 + 60, 213);
ctx.ellipse(canvas.width / 2, 213, 60, 10, 0,  220, 160);
ctx.lineTo(canvas.width / 2 - 60, 70);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#3a6693';
ctx.ellipse(canvas.width / 2, 70, 60, 10, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

//  Глаз

ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 60, 285, 15, 10, 0,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Зрачек
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 65, 285, 5, 8, 0,  0, 360);
ctx.fill();
ctx.beginPath();

//  Глаз
ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 + 5, 285, 15, 10, 0,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Зрачек
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.ellipse(canvas.width / 2, 285, 5, 8, 0,  0, 360);
ctx.fill();
ctx.beginPath();

//   Нос
ctx.lineWidth = 3;
ctx.fillStyle = '#31515c';
ctx.lineTo(canvas.width / 2 - 32, 285);
ctx.lineTo(canvas.width / 2 - 47, 317);
ctx.lineTo(canvas.width / 2 - 32, 317);
ctx.stroke();
ctx.beginPath();

//   Рот

ctx.lineWidth = 3;
ctx.strokeStyle = '#31515c';
ctx.ellipse(canvas.width / 2 - 25, 350, 42, 10, 0.15,  0, 360);
ctx.stroke();
ctx.beginPath();

//  Рисунок 2

ctx.lineWidth = 6;
ctx.strokeStyle = '#387e8b';
ctx.fillStyle = '#91cbd7';
ctx.arc(canvas.width / 2 - 130, 700, 75, 0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#387e8b';
ctx.fillStyle = '#91cbd7';
ctx.arc(canvas.width / 2 + 130, 700, 75, 0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.moveTo(canvas.width / 2 - 130, 700);
ctx.lineTo(canvas.width / 2, 700);
ctx.lineTo(canvas.width / 2 +100, 600);
ctx.lineTo(canvas.width / 2 +130, 700);
ctx.lineTo(canvas.width / 2 +85, 550);
ctx.lineTo(canvas.width / 2 +110, 520);
ctx.lineTo(canvas.width / 2 +85, 550);
ctx.lineTo(canvas.width / 2 +50, 570);
ctx.lineTo(canvas.width / 2 +85, 550);
ctx.lineTo(canvas.width / 2 +100, 600);
ctx.lineTo(canvas.width / 2 -50, 600);
ctx.lineTo(canvas.width / 2, 700);
ctx.lineTo(canvas.width / 2 -75, 550);
ctx.lineTo(canvas.width / 2 -90, 550);
ctx.lineTo(canvas.width / 2 -60, 550);
ctx.lineTo(canvas.width / 2 -75, 550);
ctx.lineTo(canvas.width / 2 -50, 600);
ctx.lineTo(canvas.width / 2 -130, 700);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = '#387e8b';
ctx.arc(canvas.width / 2, 700, 15, 0, 360);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(canvas.width / 2 + 13, 707);
ctx.lineTo(canvas.width / 2 + 27, 717);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(canvas.width / 2 - 13, 693);
ctx.lineTo(canvas.width / 2 - 27, 683);
ctx.stroke();
ctx.beginPath();

//  Рисунок 3

ctx.lineWidth = 6;
ctx.strokeStyle = '#010101';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 700, 250);
ctx.lineTo(canvas.width / 2 + 500, 400);
ctx.lineTo(canvas.width / 2 + 500, 600);
ctx.lineTo(canvas.width / 2 + 900, 600);
ctx.lineTo(canvas.width / 2 + 900, 400);
ctx.lineTo(canvas.width / 2 + 697, 250);

ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = '#010101';
ctx.moveTo(canvas.width / 2 + 900, 400);
ctx.lineTo(canvas.width / 2 + 500, 400);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#010101';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 785, 375);
ctx.lineTo(canvas.width / 2 + 785, 280);
ctx.lineTo(canvas.width / 2 + 815, 280);
ctx.lineTo(canvas.width / 2 + 815, 375);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.strokeStyle = '#080808';
ctx.fillStyle = '#975b5b';
ctx.ellipse(canvas.width / 2 + 800, 280, 15, 5, 0,  0, 360);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 510, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 565, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 565, 445, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 510, 445, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840, 410, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840, 445, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785, 445, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785, 525, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840, 525, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 840, 560, 50, 30);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.fillRect(canvas.width / 2 + 785, 560, 50, 30);
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.fillStyle = '#000000';
ctx.ellipse(canvas.width / 2 +565, 500, 45, 10, 0,  220, 160, true);
ctx.stroke();
ctx.beginPath();

ctx.lineWidth = 6;
ctx.fillStyle = '#000000';
ctx.fillStyle = '#975b5b';
ctx.moveTo(canvas.width / 2 + 520, 500);
ctx.lineTo(canvas.width / 2 + 520, 600);
ctx.lineTo(canvas.width / 2 + 610, 600);
ctx.lineTo(canvas.width / 2 + 610, 500);
ctx.stroke();
ctx.fill();
ctx.beginPath();

ctx.lineWidth = 3;
ctx.fillStyle = '#000000';
ctx.moveTo(canvas.width / 2 + 565, 490);
ctx.lineTo(canvas.width / 2 + 565, 600);
ctx.stroke();
ctx.beginPath();

ctx.arc(canvas.width / 2 + 555, 550, 5,0,360);
ctx.stroke();
ctx.beginPath();

ctx.arc(canvas.width / 2 + 575, 550, 5,0,360);
ctx.stroke();
ctx.beginPath();