


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

