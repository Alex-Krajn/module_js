// var a = alert("Внимание!");
// var p = prompt("Введите число");
// var c = confirm("Да или нет?")

// console.log(a, p, c);



// console.log(1 > 2 || 1 < 2);
// console.log(1 > 3 || 1 > 2);

// console.log(2 > 4 && 2 < 10);
// console.log(4 > 2 && 2 < 10);

// console.log(!false);
// console.log(!true);

// var x = false;
// var test;

// test = true || false;
// test = !false && !x;

// console.log(test);

// var year = 1999;

// if(1990 > year){
//     console.log('Пора на работу!');
// }

// console.log('Условие закончилось');


// var year = 2002;

// if(2000 > year){
//     console.log('Пора на работу!');
// }else{
//     console.log('Пора в школу!');
// }


// var year = 2010;

// if(2000 > year && 1990 < year){ // true && false -> false
//     console.log('Пора в школу!');
// }else if(1990 > year){ // true
//     console.log('Пора на работу!');
// }else{
//     console.log('Пора в дет. сад!');
// }

// var year = 2002;

// var test = 1900 > year ? console.log('Пора на работу!') : console.log('Пора в школу!');

// var x = 2 + 2;

// switch(x){
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//         console.log('2');
//         break;
//     case 3:
//         console.log('3');
//         break;
//     case 4:
//         console.log('4');
//         break;
//     case 5:
//         console.log('5');
//         break;
// }

// let x = 0;

// while(x <= 10){
//     console.log(x);
//     x++;
// }

// let x = 10;
// console.log('Hello');

// do{
//     console.log(x);
//     x--;
// }while(x > 0);


// for(var x = 0; x < 10; x++){
//     console.log('Log' + x);
// }

// console.log('Good!');

for(var x = 0; x < 10; x++){
    if(x == 5){
        console.log('It is 5!');
        // break;
        continue;
    }

    console.log('It is ' + x);
}