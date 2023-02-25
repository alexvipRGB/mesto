import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, submitHandler) {
    super(selector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = [... this._form.querySelectorAll('.popup__name')]
    this._submitButton = this._form.querySelector('.popup__save');
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value
    })
    return values;
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();

      this._submitHandler(this._getInputValues(), this._submitButton);
    })
  };
}