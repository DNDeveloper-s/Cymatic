let body = document.querySelector('body');
let loginBtn = document.querySelectorAll('.loginBtn');
let signUpBtn = document.querySelectorAll('.signUpBtn');
let login = document.querySelector('.logIn');
let signup = document.querySelector('.signUp');
let closeL;
console.log(body);

let loginFn = function() {

    setTimeout(() => {
        closeL = document.querySelectorAll('.closeL');
        login.classList.add('open');

        closeL.forEach(cur => {
            cur.addEventListener('click', function() {
                cur.parentElement.classList.remove('open');
            });
        })

    },400);
}

let signupFn = function() {

    setTimeout(() => {
        closeL = document.querySelectorAll('.closeL');
        login.classList.remove('open');
        signup.classList.add('open');

        closeL.forEach(cur => {
            cur.addEventListener('click', function() {
                cur.parentElement.classList.remove('open');
            });
        })

    },400);
}

loginBtn.forEach(cur => {
    cur.addEventListener('click', loginFn);
})

signUpBtn.forEach(cur => {
    cur.addEventListener('click', signupFn);
})