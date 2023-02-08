import './index.css';

import { initialCards, validationConfig, popupsConfig } from "./scripts/variables/constants.js";
import { Card } from "./scripts/components/Card.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import {
  buttonNewProfil, buttonNewMesto, popupProfilForm, nameInput, jobInput, popupFormNewMesto
} from "./scripts/variables/elements.js";
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import UserInfo from './scripts/components/UserInfo.js';

const classPropfilePopup = new PopupWithForm(popupsConfig.popupProfileSelector, handleProfileFormSubmit);
classPropfilePopup.setEventListeners();

const classNewMestoPopup = new PopupWithForm(popupsConfig.popupNewMestoSelector, handleNewMestoSubmit);
classNewMestoPopup.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__paragrah'
});

function openPropfilePopup() {
  validProfilForm.resetValidation();
  const { name, description } = userInfo.getUserInfo();
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

function createCard(item) {
  const card = new Card(item, '#elements', openImagePopup);
  return card.generateCard();
};

const classImagePopup = new PopupWithImage(popupsConfig.imagePopupSelector);
classImagePopup.setEventListeners();

function openImagePopup(name, link) {
  classImagePopup.openPopup(name, link);
}

function handleNewMestoSubmit(item) {
  const newCardNewMesto = createCard({
    name: item.nameNewMesto,
    link: item.linkNewMesto
  });
  cardList.addItem(newCardNewMesto);
  validFormNewMesto.resetValidation();
  classNewMestoPopup.closePopup();
}

const cardList = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, ".elements")
cardList.renderItems(cardList);

buttonNewMesto.addEventListener('click', () => openNewMestoPopup());

buttonNewProfil.addEventListener('click', () => openPropfilePopup());

const validProfilForm = new FormValidator(validationConfig, popupProfilForm);
validProfilForm.enableValidation();

const validFormNewMesto = new FormValidator(validationConfig, popupFormNewMesto);
validFormNewMesto.enableValidation();