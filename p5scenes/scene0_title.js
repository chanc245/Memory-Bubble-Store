function scene0() {
  push();

  image(scene01_Img, 0, 0, bgW, bgH);

  fill(220, 225, 180);
  textFont(BulkyPixels);
  textLeading(65)
  textSize(64);
  text("Memory Bubble Store", 55, 100, 450, 300);
  
  push()
  textAlign(CENTER)
  fill(240, 240, 220);
  textLeading(25)
  textSize(24);
  text("pop to start", 365, 330, 100, 100);
  pop()
  
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

  s0_selectSectionGoto(280, 195, 550, 465, 1);

  pop();
}