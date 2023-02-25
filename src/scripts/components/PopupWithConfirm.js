import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitHandler = submitHandler;
    this._submitForm = this._submitForm.bind(this);
    this._submitButton = this._form.querySelector('.popup__save');
  }

  open(card, cardID) {
    super.openPopup();
    this._card = card;
    this._cardID = cardID;
  }
  _submitForm(event) {
    event.preventDefault();
    this._submitHandler(this._card, this._cardID, this._submitButton);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }
}