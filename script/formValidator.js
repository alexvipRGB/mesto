const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  activeButtonClass: 'popup__save_valid',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__name_type-error',
  errorClass: 'popup__name-error_visible'
}

class FormValidator {
  // Первый - объект с классами для валидации, второй - объект для валидации
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
  }

  // Публичный метод, который включает валидацию форм
  enableValidation() {
    this.setEventListeners(this._formElement, this._validationConfig);
  };

  // Метод показа ошибок валидации
  _showInputError(_formElement, inputElement, _validationConfig) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(this._validationConfig.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._validationConfig.inputErrorClass);
  }

  // Метод скрытия ошибок валидации
  _hideInputError(_formElement, inputElement, _validationConfig) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
  }

  // Метод проверки валидации форм
  _checkInputValidity(_formElement, inputElement, _validationConfig) {
    if (inputElement.validity.valid) {
      this._hideInputError(this._formElement, inputElement, this._validationConfig);
    } else {
      this._showInputError(this._formElement, inputElement, this._validationConfig);
    }
  }

  //Проверка Строк формы input
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (buttonElement != null) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.remove(this._validationConfig.activeButtonClass);
        buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.add(this._validationConfig.activeButtonClass);
        buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }
  //Повторная проверка
  setButtonState() {
    //const formElement = popup.querySelector(this._validationConfig.formSelector);
    const inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, this._validationConfig);
  }
  //Повторная проверка строки
  setErrorState() {
    //this._formElement.querySelector(this._validationConfig.formSelector);
    const inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    inputList.forEach((inputElement) => {
      this._checkInputValidity(this._formElement, inputElement, this._validationConfig);
    });
  }

  // Метод проверки всех input
  setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, this._validationConfig);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement, this._validationConfig);
        this._toggleButtonState(inputList, buttonElement, this._validationConfig);
      })
    })
  };

}
export { FormValidator, validationConfig }