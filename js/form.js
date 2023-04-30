// Form  ---------------------------

const form = document.querySelector('.form');


form.addEventListener('submit', sendForm);


function sendForm(even) {
    even.preventDefault;

    let error = formValidate(form);

    if (error === 0) {
        form.target.reset();

    }
}

function formValidate() {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else if (input.classList.contains('tel')) {
            if (phoneTest(input)) {
                formAddError(input);
                error++;
            }
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }

    }
    return error;
}



function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
}

// Функция теста Email

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
// Функция теста Телефона

function phoneTest(input) {
    return !/^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(input.value);
}


