// p5scenes/scene_ending.js

function scene11() {
  image(scene11_Gif, 0, 0, bgW, bgH);

  // Start the timer the moment we enter scene 11
  if (!timerStarted_s11 && locationNum === 11) {
    startTimer_s11();
    timerStarted_s11 = true;
  }

  // Auto-advance after one full GIF duration
  if (
    timerStart_s11 !== null &&
    millis() - timerStart_s11 >= ENDING_GIF_ONCE_MS
  ) {
    // go to the end page automatically
    locationNum = 12;

    // cleanup any touch overlays if present
    if (typeof tappedItemKey !== "undefined") tappedItemKey = null;
    if (typeof clearAllWrongHints === "function") clearAllWrongHints();

    // reset the ending timer flags (optional)
    timerStart_s11 = null;
    timerStarted_s11 = false;
    return;
  }

  // Optional: allow skipping via SPACE right away
  if (keyIsDown(32)) {
    locationNum = 12;
    if (typeof tappedItemKey !== "undefined") tappedItemKey = null;
    if (typeof clearAllWrongHints === "function") clearAllWrongHints();
    timerStart_s11 = null;
    timerStarted_s11 = false;
    return;
  }

  // Small on-screen hint (now says "press [space] to skip")
  push();
  textFont(BulkyPixels);
  textAlign(CENTER);
  fill(100, 80, 80);
  textLeading(25);
  textSize(15);
  text("press [space] to skip", 0, 400, 640, 100);
  pop();
}

function scene12() {
  push();
  image(scene12_Img, 0, 0, bgW, bgH);

  fill(215, 220, 140);
  textFont(BulkyPixels);
  textLeading(65);
  textSize(64);
  text("Memory Bubble Store", 55, 100, 450, 300);

  push();
  textAlign(CENTER);
  fill(240, 240, 220);
  textLeading(25);
  textSize(24);
  text("thanks for playing!", 365, 330, 100, 100);
  pop();

  fill(220, 225, 180, 150);
  textFont(halfBoldPixel);
  textSize(14);
  text("Havenever Studio 2025", 55, 260);

  // spinning bubble
  push();
  imageMode(CENTER);
  translate(415, 330);
  rotate(ang);
  image(ui_startBubble, 0, 0, 270, 270);
  ang += radians(0.8);
  pop();

  pop();
}
