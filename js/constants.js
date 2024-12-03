export const COMMENTS_STEP = 5;
export const MAX_HASHTAGS = 5;
export const SPACE = /\s+/g;
export const HASHTAG_FORMULA = /^#[A-Za-zА-Яа-яё0-9]{1,19}$/;
export const MAX_COMMENT_LENGTH = 140;
export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = MAX_SCALE;
export const ACTIVE_CLASS = 'img-filters__button--active';
export const PICTURES_COUNT = 10;
export const DELAY = 500;
export const ERROR_SHOW_TIME = 5000;
export const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',

  DISCUSSED: 'filter-discussed',
};

export const ButtonCaption = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляется'
};

export const GET_DATA = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
export const POST_DATA = 'https://32.javascript.htmlacademy.pro/kekstagram';

export const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
