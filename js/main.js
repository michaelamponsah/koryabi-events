/* eslint-disable linebreak-style */
import keyNoteSpeakers from './datastore.js';
import { addCardToSection, hasMore } from './utils.js';

const mobileNavMenu = document.querySelector('.mobile-slider-nav');
const body = document.querySelector('body');
const loadMoreSpeakers = document.querySelector('[data-load-more-speakers]');

let startIndex = 0;
let endIndex = 3;
const intialCardlist = keyNoteSpeakers.slice(startIndex, endIndex);

window.onload = () => {
  addCardToSection(loadMoreSpeakers, intialCardlist);
};

document.addEventListener('click', (e) => {
  const isMobileNavMenuButton = e.target.matches('[data-nav-menu-btn]');
  const isNavLink = e.target.matches('[data-nav-link]');

  if (isMobileNavMenuButton) {
    mobileNavMenu.classList.toggle('mobile-slider-nav-active');
  }

  if (isNavLink && mobileNavMenu.classList.contains('mobile-slider-nav-active')) {
    mobileNavMenu.classList.remove('mobile-slider-nav-active');
    body.style.overflow = 'auto';
  }

  if (mobileNavMenu.classList.contains('mobile-slider-nav-active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  if (loadMoreSpeakers) {
    if (startIndex === Math.ceil(keyNoteSpeakers.length / 2)) {
      hasMore(false);
      return;
    }

    startIndex = endIndex;
    endIndex += 3;
    const cardList = keyNoteSpeakers.slice(startIndex, endIndex);
    addCardToSection(loadMoreSpeakers, cardList);
  }

  if (hasMore) {
    loadMoreSpeakers.style.backgroundColor = 'blue';
  }
});