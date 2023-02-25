export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(card) {
    this._container.prepend(card);
  }

  renderItem(card, userID) {
    this._renderer(card, userID);
  }

  renderItems(initialCards, userID) {
    initialCards.forEach((card) => {
      this._renderer(card, userID);
    });
  }
}