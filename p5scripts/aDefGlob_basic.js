// p5scripts/aDefGlob_basic.js

// CLICK COUNTS
let clickCount = 0;
let prevClick;

let bgW = 640; // background 4:3 width
let bgH = 480; // background 4:3 height

let chWH = 350; // Character img height

let locationNum = 0; // scene number

let timerStart = null;
let timerStarted = false;

let timerStart_s11 = null;
let timerStarted_s11 = false;

let ang = 0;

// --- Pointer (mouse + touch) helpers ---
// touchDown is used by touchScreen.js event hooks
let touchDown = false;

function pointerX() {
  return typeof touches !== "undefined" && touches.length
    ? touches[0].x
    : mouseX;
}
function pointerY() {
  return typeof touches !== "undefined" && touches.length
    ? touches[0].y
    : mouseY;
}
function isPointerDown() {
  return mouseIsPressed || touchDown;
}
function pointerWithin(x1, y1, x2, y2) {
  const x = pointerX();
  const y = pointerY();
  return x > x1 && x < x2 && y > y1 && y < y2;
}

// Keep compatibility with existing calls
function mouseWithin(x1, y1, x2, y2) {
  return pointerWithin(x1, y1, x2, y2);
}
