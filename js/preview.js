import { FILE_TYPES } from './constants';

const fileChooserElement = document.querySelector('#upload-file');
const previewElement = document.querySelector('.img-upload__preview img');
const filtersElements = document.querySelectorAll('.effects__preview');

fileChooserElement.addEventListener('change', () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) =>
    fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    previewElement.src = url;
    filtersElements.forEach((element) => {
      element.style.backgroundImage = `url(${url})`;
    });

  }
});


