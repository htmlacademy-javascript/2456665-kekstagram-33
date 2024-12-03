import { EFFECTS } from './constants.js';

const DEFAULT_EFFECT = EFFECTS[0];

const sliderElement = document.querySelector('.effect-level__slider');
const effectsElement = document.querySelector('.effects__list');
const imageElement = document.querySelector('.img-upload__preview img');
const valueElement = document.querySelector('.effect-level__value');
const effectLevelElement = document.querySelector('.img-upload__effect-level');

const removeSlider = () => {
  effectLevelElement.classList.add('hidden');
};

const addSlider = () => {
  effectLevelElement.classList.remove('hidden');
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const renderImage = ({ style, unit }, value) => {
  imageElement.style.filter = `${style}(${value}${unit})`;
};

sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  const currentEffect = document.querySelector('.effects__radio:checked').value;
  valueElement.value = value;
  renderImage(EFFECTS.find((item) => item.name === currentEffect), value);
});

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};

effectsElement.addEventListener('change', ({ target }) => {
  updateSlider(EFFECTS.find((item) => item.name === target.value));
  if(DEFAULT_EFFECT.name === target.value){
    imageElement.style.filter = '';
    removeSlider();
  } else {
    addSlider();
  }
}
);

export const reset = () => {
  imageElement.style.filter = '';
  removeSlider();
};
reset();
