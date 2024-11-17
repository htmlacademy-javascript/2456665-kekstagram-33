const smallerButton = document.querySelector('.scale__control--smaller'); // кнопка умен. маштаба
const biggerButton = document.querySelector('.scale__control--bigger'); // кнопка увел. масштаба
const scaleInput = document.querySelector('.scale__control--value'); // поле отображаюшие масштаб
const image = document.querySelector('.img-upload__preview img'); // предварительный просмотр изобр.


const SCALE_STEP = 25; // шаг масштаба
const MIN_SCALE = 25; // мин. масштаб
const MAX_SCALE = 100; // мак.масштаб
const DEFAULT_SCALE = 100; // масштаб по умолчанию

const scaleImage = (value = DEFAULT_SCALE) => { //масштабИзображения (значение = по умолчанию)
  scaleInput.value = `${value}%`; // отрисовываем масштаб
  image.style.transform = scale();// ????????? - показать изображение
  console.log(scaleImage);
};


const onSmallerButtonClick = (newValue) => { // приНажатииМеньшейКнопки-функции отобр. масштаба картинки
  const currentValue = parseInt(scaleInput.value, 10);// преобразуем в число отображающий масштаб
  newValue = currentValue - SCALE_STEP; // вычитаем шаг маштаба
  if (newValue < MIN_SCALE) { // если меньше мин. маштаба
    newValue = MIN_SCALE; // оставляем минимальный шаг
  }
  scaleImage(newValue);// вызываем функцию отображения масштаба картинки
  console.log(newValue);
};

const onBiggerButtonClick = (newValue) => { // приНажатииБольшейКнопки
  const currentValue = parseInt(scaleInput.value, 10); // пербразуем строку в число
  newValue = currentValue + SCALE_STEP; // прибавляем шаг масштаба
  if (newValue > MAX_SCALE) { // если больше макс. масштаба
    newValue = MAX_SCALE; // оставляем иаксимальный шаг
  }
  scaleImage(newValue); // вызываем функциию отображения масштаба картинки
  console.log(newValue);
};

const resetScale = () => { //сбросМасштаб
  scaleImage(); // сбрасываем масштаб
};

smallerButton.addEventListener('click', onSmallerButtonClick); //кнопке мин.добавитьПрослушивательСобытий(клик, приНажатииМеньшейКнопки)
biggerButton.addEventListener('click', onBiggerButtonClick); //кнопке плюс.добавитьПрослушивательСобытий(клик, приНажатииБольшейКнопки)

export { resetScale };

