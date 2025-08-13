// p5scripts/touchScreen.js
// ===============================
// Touchscreen + Pointer Unification (touch-only UX)
// ===============================

let isTouchDevice = false;

// Touch flow state
let tappedItemKey = null;
let touchPendingOutcome = null; // 'correct' | 'wrong' | null
let touchShowWrongPage = false;

// Areas → DialogueBox (desc) + ShowHint (we DON'T use its bubble on touch)
const ITEM_AREAS = {
  extra: {
    x1: 55,
    y1: 27,
    x2: 140,
    y2: 87,
    desc: () => item_extra_text,
    wrong: () => item_extra_wrong,
  },
  airplane: {
    x1: 55,
    y1: 160,
    x2: 140,
    y2: 215,
    desc: () => item_airplane_text,
    wrong: () => item_airplane_wrong,
  },
  boat: {
    x1: 55,
    y1: 290,
    x2: 140,
    y2: 345,
    desc: () => item_boat_text,
    wrong: () => item_boat_wrong,
  },
  flower: {
    x1: 495,
    y1: 27,
    x2: 580,
    y2: 87,
    desc: () => item_flower_text,
    wrong: () => item_flower_wrong,
  },
  doll: {
    x1: 495,
    y1: 160,
    x2: 580,
    y2: 215,
    desc: () => item_doll_text,
    wrong: () => item_doll_wrong,
  },
  ball: {
    x1: 495,
    y1: 290,
    x2: 580,
    y2: 345,
    desc: () => item_ball_text,
    wrong: () => item_ball_wrong,
  },
};

const CORRECT_BY_SCENE = {
  1: "flower",
  3: "ball",
  5: "doll",
  7: "boat",
  9: "airplane",
};
const SCENE_ADVANCE = { 1: 2, 3: 4, 5: 6, 7: 8, 9: 10 };

function isCorrectForScene(key) {
  return CORRECT_BY_SCENE[locationNum] === key;
}

function clearAllWrongHints() {
  if (typeof item_extra_wrong !== "undefined") item_extra_wrong.visible = false;
  if (typeof item_airplane_wrong !== "undefined")
    item_airplane_wrong.visible = false;
  if (typeof item_boat_wrong !== "undefined") item_boat_wrong.visible = false;
  if (typeof item_flower_wrong !== "undefined")
    item_flower_wrong.visible = false;
  if (typeof item_doll_wrong !== "undefined") item_doll_wrong.visible = false;
  if (typeof item_ball_wrong !== "undefined") item_ball_wrong.visible = false;
}

// ----- Touch tap on canvas: pick an item and show its explanation
function handleTouchTap(x, y) {
  if (!isTouchDevice) return;
  if (inputLockedNow && inputLockedNow()) return; // ignore during resize lock

  // Reset flow state each tap on items
  touchPendingOutcome = null;
  touchShowWrongPage = false;

  let hitKey = null;
  for (const [key, area] of Object.entries(ITEM_AREAS)) {
    if (x > area.x1 && x < area.x2 && y > area.y1 && y < area.y2) {
      hitKey = key;
      break;
    }
  }

  if (!hitKey) {
    tappedItemKey = null;
    clearAllWrongHints();
    return;
  }

  tappedItemKey = hitKey;
  clearAllWrongHints();

  touchPendingOutcome = isCorrectForScene(hitKey) ? "correct" : "wrong";
}

// ----- Draw current touch-only UI (scaled by renderScale in draw())
function drawTappedItemInfo() {
  if (!isTouchDevice || !tappedItemKey) return;

  if (touchShowWrongPage) {
    push();
    image(dia_UI, 20, 372, 600, 100);
    fill(100);
    textFont(halfBoldPixel);
    textSize(16);
    textAlign(LEFT, TOP);
    text(
      "This doesn't seem like the right item for this customer",
      60,
      405,
      500,
      130
    );
    pop();
    return;
  }

  const descBox = ITEM_AREAS[tappedItemKey].desc();
  if (descBox && typeof descBox.display === "function") descBox.display();
}

// ===============================
// Unified press handler
// ===============================
function pointerPressed() {
  if (inputLockedNow && inputLockedNow()) return; // block during resize debounce

  // TOUCH-ONLY override for the triangle while an item is active
  if (isTouchDevice && tappedItemKey && pointerWithin(545, 415, 580, 445)) {
    if (touchShowWrongPage) {
      touchShowWrongPage = false;
      tappedItemKey = null;
      touchPendingOutcome = null;
      return;
    }

    if (touchPendingOutcome === "correct") {
      const target = SCENE_ADVANCE[locationNum];
      if (target != null) locationNum = target;
      tappedItemKey = null;
      touchPendingOutcome = null;
      touchShowWrongPage = false;
      clearAllWrongHints();
      return;
    } else if (touchPendingOutcome === "wrong") {
      touchShowWrongPage = true;
      touchPendingOutcome = null;
      return;
    }
  }

  // Normal dialogue advances
  showXY();

  if (locationNum == 1 && pointerWithin(545, 415, 580, 445))
    char01_kid_start.advance();
  if (locationNum == 2 && pointerWithin(545, 415, 580, 445))
    char01_kid_end.advance();
  if (locationNum == 3 && pointerWithin(545, 415, 580, 445))
    char02_panda_start.advance();
  if (locationNum == 4 && pointerWithin(545, 415, 580, 445))
    char02_panda_end.advance();
  if (locationNum == 5 && pointerWithin(545, 415, 580, 445))
    char03_mom_start.advance();
  if (locationNum == 6 && pointerWithin(545, 415, 580, 445))
    char03_mom_end.advance();
  if (locationNum == 7 && pointerWithin(545, 415, 580, 445))
    char04_mole_start.advance();
  if (locationNum == 8 && pointerWithin(545, 415, 580, 445))
    char04_mole_end.advance();
  if (locationNum == 9 && pointerWithin(545, 415, 580, 445))
    char05_h_start.advance();
  if (locationNum == 10 && pointerWithin(545, 415, 580, 445))
    char05_h_end.advance();
}

// Route p5 mouse/touch events
function mousePressed() {
  if (typeof ensureAudio === "function") ensureAudio(); // desktop fallback if autoplay blocked
  pointerPressed();
}

// Allow page scrolling; also ignore multi-touch (pinch zoom)
function touchStarted() {
  // Ignore if two-finger (pinch) — avoid accidental taps during zoom/resize
  if (typeof touches !== "undefined" && touches.length > 1) {
    touchDown = false;
    return; // do not block scrolling
  }
  touchDown = true;

  if (typeof ensureAudio === "function") ensureAudio();
  handleTouchTap(pointerX(), pointerY());
  pointerPressed();
}
function touchMoved() {
  // allow normal scroll
}
function touchEnded() {
  touchDown = false;
}
