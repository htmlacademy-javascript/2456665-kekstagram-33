import { getData } from './api.js';
import './form.js';
import { turnFilterOn } from './filter.js';
import './preview.js';

getData()
  .then((data) => {
    turnFilterOn(data);
  })
  .catch(() => {

  });

