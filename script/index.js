const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
// Находим форму в DOM
const popupForm = document.getElementById('popupForm');
// Находим поля формы в DOM
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput'); // Воспользуйтесь инструментом .querySelector()
const buttonProf = document.getElementById('buttonProf');
const nametext = document.querySelector('.profile__title');
const job = document.querySelector('.profile__paragrah');

function openPopup() {
    nameInput.value = nametext.textContent;
    jobInput.value = job.textContent;
    popup.classList.add('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nametext.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
    job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
    closePopup();
}

function closePopup() {
    popup.classList.remove('popup_opened');

}

buttonProf.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);