function showXY() {
  let clickXY = true;
  prevClick = clickCount;
  clickCount += 1;
  if (clickXY) {
    console.log(`(${mouseX}, ${mouseY})`);
    // console.log(`vertex(${mouseX}, ${mouseY});`);
  }
}

function sceneFastChange_Debug() {
  if (keyIsDown(48)) {
    locationNum = 0;
  } else if (key == "1") {
    locationNum = 1;
  } else if (key == "2") {
    locationNum = 2;
  } else if (key == "3") {
    locationNum = 3;
  } else if (key == "4") {
    locationNum = 4;
  } else if (key == "5") {
    locationNum = 5;
  } else if (key == "6") {
    locationNum = 6;
  } else if (key == "7") {
    locationNum = 7;
  } else if (key == "8") {
    locationNum = 8;
  } else if (key == "9") {
    locationNum = 9;
  } else if (key == "-") {
    locationNum = 10;
  } else if (key == "q") {
    locationNum = 11;
  } else if (key == "w") {
    locationNum = 12;
  }
}

function sceneText_Debug() {
  push();

  function lineNo(input) {
    return 30 + 20 * input;
  }

  rectMode(CORNER);
  noStroke();
  fill(255, 255, 255, 100);
  rect(15, 10, 200, lineNo(2), 5);

  textAlign(LEFT);
  textSize(15);
  fill(50, 50, 50, 200);
  text(`mouseXY [ ${mouseX}, ${mouseY} ]`, 20, lineNo(0));
  text(`locationNum [ ${locationNum} ]`, 20, lineNo(1));
  text(`timerStart_s11 [ ${timerStart_s11} ]`, 20, lineNo(2));
  pop();
}

function allDebugFunction() {
  // sceneFastChange_Debug();
  // sceneText_Debug();

  // char01_kid_start.display(); //testing dialogue
  // char01_kid_end.display();
  // showItemText(490, 15, () => item_flower_text.display()); //testing item_text
  
  
  // push()
  // textFont(BulkyPixels);
  // textAlign(CENTER)
  // fill(240, 240, 220);
  // textLeading(25)
  // textSize(15);
  // text("press [space] to continue", 0, 400, 640, 100);
  // pop()
}