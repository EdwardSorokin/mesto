let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close');
let PopupOverlay = document.querySelector('.popup__overlay');
let savePopup = document.querySelector('.popup__form-save');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function (event) {
    openPopup();
});

closePopupBtn.addEventListener('click', function (event) { closePopup(); });
PopupOverlay.addEventListener('click', function (event) { closePopup(); });
savePopup.addEventListener('click', function (event) { closePopup(); });

let formElement = document.querySelector('.popup__form');
let ProfileName = document.querySelector('.info__text-title');
let ProfileText = document.querySelector('.info__text-subtitle');
let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");

function formSubmitHandler(evt) {
    evt.preventDefault();

    ProfileName.textContent = nameInput.value;
    ProfileText.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);



