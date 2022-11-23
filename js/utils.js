/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

export const speakerCardBuilder = (data) => {
  const {
    id,
    speakerName,
    position,
    briefProfile,
    img,
  } = data;
  const { imgSrc, alt } = img;
  return `
  <li class="section-speakers--list-item margin-1" id=${id}>
  <div class="speaker-img-wrapper">
    <img src="${imgSrc}" alt="${alt}" class="speaker-img">
  </div>
  <div class="speaker-details">
    <div class="">
      <h3 class="speaker-details--speaker-name">${speakerName}</h3>
      <p class="speaker-details--speaker-org">${position}</p>
      <span class="underline speaker-underline"></span>
    </div>
    <p class="speaker-details--profile">${briefProfile}</p>
  </div>
</li>
  `;
};