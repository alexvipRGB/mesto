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
// Находим форму в DOM
const popupForm = document.getElementById('popupForm');
const popupFormup = document.getElementById('popupFormup');
// Находим поля формы в DOM
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const buttonProf = document.getElementById('buttonProf');
const nametext = document.querySelector('.profile__title');
const job = document.querySelector('.profile__paragrah');
const namelink = document.getElementById('namelink');
const link = document.getElementById('link');
const buttonAdd = document.getElementById('buttonAdd');
const elementContainer = document.querySelector('.elements');
const template = document.querySelector('#elements').content;
const inputText = popupFormup.querySelector('.popup__addImg_text');
const inputImg = popupFormup.querySelector('.popup__addImg_Img');
const button = popupFormup.querySelector('.popup__save');
const name = document.querySelector('.element__group');
const popupImg = document.querySelector('.popup_Img');
const nameElem = document.getElementById('nameElem');
const buttonImg = document.getElementById('buttonImg');
const imgpopup = document.getElementById('imgpopup');
const nameimg = document.getElementById('nameimg');

function getPopup(element) {
  let popupid = null;
  let popup = null;
  let buttonName = element.target.getAttribute('id');
  if (buttonName == "buttonProf") {
    popupid = "popup-r";
  }
  if (buttonName == "buttonAdd") {
    popupid = "popup-n";
  }
  if (buttonName == "buttonImg") {
    popupid = "popup-img";
  }
  if (popupid != null) {
    popup = document.getElementById(popupid);
  }
  return popup;
}

let elements = document.getElementsByClassName('popup__close');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', closePopup);
}

function getPopupClose(element) {
  let popupid = null;
  let popup = null;
  let buttonNameClose = element.target.getAttribute('name');
  if (buttonNameClose == "close-r") {
    popupid = "popup-r";
  }
  if (buttonNameClose == "close-n") {
    popupid = "popup-n";
  }
  if (buttonNameClose == "close-i") {
    popupid = "popup-img";
  }
  if (popupid != null) {
    popup = document.getElementById(popupid);
  }
  return popup;
}

function openPopup(element) {
  let popup = getPopup(element);
  if (popup != null) {
    nameInput.value = nametext.textContent;
    jobInput.value = job.textContent;
    namelink.value;
    link.value;
    popup.classList.add('popup_opened');
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nametext.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
  job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
  closePopup();
}

function closePopup(element) {
  let popup = getPopupClose(element);
  if (popup != null) {
    popup.classList.remove('popup_opened');
  }
}

const createTodo = (taskItem, { taskName, taskUrl }) => {
  const template = document.querySelector('#elements');
  if ((taskName != undefined) & (taskUrl != undefined)) {
    const taskName = taskItem.taskName;
    const taskUrl = taskItem.taskUrl;
  } else {
    taskName = taskItem.name;
    taskUrl = taskItem.link;
  }
  const task = template.content.querySelector('.element').cloneNode(true);
  task.querySelector('.element__title').textContent = taskName;
  task.querySelector('.element__image').src = taskUrl;
  task.querySelector('.element__trash').addEventListener('click', () => {
    task.remove();
  });
  task.querySelector('.element__like').addEventListener('click', () => {
    task.querySelector('.element__like').classList.toggle('element__like_active');
  });
  task.querySelector('.element__image').addEventListener('click', openimgPopup);
  function openimgPopup(createTodo = (taskItem, { taskName, taskUrl })) {
    let popup = document.getElementById('popup-img');
    let imgpopup = document.getElementById('imgpopup');
    let nameimg = document.getElementById('nameimg');
    nameimg.textContent = taskName;
    imgpopup.src = taskUrl;
    popup.classList.add('popup_opened');
  };
  return task;
};

elementContainer.append(...initialCards.map(createTodo));



const addTodo = (event) => {
  event.preventDefault();
  taskName = inputText.value;
  taskUrl = inputImg.value;
  taskItem = ({ taskName, taskUrl });
  renderTodo(taskItem, { taskUrl, taskName })
  inputImg.value = '';
  inputText.value = '';
};

const renderTodo = (taskItem, { taskUrl, taskName }) => {
  elementContainer.prepend(createTodo(taskItem, { taskUrl, taskName }))
}

popupFormup.addEventListener('submit', addTodo);
buttonAdd.addEventListener('click', openPopup);
buttonProf.addEventListener('click', openPopup);
popupForm.addEventListener('submit', handleFormSubmit);