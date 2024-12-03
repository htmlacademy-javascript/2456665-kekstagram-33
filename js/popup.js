import { removeEscapeControl, setEscapeControl } from './escape-control';
import { ERROR_SHOW_TIME } from './constants';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const dataErrorTemplateElement = document.querySelector('#data-error').content.querySelector('.data-error');

export const showError = () => {
  const errorInner = dataErrorTemplateElement.cloneNode(true);
  document.body.append(errorInner);
  const removeError = () => {
    errorInner.remove();
  };
  setTimeout(removeError, ERROR_SHOW_TIME);
};

const templates = {
  success: successTemplateElement,
  error: errorTemplateElement
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);

  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
      removeEscapeControl();
    }
  });

  setEscapeControl(() => {
    newPopup.remove();
  });
  document.body.append(newPopup);
};
