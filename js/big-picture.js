const bigPicture = document.querySelector('.big-picture'); //блок полноэкранного показа изображения
const cancelButton = document.querySelector('.big-picture__cancel'); //кнопка выхода из полноэк. пок.


const showBigPicture = () => { // открываем полноэк. режим и добавляем обработчик на ESC
  bigPicture.classList.remove('hidden'); //открваем фото в полноэкранном изображении
  document.addEventListener('keydown', onEscKeyDown); // добавляет обработчик на ESC
};

const hideBigPicture = () => { // фунуция BigPicture(СкрытьБольшуюКартину)
  bigPicture.classList.add('hidden'); // убираем класс hidden, заерываем полноэкр. режим
  document.removeEventListener('keydown', onEscKeyDown); // удаляем обработчик обработчик на ESC
};

function onEscKeyDown(evt) { // функция приНажатииКлавишиEsc
  if (evt.key === 'Escape') { // если клавиша Esc
    evt.preventDefault(); // отменяется действие по умолчанию
    hideBigPicture(); // запускается функция BigPicture(СкрытьБольшуюКартину)
  }
}

const onCancelButtonClick = () => { // фукция onCancelButtonClick(приНажатииКнопкиОтмена)
  hideBigPicture(); // запускается фунуция BigPicture(СкрытьБольшуюКартину)
};

cancelButton.addEventListener('click', onCancelButtonClick); // на кнопку отмена добавляем обработчик


export { showBigPicture };
