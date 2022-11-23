/* eslint-disable linebreak-style */
import keyNoteSpeakers from './datastore.js';
import speakerCardBuilder from './speakerCardBuilder.js';

const mobileNavMenu = document.querySelector('.mobile-slider-nav');
const keynoteSpeakersSection = document.querySelector('.section-speakers--keynote-speakers');
const body = document.querySelector('body');

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
});

keyNoteSpeakers.forEach((speaker) => {
  if (keynoteSpeakersSection) {
    keynoteSpeakersSection.insertAdjacentHTML('afterbegin', speakerCardBuilder(speaker));
  }
});