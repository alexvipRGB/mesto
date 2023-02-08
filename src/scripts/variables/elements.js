const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const buttonNewProfil = profile.querySelector('.profile__submit-btn');
const buttonNewMesto = profile.querySelector('.profile__button');

const popupProfilForm = document.forms.popupProfilForm;
const nameInput = popupProfilForm.elements.nameInput
const jobInput = popupProfilForm.elements.jobInput
const popupFormNewMesto = document.forms.popupFormNewMesto;

export { profile, buttonNewProfil, buttonNewMesto, popupProfilForm, nameInput, jobInput, popupFormNewMesto }