const wrapper = document.querySelector(".log-in-container");
const logInLink = document.querySelector(".login-link");
const signUpLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

const body = document.getElementById('body');


signUpLink.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

logInLink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () =>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove('active-popup');
});

