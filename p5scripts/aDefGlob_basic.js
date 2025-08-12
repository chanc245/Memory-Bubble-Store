// p5scripts/aDefGlob_basic

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
  return pointerWithin(x1, y1, x2, y2);
}

// --- Pointer (mouse + touch) helpers ---
let touchDown = false;

function pointerX() {
  return touches && touches.length ? touches[0].x : mouseX;
}
function pointerY() {
  return touches && touches.length ? touches[0].y : mouseY;
}
function isPointerDown() {
  return mouseIsPressed || touchDown;
}

// Use this everywhere instead of mouseWithin(...)
function pointerWithin(x1, y1, x2, y2) {
  const x = pointerX();
  const y = pointerY();
  return x > x1 && x < x2 && y > y1 && y < y2;
}
