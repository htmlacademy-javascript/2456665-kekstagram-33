//import './functions.js';
import {renderCards} from './picture.js';
import { getData } from './api.js';
import './form.js';
import './filter.js';

getData()
  .then((data) => {
    renderCards(data);
  })
  .catch(() => {
  });

