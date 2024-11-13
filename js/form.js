const formUpload = document.querySelector('.img-upload__form'); // форма загрузки изображения
const overlay = document.querySelector('.img-upload__overlay'); // форма редактирования изображения
const fileField = document.querySelector('#upload-file');//изночльное состояния форьы для загрузки изобр.
const cancelButton = document.querySelector('#upload-cancel');//кнопка для закрытия формы редактирования

//------ открытие форму редактирования изображения -------//
const showModel = () => { // функция  показатьМодель;
  overlay.classList.remove('hidden');// удаляем класс hidden у элемента .img-upload__overlay
  document.body.classList.add('modal-open');// тегу body задаем класс modal-open - убираем скролл
  document.addEventListener('keydown', onEscKeyDown);// добавляем обработчик нажатия клавиши Esc
};

fileField.addEventListener('change', () => { //вешаем обр.соб. на изночльное состояния форьы для загрузки
  showModel(); // запуск фуекция показать форму редактирования;
});


//------ Зккрытие формы редактирования изображения -------//
const hideModal = () => {
  overlay.classList.add('hidden'); // добавляем класс hidden у элемента .img-upload__overlay
  document.body.classList.remove('modal-open');// у тега body удаляем класс modal-open
  document.removeEventListener('keydown', onEscKeyDown);// удаляем обработчик отслеживания нажатия Esc
  formUpload.reset();// сбросим всю форму .img-upload__form с помощью метода .reset()
};

function onEscKeyDown(evt) { // функция приНажатииКлавишиEsc
  if (evt.key === 'Escape') { // если клавиша Esc
    evt.preventDefault(); // отменяется действие по умолчанию
    hideModal(); // запускается функция приНажатииКлавишиEsc
  }
}

cancelButton.addEventListener('click', () => {//вешаем обр.соб.на изночльное состояния форьы для загрузки
  hideModal(); // запуск фуекция закрыть форму редактирования;
});


/*
const pristine = new Pristine(formUpload);

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
*/

