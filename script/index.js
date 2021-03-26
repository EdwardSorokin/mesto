let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close');
let popupOverlay = document.querySelector('.popup__overlay');
let savePopup = document.querySelector('.popup__form-save');
let formElement = document.querySelector('.popup__form');
let profileName = document.querySelector('.info__text-title');
let profileText = document.querySelector('.info__text-subtitle');
let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup();
}

openPopupBtn.addEventListener('click', function (event) { openPopup(); });
closePopupBtn.addEventListener('click', function (event) { closePopup(); });
popupOverlay.addEventListener('click', function (event) { closePopup(); });
formElement.addEventListener('submit', formSubmitHandler);



