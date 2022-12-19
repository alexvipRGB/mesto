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
const popupsList = document.querySelectorAll('.popup');
const popupProfilForm = document.querySelector('.popup__form_PopupProfil');
const popupFormNewMesto = document.querySelector('.popup__form_PopupFormNewMesto');
const nameInput = document.querySelector('.popup__name_profile');
const jobInput = document.querySelector('.popup__name_job');
const buttonNewProfil = document.querySelector('.profile__submit-btn');
const inputTextNewMesto = document.querySelector('.popup__name_text');
const inputImgNewMesto = document.querySelector('.popup__name_img');
const buttonSaveCardMesto = popupFormNewMesto.querySelector('.popup__save');
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

function closePopup(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
}

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
}) 

function openPropfilePopup() {
  nameInput.value = nameProfil.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}

function openNewMestoPopup() {
  openPopup(popupNewMesto);
}

function openCardImgPopup(infocards) {
  imgPopapCard.src = infocards.link;
  nameCardsImg.textContent = infocards.name;
  imgPopapCard.alt = infocards.name;
  openPopup(popupOpenCard);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfil.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
  profileJob.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
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
  //const name = inputTextNewMesto.value;
  //const link = inputImgNewMesto.value;
  renderCard({inputTextNewMesto.value, inputImgNewMesto.value});
  inputImgNewMesto.value = '';
  inputTextNewMesto.value = '';
  closePopup(popupNewMesto);
};

const renderCard = ({ inputTextNewMesto, inputImgNewMesto }) => {
  elementContainer.prepend(createCard({ inputTextNewMesto, inputImgNewMesto }))
}

popupFormNewMesto.addEventListener('submit', addCard);
buttonNewMesto.addEventListener('click', openNewMestoPopup);
buttonNewProfil.addEventListener('click', openPropfilePopup);
popupProfilForm.addEventListener('submit', handleProfileFormSubmit);