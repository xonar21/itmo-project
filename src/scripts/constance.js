const publications = [
  {
    image: '',
    title: '',
    authors: '',
    text: '',
  },
]

const publicationsSection = document.querySelector('.page__publications')
const cards = publicationsSection.querySelector('.cards');
const cardTemplate = document.querySelector("#cardPublication").content;


export {publications, cards, cardTemplate}