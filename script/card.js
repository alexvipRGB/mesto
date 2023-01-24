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
const popupOpenCard = document.getElementById('popupOpenCard');
const imgPopapCard = document.querySelector('.popup__image');
const nameCardsImg = document.querySelector('.popup__name-image');
const buttonClose = document.querySelector('.popup__close');

class Card {
  constructor(name, link) {
    this._link = link;
    this._title = name;
  }

  _createCard() {
    const card = document
      .querySelector('#elements')
      .content.querySelector('.element')
      .cloneNode(true);

    return card;
  }
  _setEventListeners() {
    this._card.querySelector('.element__trash').addEventListener('click', () => {
      this._card.remove();
    });
    const cardLike = this._card.querySelector('.element__like');
    cardLike.addEventListener('click', () => {
      cardLike.classList.toggle('element__like_active');
    });
    this._card.querySelector('.element__image').addEventListener('click', () => {
      this._openCardImgPopup();
    });
    buttonClose.addEventListener('click', () => {
      this._cardImgClosePopup();
      });
  }
  _cardImgClosePopup() {
    imgPopapCard.src = this._link;
    nameCardsImg.textContent = this._title;
    imgPopapCard.alt = this._title;
    popupOpenCard.classList.remove('popup_opened');
  }
  _openCardImgPopup() {
    imgPopapCard.src = this._link;
    nameCardsImg.textContent = this._title;
    imgPopapCard.alt = this._title;
    popupOpenCard.classList.add('popup_opened');
  }
  
  enableCard(name, link) {
    this._card = this._createCard(name, link);
    this._setEventListeners();
    this._card.querySelector('.element__title').textContent = this._title;
    this._card.querySelector('.element__image').src = this._link;
    const _image = this._card.querySelector('.element__image');
    _image.src = this._link;
    _image.alt = `фото: ${ this._title }`;
    return this._card;
  }
}
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.enableCard(item.name, item.link);

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});
export { Card }