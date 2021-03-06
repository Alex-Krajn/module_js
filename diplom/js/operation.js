let newButtonExpenses = document.querySelector('.expenses');
let newButtonIncome = document.querySelector('.income');

let formOperation = document.querySelector('.operation__form');

let btnNewOperation = document.querySelector('.js-add-operation');
let newOperationSum = document.querySelector('.operation__sum');
let newOperationCategory = document.querySelector('.operation__category');
let newOperationDate = document.querySelector('.operation__date');

let flagOperation = null;

newButtonExpenses.addEventListener('click', function(){ renderFormOperation('expenses') });
newButtonIncome.addEventListener('click', function(){ renderFormOperation('income') });
btnNewOperation.addEventListener('click', addOperation)

function renderFormOperation(operation){
    flagOperation = operation;

    newOperationSum.placeholder = `Sum ${operation}`;
    btnNewOperation.value = `Add ${operation}`;

    toggleFormOperation();
}

function toggleFormOperation(){
    formOperation.classList.toggle('operation__form--hidden');
}

function addOperation(e){
    e.preventDefault();

    let valueSum = newOperationSum.value;
    let valueCategory = newOperationCategory.value;
    let valueDate = newOperationDate.value;

    let newOperation = {
        sum: valueSum,
        category: valueCategory,
        date: valueDate,
        status: flagOperation
    }

    total.push(newOperation);

    clearForm();
    filterTotal();
}

function renderExpensesCategoryes(){
    let selectCategoryes = document.querySelector('.operation__category');

    selectCategoryes.innerHTML = '<option value="">Select category</option>';

    categoryes.forEach(function(category) {
        let option = document.createElement('option');

        option.value = category;
        option.textContent = category;

        selectCategoryes.appendChild(option);
    })
}

function renderExpensesDate(){
    let dateExpenses = document.querySelector('.operation__date');

    dateExpenses.value = new Date().toISOString().slice(0, 10);
}

function clearForm(){
    newOperationSum.value = '';

    renderExpensesCategoryes();
    renderExpensesDate();
}