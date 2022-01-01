// age calculator

const button_check = document.querySelector('#ageCheck');
const nam = document.querySelector('#nam');
const year1 = document.querySelector('#year');
const result = document.querySelector('#result');


button_check.addEventListener('click', () => {

    if(nam.value == '' || year1 == ''){
        result.innerHTML = `<p class="alert alert-danger">All fields are required!!!</p>`;
    }else{
        result.innerHTML = `${ageCal(nam.value, year1.value)}`;
        nam.value = '';
        year1.value = '';
    }

});


// money converter form


const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const convert = document.querySelector('#convert');
const convertResult = document.querySelector('#convertResult');


convert.addEventListener('click', () => {

    if(amount.value == '' || currency.value == ''){

        convertResult.innerHTML = `<p class="alert alert-danger">All fields are required!!!</p>`;

    }else{

        let result = (amount.value * currency.value);

        convertResult.innerHTML = `<p class="alert alert-success">${result.toFixed(2)} BDT</p>`;

    }

});


// Marriage Approval


const gender = document.querySelector('#gender');
const year = document.querySelector('#yearOfBirth');
const check = document.querySelector('#check');
const approvalResult = document.querySelector('#approval');



check.addEventListener('click', () => {

    let date = new Date();
    let age = (date.getFullYear() - year.value);

    if(gender.value == '' || year.value == ''){
        approvalResult.innerHTML = `<p class="alert alert-danger">ALL fields are required!!!</p>`;
    }else{

        approvalResult.innerHTML = `${approvalFunc(age)}`;
        gender.value = '';
        year.value = '';

    }

});





