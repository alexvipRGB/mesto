const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const likeButtons = document.querySelectorAll('.element__like');
// Находим форму в DOM
const popupForm = document.getElementById('popupForm');
// Находим поля формы в DOM
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput'); // Воспользуйтесь инструментом .querySelector()
var button = document.getElementById('button');
const nametext = document.querySelector('.profile__title');
const job = document.querySelector('.profile__paragrah');

function openPopup() {
    nameInput.value = nametext.textContent;
    jobInput.value = job.textContent;
    popup.classList.add('popup_opened');
    console.log(nametext.textContent);
    console.log(nameInput.value);

}

function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nametext.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
    job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
    console.log(nametext.textContent);
    console.log(nameInput.value);
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');

}

function like(clickLike) {
    clickLike.classList.toggle('element__like_active');
}
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', () => like(likeButtons[i]));
}

button.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);