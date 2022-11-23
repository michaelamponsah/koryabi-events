/* eslint-disable linebreak-style */
import keyNoteSpeakers from './datastore.js';
import speakerCardBuilder from './speakerCardBuilder.js';

const mobileNavMenu = document.querySelector('.mobile-slider-nav');
const keynoteSpeakersSection = document.querySelector('.section-speakers--keynote-speakers');

document.addEventListener('click', (e) => {
  const isMobileNavMenuButton = e.target.matches('[data-nav-menu-btn]');

  if (isMobileNavMenuButton) {
    mobileNavMenu.classList.toggle('mobile-slider-nav-active');
  }
});

keyNoteSpeakers.forEach((speaker) => {
  keynoteSpeakersSection.insertAdjacentHTML('afterbegin', speakerCardBuilder(speaker));
});