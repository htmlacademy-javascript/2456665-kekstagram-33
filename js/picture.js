
const pictureTemplate = document.querySelector('#picture').content.querySelector('picture'); //          находим контент шаблона, а в контенте шаблон элемента
const container = document.querySelector('.pictures'); // находим контейнер для изображений


const createPicture = (data) => { //функция сщздания элемента
  const { comments, description, likes, url } = data;//ключи объекта-фото(параметры  функции)
  const picture = pictureTemplate.cloneNode(true); // клонируем шаблон в переменную
  picture.querySelector('.picture__img').src = url; // передаем ссылку на картинку
  picture.querySelector('.picture__img').alt = description; // название картинки
  picture.querySelector('.picture__comments').textContent = comments; // текст коментария
  picture.querySelector('.picture__likes').textContent = likes; // лайки катинки

  return picture; // возвращаем склонированный заполненный шаблон
};

export {createPicture};
