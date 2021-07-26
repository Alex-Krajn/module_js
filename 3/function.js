// Function declaration

function seyHello(){
    console.log('Hello World!');
}

// seyHello();

function calc(n, x, y){
    console.log(n * x * y);
}

// calc(2, 5, 3);

function getUser(name){
    return 'Привет, ' + name + '!';

    // Не выполнится
    console.log('Привет мир!');
}

let user = getUser('Андрей');
console.log(user);


// function expression
let car = function(x){
    return x**x;
}

// console.log(car(3));

// function fabric(user = 'Andrey', car = 'Opel', position = 'Manager'){
//     console.log("Привет, " + user + 
//                 ' ты - ' + position +
//                 ' и у тебя - ' + car);
// }

// fabric('Angelina', undefined, 'Director');

// Рекурсия!
let x = 0;
function recurs(){
    if(x <= 3){
        x++;
        console.log('Глубина рекурсии ' + x);
        recurs();
    }
}

// recurs();

function shop(param){
    return param + ', был в магазине!'
};

function jobs(param){
    return shop(param)
};

console.log(jobs('Andrey'));