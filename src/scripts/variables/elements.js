const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const buttonNewProfil = profile.querySelector('.profile__submit-btn');
const buttonNewMesto = profile.querySelector('.profile__button');
const buttonAvatar = profile.querySelector('.profile__avatar');

const buttonChangeAvatar = profile.querySelector('.profile__avatar-button');

const popupProfilForm = document.forms.popupProfilForm;
const nameInpute = popupProfilForm.elements.nameInput;
const jobInpute = popupProfilForm.elements.jobInput;
const popupFormNewMesto = document.forms.popupFormNewMesto;
const popupFormAvatar = document.forms.popupFormAvatar;

export { profile, buttonNewProfil, buttonNewMesto, popupProfilForm, nameInpute, jobInpute, popupFormNewMesto, buttonChangeAvatar, popupFormAvatar, buttonAvatar}