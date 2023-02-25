export default class UserInfo {
  constructor({ name, description, avatar}) {
    this._name = document.querySelector(name);
    this._description = document.querySelector(description);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    }
  }

  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._description.textContent = about;
  }

  setUserAvatar({ avatar }) {
     this._avatar.src = avatar;
  }
}