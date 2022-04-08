import { ourTeam, cardsOurTeam, cardsOurTeamTemplate } from "./constance.js";

function renderCards(ourTeam) {
  ourTeam.forEach((member) => {
    cardsOurTeam.append(createCard(member));
  });
}

function createCard(member) {
  const cardElement = cardsOurTeamTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__img");
  cardElementImage.src = member.image;
  cardElementImage.alt = member.name;
  cardElement.querySelector(".card__title").textContent = member.name;
  cardElement.querySelector(".card__caption").textContent = member.job;
  console.log(cardElement)
  return cardElement;
}

renderCards(ourTeam)