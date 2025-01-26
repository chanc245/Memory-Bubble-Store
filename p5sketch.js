function preload() {
  //Font
  halfBoldPixel = loadFont("p5assets/fonts/half_bold_pixel-7.ttf");
  BulkyPixels = loadFont("p5assets/fonts/BULKYPIX.TTF");

  //Scene bg img
  scene0_Img = loadImage("p5assets/bg/bg_title.png");
  scene01_Img = loadImage("p5assets/bg/bg_title_rain.gif");
  scene1_Img = loadImage("p5assets/bg/bg_store.png");
  scene11_Gif = loadImage("p5assets/bg/bg_ending.gif");
  scene12_Img = loadImage("p5assets/bg/bg_sunny.jpg");

  //Chara img
  kid_happy = loadImage("p5assets/char/char_kidDuck_happy.png");
  kid_stress = loadImage("p5assets/char/char_kidDuck_stressed.png");
  kid_think = loadImage("p5assets/char/char_kidDuck_thinking.png");
  panda_tired = loadImage("p5assets/char/char_panda_tired.png");
  panda_think = loadImage("p5assets/char/char_panda_thinking.png");
  panda_happy = loadImage("p5assets/char/char_panda_happy.png");
  mom_stress = loadImage("p5assets/char/char_momDuck_stressed.png");
  mom_think = loadImage("p5assets/char/char_momDuck_thinking.png");
  mom_happy = loadImage("p5assets/char/char_momDuck_happy.png");
  moles_sad = loadImage("p5assets/char/char_moles_sad.png");
  moles_think = loadImage("p5assets/char/char_moles_thinking.png");
  moles_happy = loadImage("p5assets/char/char_moles_happy.png");
  h_angry = loadImage("p5assets/char/char_hedgehog_angry.png");
  h_think = loadImage("p5assets/char/char_hedgehog_thinking.png");
  h_happy = loadImage("p5assets/char/char_hedgehog_happy.png");
  
  //UI
  des_UI = loadImage("p5assets/ui/ui_text.png");
  dia_UI = loadImage("p5assets/ui/ui_text.png");
  ui_startBubble = loadImage("p5assets/ui/ui_startBubble.png")
  ui_thinkBubble = loadImage("p5assets/ui/ui_thinkBubble.png")
  
  //Gifs 
  cg_kid_1 = loadImage("p5assets/gif/cg_kid_1.gif");
  cg_kid_2 = loadImage("p5assets/gif/cg_kid_2.gif");
  cg_panda_1 = loadImage("p5assets/gif/cg_panda_1.gif");
  cg_panda_2 = loadImage("p5assets/gif/cg_panda_2.gif");
  cg_mom_1 = loadImage("p5assets/gif/cg_mom_1.gif");
  cg_mom_2 = loadImage("p5assets/gif/cg_mom_2.gif");
  cg_moles_1 = loadImage("p5assets/gif/cg_moles_1.gif");
  cg_moles_2 = loadImage("p5assets/gif/cg_moles_2.gif");
  cg_hedgehog_1 = loadImage("p5assets/gif/cg_hedge_1.gif");
  cg_hedgehog_2 = loadImage("p5assets/gif/cg_hedge_2.gif");
  
  //Music
  soundFormats("mp3");
  bg_song = loadSound("p5assets/bg/bg_music.mp3");
}

function setup() {
  createCanvas(640, 480);
  frameRate(30);

  //Character dialogue
  char01_kid_start = new DialogueBox(char01_kid_start);
  char01_kid_end = new MemoryDiaBox(char01_kid_end);
  char02_panda_start = new DialogueBox(char02_panda_start)
  char02_panda_end = new MemoryDiaBox(char02_panda_end)
  char03_mom_start = new DialogueBox(char03_mom_start)
  char03_mom_end = new MemoryDiaBox(char03_mom_end)
  char04_mole_start = new DialogueBox(char04_mole_start)
  char04_mole_end = new MemoryDiaBox(char04_mole_end)
  char05_h_start = new DialogueBox(char05_h_start)
  char05_h_end = new MemoryDiaBox(char05_h_end)

  //Item hover text
  item_flower_text = new DialogueBox(item_flower_text);
  item_ball_text = new DialogueBox(item_ball_text);
  item_doll_text = new DialogueBox(item_doll_text);
  item_boat_text = new DialogueBox(item_boat_text);
  item_airplane_text = new DialogueBox(item_airplane_text);
  item_extra_text = new DialogueBox(item_extra_text);
  
  //Item click result wrong
  item_extra_wrong = new ShowHint(55, 27, 140, 87, dia_UI, 545, 415, 580, 445, text_item_wrong)
  item_airplane_wrong = new ShowHint(55, 160, 140, 215, dia_UI, 545, 415, 580, 445, text_item_wrong)
  item_boat_wrong = new ShowHint(55, 290, 140, 345, dia_UI, 545, 415, 580, 445, text_item_wrong)
  item_flower_wrong = new ShowHint(495, 27, 580, 87, dia_UI, 545, 415, 580, 445, text_item_wrong)
  item_doll_wrong = new ShowHint(495, 160, 580, 215, dia_UI, 545, 415, 580, 445, text_item_wrong)
  item_ball_wrong = new ShowHint(495, 290, 580, 345, dia_UI, 545, 415, 580, 445, text_item_wrong)

  //Audio
  bg_song.play();
  bg_song.loop();
}

function draw() {
  background(100);

  changeScene();

  allDebugFunction();
}

function mousePressed() {
  showXY();

  if (locationNum == 1 && mouseWithin(545, 415, 580, 445))
    char01_kid_start.advance();
  if (locationNum == 2 && mouseWithin(545, 415, 580, 445))
    char01_kid_end.advance();
  if (locationNum == 3 && mouseWithin(545, 415, 580, 445))
    char02_panda_start.advance();
  if (locationNum == 4 && mouseWithin(545, 415, 580, 445))
    char02_panda_end.advance();
  if (locationNum == 5 && mouseWithin(545, 415, 580, 445))
    char03_mom_start.advance();
  if (locationNum == 6 && mouseWithin(545, 415, 580, 445))
    char03_mom_end.advance();
  if (locationNum == 7 && mouseWithin(545, 415, 580, 445))
    char04_mole_start.advance();
  if (locationNum == 8 && mouseWithin(545, 415, 580, 445))
    char04_mole_end.advance();
  if (locationNum == 9 && mouseWithin(545, 415, 580, 445))
    char05_h_start.advance();
  if (locationNum == 10 && mouseWithin(545, 415, 580, 445))
    char05_h_end.advance();
  
}