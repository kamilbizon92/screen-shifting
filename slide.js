const main_nav = document.getElementById('main-menu');
const right_nav = document.getElementById('right-menu');
let startX;

main_nav.addEventListener('touchstart', touchStart, false);
main_nav.addEventListener('touchmove', touchMove, false);
main_nav.addEventListener('touchend', touchEnd, false);
right_nav.addEventListener('touchstart', touchStart, false);
right_nav.addEventListener('touchmove', touchMove, false);
right_nav.addEventListener('touchend', touchEnd, false);

function touchStart(e) {
  startX = e.touches[0].clientX;
  console.log(startX);
}

function touchMove(e) {
  let difference = startX - e.touches[0].clientX;
  console.log(difference);
  e.preventDefault();
}

function touchEnd(e) {
  console.log(e.changedTouches[0].clientX);
}
