let showRotateOverlay = false;

function checkOrientation() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if (isMobile) {
    // If taller than wide → portrait
    showRotateOverlay = window.innerHeight > window.innerWidth;
  } else {
    showRotateOverlay = false; // desktop always fine
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

// p5 draw hook overlay
function drawRotateOverlay() {
  if (showRotateOverlay) {
    push();
    fill(0, 200);
    rect(0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text(
      "Please rotate your device\nto landscape to play",
      width / 2,
      height / 2
    );
    pop();
  }
}
