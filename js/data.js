import { getRandomArrayElement, getRandomNumber} from './util';

const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const DESCRIPTIONS = ['Утро', 'Вечер', 'Котик' ];

const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент.'];

const NAMES = ['Николай', 'Таня', 'Сургей', 'Оля', 'Иван', 'Егор'];

const createMessage = () =>
  Array.from({ length: getRandomNumber(1, 2) }, () =>
    COMMENTS[getRandomNumber(0, COMMENTS.length - 1)]
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${index}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});


const createFoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    { length: getRandomNumber(0, NAMES.length - 1) },
    (_, commentIndex) => createComment(commentIndex + 1)
  )
});

const createFotos = () =>
  Array.from(
    { length: PHOTOS_COUNT }, (_, createIndex) => createFoto(createIndex + 1)
  );

createFotos();

export {createFoto};
