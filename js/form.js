import {isValidate, reset as resetValidation} from './validation.js';
import { resetScale } from './scale.js';
import { reset as resetFilter } from './filter.js';
import './filter.js';


const formUploadElement = document.querySelector('.img-upload__form');
const overlayElement = formUploadElement.querySelector('.img-upload__overlay');
const fileFieldElement = formUploadElement.querySelector('#upload-file');
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags');
const commentFieldElement = formUploadElement.querySelector('.text__description');
const cancelButtonElement = formUploadElement.querySelector('#upload-cancel');


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

formUploadElement.addEventListener('submit', (evt) => {

  if(!isValidate()){
    evt.preventDefault();
  }
});
