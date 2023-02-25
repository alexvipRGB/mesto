import './index.css';

import { validationConfig, popupsConfig } from "./scripts/variables/constants.js";
import { Card } from "./scripts/components/Card.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import {
  buttonNewProfil, buttonNewMesto, popupProfilForm, nameInpute, jobInpute, popupFormNewMesto, buttonChangeAvatar, popupFormAvatar, buttonAvatar
} from "./scripts/variables/elements.js";
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import UserInfo from './scripts/components/UserInfo.js';
import Api from './scripts/components/Api.js';
import PopupWithConfirm from './scripts/components/PopupWithConfirm.js';
import {changeButtonText} from "./scripts/variables/untils.js";

const classPropfilePopup = new PopupWithForm(popupsConfig.popupProfileSelector, handleProfileFormSubmit);
const classNewMestoPopup = new PopupWithForm(popupsConfig.popupNewMestoSelector, handleNewMestoSubmit);
const avatarPopup = new PopupWithForm(popupsConfig.popupAvatarSelector, handlerAvatarSubmit);
const confirmPopup = new PopupWithConfirm(popupsConfig.confirmPopupSelector, confirmPopupHandler);
const imagePopup = new PopupWithImage(popupsConfig.imagePopupSelector);


function confirmPopupHandler(element, elementID, submitButton) {
  const originalButtonText = submitButton.textContent;
  changeButtonText(submitButton, 'Сохранение...');
  api.removeCard(elementID)
    .then(() => {
      element.remove();
      this.closePopup();
    })
    .catch((e) => console.log('Delete Error: ', e))
    .finally(() => changeButtonText(submitButton, originalButtonText));
}

const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__paragrah',
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '27b88e4b-c8b2-464e-a513-428188431cdc',
    'Content-Type': 'application/json',
  },
});

function handlerAvatarSubmit(value, submitButton) {
  const originalButtonText = submitButton.textContent;
  changeButtonText(submitButton, 'Сохранение...');
  api.setAvatar(value.inputAvatarUrl)
    .then((res) => {
      buttonAvatar.src = res.avatar;

      validFormAvatar.resetValidation();
      avatarPopup.closePopup();
    })
    .catch((e) => console.log(e))
    .finally(() => changeButtonText(submitButton, originalButtonText));
}

function openConfirmDelete(element, elementID) {
  confirmPopup.open(element, elementID);
  confirmPopup.setEventListeners();
}

function openPropfilePopup() {
  validProfilForm.resetValidation();
  const { name, description } = userInfo.getUserInfo();
  nameInpute.value = name;
  jobInpute.value = description;
  classPropfilePopup.setEventListeners();
  classPropfilePopup.openPopup();

}

function openNewMestoPopup() {
  validFormNewMesto.resetValidation();
  classNewMestoPopup.setEventListeners();
  classNewMestoPopup.openPopup();
}

function openImagePopup(name, link) {
  imagePopup.openPopup(name, link);
  imagePopup.setEventListeners();
}

function handleProfileFormSubmit(value, submitButton) {
  const originalButtonText = submitButton.textContent;
  changeButtonText(submitButton, 'Сохранение...');

  api.setUserInfo(value.nameInput, value.jobInput)
    .then((user) => {
      userInfo.setUserInfo(user)

      classPropfilePopup.closePopup();
    })
    .catch((e) => console.log(e))
    .finally(() => changeButtonText(submitButton, originalButtonText));
}

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((res) => {
    const initialCards = res[0];
    const user = res[1];

    buttonAvatar.src = user.avatar;
    userInfo.setUserInfo(user)
    userInfo.id = user._id

    cardList.renderItems(initialCards.reverse(), userInfo.id);
  })
  .catch((e) => console.log(e));

function createCard(item, userID) {
  const card = new Card(
    item,
    { withElementes: '#elementes', withOutElementes: '#elements' },
    openImagePopup,
    openConfirmDelete,
    handleLikeClick,
    userID
  );
  return card.generateCard();
};


function handleNewMestoSubmit(item, submitButton) {
  const originalButtonText = submitButton.textContent;
  changeButtonText(submitButton, 'Сохранение...');

  const newCardNewMesto = {
    name: item.nameNewMesto,
    link: item.linkNewMesto
  };
  api.addCard(newCardNewMesto).then((res) => {
    cardList.renderItem(res, userInfo.id);

    validFormNewMesto.resetValidation();
    classNewMestoPopup.closePopup();
  })
    .catch((e) => console.log(e))
    .finally(() => changeButtonText(submitButton, originalButtonText));
}

const cardList = new Section((item, userID) => {
  const cardElement = createCard(item, userID);
  cardList.addItem(cardElement);
}, ".elements");

function handleLikeClick(element, elementId, isLiked) {
  if (isLiked) {
    api.removeLike(elementId)
      .then((updatedCard) => {
        element.updateLikes(updatedCard.likes.length);
      })
      .catch((err) => console.log('Remove Like Error: ', err));
  } else {
    api.addLike(elementId)
      .then((updatedCard) => {
        element.updateLikes(updatedCard.likes.length);
      })
      .catch((err) => console.log('Add Like Error: ', err));
  }
}

buttonNewMesto.addEventListener('click', () => openNewMestoPopup());

buttonNewProfil.addEventListener('click', () => openPropfilePopup());

buttonChangeAvatar.addEventListener('click', () => {
  validFormAvatar.resetValidation();
  validFormAvatar.setEventListeners();
  avatarPopup.setEventListeners();
  avatarPopup.openPopup();
});

const validProfilForm = new FormValidator(validationConfig, popupProfilForm);
validProfilForm.enableValidation();

const validFormNewMesto = new FormValidator(validationConfig, popupFormNewMesto);
validFormNewMesto.enableValidation();

const validFormAvatar = new FormValidator(validationConfig, popupFormAvatar);
validFormAvatar.enableValidation();