const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');


const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = MAX_SCALE;

let currentScale;

const scaleImage = () => {
  scaleInput.value = `${currentScale}%`;
  image.style.transform = `scale(${currentScale * 0.01})`;
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

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };

