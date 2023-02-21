const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");  // 붓
canvas.width = 500;
canvas.height = 500;

// ctx.fillStyle = 'pink'
// ctx.fillRect(50, 50, 100, 200);


// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.rect(250, 250, 100, 100);
// ctx.fillStyle = 'skyblue';
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = 'pink';
// ctx.fill();


// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// // ctx.stroke();
// ctx.fill();

// ctx.fillRect(50, 150, 30, 170);
// ctx.fillRect(250, 150, 30, 170);
// ctx.fillRect(140, 240, 50, 80);
// ctx.fillRect(50, 150, 200, 20);
// ctx.moveTo(50, 150);
// ctx.lineTo(165, 70);
// ctx.lineTo(280, 150);
// ctx.fill();

ctx.fillRect(150, 150, 15, 90);
ctx.fillRect(300, 150, 15, 90);
ctx.fillRect(182, 150, 100, 140)

ctx.arc(230, 80, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(215, 70, 7, Math.PI, 2 * Math.PI);
ctx.arc(245, 70, 7, Math.PI, 2 * Math.PI);
ctx.fill();