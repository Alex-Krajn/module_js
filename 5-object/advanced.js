// Объект как свойство объекта
let person = {
    name: {
        first: "Alessandro",
        second: "Nesta"
    },
    birth: {
        year: 1975,
        place: "Italy"
    }
};

console.log(person.name.first);
person.birth.place = "Rome, Italy";
console.log(person.birth.place);



// Функции как свойство объекта
// *Функция внутри объекта - это метод объекта
let machine = {
    type: "Coffe grinder",
    makeSound: function(){
        console.log("Drrrrrrrr!!!");
    }
}

machine.seyHello = function(){
    console.log("Hello");
}

machine.makeSound();
machine.seyHello();

console.log(machine);


// ES6: краткое объевление методов
let grut = {
    getUser(){
        console.log('I\'m Grut!');
    }
}

grut.getUser();



// Массив - это тоже объект
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

// Функции - это тоже объект


// Использование this в методах объекта
let user = {
    name: "Олег",
    introduce: function() {
        console.log("Меня зовут " + this.name);
    }
}

user.introduce();


// this в глобальных функциях

let circleA = {x: 10, y: 12};
let circleB = {x: -4, y: 2};

function coords(){
    console.log("X: " + this.x);
    console.log("Y: " + this.y);
}

circleA.printXY = coords;
circleB.teelCoords = coords;

circleA.printXY();
circleB.teelCoords();