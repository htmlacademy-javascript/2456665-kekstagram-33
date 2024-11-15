const formUploadElement = document.querySelector('.img-upload__form');
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags');

const MAX_HASHTAGS = 5;
const SPACE = /\s+/g;
const HASHTAG_FORMULA = /^#[A-Za-zА-Яа-яё0-9]{1,19}$/;

const pristine = new Pristine(formUploadElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
});

const getHashtags = (text) => text.replaceAll(SPACE, ' ').trim().split(' ');

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


export const isValidate = () => pristine.validate();
export const reset = () => pristine.reset();
