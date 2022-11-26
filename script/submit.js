// Находим форму в DOM
const formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__name-profile');
const jobInput = formElement.querySelector('.popup__job-profile'); // Воспользуйтесь инструментом .querySelector()

const Name = document.querySelector('.profile__title');
const Job = document.querySelector('.profile__paragrah');

function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInput.value;
    jobInput.value; // Получите значение полей jobInput и nameInput из свойства value

    Name.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
    Job.textContent = jobInput.value; // Вставьте новые значения с помощью textContent
}
document.querySelector('.popup__save-button').addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.defaultPrevented) {
        closePopup();
    }
})

document.getElementById('submit').addEventListener('click', handleFormSubmit);