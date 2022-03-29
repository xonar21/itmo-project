const windowOuterWidth = window.outerWidth
let offset = 0;
let current = 0;
let left = 0
const sliderLine = document.querySelector('.aboutUs__cards');
const card = document.querySelectorAll('.aboutUs__card');
const dots = document.querySelectorAll('.aboutUs__point');
let count = dots.length - 1;

if(windowOuterWidth < 746) {
  offset = 0
}
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
    
    
    if(current == count) {
      dots[current].classList.remove('aboutUs__point_active')
      current = 0
      dots[current].classList.add('aboutUs__point_active')
    } else {
      
      dots[current].classList.remove('aboutUs__point_active')
      current = current + 1
      dots[current].classList.add('aboutUs__point_active')
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
      current = current + count;
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
  
  if(windowOuterWidth < 1225 && windowOuterWidth > 746) {
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        offset = offset - 765;
        sliderLine.style.left = -offset + 'px';
        if (offset == -765) {
          offset = 3060
          sliderLine.style.left = -offset + 'px';
        }
        if(current == 0) {
          dots[current].classList.remove('aboutUs__point_active')
          current = current + count;
          dots[current].classList.add('aboutUs__point_active')
        }
        else {
          dots[current].classList.remove('aboutUs__point_active')
          current--;
          dots[current].classList.add('aboutUs__point_active')
        }
      }
      else {
        offset = offset + 765;
        sliderLine.style.left = -offset + 'px';
        if (offset == 3825) {
          offset = 0
          sliderLine.style.left = -offset + 'px';
        }
        if(current == count) {
          dots[current].classList.remove('aboutUs__point_active')
          current = 0
          dots[current].classList.add('aboutUs__point_active')
        } else {
          dots[current].classList.remove('aboutUs__point_active')
          current = current + 1
          dots[current].classList.add('aboutUs__point_active')
        }
      }
    }
  } else if(windowOuterWidth < 746) {
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        offset = offset - 321;
        sliderLine.style.left = -offset + 'px';
        if (offset == -321) {
          offset = 2889
          sliderLine.style.left = -offset + 'px';
        }
        if(current == 0) {
          dots[current].classList.remove('aboutUs__point_active')
          current = current + count;
          dots[current].classList.add('aboutUs__point_active')
        }
        else {
          dots[current].classList.remove('aboutUs__point_active')
          current--;
          dots[current].classList.add('aboutUs__point_active')
        }
      }
      else {
        offset = offset + 321;
        sliderLine.style.left = -offset + 'px';
        if (offset == 3210) {
          offset = 0
          sliderLine.style.left = -offset + 'px';
        }
        if(current == count) {
          dots[current].classList.remove('aboutUs__point_active')
          current = 0
          dots[current].classList.add('aboutUs__point_active')
        } else {
          dots[current].classList.remove('aboutUs__point_active')
          current = current + 1
          dots[current].classList.add('aboutUs__point_active')
        }
      }
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

burgerMenu.addEventListener('click', () => {
  menu.classList.add('header__menu_active')
})
exit.addEventListener('click', () => {
  menu.classList.remove('header__menu_active')
})
//всплывающие ссылки
const linkEducation = document.querySelector('#educ');
const linkPopUp = document.querySelector('.header__link_group');
linkEducation.addEventListener('click', () => {
  if(linkPopUp.style.opacity == 1) {
    linkPopUp.style.opacity = 0
  } else {
    linkPopUp.style.opacity = 1
  }
})
//всплывающие ссылки на телефоне
const linkEducationMobile = document.querySelector('#educm');
const linkOpacity = document.querySelectorAll('.opacity');
const linkPopUpMobile = document.querySelector('.header__link_mobile_group');
linkEducationMobile.addEventListener('click', () => {
  if(linkPopUpMobile.style.opacity == 1) {
    linkOpacity.forEach((item) => {
      item.style.opacity = 1
    })
    linkPopUpMobile.style.opacity = 0;
    linkPopUpMobile.style.position = 'absolute';
    linkPopUpMobile.style.visibility = 'hidden';
    linkEducationMobile.style.fontWeight = 400
  } else {
    linkOpacity.forEach((item) => {
      item.style.opacity = 0.5
    })
    linkEducationMobile.style.fontWeight = 600
    linkPopUpMobile.style.opacity = 1;
    linkPopUpMobile.style.position = 'relative';
    linkPopUpMobile.style.visibility = 'visible';
  }
})

