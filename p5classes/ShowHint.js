// p5classes/ShowHint.js

class ShowHint {
  constructor(
    enterX1,
    enterY1,
    enterX2,
    enterY2,
    img,
    exitX1,
    exitY1,
    exitX2,
    exitY2,
    texts
  ) {
    this.imgX = 20;
    this.imgY = 372;

    this.textX = 50;
    this.textY = 405;

    this.texts = texts;
    this.enterX1 = enterX1;
    this.enterY1 = enterY1;
    this.enterX2 = enterX2;
    this.enterY2 = enterY2;

    this.exitX1 = exitX1;
    this.exitY1 = exitY1;
    this.exitX2 = exitX2;
    this.exitY2 = exitY2;

    this.img = img;
    this.visible = false;
    this.isRight = false;

    // this.action = action;
  }

  display() {
    if (
      pointerWithin(this.enterX1, this.enterY1, this.enterX2, this.enterY2) &&
      isPointerDown()
    ) {
      this.visible = true;
    }

    if (this.visible) {
      push();
      image(this.img, this.imgX, this.imgY);
      fill(100);
      textFont(halfBoldPixel);
      textSize(16);
      textAlign(LEFT, TOP);
      text(this.texts, this.textX, this.textY, 480, 130);
      pop();
    }
  }

  right() {
    if (
      pointerWithin(this.enterX1, this.enterY1, this.enterX2, this.enterY2) &&
      isPointerDown()
    ) {
      // console.log("retrun right() true");
      return true;
    }
    return false;
  }

  exit() {
    if (
      pointerWithin(this.exitX1, this.exitY1, this.exitX2, this.exitY2) &&
      isPointerDown()
    ) {
      this.visible = false;
    }
  }
}
