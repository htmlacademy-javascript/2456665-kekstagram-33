import { checkLengthString } from './util.js';
import { MAX_HASHTAGS, SPACE, HASHTAG_FORMULA, MAX_COMMENT_LENGTH } from './constants.js';

const formUploadElement = document.querySelector('.img-upload__form');
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags');
const commentFieldElement = formUploadElement.querySelector('.text__description');

const pristine = new Pristine(formUploadElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
});

const getHashtags = (text) => text.replaceAll(SPACE, ' ').trim().toLowerCase().split(' ');

const checkComment = (value) => checkLengthString(value, MAX_COMMENT_LENGTH);
const validateHashtag = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashtags(value);
  return hashs.every((item) => HASHTAG_FORMULA.test(item));
};

const checkCount = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashtags(value);
  return hashs.length <= MAX_HASHTAGS;
};

const checkUnique = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashtags(value);
  const uniqs = [...new Set(hashs)];
  return hashs.length === uniqs.length;
};

pristine.addValidator(
  hashtagFieldElement,
  validateHashtag,
  'Неправильно заполнен хештег'
);

pristine.addValidator(
  hashtagFieldElement,
  checkCount,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtagFieldElement,
  checkUnique,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  commentFieldElement,
  checkComment,
  `Длина комментария не должна превышать ${MAX_COMMENT_LENGTH}`
);

export const isValidate = () => pristine.validate();
export const reset = () => pristine.reset();
