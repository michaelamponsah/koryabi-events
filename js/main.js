/* eslint-disable linebreak-style */
const mobileNavMenu = document.querySelector('.mobile-slider-nav');

document.addEventListener('click', (e) => {
  const isMobileNavMenuButton = e.target.matches('[data-nav-menu-btn]');

  if (isMobileNavMenuButton) {
    mobileNavMenu.classList.toggle('mobile-slider-nav-active');
  }
});