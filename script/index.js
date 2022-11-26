const headerButton = document.querySelector('.profile__submit-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

headerButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


function openPopup(event) {
    event.preventDefault();
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popup.addEventListener('click', function (event) {
    if (!event.defaultPrevented) {
        closePopup();
    }
})
document.querySelector('.popup__container').addEventListener('click', function (event) {
    event.preventDefault();
})