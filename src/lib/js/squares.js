export const addSquares = function (boxStartLeft, boxStartRight, boxEnd) {
  let boxStartLeftY = boxStartLeft.getBoundingClientRect().top + window.scrollY;
  let boxStartRightY = boxStartRight.getBoundingClientRect().top + window.scrollY;
  let boxEndY = boxEnd.getBoundingClientRect().top + window.scrollY;
  
  let totalBoxes = (boxEndY - boxStartLeftY) / 50;
  
  for(let i=0; i<totalBoxes; i++) {
    const el = document.createElement("div");
    const randomOff = Math.random() * 40 - 20;
    let randomLeft = Math.random() * 75 - 40;
    let randomWidth = 20+Math.random() * 100;
    const randomHeight = 20+Math.random() * 100;
    const height = boxStartLeftY + 50 * i + randomOff - (randomHeight / 2);
    el.classList.add("background-box");
    el.style.position = "absolute";
    el.style.top = height + "px";
    el.style.border = "3px solid rgba(211, 175, 55, .5)";
    if (randomLeft < 0) {
      randomWidth -= randomLeft;
      randomLeft = 0;
      el.style.borderLeftStyle = "none";
    }
    el.style.width = randomWidth + "px";
    el.style.left = randomLeft + "px";
    el.style.height = randomHeight + "px";
    el.style.opacity = "0";
    boxStartRight.appendChild(el);
  }
  
  totalBoxes = (boxEndY - boxStartRightY) / 50;
  for(let i=0; i<totalBoxes; i++) {
    const el = document.createElement("div");
    const randomOff = Math.random() * 40 - 20;
    let randomRight = Math.random() * 75 - 40;
    let randomWidth = 20+Math.random() * 100;
    const randomHeight = 20+Math.random() * 100;
    el.style.border = "3px solid rgba(211, 175, 55, .5)";
    const height = boxStartRightY + 50 * i + randomOff - (randomHeight / 2);
    if (randomRight < 0) {
      randomWidth -= randomRight;
      randomRight = 0;
      el.style.borderRightStyle = "none";
    }
    el.classList.add("background-box");
    el.style.position = "absolute";
    el.style.top = height + "px";
    el.style.right = randomRight + "px";
    el.style.width = randomWidth + "px";
    el.style.height = randomHeight + "px";
    el.style.opacity = "0";
    boxStartRight.appendChild(el);
  }
}