class DialogueBox {
  constructor(texts) {
    this.boxX = 20;
    this.boxY = 372;

    this.textX = 60;
    this.textY = 405;

    this.nameX = 70;
    this.nameY = 385;

    //box img size
    this.width = 600;
    this.height = 100;

    this.textType = 0;
    this.speaker = "";
    this.currentEmotion = null;
    this.texts = ``;

    this.allText = texts;

    this.currentIndex = 0;

    this.isActive = true;

    this.checkStatus();
  }

  display() {
    this.checkStatus();

    this.displayEmotion();
    this.displayText();
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
    if (!this.isActive) return;

    push();
    image(this.boxType(), this.boxX, this.boxY, this.width, this.height);

    fill(100);
    textFont(halfBoldPixel)
    textSize(16);
    textAlign(LEFT, TOP);
    text(this.texts, this.textX, this.textY, 500, 130);
    text(this.speaker, this.nameX, this.nameY, 500, 30);

    pop();
  }

  checkStatus() {
    if (this.currentIndex < this.allText.length) {
      let currentEntry = this.allText[this.currentIndex];

      this.textType = currentEntry.textType;
      this.speaker = currentEntry.name;
      this.currentEmotion = currentEntry.emotion;
      this.texts = currentEntry.texts;
    } else {
      this.isActive = false;
    }
  }

  boxType() {
    if (this.textType == 1) return dia_UI;
    return des_UI;
  }

  advance() {
    if (this.currentIndex < this.allText.length - 1) {
      this.currentIndex++;
      this.checkStatus();
    } else {
      this.isActive = false;
    }
  }
}
