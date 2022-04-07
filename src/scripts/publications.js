import {publications, cards, cardTemplate} from "./constance.js";

function renderCards(publications) {
    publications.forEach((card) => {
        cards.append(createCard(card));
    });
}

function createCard(publication) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardElementImage = cardElement.querySelector(".card__img");
    const cardElementPopup = cardElement.querySelector(".card__sharePopup");
    const cardElementShareIcon = cardElement.querySelector(".card__icon");
    cardElementImage.src = publication.image;
    cardElementImage.alt = publication.title;
    cardElement.querySelector(".card__title").textContent = publication.title;
    cardElement.querySelector(".card__authors").textContent = publication.authors;
    cardElement.querySelector(".card__description").textContent = publication.text;
    cardElementShareIcon.addEventListener('click', () => {
        cardElementPopup.classList.add('active');
        cardElementPopup.addEventListener('click', () => {
            cardElementPopup.classList.remove('active');
        });
    });

    return cardElement;
}

renderCards(publications);
