import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector){
    super(selector);
    this._imagePopupImg = this._popup.querySelector('.popup__image');
    this._imagePopupTitle = this._popup.querySelector('.popup__name-image');
  }

  openPopup(name, link) {
    
    this._imagePopupTitle.textContent = name;
    this._imagePopupImg.src = link;
    this._imagePopupImg.alt = name;

    super.openPopup();
  }
}