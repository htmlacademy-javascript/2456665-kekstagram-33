import { removeEscapeControl, setEscapeControl } from './escape-control';

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');

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
