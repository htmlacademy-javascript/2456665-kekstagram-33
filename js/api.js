import { GET_DATA, POST_DATA } from './constants.js';

export const getData = () => fetch(GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();

  });

export const sendData = (body) => fetch(POST_DATA, {
  method: 'post',
  body
});

