// global stuff
const OFFSET = 100;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("nice try");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const btnBox = btn.getBoundingClientRect();
  const horizontalDist = distanceFromCenter(btnBox.x, x, btnBox.width);
  const verticalDist = distanceFromCenter(btnBox.y, y, btnBox.height);
  const horizontalOffset = btnBox.width / 2 + OFFSET;
  const verticalOffset = btnBox.height / 2 + OFFSET;
  if (Math.abs(horizontalDist) <= horizontalOffset && Math.abs(verticalDist) <= verticalOffset) {
    setBoxPosition(btnBox.x + (horizontalOffset / horizontalDist) * 10, btnBox.y + (verticalOffset / verticalDist) * 10);
  }
});

function setBoxPosition(left, top) {
  const window = document.body.getBoundingClientRect();
  const btnBox = btn.getBoundingClientRect();

  if (distanceFromCenter(left, window.left, btnBox.width) < 0) {
    left = window.right - btnBox.width - OFFSET / 2;
  }
  if (distanceFromCenter(left, window.right, btnBox.width) > 0) {
    left = window.left + OFFSET / 2;
  }
  if (distanceFromCenter(top, window.top, btnBox.height) < 0) {
    top = window.bottom - btnBox.height - OFFSET / 2;
  }
  if (distanceFromCenter(top, window.bottom, btnBox.height) > 0) {
    top = window.top + OFFSET / 2;
  }

  btn.style.left = `${left}px`;
  btn.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
