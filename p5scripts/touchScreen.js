// p5scripts/touchScreen.js
// ===============================
// Touchscreen + Pointer Unification
// ===============================

// Device/tap state
let isTouchDevice = false;
let tappedItemKey = null;

// Areas → DialogueBox (desc) + ShowHint (wrong)
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

// Correct item per scene
const CORRECT_BY_SCENE = {
  1: "flower", // kid
  3: "ball", // panda
  5: "doll", // mom
  7: "boat", // mole
  9: "airplane", // hedgehog
};

function isCorrectForScene(key) {
  return CORRECT_BY_SCENE[locationNum] === key;
}

function clearAllWrongHints() {
  // These globals are created in setup when you new ShowHint(...)
  item_extra_wrong.visible = false;
  item_airplane_wrong.visible = false;
  item_boat_wrong.visible = false;
  item_flower_wrong.visible = false;
  item_doll_wrong.visible = false;
  item_ball_wrong.visible = false;
}

// --- Tap behavior: show description and, if wrong, the message ---
function handleTouchTap(x, y) {
  if (!isTouchDevice) return;

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

  if (!isCorrectForScene(hitKey)) {
    // Shows: "This doesn't seem like the right item for this customer"
    ITEM_AREAS[hitKey].wrong().visible = true;
  }
}

// Draw tapped item info on touch devices each frame
function drawTappedItemInfo() {
  if (!isTouchDevice || !tappedItemKey) return;

  const descBox = ITEM_AREAS[tappedItemKey].desc();
  if (descBox && typeof descBox.display === "function") {
    descBox.display();
  }

  const wrong = ITEM_AREAS[tappedItemKey].wrong();
  if (wrong && wrong.visible) wrong.display();
}

// ===============================
// Unified press handler (for both mouse & touch)
// ===============================
function pointerPressed() {
  // moved from your original mousePressed()
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

// Route p5 mouse/touch events to the unified handler
function mousePressed() {
  pointerPressed();
}
function touchStarted() {
  // touchDown is defined in aDefGlob_basic.js
  touchDown = true;
  handleTouchTap(pointerX(), pointerY());
  pointerPressed();
  return false; // prevent page scroll/zoom
}
function touchEnded() {
  touchDown = false;
  return false;
}
function touchMoved() {
  return false; // prevent scrolling while dragging on canvas
}
