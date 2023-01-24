import { FormValidator, validationConfig } from '../script/formValidator.js';
import { Card } from '../script/card.js';

const popupProfilForm = document.querySelector('.popup__form_PopupProfil');
const popupFormNewMesto = document.querySelector('.popup__form_PopupFormNewMesto');
const nameInput = document.querySelector('.popup__name_profile');
const jobInput = document.querySelector('.popup__name_job');
const buttonNewProfil = document.querySelector('.profile__submit-btn');
const inputTextNewMesto = document.querySelector('.popup__name_text');
const inputImgNewMesto = document.querySelector('.popup__name_img');
const buttonNewMesto = document.querySelector('.profile__button');
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameProfil = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragrah');
const elementContainer = document.querySelector('.elements');
const popupProfile = document.getElementById('popupProfile');
const popupNewMesto = document.getElementById('popupNewMesto');

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByKey); 
}

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByKey); 
}

function closeByKey(evt) {
  if (evt.key === 'Escape') {
    const modalWindow = document.querySelector('.popup_opened');
    closePopup(modalWindow);
  }
  if (evt.key === 'Enter') {
    const modalWindow = document.querySelector('.popup_opened');
    closePopup(modalWindow);
  }
}

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
  popup.addEventListener("mousedown", (e) => {
    if (!e.target.closest(".popup *")) {
        closePopup(popup);
    }
})
}) 

function openPropfilePopup() {
  nameInput.value = nameProfil.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
  validProfilForm.setErrorState();
  validProfilForm.setButtonState();
}

function openNewMestoPopup() {
  openPopup(popupNewMesto);
  validFormNewMesto.setButtonState();
  validProfilForm.setErrorState();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfil.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
  profileJob.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup(popupProfile);
}

const addCard = (event) => {
  event.preventDefault();
  const addCard = new Card(inputTextNewMesto.value, inputImgNewMesto.value);
  elementContainer.prepend(addCard.enableCard(inputTextNewMesto.value, inputImgNewMesto.value));
  closePopup(popupNewMesto);
  inputImgNewMesto.value = '';
  inputTextNewMesto.value = '';
};

popupFormNewMesto.addEventListener('submit', addCard);
buttonNewMesto.addEventListener('click', openNewMestoPopup);
buttonNewProfil.addEventListener('click', openPropfilePopup);
popupProfilForm.addEventListener('submit', handleProfileFormSubmit);

const validProfilForm = new FormValidator(validationConfig, popupProfilForm);
validProfilForm.enableValidation();

const validFormNewMesto = new FormValidator(validationConfig, popupFormNewMesto);
validFormNewMesto.enableValidation();

const enableCard = new Card();
enableCard.enableCard();