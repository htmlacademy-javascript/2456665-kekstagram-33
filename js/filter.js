import { getRandomArrayElement } from './util';


//1 - создаем фильтр настроек: из трех Объектов. Каждый объект это ключ(назв. настройки): с его значением насройки
const Filter = { // фильтр с настройками
  DEFAULT: 'filter-default',//«По умолчанию» — фотографии в изначальном порядке с сервера;
  RANDOM: 'filter-random', //«Случайные» — 10 случайных, не повторяющихся фотографий;
  DISCUSSED: 'filter-discussed', //«Обсуждаемые» фото, отсортированные в порядке убывания кол-ва коммент.
};

const filtersElement = document.querySelector('.img-filters'); // блок для фильтрации изображений

const PICTURES_COUNT = 10; // случайные, не повторяющихся фотографий;

let currentFilter = ''; // текущий фильтр
const pictures = []; // массив загруженных фото, кторый будем сортировать и копировть


// 2 - фукция сортировки, которая происходит методом(sort)

const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;


const filterPictures = () =>{
  switch (currentFilter) {
    case Filter.DISCUSSED:
      return [...pictures].sort(discussedSort);
    case Filter.RANDOM:
      return [...pictures].sort(getRandomArrayElement).slice(0, PICTURES_COUNT);
    default:
      return [...pictures];
  }

};

console.log(filterPictures(Filter.DEFAULT));

const turnFilterOn = (loadedPictures) => { // включитьФильтр
  filtersElement.classList.remove('img-filters--inactive'); // открываеи болг фильтрации
  pictures = [... loadedPictures]; // присваиваем текущее значене
  currentFilter = Filter.DEFAULT; // включаем настройки фильтра
};

turnFilterOn();

export {turnFilterOn};

