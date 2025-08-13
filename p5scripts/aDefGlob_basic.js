// p5scripts/aDefGlob_basic.js

// CLICK COUNTS
let clickCount = 0;
let prevClick;

let bgW = 640; // virtual width
let bgH = 480; // virtual height

let chWH = 350; // Character img height (virtual)

let locationNum = 0; // scene number

let timerStart = null;
let timerStarted = false;

let timerStart_s11 = null;
let timerStarted_s11 = false;

let ang = 0;

// Play the ending GIF once, then auto-advance (28s)
const ENDING_GIF_ONCE_MS = 28000;

// ===== Responsive canvas scaling =====
let canvasW = 640; // actual canvas pixel width
let canvasH = 480; // actual canvas pixel height
let renderScale = 1; // canvasW / bgW

function computeCanvasSize() {
  // Fit inside current browser window while preserving 4:3
  const W = window.innerWidth;
  const H = window.innerHeight;

  // Option A: fit by width first, then cap by height
  let w = Math.min(W, Math.floor((H * 4) / 3));
  let h = Math.min(H, Math.floor((W * 3) / 4));

  // Choose the largest that fits both constraints
  if (Math.floor((w * 3) / 4) <= H) {
    canvasW = w;
    canvasH = Math.floor((w * 3) / 4);
  } else {
    canvasH = h;
    canvasW = Math.floor((h * 4) / 3);
  }

  renderScale = canvasW / bgW;
}

// ===== Pointer (mouse + touch) helpers =====
let touchDown = false;

// Debounce/lock input while resizing/rotating/scrolling
let inputLockedUntil = 0;

function lockInput(ms = 300) {
  inputLockedUntil = millis() + ms;
}

function inputLockedNow() {
  return millis && millis() < inputLockedUntil;
}

function pointerX() {
  const x =
    typeof touches !== "undefined" && touches.length ? touches[0].x : mouseX;
  return x / renderScale;
}
function pointerY() {
  const y =
    typeof touches !== "undefined" && touches.length ? touches[0].y : mouseY;
  return y / renderScale;
}
function isPointerDown() {
  if (inputLockedNow()) return false;
  return mouseIsPressed || touchDown;
}
function pointerWithin(x1, y1, x2, y2) {
  const x = pointerX();
  const y = pointerY();
  return x > x1 && x < x2 && y > y1 && y < y2;
}
function mouseWithin(x1, y1, x2, y2) {
  return pointerWithin(x1, y1, x2, y2);
}

// ===============================
// Mobile-safe audio bootstrap
// ===============================
let audioPrimed = false;

function ensureAudio() {
  try {
    if (typeof getAudioContext === "function") {
      const ctx = getAudioContext && getAudioContext();
      if (
        ctx &&
        ctx.state !== "running" &&
        typeof userStartAudio === "function"
      ) {
        userStartAudio();
      }
    }
  } catch (e) {}

  if (typeof bg_song !== "undefined" && bg_song && !bg_song.isPlaying()) {
    try {
      bg_song.loop();
    } catch (e) {}
  }

  audioPrimed = true;
}
