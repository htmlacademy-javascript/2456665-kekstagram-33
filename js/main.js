const commentText = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент.'];

const names = ['Николай', 'Таня', 'Сургей', 'Оля', 'Иван', 'Егор'];

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createMessage = () =>
  Array.from({ length: getRandomNumber(1, 2) }, () =>
    commentText[getRandomNumber(0, commentText.length - 1)]
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${index}.svg`,
  message: createMessage(),
  name: names[getRandomNumber(0, 5)],
});


const createFoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'описание фотогафии',
  likes: getRandomNumber(15, 200) ,
  comments: Array.from(
    { length: getRandomNumber(0, 6) },
    (_, commentIndex) => createComment(commentIndex + 1)
  )
});

const createFotos = () =>
  Array.from(
    { length: 25 }, (_, createIndex) => createFoto(createIndex + 1)
  );
createFotos();
