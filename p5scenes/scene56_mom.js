function scene5() {
  push();
  
  image(scene1_Img, 0, 0, bgW, bgH);

  rightItemNextScene(495, 160, 580, 215, 6);

  //   if (!timerStarted && locationNum == 3) {
  //     startTimer();
  //     timerStarted = true;
  //   }

  //   if (timerStart !== null && millis() - timerStart > 1000) {
  //     char03_mom_start.display();
  //     timerStarted = false;
  //     timerStart = null;
  //   }

  char03_mom_start.display();

  if (char03_mom_start.isActive) tri_selectSection(545, 415, 580, 445);

  if (!char03_mom_start.isActive) {
    showItemText(55, 27, () => item_extra_text.display());
    showItemText(55, 160, () => item_airplane_text.display());
    showItemText(55, 290, () => item_boat_text.display());
    showItemText(495, 27, () => item_flower_text.display());
    showItemText(495, 160, () => item_doll_text.display());
    showItemText(495, 290, () => item_ball_text.display());

    item_extra_wrong.display();
    item_extra_wrong.exit();
    item_airplane_wrong.display();
    item_airplane_wrong.exit();
    item_boat_wrong.display();
    item_boat_wrong.exit();
    item_flower_wrong.display();
    item_flower_wrong.display();
    // item_doll_wrong.display();
    // item_doll_wrong.exit();
    item_ball_wrong.display();
    item_ball_wrong.exit();

    
  }

  tri_selectSection(545, 415, 580, 445);
  pop();
}

function scene6() {
  push();
  image(scene1_Img, 0, 0, bgW, bgH);

  char03_mom_start.isActive = false;
  char03_mom_end.display();

  tri_selectSection(545, 415, 580, 445);
  pop();
}