const popupProfilForm = document.querySelector('.popup__form_PopupProfil');
const popupFormNewMesto = document.querySelector('.popup__form_PopupFormNewMesto');
const nameInput = document.querySelector('.popup__name_profile');
const jobInput = document.querySelector('.popup__name_job');
const buttonNewProfil = document.querySelector('.profile__submit-btn');
const inputTextNewMesto = document.querySelector('.popup__name_text');
const inputImgNewMesto = document.querySelector('.popup__name_img');
const buttonSaveCardMesto = popupFormNewMesto.querySelectorAll('.popup__save');
const buttonNewMesto = document.querySelector('.profile__button');
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameProfil = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragrah');
const elementContainer = document.querySelector('.elements');
const cardElement = document.querySelector('#elements').content;
const cardsElement = document.querySelector('#elements');
const nameElemCard = document.querySelector('.element__title');
const buttonOpenImg = document.querySelector('.element__image');
const imgPopapCard = document.querySelector('.popup__image');
const nameCardsImg = document.querySelector('.popup__name-image');
const popupOpenCard = document.getElementById('popupOpenCard');
const popupProfile = document.getElementById('popupProfile');
const popupNewMesto = document.getElementById('popupNewMesto');

const form = document.querySelector('.popup__form');
const nameProfilInput = document.querySelector('#nameInput');
const jobProfilInput = document.querySelector('#jobInput');
const nameNewMestoInput = document.querySelector('#nameNewMesto');
const linkNewMestoInput = document.querySelector('#linkNewMesto');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  activeButtonClass: 'popup__save_valid',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__name_type-error',
  errorClass: 'popup__name-error_visible'
};

const initialCards = [
  {
    name: "??????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "?????????????????????? ??????????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "??????????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "????????????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "???????????????????????? ??????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "????????????",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

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
  setButtonState(popupProfile);
  setErrorState(popupProfile);
}

function openNewMestoPopup() {
  openPopup(popupNewMesto);
  setButtonState(popupNewMesto);
}

function openCardImgPopup(infocards) {
  imgPopapCard.src = infocards.link;
  nameCardsImg.textContent = infocards.name;
  imgPopapCard.alt = infocards.name;
  openPopup(popupOpenCard);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // ?????? ?????????????? ???????????????? ?????????????????????? ???????????????? ??????????.
  nameProfil.textContent = nameInput.value;// ???????????????? ????????????????, ???????? ???????????? ???????? ?????????????????? ???????????????? ??????????
  profileJob.textContent = jobInput.value; // ???????????????? ?????????? ???????????????? ?? ?????????????? textContent
  closePopup(popupProfile);
}

const createCard = (infocards) => {
  const card = cardsElement.content.querySelector('.element').cloneNode(true);
  const cardName = card.querySelector('.element__title');
  const cardImg = card.querySelector('.element__image');
  cardName.textContent = infocards.name;
  cardImg.src = infocards.link;
  cardImg.alt = infocards.name;
  card.querySelector('.element__trash').addEventListener('click', () => {
    card.remove();
  });
  const cardLike = card.querySelector('.element__like');
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('element__like_active');
  });
  cardImg.addEventListener('click', () => {
    openCardImgPopup(infocards);
  });
  return card;
};

elementContainer.append(...initialCards.map(createCard));

const addCard = (event) => {
  event.preventDefault();
  elementContainer.prepend(createCard({name: inputTextNewMesto.value, link: inputImgNewMesto.value}));
  closePopup(popupNewMesto);
  inputImgNewMesto.value = '';
  inputTextNewMesto.value = '';
};

popupFormNewMesto.addEventListener('submit', addCard);
buttonNewMesto.addEventListener('click', openNewMestoPopup);
buttonNewProfil.addEventListener('click', openPropfilePopup);
popupProfilForm.addEventListener('submit', handleProfileFormSubmit);
enableValidation(validationConfig);