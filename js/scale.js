import { SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './constants';

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

let currentScale;

const scaleImage = () => {
  scaleInputElement.value = `${currentScale}%`;
  imageElement.style.transform = `scale(${currentScale * 0.01})`;
};

const onSmallerButtonClick = () => {
  currentScale = currentScale - SCALE_STEP < MIN_SCALE ? MIN_SCALE : currentScale - SCALE_STEP;
  scaleImage();
};

const onBiggerButtonClick = () => {
  currentScale = currentScale + SCALE_STEP > MAX_SCALE ? MAX_SCALE : currentScale + SCALE_STEP;
  scaleImage();
};

const resetScale = () => {
  currentScale = DEFAULT_SCALE;
  scaleImage();
};

resetScale();

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export { resetScale };

