import { isValidate, reset as resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { reset as resetFilter } from './effect.js';
import { sendData } from './api.js';
import { showPopup } from './popup.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const formUploadElement = document.querySelector('.img-upload__form');
const overlayElement = formUploadElement.querySelector('.img-upload__overlay');
const fileFieldElement = formUploadElement.querySelector('#upload-file');
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags');
const commentFieldElement = formUploadElement.querySelector('.text__description');
const cancelButtonElement = formUploadElement.querySelector('#upload-cancel');
const submitButtonElemtnt = formUploadElement.querySelector('.img-upload__submit');

const canModalBeClosed = () =>
  !(document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement);

const showModal = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setEscapeControl(hideModal, canModalBeClosed);
};

fileFieldElement.addEventListener('change', () => {
  showModal();
});

function hideModal() {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formUploadElement.reset();
  resetValidation();
  resetScale();
  resetFilter();
}

cancelButtonElement.addEventListener('click', () => {
  hideModal();
  removeEscapeControl();
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
        removeEscapeControl();
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
