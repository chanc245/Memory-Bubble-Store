function changeScene() {
  switch (locationNum) {
    case 0:
      scene0();
      break;

    case 1:
      scene1();
      break;

    case 2:
      scene2();
      break;

    case 3:
      scene3();
      break;

    case 4:
      scene4();
      break;

    case 5:
      scene5();
      break;

    case 6:
      scene6();
      break;

    case 7:
      scene7();
      break;

    case 8:
      scene8();
      break;

    case 9:
      scene9();
      break;

    case 10:
      scene10();
      break;

    case 11:
      scene11();
      break;

    case 12:
      scene12();
      break;
  }
  
  if (locationNum == 11 && keyIsDown(32)) {
    locationNum++
  }
    
}
