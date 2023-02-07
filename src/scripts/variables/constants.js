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

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__save',
    activeButtonClass: 'popup__save_valid',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__name_type-error',
    errorClass: 'popup__name-error_visible'
}

const popupsConfig = {
    popupProfileSelector: '.popup-profile',
    popupNewMestoSelector: '.popup-newmesto',
    imagePopupSelector: '.popup-img',
}

export { initialCards, validationConfig, popupsConfig }