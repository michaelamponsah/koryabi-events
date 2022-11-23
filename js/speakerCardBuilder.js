/* eslint-disable linebreak-style */

const speakerCardBuilder = (data) => {
  const {
    id,
    speakerName,
    position,
    briefProfile,
    img,
  } = data;
  const { src, alt } = img;

  const speakerItem = `
  <li class="section-speakers--list-item margin-1" id=${id}>
  <div class="speaker-img-wrapper">
    <img src="${src}" alt="${alt}" class="speaker-img">
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

  return speakerItem;
};

export default speakerCardBuilder;