//CLICK COUNTS
let clickCount = 0;
let prevClick;

let bgW = 640; //background 4:3 width
let bgH = 480; //background 4:3 height

let chWH = 350; //Character img hight

let locationNum = 0; //scene number

let timerStart = null; 
let timerStarted = false;

let timerStart_s11 = null; 
let timerStarted_s11 = false;

let ang = 0;

function mouseWithin(x1, y1, x2, y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    return true;
  } else {
    return false;
  }
}