class Card {
  constructor(card, cardSelectors, handleCardClick, openDeletePopup, clickLike, userID) {
    this._title = card.name;
    this._url = card.link;
    this._likesArr = card.likes;
    this._likes = card.likes.length;
    this._id = card._id;
    this._ownerID = card.owner._id;
    this._cardSelectors = cardSelectors;
    this._openPopup = handleCardClick;
    this._openDeletePopup = openDeletePopup;
    this._userID = userID;
    this._clickLike = clickLike;
  }

  _createCard(cardSelector) {
    return document.querySelector(cardSelector).content.querySelector('.element').cloneNode(true);
  }
  _changeLike() {
    this._elementLike.classList.toggle('element__like_active');
    this._clickLike(this, this._id, this._isLiked);
    this._isLiked = !this._isLiked;
  }

  updateLikes(count) {
    this._elementLikeCounter.textContent = count;
  }

  _deleteCard() {
    this._openDeletePopup(this._element, this._id)
  }

  _openImagePopup() {
    this._openPopup(this._title, this._url)
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => this._changeLike());
    if (this._isOwner) {
      this._elementDelete.addEventListener('click', () => this._deleteCard());
    }
    this._photoElement.addEventListener('click', () => this._openImagePopup());
  }

  generateCard() {
    this._isLiked = this._likesArr.some((like) => {
      return like._id === this._userID
    });
    this._isOwner = this._ownerID === this._userID;

    if (this._isOwner) {
      this._cardSelector = this._cardSelectors.withElementes
    } else {
      this._cardSelector = this._cardSelectors.withOutElementes
    }

    this._element = this._createCard(this._cardSelector);
    this._photoElement = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');

    if (this._isOwner) {
      this._elementDelete = this._element.querySelector('.element__trash')
    }

    if (this._isLiked) {
      this._elementLike.classList.add('element__like_active');
    }

    this._photoElement.src = this._url;
    this._photoElement.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    this._elementLikeCounter = this._element.querySelector('.element__like-count')
    this._elementLikeCounter.textContent = this._likes;
    this._setEventListeners();

    return this._element;
  }
}

export { Card }