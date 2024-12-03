import { openBigPicture } from './big-picture.js';

const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');

let localData = [];

const createPicture = (data) => {
  const { comments, description, likes, url, id } = data;
  const picture = pictureTemplateElement.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.id = id;

  return picture;
};

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

const renderCards = (photos) => {
  clear();
  localData = [...photos];
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.append(createPicture(photo));
  });

  containerElement.append(fragment);
};

containerElement.addEventListener('click', ({ target }) => {
  const card = target.closest('.picture');
  if(card){
    const id = Number(card.dataset.id);
    const pictureData = localData.find((item) => item.id === id);
    openBigPicture(pictureData);
  }
});

export { renderCards };

