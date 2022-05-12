import {publications} from "../utils/publicationsArray.js";


const publicationsSection = document.querySelector('.page__publications')
const cards = publicationsSection.querySelector('.cards_publications');
const cardTemplate = document.querySelector("#cardPublication").content;



function renderCards(publications) {
    publications.forEach((card) => {
        cards.append(createCard(card));
    });
}

function createCard(publication) {
    const cardElement = cardTemplate.querySelector(".card_publications").cloneNode(true);
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
