/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import speakerCardBuilder from './speakerCardBuilder.js';

export const addCardToSection = (sectionPosition, cardList) => {
  for (let i = 0; i < cardList.length; i += 1) {
    sectionPosition.insertAdjacentHTML('beforebegin', speakerCardBuilder(cardList[i]));
  }
};

export const hasMore = (truthValue) => !truthValue;

export const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);