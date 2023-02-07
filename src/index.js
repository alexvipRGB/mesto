import './index.css';

import { initialCards, validationConfig, popupsConfig } from "./scripts/variables/constants.js";
import { Card } from "./scripts/components/Card.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import { buttonNewProfil, buttonNewMesto, popupProfilForm, nameInput, jobInput, popupFormNewMesto
} from "./scripts/variables/elements.js";
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import UserInfo from './scripts/components/UserInfo.js';

const classPropfilePopup = new PopupWithForm(popupsConfig.popupProfileSelector, handleProfileFormSubmit);
classPropfilePopup.setEventListeners();

const classNewMestoPopup = new PopupWithForm(popupsConfig.popupNewMestoSelector, elementCardSubmitHandler);
classNewMestoPopup.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__paragrah'
});


function openPropfilePopup() {
  validProfilForm.resetValidation();
  const {name, description} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = description;
  classPropfilePopup.openPopup();
  
}

function openNewMestoPopup() {
  validFormNewMesto.resetValidation();
  classNewMestoPopup.openPopup();
}

function handleProfileFormSubmit(value) {
  userInfo.setUserInfo(value.nameInput, value.jobInput)
  classPropfilePopup.closePopup();
}

function openImagePopup(name, link) {
  const classImagePopup = new PopupWithImage(popupsConfig.imagePopupSelector, { name, link });
  classImagePopup.setEventListeners();
  classImagePopup.openPopup();
}

function elementCardSubmitHandler(value) {
  const newUserCard = {
    name: value.nameNewMesto,
    link: value.linkNewMesto
  }

  const userCard = new Section({items: newUserCard, renderer: createCard}, '.elements')
  userCard.renderItem(userCard)

  validFormNewMesto.resetValidation()
  classNewMestoPopup.closePopup();
}

function createCard (item, className) {
  const card = new Card(item, '#elements', openImagePopup);
  const cardElement = card.generateCard();
  className.addItem(cardElement);
};

const cardList = new Section({ items: initialCards, renderer: createCard}, '.elements');
cardList.renderItems(cardList)

buttonNewMesto.addEventListener('click', () => openNewMestoPopup());

buttonNewProfil.addEventListener('click', () => openPropfilePopup());

const validProfilForm = new FormValidator(validationConfig, popupProfilForm);
validProfilForm.enableValidation();

const validFormNewMesto = new FormValidator(validationConfig, popupFormNewMesto);
validFormNewMesto.enableValidation();