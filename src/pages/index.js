const windowOuterWidth = window.outerWidth
console.log(windowOuterWidth)

let offset = 0;
let current = 0;
let left = 0
const sliderLine = document.querySelector('.aboutUs__cards');
const card = document.querySelectorAll('.aboutUs__card');
const dots = document.querySelectorAll('.aboutUs__point');
const length = dots.length - 1;
dots[current].classList.add('aboutUs__point_active')
if (left > 0) {
  offset = offset + 1148;
}
sliderLine.style.left = -offset + 'px';
document.querySelector('.aboutUs__arrow-right').addEventListener('click', function(){
    
  if(offset == 2296) {
    offset = offset + 385;
  } else {
    offset = offset + 1148;
  }

    if (offset > 2681) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    

    if(current == length) {
      dots[current].classList.remove('aboutUs__point_active')
      current = 0
      dots[current].classList.add('aboutUs__point_active')
    } else {
      dots[current].classList.remove('aboutUs__point_active')
      current = current + 1
      dots[current].classList.add('aboutUs__point_active')
      //console.log(current, dots.length)
    }
    
});

document.querySelector('.aboutUs__arrow-left').addEventListener('click', function () {
    
    if(offset == 385) {
      offset = 0
    } else {
      offset = offset - 1148;
    }
    if (offset < 0) {
        offset = 2681;
    }
    sliderLine.style.left = -offset + 'px';

    if(current == 0) {
      dots[current].classList.remove('aboutUs__point_active')
      current = current + length;
      dots[current].classList.add('aboutUs__point_active')
    }
    else {
      dots[current].classList.remove('aboutUs__point_active')
      current--;
      dots[current].classList.add('aboutUs__point_active')
    }
});
let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0]
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;

}

function handleTouchMove(event) {
  if (x1 == null || y1 == null) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;
  
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      offset = offset - 1148;
      sliderLine.style.left = -offset + 'px';
      
    }
    else {
      offset = offset + 1148;
      sliderLine.style.left = -offset + 'px';
      
    } 
  }
  else {
    if (yDiff > 0) {
      console.log('down')
    } 
    else {
      console.log('top')
    } 
  }
  x1 = null;
  y1 = null;

}

sliderLine.addEventListener('touchstart', handleTouchStart);
sliderLine.addEventListener('touchmove', handleTouchMove);
// мобильное меню
const burgerMenu = document.querySelector('.header__buttonMenu');
const menu = document.querySelector('.header__menu');
const exit = document.querySelector('.header__exit');

/*burgerMenu.addEventListener('click', () => {
  menu.classList.add('header__menu_active')
})
exit.addEventListener('click', () => {
  menu.classList.remove('header__menu_active')
})*/

/*education block script*/
const magistrBtn = document.querySelector('.education__tab_magistr');
const aspirantBtn = document.querySelector('.education__tab_aspirant');

function handleClickOnEducationBar() {
  magistrBtn.classList.toggle('education__tab_active');
  aspirantBtn.classList.toggle('education__tab_active');
  document.querySelector('.education__card_magistr').classList.toggle('education__card_inActive');
  document.querySelector('.education__card_aspirant').classList.toggle('education__card_inActive');
}

magistrBtn.addEventListener('click', handleClickOnEducationBar);
aspirantBtn.addEventListener('click', handleClickOnEducationBar);
/*///////////////*/
