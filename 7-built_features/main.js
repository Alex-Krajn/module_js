// 
// Метод toString
// 
let number = 123;
let fload = 1.5;
let boolean = false;
let str = 'Hello';

console.log(number.toString(), boolean.toString(), str.toString());

// 
// Метод parseInt & parseFloat
// 
let px = '14px';
let rem = '1.6rem';
let e = '1px2rem';

console.log(parseInt(px), parseFloat(rem), parseInt(e));

// 
// Метод toFixed();
// 
let fixed = 12345.54321;

console.log(fixed.toFixed(), fixed.toFixed(2), fixed.toFixed(4));

// 
// Math
// 
let PI = Math.PI;
let E = Math.E;

console.log(PI, E);

// 
// Полезные методы Math
// 
let random = Math.random();
let max = Math.max(123, 2, -254, 400);
let min = Math.min(123, 2, -254, 400);

console.log(random, max, min);

// 
// String length
//
let string = 'Hello, Adukar';

console.log(string.length);

// 
// escape
// 
let newStr = 'Это \t строка \n будет \r перенесена \' '
console.log(newStr);

// 
// Доступ к отдельным символом
// 
let word = 'Adukar';

console.log(word.charAt(3), word[0], word[word.length - 1]);

// 
// toLowerCase & toUpperCase
// 
let lower = 'Я хочу работать!';
let upper = 'Я не хочу работать!';

console.log(lower.toLowerCase(), upper.toUpperCase());

// 
// Метод String: repeat & trim
// 
let repeat_and_trim = '    Это  строка скопированна!   '
console.log(repeat_and_trim.repeat(2), repeat_and_trim.trim());

// 
// Метод String: indexOf & lastIndexOf
// 
let index = 'Я сегодня встал в 8:00';

console.log(index.indexOf('в'));
console.log(index.lastIndexOf('в'));
console.log(index.indexOf('E'));

// 
// Новые методы поиска в String
// 
let includes = 'Сегодня отличный день!';

console.log(includes.includes('отл'), includes.includes('вче'));
console.log(includes.startsWith('Сегод'), includes.startsWith('день!'));
console.log(includes.endsWith('Сегод'), includes.endsWith('день!'));

// 
// CharCodeAt
// 
let x = 'xy';
console.log(x.charCodeAt(1));

// 
// Сравнение строк
// 
console.log("a" > "A", "a".charCodeAt(), "A".charCodeAt());

// 
// Интерполяция
// 
let temp = 30;
console.log(`Сегодня ${temp > 25 ? 'жарко' : 'холодно'}!`);

// 
// Дата и время
// https://momentjs.com/ -> бибилотека для работы со временем
let date = new Date(1990, 0, 1, 0, 0);

date.setFullYear(2010);
date.setMonth(6);
date.setDate(22);

console.log(`
${date}
Год: ${date.getFullYear()},
Месяц: ${date.getMonth()},
День: ${date.getDate()}
`);

// 
// Полезные методы Date()
//
let dateMoment = new Date();
console.log(dateMoment.getTime());

// 
// Выводы даты в разных форматах
// 
let dates = new Date();

console.log(dates.toLocaleDateString());
console.log(dates.toISOString());

// 
// Date: миллисекунды от 1 января 1970
// 
console.log(`
${Date.parse('2020-04-04')}
${Date.now()}
`);