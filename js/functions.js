
const detLengthString = (string, maxLength) => string.length <= maxLength;

console.log(detLengthString('проверяемая строка', 18));


function detPalindrome (str) {
  str.replaceAll(' ', ' ');
}

const str = 'Лёша на полке клопа нашёл';

console.log(str.replaceAll(' ', ''));
