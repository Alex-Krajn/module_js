// 
// Получаем все формы
// 
let forms = document.forms;
console.log(forms);

// 
// Получение формы по атрибуту name
// 
let loginForm = document.forms.login;
console.log(loginForm);

// 
// Получение контролла формы
// 
let formElements = loginForm.elements;

console.log(formElements.password)

// 
// Получение и изменение значения элемента формы
// 
let nameFeedback = document.forms.feedback.name;
console.log(nameFeedback.value)

nameFeedback.value = "Leo";
console.log(nameFeedback.value)


let rememberLogin = document.forms.login.remember;
console.log(rememberLogin.checked)

rememberLogin.checked = true;
console.log(rememberLogin.checked)


let fromFeedback = document.forms.feedback.from;
console.log(fromFeedback.value)

fromFeedback.value = 'russia';
console.log(fromFeedback.value)


// 
// События формы
// focus/blur
let userLogin = document.forms.login.name;
userLogin.addEventListener('focus', function(){
    this.value = 'Focus';
});

userLogin.addEventListener('blur', function(){
    this.value = 'Blur';
});

// focusin/focusout
// тоже самое, что и focus/blur, но со всплытием
loginForm.addEventListener('focusin', function(){
    console.log(this);
})

loginForm.addEventListener('focusout', function(){
    console.log(this);
})

// input, change
nameFeedback.addEventListener('change', function(){
    console.log(this.value);
});

let emailFeedback = document.forms.feedback.email;

emailFeedback.addEventListener('input', function(){
    console.log(this.value)
});

