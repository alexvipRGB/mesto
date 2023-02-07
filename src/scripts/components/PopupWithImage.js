import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector, { name, link }){
    super(selector);
    this._title = name;
    this._url = link;
  }

  openPopup() {
    const imagePopupImg = this._popup.querySelector('.popup__image');
    const imagePopupTitle = this._popup.querySelector('.popup__name-image');

    imagePopupTitle.textContent = this._title;
    imagePopupImg.src = this._url;
    imagePopupImg.alt = this._title;

    super.openPopup();
  }
}