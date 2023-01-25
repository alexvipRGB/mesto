import { openCardImgPopup } from './index.js';
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

const elementContainer = document.querySelector('.elements');

class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _createCard() {
    const card = (this._cardSelector).content.querySelector('.element')
      .cloneNode(true);

    return card;
  }
  _setEventListeners() {
    this._card.querySelector('.element__trash').addEventListener('click', () => {
      this._card.remove();
    });
    this._card.querySelector('.element__like').addEventListener('click', () => {
      cardLike.classList.toggle('element__like_active');
    });
    this._card.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link)
    });;
  }
  
  generate() {
    this._card = this._createCard();
    this._setEventListeners();
    this._card.querySelector('.element__title').textContent = this._title;
    const _image = this._card.querySelector('.element__image');
    _image.src = this._link;
    _image.alt = `фото: ${ this._title }`;
    return this._card;
  }
}

function createCard (item) {
  const card = document
      .querySelector('#elements')
      .content.querySelector('.element')
      .cloneNode(true);
  const cardName = card.querySelector('.element__title');
  const cardImg = card.querySelector('.element__image');
  cardName.textContent = item.name;
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector('.element__trash').addEventListener('click', () => {
    card.remove();
  });
  const cardLike = card.querySelector('.element__like');
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('element__like_active');
  });
  cardImg.addEventListener('click', () => {
    openCardImgPopup(item);
  });
  return card;
};

initialCards.forEach((item) => {
  const cardElement = createCard(item)
  elementContainer.append(cardElement);
});
export { Card }