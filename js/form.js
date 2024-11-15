const formUploadElement = document.querySelector('.img-upload__form'); // форма загрузки изображения
const overlayElement = formUploadElement.querySelector('.img-upload__overlay'); // форма редак. изобр.
const fileFieldElement = formUploadElement.querySelector('#upload-file');//изноч. сост. формы для изобр.
const hashtagFieldElement = formUploadElement.querySelector('.text__hashtags'); // поле для ввода хэштег
const commentFieldElement = formUploadElement.querySelector('.text__description'); //поле для комента
const cancelButtonElement = formUploadElement.querySelector('#upload-cancel');//кнопка закрытия формы редакт.

const MIN_HASHTAG_LENGTH = 2; // минимальная длина хештега
const MAX_HASHTAG_LENGTH = 20; //минимальная длина хештега

//------ открытие форму редактирования изображения -------//
const showModel = () => { // функция  показатьМодель;
  overlayElement.classList.remove('hidden');// удаляем класс hidden у элемента .img-upload__overlay
  document.body.classList.add('modal-open');// тегу body задаем класс modal-open - убираем скролл
  document.addEventListener('keydown', onEscKeyDown);// добавляем обработчик нажатия клавиши Esc
};

fileFieldElement.addEventListener('change', () => { //вешаем обр.соб. на изночльное состояния форьы для загрузки
  showModel(); // запуск фуекция показать форму редактирования;
});


//------ Зккрытие формы редактирования изображения -------//
const hideModal = () => {
  overlayElement.classList.add('hidden'); // добавляем класс hidden у элемента .img-upload__overlay
  document.body.classList.remove('modal-open');// у тега body удаляем класс modal-open
  document.removeEventListener('keydown', onEscKeyDown);// удаляем обработчик отслеживания нажатия Esc
  formUploadElement.reset();// сбросим всю форму .img-upload__form с помощью метода .reset()
};

const isTextFieldFocused = () => //
  document.activeElement === hashtagFieldElement || // курсор в поле хештега(фокус)
  document.activeElement === commentFieldElement; // курсор в поле коммита(фокус)

function onEscKeyDown(evt) { // функция приНажатииКлавишиEsc
  if (evt.key === 'Escape' && !isTextFieldFocused()) { //если Esc или фокус не(!) в полях хешт. и комм.
    evt.preventDefault(); // отменяется действие по умолчанию
    hideModal(); // запускается функция приНажатииКлавишиEsc
  }
}

cancelButtonElement.addEventListener('click', () => {//вешаем обр.соб.на изночльное состояния форьы для загрузки
  hideModal(); // запуск функции закрыть форму редактирования;
});


// --------------- ВАЛИДАЦИЯ ---------------------- //

const pristine = new Pristine(formUploadElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
});


const validateNickname = (value) => value.length >= MIN_HASHTAG_LENGTH && value.length <= MAX_HASHTAG_LENGTH; // хештег от 2 до 20 символов

pristine.addValidator(hashtagFieldElement, validateNickname, 'Неправильно заполнен хештег');//вызываем метод с аргумкнтами

formUploadElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
