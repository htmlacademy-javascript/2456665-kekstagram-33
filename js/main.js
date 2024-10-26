const names = ['Николай', 'Таня', 'Сургей', 'Оля', 'Иван', 'Егор'];

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = (index) => ({
  id: index , //getRandomNumber(0, 30)
  avatar: `img/avatar-${index}.svg`,
  message: 'В целом всё неплохо. Но не всё.',
  name: names[getRandomNumber(0, 5)],
});


const createFoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'описание фотогафии',
  likes: getRandomNumber(15, 200) ,
  comments: Array.from({ length: getRandomNumber(0, 30) }, createComment)
});

const createFotos = () =>
  Array.from({ length: 25 }, (_, createIndex) =>
    createFoto(createIndex + 1)
  );
console.log(createFotos());
