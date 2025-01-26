function scene9() {
    push();
  
  image(scene1_Img, 0, 0, bgW, bgH);

  rightItemNextScene(55, 160, 140, 215, 10);

  //   if (!timerStarted && locationNum == 3) {
  //     startTimer();
  //     timerStarted = true;
  //   }

  //   if (timerStart !== null && millis() - timerStart > 1000) {
  //     char05_h_start.display();
  //     timerStarted = false;
  //     timerStart = null;
  //   }

  char05_h_start.display();

  if (char05_h_start.isActive) tri_selectSection(545, 415, 580, 445);

  if (!char05_h_start.isActive) {
    showItemText(55, 27, () => item_extra_text.display());
    showItemText(55, 160, () => item_airplane_text.display());
    showItemText(55, 290, () => item_boat_text.display());
    showItemText(495, 27, () => item_flower_text.display());
    showItemText(495, 160, () => item_doll_text.display());
    showItemText(495, 290, () => item_ball_text.display());

    item_extra_wrong.display();
    item_extra_wrong.exit();
    // item_airplane_wrong.display();
    // item_airplane_wrong.exit();
    item_boat_wrong.display();
    item_boat_wrong.exit();
    item_flower_wrong.display();
    item_flower_wrong.display();
    item_doll_wrong.display();
    item_doll_wrong.exit();
    item_ball_wrong.display();
    item_ball_wrong.exit();

    
  }

  tri_selectSection(545, 415, 580, 445);
  pop();
}

function scene10() {
   push();
  image(scene1_Img, 0, 0, bgW, bgH);

  char05_h_start.isActive = false;
  char05_h_end.display();

  tri_selectSection(545, 415, 580, 445);
  pop();
}