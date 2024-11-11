import { openBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createPicture = (data) => {
  const { comments, description, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;


  picture.addEventListener('click', () => {
    openBigPicture(data);
  });


  return picture;
};

const renderCards = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.append(createPicture(photo));
  });

  container.append(fragment);
};

export {renderCards};

