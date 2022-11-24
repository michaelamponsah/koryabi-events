/* eslint-disable linebreak-style */
import keyNoteSpeakers from './datastore.js';
import speakerCardBuilder from './speakerCardBuilder.js';
import { addCardToSection, hasMore, isMobileDevice } from './utils.js';

const mobileNavMenu = document.querySelector('.mobile-slider-nav');
const body = document.querySelector('body');
const loadMoreSpeakersBtn = document.querySelector('[data-load-more-speakers]');

// We keep track of the start and end indexes globally.
// This ensures the indexes are accessible everywhere
let startIndex = 0;
let endIndex = 3;
const intialCardlist = keyNoteSpeakers.slice(startIndex, endIndex);

window.onload = () => {
  if (isMobileDevice()) {
    addCardToSection(loadMoreSpeakersBtn, intialCardlist);
  } else {
    loadMoreSpeakersBtn.style.display = 'none';
    loadMoreSpeakersBtn.setAttribute('disabled', true);
    keyNoteSpeakers.forEach((speaker) => {
      loadMoreSpeakersBtn.insertAdjacentHTML('beforebegin', speakerCardBuilder(speaker));
    });
  }
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

  if (loadMoreSpeakersBtn && isMobileDevice) {
    if (startIndex === Math.ceil(keyNoteSpeakers.length / 2)) {
      hasMore(false);
      return;
    }

    startIndex = endIndex;
    endIndex += 3;
    const cardList = keyNoteSpeakers.slice(startIndex, endIndex);
    addCardToSection(loadMoreSpeakersBtn, cardList);
  }

  if (hasMore) {
    loadMoreSpeakersBtn.setAttribute('disabled', true);
  }
});