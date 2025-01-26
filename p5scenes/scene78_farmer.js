function scene7() {
    push();
  
  image(scene1_Img, 0, 0, bgW, bgH);

  rightItemNextScene(55, 290, 140, 345, 8);

  //   if (!timerStarted && locationNum == 3) {
  //     startTimer();
  //     timerStarted = true;
  //   }

  //   if (timerStart !== null && millis() - timerStart > 1000) {
  //     char04_mole_start.display();
  //     timerStarted = false;
  //     timerStart = null;
  //   }

  char04_mole_start.display();

  if (char04_mole_start.isActive) tri_selectSection(545, 415, 580, 445);

  if (!char04_mole_start.isActive) {
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
    // item_boat_wrong.display();
    // item_boat_wrong.exit();
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

function scene8() {
   push();
  image(scene1_Img, 0, 0, bgW, bgH);

  char04_mole_start.isActive = false;
  char04_mole_end.display();

  tri_selectSection(545, 415, 580, 445);
  pop();
}