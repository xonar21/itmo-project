import {aboutArray} from '../utils/aboutUsArray.js';
let windowOuterWidth = window.outerWidth; 
function slider(perview,group) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: perview,
        spaceBetween: 35,
        slidesPerGroup: group,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
        if(windowOuterWidth < 1368 && windowOuterWidth > 786) {
            slider(2,1)
        } else if (windowOuterWidth < 786) {
            slider(1,1)
        }
         else {
            slider(3,3)
        }
        
window.addEventListener('resize', () => {
    windowOuterWidth = window.outerWidth
    if(windowOuterWidth < 1368 && windowOuterWidth > 786) {
        slider(2,1)
    } else if (windowOuterWidth < 786) {
        slider(1,1)
    }
     else {
        slider(3,3)
    }
})

const aboutUsContainer = document.querySelector('.aboutUs-container')
aboutArray.forEach((item) => {
    let aboutUsElement = document
        .querySelector('#aboutUs-element') 
        .content                           
        .querySelector('.swiper-slide')          
        .cloneNode(true);
    aboutUsElement.querySelector('.aboutUs__date').textContent = item.date
    aboutUsElement.querySelector('.aboutUs__smallTitle').textContent = item.title;
    aboutUsElement.querySelector('.aboutUs__text').textContent = item.text;
    aboutUsContainer.append(aboutUsElement);
})
