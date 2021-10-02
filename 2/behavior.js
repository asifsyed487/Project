let wrapperHeight = document.getElementById("wrapper").offsetHeight;
let red_box = document.getElementById("box");
let animateDirection = 0;

const animateBox = () => {
  let PositionLeft = red_box.offsetLeft;
  let PositionTop = red_box.offsetTop;

  if (
    PositionLeft + 100 >= screen.width ||
    PositionTop + 100 >= wrapperHeight
  ) {
    animateDirection = 1;
  } else if (red_box.offsetLeft < 0) {
    animateDirection = 0;
  }

  if (animateDirection === 0) {
    PositionLeft = PositionLeft + 10;
    PositionTop = PositionTop + 10;
  } else {
    PositionLeft = PositionLeft - 10;
    PositionTop = PositionTop - 10;
  }

  red_box.style.left = PositionLeft + "px";
  red_box.style.top = PositionTop + "px";

  setTimeout(function () {
    animateBox();
  }, 1000);
};

setTimeout(function () {
  animateBox();
}, 1000);
