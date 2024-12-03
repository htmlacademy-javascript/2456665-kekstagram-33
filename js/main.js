import { getData } from './api.js';
import './form.js';
import { turnFilterOn } from './filter.js';
import './preview.js';
import {showError} from './popup.js';

getData()
  .then((data) => {
    turnFilterOn(data);
  })
  .catch(() => {
    showError();
  });

