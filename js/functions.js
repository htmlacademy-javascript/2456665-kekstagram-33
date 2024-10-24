/* проверка длины строки */

const detLengthString = (string, maxLength) => string.length <= maxLength;
detLengthString('aaaaaaaaaa', 3);


/* проверка  является ли строка палиндромом */

const isPalindrome = (value) => {
  const normalized = value.replaceAll(' ', '') .toLowerCase();
  let inverse = '';
  for(let i = normalized.length - 1; i >= 0; i--) {
    inverse += normalized[i] ;
  }
  return inverse === normalized;
};
isPalindrome('1Лёша на полке клопа нашёл');


/* дополнительное задание */

const getNumbers = (value) => {
  const preparedValue = String(value);
  let result = '';
  for (let i = 0; i < preparedValue.length; i++) {
    if(!Number.isNaN(Number.parseInt(preparedValue[i], 10))) {
      result += preparedValue[i];
    }
  }
  return Number.parseInt(result, 10);
};
getNumbers('1 кефир, 0.5 батона');
