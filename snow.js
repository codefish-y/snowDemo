/* Write custom javascript / jQuery here! */
/* no_doc_ready */
let canvas = document.querySelector("canvas");
let pen  = canvas.getContext("2d");
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;

// first_version

// let num = 520;
// let snows = [];
// for (let i = 0; i<num; i++) {
//     snows.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         r: Math.random() * 10 + 5
//     });
// }
// let move = () => {
//     for (let i = 0; i < num; i++) {
//         let snow = snows[i];
//         // snow.x += 0.3;
//         snow.y += Math.random() * 3+2 ;
//         if (snow.x > w) {
//             snow.x = 0;
//         }
//         if (snow.y > h) {
//             snow.y = 0;
//         }
//     }
// }
//         let draw = () => {
//             pen.clearRect(0, 0, w, h);
//             pen.beginPath();
//
//             // fillImage.onload = function (){
//             //     pen.drawImage(fillImage,snow.x,snow.y,30,30);
//             //
//             // }
//             pen.fillStyle = "rgb(255,255,255)"
//             pen.shadowColor = "rgb(255,255,255)";
//             pen.shadowBlur = 10;
//             // const image = new Image();
//             // image.src = "snow.png";
//             // const fillImage = pen.createPattern(image,"no-repeat");
//             // fillImage.onload = function (){
//             //     pen.fillStyle = fillImage;
//             //     pen.rect(60,70,40,40);
//             // }
//
//
//             for (let i = 0; i < num; i++) {
//                 let snow = snows[i];
//                 pen.moveTo(snow.x, snow.y);
//
//                 // const image = new Image();
//                 // image.src = "snow.png";
//                 // image.onload = function (){
//                 //     pen.drawImage(image,snow.x,snow.y,60,60);
//                 // }
//                 // pen.fillStyle = pen.createPattern(image, "no-repeat");
//                 pen.arc(snow.x,snow.y,snow.r,0,Math.PI*10+3);
//                 // snow.y = snow.y > h ? 0 :(snow.y+Math.random()*10+3);
//             }
//             pen.fill();
//             pen.closePath();
//             move();
//         }
//         draw();
//
//
// setInterval(draw, 20);



// second_version

// let num = 520;
// let snows = [];
// for (let i = 0; i<num; i++) {
//     snows.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         r: Math.random() * 10 + 5
//     });
// }
// let move = () => {
//     for (let i = 0; i < num; i++) {
//         let snow = snows[i];
//         // snow.x += 0.3;
//         snow.y += Math.random() * 3+2 ;
//         if (snow.x > w) {
//             snow.x = 0;
//         }
//         if (snow.y > h) {
//             snow.y = 0;
//         }
//     }
// }
// let draw = () => {
//     pen.clearRect(0, 0, w, h);
//     pen.beginPath();
//
//
//     for (let i = 0; i < num; i++) {
//         let snow = snows[i];
//         pen.moveTo(snow.x, snow.y);
//
//         const image = new Image();
//         image.src = "snow.png";
//         // image.onload = function (){
//         //     pen.drawImage(image,snow.x,snow.y,60,60);
//         // }
//         pen.fillStyle = pen.createPattern(image, "repeat");
//         pen.arc(snow.x,snow.y,snow.r,0,Math.PI*10+3);
//         // snow.y = snow.y > h ? 0 :(snow.y+Math.random()*10+3);
//     }
//     pen.fill();
//     pen.closePath();
//     move();
// }
// draw();
//
//
// setInterval(draw, 20);


// third_version

// let num = 520;
// let snows = [];
// for (let i = 0; i<num; i++) {
//     snows.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         r: Math.random() * 10 + 5
//     });
// }
// let move = () => {
//     for (let i = 0; i < num; i++) {
//         let snow = snows[i];
//         // snow.x += 0.3;
//         snow.y += Math.random() * 3+2 ;
//         if (snow.x > w) {
//             snow.x = 0;
//         }
//         if (snow.y > h) {
//             snow.y = 0;
//         }
//     }
// }
// let draw = () => {
//     pen.clearRect(0, 0, w, h);
//     pen.beginPath();
//
//
//     for (let i = 0; i < num; i++) {
//         let snow = snows[i];
//         pen.moveTo(snow.x, snow.y);
//
//         const image = new Image();
//         image.src = "snow.png";
//         image.onload = function (){
//             pen.drawImage(image,snow.x,snow.y,25,25);
//         }
//         // pen.fillStyle = pen.createPattern(image, "repeat");
//         // pen.arc(snow.x,snow.y,snow.r,0,Math.PI*10+3);
//     }
//     pen.fill();
//     pen.closePath();
//     move();
// }
// draw();
//
//
// setInterval(draw, 20);


// ---------------new
// const snows = Array.from(new Array(520)).map(snow => {
//     return {
//         x: Math.random() * w,
//         y: Math.random() * h,
//         speed: Math.random()*3+1
//     }
// })
//
// const draw = () => {
//             pen.clearRect(0,0,w,h);
//             pen.beginPath();
//             snows.forEach(snow =>{
//                 snow.y = snow.y > h ? 0 :snow.y+snow.speed;
//                 pen.drawImage(image,snow.x,snow.y,25,25);
//
//             })
//
//     pen.fill()
//     // requestAnimationFrame(draw)
// }
// const image = new Image();
// image.src = "snow.png";
// image.onload = function (){
//     draw()
// }
// draw()
// setInterval(draw,20)
// ------------------new



