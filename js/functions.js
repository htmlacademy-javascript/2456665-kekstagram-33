/* проверка длины строки */

const detLengthString = (string, maxLength) => string.length <= maxLength;

detLengthString();


/* проверка  является ли строка палиндромом */

const text = 'Лёша на полке клопа нашёл';
const str = text.replaceAll(' ', '') .toLowerCase();

let nevStr = '';

for(let i = str.length - 1; i >= 0; i--) {
  nevStr += str[i] ;
}

const detPalindrome = () =>(nevStr === str);

detPalindrome();
