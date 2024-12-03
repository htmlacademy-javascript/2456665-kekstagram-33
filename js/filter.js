import { ACTIVE_CLASS, PICTURES_COUNT, DELAY } from './constants';
import { getRandomArrayElement, debounce } from './util';
import { renderCards } from './picture.js';

const formElement = document.querySelector('.img-filters__form');
const filtersElement = document.querySelector('.img-filters');

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let currentFilter = '';
let pictures = [];

const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const filterPictures = {
  [Filter.DISCUSSED]: () => [...pictures].sort(discussedSort),
  [Filter.RANDOM]: () => [...pictures].sort(getRandomArrayElement).slice(0, PICTURES_COUNT),
  [Filter.DEFAULT]: () => [...pictures]
};

const turnFilterOn = (loadedPictures) => {
  filtersElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  currentFilter = Filter.DEFAULT;
  renderCards(filterPictures[currentFilter]());
};

const setActiveButton = (button) => {
  document.querySelector(`.${ACTIVE_CLASS}`).classList.remove(ACTIVE_CLASS);
  button.classList.add(ACTIVE_CLASS);
};

formElement.addEventListener('click', ({ target }) => {
  if (target.classList.contains('img-filters__button')) {
    currentFilter = target.id;
    setActiveButton(target);
  }
});

formElement.addEventListener('click', debounce(({ target }) => {
  if (target.classList.contains('img-filters__button')) {
    currentFilter = target.id;
    renderCards(filterPictures[currentFilter]());
  }
}, DELAY)
);

export { turnFilterOn };

