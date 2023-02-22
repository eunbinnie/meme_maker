const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
ctx.lineWidth = 1;

// mousemove paint

// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff0f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
//   "#18dcff",
//   "#7d5fff",
// ];

// function onclick(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)]
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener('mousemove', onclick);


let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
  isPainting = true;
}

function cancelPainting(event) {
  isPainting = false;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);