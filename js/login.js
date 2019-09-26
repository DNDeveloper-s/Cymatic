let body = document.querySelector('body');
let loginBtn = document.querySelectorAll('.loginBtn');
let signUpBtn = document.querySelectorAll('.signUpBtn');
let login = document.querySelector('.logIn');
let signup = document.querySelector('.signUp');
let loginCli = document.querySelector('.login.loginBtn');
let signupCli = document.querySelector('.signup.signUpBtn');
let closeL;
console.log(body);

loginCli.addEventListener('click', openLogin);
signupCli.addEventListener('click', openSignup);

let logmod = document.querySelector('#logIn');

function openLogin() {
    logmod.style.display = 'block';
}

let logInMod = document.getElementById('logIn');
let signUpMod = document.getElementById('signUp');

window.onclick = function(event) {
    if (event.target == logInMod) {
        logInMod.style.display = "none";
    }
    if (event.target == signUpMod) {
        signUpMod.style.display = "none";
    }
}

let signmod = document.querySelector('#signUp');

function openSignup() {
    signmod.style.display = 'block';
}

// let signupFn = function() {
//
//     setTimeout(() => {
//         closeL = document.querySelectorAll('.closeL');
//         login.classList.remove('open');
//         signup.classList.add('open');
//         loginCli.classList.remove('active');
//         signupCli.classList.add('active');
//
//         closeL.forEach(cur => {
//             cur.addEventListener('click', function() {
//                 cur.parentElement.classList.remove('open');
//                 loginCli.classList.remove('active');
//                 signupCli.classList.add('active');
//             });
//         })
//
//     },400);
// }

// loginBtn.forEach(cur => {
//     cur.addEventListener('click', loginFn);
// })
//
// signUpBtn.forEach(cur => {
//     cur.addEventListener('click', signupFn);
// })


// Dropdown Js
let dropIt = document.querySelectorAll('.dropIt'),
    dropItHead = document.querySelectorAll('.dropItHead > a'),
    dropItHeadListings = document.querySelectorAll('.dropItHead > ul'),
    marginBetweenLis = 5,
    liSHeight = 40;

let curHeightData = {
    parent: null
}

dropItHead.forEach(cur => {
    cur.addEventListener('click', function(e) {
        e.preventDefault();
        let childCount = cur.nextElementSibling.childElementCount;
        dropItHead.forEach(cur1 => {
            cur1.nextElementSibling.style.height = '0';
        });
        let calcHeight = (childCount * liSHeight) + (marginBetweenLis * (childCount + 1));
        cur.nextElementSibling.style.height = `${calcHeight}px`;
        curHeightData.parent = calcHeight;
    })
});

dropIt.forEach(cur => {
    cur.addEventListener('click', function(e) {
        e.preventDefault();
        let childCount = cur.children[1].childElementCount;
        let calcHeight = (childCount * liSHeight) + (marginBetweenLis * (childCount + 1));
        dropIt.forEach(cur1 => {
            cur1.children[1].style.height = '0';
        });
        cur.children[1].style.height = `${calcHeight}px`;
        console.log(calcHeight + curHeightData.parent);
        cur.parentElement.removeAttribute('style');
        cur.parentElement.style.height = `${calcHeight + curHeightData.parent}px`;
        console.log(cur.parentElement.style.height);
    })
});