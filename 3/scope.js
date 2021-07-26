let global = 'Я глобальная!';

function get(){
    let local = 'Я локальная!';
    let global = 'Я локальная №2!'

    console.log(global);
    console.log(local);
}

get();
console.log(global);
// console.log(local);