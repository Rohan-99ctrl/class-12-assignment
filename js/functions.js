let ageCal = (user, year) => {
    let date = new Date();
    let age = date.getFullYear() - year;
    let ageStatus = checkAgeStatus(age);

    return `<p class="alert alert-${ageStatus.val}">Hello Mr ${user}, Your age is ${age} years old & you are ${ageStatus.position}!!!</p>`;
}



function checkAgeStatus(age){

    if(age >= 0 && age <= 10){
        return {
            position        : 'children',
            val             : 'success'
        };
    }else if(age >= 11 && age <= 18){
        return {
            position        : 'teenager',
            val             : 'primary'
        };
    }else if(age >= 19 && age <= 35){
        return {
            position        : 'young man',
            val             : 'info'
        };
    }else if(age >= 36 && age <= 55){
        return {
            position        : 'older',
            val             : 'warning'
        };
    }else if(age >= 56 && age <= 150){
        return {
            position        : 'old man',
            val             : 'danger'
        };
    }else{
        return {
            position        : 'Not Eligible',
            val             : 'secondary'
        };
    }

};



// Marriage Approval


let approvalFunc = (year) => {

    if(gender.value == 'male' || gender.value == 'Male' || gender.value == 'MALE'){

        if(year >= 0 && year <= 20){
            return `<p class="alert alert-warning">Please wait. Your age is ${year} years old. According to the law of Bangladesh, you are not old enough to get married yet. You are not eligible for marriage until you are 21 years old. So, you have to wait ${21 - year} years.</p>`;
        }else if(year >= 21 && year <= 80){
            return `<p class="alert alert-success">Congratulations! Your age is ${year} years old. So, You have reached the age of marriage. You can get married!!!</p>`; 
        }

    }else if(gender.value == 'female' || gender.value == 'Female' || gender.value == 'FEMALE'){

        if(year >= 0 && year <= 17){
            return `<p class="alert alert-warning">Please wait. According to the law of Bangladesh, you are not old enough to get married yet. You are not eligible for marriage until you are 18 years old. So, you have to wait ${18 - year} years.</p>`;
        }else if(year >= 18 && year <= 70){
            return `<p class="alert alert-success">Congratulations! Your age is ${year} years old. So, You have reached the age of marriage. You can get married!!!</p>`;
        }

    }else{
        return `<p class="alert alert-danger">Please, Write male or female!</p>`;
    }

}





