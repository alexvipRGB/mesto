export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.closePopup()
    }
  }

  _handleMouseClose = (event) => {
    if (event.target.classList.contains('popup_opened')) {
      this.closePopup()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mouseup', this._handleMouseClose);
    this._popup.querySelector('.popup__close').addEventListener('click', () => {this.closePopup()});
   }
}  