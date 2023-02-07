class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _createCard() {
    return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
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
    _image.alt = `фото: ${this._title}`;
    return this._card;
  }
}

export { Card }