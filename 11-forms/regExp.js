let str = 'I Love JavaScript (ES6). I am Front-end developer';

let regexpt = new RegExp(/script/, 'i');

console.log(regexpt.test(str));
console.log(str.search(/love/i));

console.log(str.match(/a/));

//Классы символов
console.log(str.match(/\d/g));
console.log(str.match(/\s/g));
console.log(str.match(/\w/g));


console.log(str.match(/I\b/gi));
console.log(str.match(/I\B/gi));


console.log(str.match(/^I/gi));
console.log(str.match(/r$/gi));