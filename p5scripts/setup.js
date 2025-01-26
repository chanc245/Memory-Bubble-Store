function startTimer() {
  timerStart = millis();
  timerStarted = true;
}

function startTimer_s11() {
  timerStart_s11 = millis();
  timerStarted_s11 = true;
}

function selectSectionGoto(x1, y1, x2, y2, goto) {
  push();
  if (mouseWithin(x1, y1, x2, y2)) {
    rectMode(CORNERS);
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(x1, y1, x2, y2);

    if (mouseIsPressed) {
      locationNum = goto;
      // console.log(locationNum);
    }
  }
  pop();
}

function s0_selectSectionGoto(x1, y1, x2, y2, goto) {
  push();
  if (mouseWithin(x1, y1, x2, y2)) {
    push();

    noFill();
    stroke(220, 225, 180);
    strokeWeight(2);

    beginShape();
    vertex(282, 356);
    vertex(305, 265);
    vertex(388, 208);
    vertex(486, 226);
    vertex(509, 249);
    vertex(541, 319);
    vertex(545, 348);
    vertex(532, 392);
    vertex(502, 434);
    vertex(454, 448);
    vertex(358, 451);
    vertex(297, 402);
    vertex(283, 356);
    endShape();

    pop();

    if (mouseIsPressed) {
      locationNum = goto;
      // console.log(locationNum);
    }
  }
  pop();
}

function selectSection(x1, y1, x2, y2) {
  push();
  if (mouseWithin(x1, y1, x2, y2)) {
    rectMode(CORNERS);
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(x1, y1, x2, y2);
  }
  pop();
}

function tri_selectSection(x1, y1, x2, y2, mid) {
  push();
  if (mouseWithin(x1, y1, x2, y2)) {
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    vertex(545, 414);
    vertex(580, 414);
    vertex(562, 442);
    vertex(545, 415);
    endShape();
  }
  pop();
}

function showItemText(x1, y1, action) {
  let x2 = x1 + 85;
  let y2 = y1 + 60;

  push();
  rectMode(CORNERS);
  noFill();
  // rect(x1, y1, x2, y2);

  if (mouseWithin(x1, y1, x2, y2)) {
    // fill(255);
    // rect(x1, y1, x2, y2);
    action();
  }

  pop();
}

function rightItemNextScene(x1, y1, x2, y2, num) {
  if (mouseWithin(x1, y1, x2, y2) && mouseIsPressed) {
    locationNum = num
  }
}
