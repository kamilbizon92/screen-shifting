const main_nav = document.getElementById('main-menu');
const left_nav = document.getElementById('left-menu');
const right_nav = document.getElementById('right-menu');
let startX;

main_nav.addEventListener('touchstart', touchStart, false);
main_nav.addEventListener('touchmove', touchMove, false);
main_nav.addEventListener('touchend', touchEnd, false);
left_nav.addEventListener('touchstart', touchStart, false);
left_nav.addEventListener('touchmove', touchMove, false);
left_nav.addEventListener('touchend', touchEnd, false);
right_nav.addEventListener('touchstart', touchStart, false);
right_nav.addEventListener('touchmove', touchMove, false);
right_nav.addEventListener('touchend', touchEnd, false);

function touchStart(e) {
  startX = e.touches[0].clientX;
  main_nav.style.transition = '';
  left_nav.style.transition = '';
  right_nav.style.transition = '';
  console.log(startX);
  console.log(e.target)
}

function touchMove(e) {
  let difference = startX - e.touches[0].clientX;
  console.log(difference);
  if (e.target.id === 'main-menu') {
    if (difference > 0) {
      // Move main window to left, show right menu
      right_nav.style.display = 'block';
      right_nav.style.left = screen.width - difference + 'px';
    } else {
      // Move main window to right, show left menu
      left_nav.style.display = 'block';
      left_nav.style.left = -screen.width - difference + 'px';
    }
  } else if (e.target.id === 'right-menu') {
    if (difference > 0) {
      return;
    } else {
      right_nav.style.left = -difference + 'px';
    }
  } else if (e.target.id === 'left-menu') {
    if (difference < 0 ) {
      return;
    } else {
      left_nav.style.left = -difference + 'px';
    }
  }
  e.preventDefault();
}

function touchEnd(e) {
  let difference = startX - e.changedTouches[0].clientX;
  let limit = screen.width / 4;
  console.log(difference, limit);

  if (e.target.id === 'main-menu') {
    if ((difference < limit) && (difference > -limit)) {
      // There is no change
      left_nav.style.left = '-100%';
      left_nav.style.transition = 'all .4s';
      setTimeout(() => { left_nav.style.display = 'none'; }, 400);
      right_nav.style.left = '100%';
      right_nav.style.transition = 'all .4s';
      setTimeout(() => { right_nav.style.display = 'none'; }, 400);
    } else if (difference > 0) {
      // Screen goes right
      right_nav.style.transition = 'all .4s';
      right_nav.style.left = 0;
    } else if (difference < 0) {
      // Screen goes left
      left_nav.style.transition = 'all .4s';
      left_nav.style.left = 0;
    }
  } else if (e.target.id === 'right-menu') {
    if (-difference < limit) {
      // There is no change
      right_nav.style.transition = 'all .4s';
      right_nav.style.left = 0;
    } else {
      // There is change from right to center
      right_nav.style.transition = 'all .4s';
      right_nav.style.left = '100%';
      setTimeout(() => { right_nav.style.display = 'none'; }, 400);
    }
  } else if (e. target.id === 'left-menu') {
    if (difference < limit) {
      // There is no change
      left_nav.style.left = 0;
      left_nav.style.transition = 'all .4s';
    } else {
      // There is change from left to center
      left_nav.style.left = '-100%';
      left_nav.style.transition = 'all .4s';
      setTimeout(() => { left_nav.style.display = 'none'; }, 400);
    }
  }
}
