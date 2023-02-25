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
    popupAvatarSelector: '.popup_change_avatar',
    confirmPopupSelector: '.popup_card-delete',
}

export { validationConfig, popupsConfig }