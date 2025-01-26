class MemoryDiaBox {
  constructor(texts) {
    this.boxX = 20;
    this.boxY = 372;

    this.bubbleX = 170;
    this.bubbleY = 13;

    this.textX = 60;
    this.textY = 405;

    this.nameX = 70;
    this.nameY = 385;

    //box img size
    this.width = 600;
    this.height = 100;

    this.textType = 0;
    this.speaker = "";
    this.currentGif = 1;
    this.currentEmotion = null;
    this.texts = ``;

    this.allText = texts;

    this.currentNum = 0;

    this.isActive = true;

    this.checkStatus();
  }

  display() {
    this.checkStatus();

    this.displayEmotion();
    this.displayText();
    this.displayMemory();
  }

  displayMemory() {
    image(ui_thinkBubble, this.bubbleX, this.bubbleY, 300, 200);
    push();
    if (this.currentGif != null) {
      if (this.currentGif == "cg_kid_1") this.currentGif = cg_kid_1;
      if (this.currentGif == "cg_kid_2") this.currentGif = cg_kid_2;
      if (this.currentGif == "cg_panda_1") this.currentGif = cg_panda_1;
      if (this.currentGif == "cg_panda_2") this.currentGif = cg_panda_2;
      if (this.currentGif == "cg_mom_1") this.currentGif = cg_mom_1;
      if (this.currentGif == "cg_mom_2") this.currentGif = cg_mom_2;
      if (this.currentGif == "cg_mole_1") this.currentGif = cg_moles_1;
      if (this.currentGif == "cg_mole_2") this.currentGif = cg_moles_2;
      if (this.currentGif == "cg_hedgehog_1") this.currentGif = cg_hedgehog_1;
      if (this.currentGif == "cg_hedgehog_2") this.currentGif = cg_hedgehog_2;

      image(this.currentGif, 220, 50, 200, 100);
    }
    pop();
  }

  displayEmotion() {
    if (this.currentEmotion != null) {
      if (this.currentEmotion == "kid_happy") this.currentEmotion = kid_happy;
      if (this.currentEmotion == "kid_stress") this.currentEmotion = kid_stress;
      if (this.currentEmotion == "kid_think") this.currentEmotion = kid_think;
      if (this.currentEmotion == "panda_tired") this.currentEmotion = panda_tired;
      if (this.currentEmotion == "panda_think") this.currentEmotion = panda_think;
      if (this.currentEmotion == "panda_happy") this.currentEmotion = panda_happy;
      if (this.currentEmotion == "mom_stress") this.currentEmotion = mom_stress;
      if (this.currentEmotion == "mom_think") this.currentEmotion = mom_think;
      if (this.currentEmotion == "mom_happy") this.currentEmotion = mom_happy;
      if (this.currentEmotion == "moles_sad") this.currentEmotion = moles_sad;
      if (this.currentEmotion == "moles_think") this.currentEmotion = moles_think;
      if (this.currentEmotion == "moles_happy") this.currentEmotion = moles_happy;
      if (this.currentEmotion == "h_angry") this.currentEmotion = h_angry;
      if (this.currentEmotion == "h_think") this.currentEmotion = h_think;
      if (this.currentEmotion == "h_happy") this.currentEmotion = h_happy;

      image(this.currentEmotion, 0, 0, 640, 480);
    }
  }

  displayText() {
    // if (!this.isActive) return;

    push();
    image(this.boxType(), this.boxX, this.boxY, this.width, this.height);

    fill(100);
    textFont(halfBoldPixel);
    textSize(16);
    textAlign(LEFT, TOP);
    text(this.texts, this.textX, this.textY, 500, 130);
    text(this.speaker, this.nameX, this.nameY, 500, 30);

    pop();
  }

  checkLocationChange() {
    if (locationNum == 2 || locationNum == 4 || locationNum == 6 || locationNum == 8 || locationNum == 10) locationNum++;
  }

  checkStatus() {
    if (this.currentNum < this.allText.length) {
      let currentEntryMem = this.allText[this.currentNum];

      this.textType = currentEntryMem.textType;
      this.speaker = currentEntryMem.name;
      this.currentEmotion = currentEntryMem.emotion;
      this.currentGif = currentEntryMem.gif;
      this.texts = currentEntryMem.texts;
    } else {
      this.isActive = false;
    }
  }

  boxType() {
    if (this.textType == 1) return dia_UI;
    return des_UI;
  }

  advance() {
    if (this.currentNum < this.allText.length - 1) {
      this.currentNum++;
      this.checkStatus();
    } else {
      this.isActive = false;
      this.checkLocationChange()
    }
  }
}
