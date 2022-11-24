/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import speakerCardBuilder from './speakerCardBuilder.js';

export const addCardToSection = (sectionPosition, cardList) => {
  for (let i = 0; i < cardList.length; i += 1) {
    sectionPosition.insertAdjacentHTML('beforebegin', speakerCardBuilder(cardList[i]));
  }
};

export const hasMore = (truthValue) => !truthValue;