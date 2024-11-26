import {isValidate, reset as resetValidation} from './validation.js';
import { resetScale } from './scale.js';
import { reset as resetFilter } from './effect.js';
import { sendData } from './api.js';
import { showPopup } from './popup.js';

const formUploadElement = document.querySelector('.img-upload__form');
const overlayElement = formUploadElement.querySelector('.img-upload__overlay');
const fileFieldElement = formUploadElement.querySelector('#upload-file');
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags');
const commentFieldElement = formUploadElement.querySelector('.text__description');
const cancelButtonElement = formUploadElement.querySelector('#upload-cancel');
const submitButtonElemtnt = formUploadElement.querySelector('.img-upload__submit');

const showModel = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

fileFieldElement.addEventListener('change', () => {
  showModel();
});

const hideModal = () => {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  formUploadElement.reset();
  resetValidation();
  resetScale();
  resetFilter();
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

cancelButtonElement.addEventListener('click', () => {
  hideModal();
});

const ButtonCaption = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляется'
};

const blockSubmitButton = (isBlocked = true) => {
  submitButtonElemtnt.disabled = isBlocked;
  submitButtonElemtnt.textContent = isBlocked ? ButtonCaption.SENDING : ButtonCaption.IDLE;
};

formUploadElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValidate()) {
    blockSubmitButton();
    const data = new FormData(formUploadElement);
    sendData(data)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        hideModal();
        showPopup('success');

      })

      .catch(() => {
        showPopup('error');
      })

      .finally(() => {
        blockSubmitButton(false);
      });
  }
});
