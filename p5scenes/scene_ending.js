function scene11() {
  image(scene11_Gif, 0, 0, bgW, bgH);

  //   if (!timerStarted_s11 && locationNum == 11) {
  //     startTimer_s11();
  //     timerStarted_s11 = true;
  //   }

  //   if (timerStart_s11 !== null && timerStart_s11 > 5000) {
  //     console.log("time up!")
  //     locationNum = 12;
  //   }

  push();
  textFont(BulkyPixels);
  textAlign(CENTER);
  fill(100, 80, 80);
  textLeading(25);
  textSize(15);
  text("press [space] to continue", 0, 400, 640, 100);
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

  push(); //spinning start
  imageMode(CENTER);
  translate(415, 330);
  rotate(ang);
  image(ui_startBubble, 0, 0, 270, 270);
  ang += radians(0.8);
  pop(); //spinning stop
  pop();
}
