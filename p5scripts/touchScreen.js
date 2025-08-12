// p5scripts/touchScreen.js
// ===============================
// Touchscreen + Pointer Unification (touch-only UX)
// ===============================
//
// Note:
// - Pointer helpers (pointerWithin, pointerX/Y, isPointerDown, touchDown var)
//   live in aDefGlob_basic.js — we rely on them here.
// - isTouchDevice is set in setup() (p5sketch.js) but we declare it here.

let isTouchDevice = false;

// Touch flow state
let tappedItemKey = null; // which item was tapped (for explanation/wrong page)
let touchPendingOutcome = null; // 'correct' | 'wrong' | null (decided after tap, before triangle)
let touchShowWrongPage = false; // if true: show only the single-line "not right item" page

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

// Correct item per scene
const CORRECT_BY_SCENE = {
  1: "flower", // kid
  3: "ball", // panda
  5: "doll", // mom
  7: "boat", // mole
  9: "airplane", // hedgehog
};

// Scene to go to if correct is chosen
const SCENE_ADVANCE = { 1: 2, 3: 4, 5: 6, 7: 8, 9: 10 };

function isCorrectForScene(key) {
  return CORRECT_BY_SCENE[locationNum] === key;
}

function clearAllWrongHints() {
  // These globals exist from setup.js (ShowHint instances)
  if (typeof item_extra_wrong !== "undefined") item_extra_wrong.visible = false;
  if (typeof item_airplane_wrong !== "undefined")
    item_airplane_wrong.visible = false;
  if (typeof item_boat_wrong !== "undefined") item_boat_wrong.visible = false;
  if (typeof item_flower_wrong !== "undefined")
    item_flower_wrong.visible = false;
  if (typeof item_doll_wrong !== "undefined") item_doll_wrong.visible = false;
  if (typeof item_ball_wrong !== "undefined") item_ball_wrong.visible = false;
}

// --- Touch tap on canvas: pick an item and show its explanation
function handleTouchTap(x, y) {
  if (!isTouchDevice) return;

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
  clearAllWrongHints(); // don't show the bubble; we render inline

  // Decide outcome after explanation, but WAIT for triangle tap to proceed
  touchPendingOutcome = isCorrectForScene(hitKey) ? "correct" : "wrong";
}

// Draw current touch-only UI
function drawTappedItemInfo() {
  if (!isTouchDevice || !tappedItemKey) return;

  // If wrong page is toggled, show ONLY the wrong line inside the dialogue box
  if (touchShowWrongPage) {
    push();
    image(dia_UI, 20, 372, 600, 100); // same box art as DialogueBox
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

  // Otherwise, show the item's explanation DialogueBox
  const descBox = ITEM_AREAS[tappedItemKey].desc();
  if (descBox && typeof descBox.display === "function") {
    descBox.display();
  }
}

// ===============================
// Unified press handler (for both mouse & touch)
// ===============================
function pointerPressed() {
  // TOUCH-ONLY override for the triangle while an item is active
  if (isTouchDevice && tappedItemKey && pointerWithin(545, 415, 580, 445)) {
    // If we're currently showing the wrong page, a triangle tap dismisses it.
    if (touchShowWrongPage) {
      touchShowWrongPage = false;
      tappedItemKey = null; // allow choosing another item
      touchPendingOutcome = null;
      return; // consume press
    }

    // We're on the explanation "page" and the user tapped triangle:
    if (touchPendingOutcome === "correct") {
      const target = SCENE_ADVANCE[locationNum];
      if (target != null) {
        // Advance scene
        locationNum = target;
      }
      // Cleanup
      tappedItemKey = null;
      touchPendingOutcome = null;
      touchShowWrongPage = false;
      clearAllWrongHints();
      return; // consume press
    } else if (touchPendingOutcome === "wrong") {
      // Switch to the single-line "not right item" page
      touchShowWrongPage = true;
      // keep tappedItemKey so we can draw the wrong page; pendingOutcome can be cleared
      touchPendingOutcome = null;
      return; // consume press
    }
    // If no pending outcome set, fall through to normal behavior
  }

  // Otherwise, proceed with normal dialogue advances (desktop or no touch context)
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
  // Desktop fallback if autoplay was blocked
  if (typeof ensureAudio === "function") ensureAudio();
  pointerPressed();
}

// IMPORTANT: allow page scrolling on mobile — do NOT return false.
function touchStarted() {
  touchDown = true;
  if (typeof ensureAudio === "function") ensureAudio(); // start/resume audio + loop bg
  handleTouchTap(pointerX(), pointerY());
  pointerPressed();
  // No return value -> let the browser scroll if the user drags
}
function touchMoved() {
  // Allow normal page scrolling (do not preventDefault / do not return false)
}
function touchEnded() {
  touchDown = false;
  // Allow normal behavior (no return false)
}
