//import './functions.js';
//import {renderCards} from './picture.js';

import { getData } from './api.js';
import './form.js';
import {turnFilterOn} from './filter.js';

getData()
  .then((data) => {
    turnFilterOn(data);
  })
  .catch(() => {

  });

