import Swiper from 'swiper/bundle';
import data from './data.json';

export default function() {
  const slideContent = data;
  console.log(slideContent.titles.length);

  for (let i = 0; i < slideContent.titles.length; i++) {
    const parent = document.querySelector('.swiper-wrapper');
    const swiperSlider = document.createElement('div');
    swiperSlider.classList.add('swiper-slide');
    const slideTitle = document.createElement('h3');
    const slideImage = document.createElement('img');
    const slideText = document.createElement('p');
    const slideBorder = document.createElement('span');

    slideTitle.innerHTML = slideContent.titles[i];
    slideTitle.classList.add('swiper-container__title');
    slideTitle.classList.add('main-title');
    slideImage.src = slideContent.images[i];
    slideText.innerHTML = slideContent.descriptions[i];
    slideText.classList.add('swiper-container__text');
    slideBorder.classList.add('swiper-container__border');

    parent.appendChild(swiperSlider);
    swiperSlider.appendChild(slideImage);
    swiperSlider.appendChild(slideTitle);
    swiperSlider.appendChild(slideText);
    swiperSlider.appendChild(slideBorder);
  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
