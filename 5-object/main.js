// Создание объекта
let passport = {
    number: "MC093404",
    name: "Anais",
    surname: "Specimen",
    birthday: "1954-07-12"
};

let car = {};

// Получение доступа к значению
// 1 Способ
console.log(passport.number);

let name = passport.name;
console.log(name);

// 2 Способ
let surname = passport["surname"];
console.log(surname);



// Наполнение объекта данными
car.name = "Audi";
car.color = "Red";
car.age = "10";

car["DTP"] = "2";

console.log(car);


// Проверка наличия свойства
console.log("name" in car);
console.log("Headlights" in car);


// Доступ к несуществующим свойствам
console.log(car.headlights);



// Объявление свойств с "плохими" именами
let country = {
    name: "Ameraca",
    "10count car": 999999
}

console.log(country["10count car"]);


// Удаление свойств
console.log(car);

delete car.DTP;

console.log(car);



// Перебор свойств объекта

for(let key in car){
    console.log(key + ": " + car[key]);
}


// Объект - ссылочный тип данных
const person = {
    name: "Lui",
    age: "23"
}

let newPerson = person;

person.age = "45"

console.log(person, newPerson);


// Клонирование объекта
let personCountry = {};

for(let key in person){
    personCountry[key] = person[key];
}
person.name = "Dima";
console.log(person, personCountry);



// Поясненик к ДЗ (№3)
let city = [
    {name: 'Minsk', population: 1000000},
    {name: 'Vitebsk', population: 860000}
]