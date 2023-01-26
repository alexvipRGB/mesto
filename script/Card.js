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
    this._cardLike = this._card.querySelector('.element__like')
    this._cardLike.addEventListener('click', () => {
      this._cardLike.classList.toggle('element__like_active');
    });
    this._card.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._title, this._link)
    });;
  }
  
  generateCard() {
    this._card = this._createCard();
    this._setEventListeners();
    this._card.querySelector('.element__title').textContent = this._title;
    const _image = this._card.querySelector('.element__image');
    _image.src = this._link;
    _image.alt = `фото: ${ this._title }`;
    return this._card;
  }
}

export { Card, initialCards }