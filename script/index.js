const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];
const popup = document.querySelectorAll('.popup');
const popupProfilForm = document.querySelector('.popup__form_PopupFormNewMesto');
const popupFormNewMesto = document.querySelector('.popup__form_PopupFormNewMesto');
const nameInput = document.querySelector('.popup__name_profile');
const jobInput = document.querySelector('.popup__name_job');
const inputTextNewMesto = popupFormNewMesto.querySelector('.popup__name_text');
const inputImgNewMesto = popupFormNewMesto.querySelector('.popup__name_img');
const buttonSaveCardMesto = popupFormNewMesto.querySelector('.popup__save');
const buttonNewProfil = document.querySelector('.profile__submit-btn');
const buttonNewMesto = document.querySelector('.profile__button');
const buttonClose = document.querySelectorAll('.popup__close');
const nameProfil = document.querySelector('.profile__title');
const ProfileJob = document.querySelector('.profile__paragrah');
const elementContainer = document.querySelector('.elements');
const addcardscontent = document.querySelector('#elements').content;
const addcards = document.querySelector('#elements');
const nameElemCard = document.querySelector('.element__title');
const buttonOpenImg = document.querySelector('.element__image');
const imgPopapCard = document.querySelector('.popup__image');
const nameCardsImg = document.querySelector('.popup__name-image');
const popupOpenCard = document.getElementById('popupOpenCard');
const popupProfile = document.getElementById('popupProfile');
const popupNewMesto = document.getElementById('popupNewMesto');

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
}

popup.forEach((button) => {
  modalWindow = button;
  buttonClose.forEach((buttonClose) => {
    buttonClose.addEventListener("click", () => closePopup(button));
  });
});

function openPropfilePopup() {
  nameInput.value = nameProfil.textContent;
  jobInput.value = ProfileJob.textContent;
  const modalWindow = document.getElementById('popupProfile');
  openPopup(modalWindow);

}
function openNewMestoPopup() {
  inputTextNewMesto.value;
  inputImgNewMesto.value;
  const modalWindow = document.getElementById('popupNewMesto');
  openPopup(modalWindow);
}

function openCardImgPopup(taskItem) {
  if (taskItem != null) {
    imgPopapCard.src = taskItem.link;
    nameCardsImg.textContent = taskItem.name;
  } else {
    imgPopapCard.src = taskUrl;
    nameCardsImg.textContent = taskName;
  }
  const modalWindow = document.getElementById('popupOpenCard');
  openPopup(modalWindow);
}

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfil.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
  ProfileJob.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  const modalWindow = document.getElementById('popupProfile');
  closePopup(modalWindow);
}

const createCard = (taskItem) => {
  const card = addcards.content.querySelector('.element').cloneNode(true);
  if (taskItem != null) {
    taskName = taskItem.name;
    taskUrl = taskItem.link;
  } else {
    taskName = inputTextNewMesto.value;
    taskUrl = inputImgNewMesto.value;
  }
  card.querySelector('.element__title').textContent = taskName;
  const cardImgClik = card.querySelector('.element__image');
  cardImgClik.src = taskUrl;
  taskName.textContent = taskUrl.alt;
  card.querySelector('.element__trash').addEventListener('click', () => {
    card.remove();
  });
  const cardLike = card.querySelector('.element__like');
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('element__like_active');
  });
  cardImgClik.addEventListener('click', () => {
    openCardImgPopup(taskItem);
  });
  return card;
};

elementContainer.append(...initialCards.map(createCard));

const addCard = (event, taskItem) => {
  event.preventDefault();
  renderCard(taskItem);
  inputImgNewMesto.value = '';
  inputTextNewMesto.value = '';
  const modalWindow = document.getElementById('popupNewMesto');
  closePopup(modalWindow);
};

const renderCard = (taskItem) => {
  elementContainer.prepend(createCard(taskItem))
}

popupFormNewMesto.addEventListener('submit', addCard);
buttonNewMesto.addEventListener('click', openNewMestoPopup);
buttonNewProfil.addEventListener('click', openPropfilePopup);
popupProfilForm.addEventListener('submit', handleFormSubmit);