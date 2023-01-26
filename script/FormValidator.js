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
    this.setEventListeners();
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
  _hasInvalidInput(_inputList) {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement, this._validationConfig)
    });

  }

  _toggleButtonState() {
    if (this._buttonElement != null) {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.remove(this._validationConfig.activeButtonClass);
        this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.add(this._validationConfig.activeButtonClass);
        this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  }

  // Метод проверки всех input
  setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement, this._validationConfig);
        this._toggleButtonState();
      })
    })
  };

}
export { FormValidator, validationConfig }