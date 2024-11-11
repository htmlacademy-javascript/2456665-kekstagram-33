import { openBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

let localData;

const createPicture = (data) => {
  const { comments, description, likes, url, id } = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.id = id;

  return picture;
};

const renderCards = (photos) => {
  localData = [...photos];
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.append(createPicture(photo));
  });

  container.append(fragment);
};

container.addEventListener('click', ({ target }) => {
  const card = target.closest('.picture');
  if(card){
    const id = Number(card.dataset.id);
    const pictureData = localData.find((item) => item.id === id);
    openBigPicture(pictureData);
  }
});

export {renderCards};

