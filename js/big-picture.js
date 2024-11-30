import { removeEscapeControl, setEscapeControl } from './escape-control.js';
import { COMMENTS_STEP } from './constants';

const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const likesElement = bigPictureElement.querySelector('.likes-count');
const totalCommentsElement = bigPictureElement.querySelector('.social__comment-total-count');
const commentTemplate = bigPictureElement.querySelector('.social__comment');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const renderedCommentsCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const cancelButton = document.querySelector('.big-picture__cancel');
const loaderElement = bigPictureElement.querySelector('.comments-loader');

let localCommets;
let totalCommets;
let renderedComments = 0;

const showBigPicture = () => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onCancelButtonClick = () => {
  hideBigPicture();
  removeEscapeControl();
};

cancelButton.addEventListener('click', onCancelButtonClick);

const createComment = ({ name, avatar, message }) => {
  const newCommentElement = commentTemplate.cloneNode(true);
  const avatarElement = newCommentElement.querySelector('.social__picture');
  avatarElement.src = avatar;
  avatarElement.alt = name;
  newCommentElement.querySelector('.social__text').textContent = message;

  return newCommentElement;
};

const renderStatistic = () => {
  renderedCommentsCountElement.textContent = renderedComments;
};

const renderLoader = () => {
  if (totalCommets > renderedComments) {
    loaderElement.classList.remove('hidden');
  } else {
    loaderElement.classList.add('hidden');
  }
};

const renderComments = () => {
  localCommets.splice(0, COMMENTS_STEP).forEach((item) => {
    commentListElement.append(createComment(item));
    renderedComments++;
  });
  renderStatistic();
  renderLoader();
};

const render = ({ url, description, likes, comments }) => {
  imageElement.src = url;
  descriptionElement.textContent = description;
  likesElement.textContent = likes;
  totalCommentsElement.textContent = comments.length;
  totalCommets = comments.length;
  commentListElement.innerHTML = '';
  localCommets = [...comments];
  renderedComments = 0;
  renderComments();
};

const openBigPicture = (photo) => {
  render(photo);
  showBigPicture();
  setEscapeControl(hideBigPicture);
};

loaderElement.addEventListener('click', () => {
  renderComments();
});

export { openBigPicture };
