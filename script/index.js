import { FormValidator, validationConfig } from './FormValidator.js';
import { Card, initialCards } from './Card.js';

const popupProfilForm = document.querySelector('.popup__form_PopupProfil');
const popupFormNewMesto = document.querySelector('.popup__form_PopupFormNewMesto');
const nameInput = document.querySelector('.popup__name_profile');
const jobInput = document.querySelector('.popup__name_job');
const cardsElement = document.querySelector('#elements');
const buttonNewProfil = document.querySelector('.profile__submit-btn');
const inputTextNewMesto = document.querySelector('.popup__name_text');
const inputImgNewMesto = document.querySelector('.popup__name_img');
const buttonNewMesto = document.querySelector('.profile__button');
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameProfil = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragrah');
const elementContainer = document.querySelector('.elements');
const popupOpenCard = document.getElementById('popupOpenCard');
const imgPopapCard = document.querySelector('.popup__image');
const nameCardsImg = document.querySelector('.popup__name-image');
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
  validProfilForm.resetValidation();
}

function openNewMestoPopup() {
  openPopup(popupNewMesto);
  validFormNewMesto.resetValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfil.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
  profileJob.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup(popupProfile);
}

function handleCardClick(name, link) {
  imgPopapCard.src = link;
  nameCardsImg.textContent = name;
  imgPopapCard.alt = name;
  openPopup(popupOpenCard);
}

function createCard (item) {
  const card = new Card(item, cardsElement, handleCardClick);
  return card;
};

initialCards.forEach((item) => {
  const cardElement = createCard(item)
  elementContainer.append(cardElement.generateCard());
});

const addCard = (event) => {
  event.preventDefault();
  const addCard = new Card({name: inputTextNewMesto.value, link: inputImgNewMesto.value}, cardsElement, handleCardClick);
  elementContainer.prepend(addCard.generateCard({name: inputTextNewMesto.value, link: inputImgNewMesto.value}));
  closePopup(popupNewMesto);
  event.target.reset();
};

popupFormNewMesto.addEventListener('submit', addCard);
buttonNewMesto.addEventListener('click', openNewMestoPopup);
buttonNewProfil.addEventListener('click', openPropfilePopup);
popupProfilForm.addEventListener('submit', handleProfileFormSubmit);

const validProfilForm = new FormValidator(validationConfig, popupProfilForm);
validProfilForm.enableValidation();

const validFormNewMesto = new FormValidator(validationConfig, popupFormNewMesto);
validFormNewMesto.enableValidation();