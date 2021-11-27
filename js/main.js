const signinBtn = document.querySelector('.signinBtn');

const signupBtn = document.querySelector('.signupBtn');

const formBx = document.querySelector('.formBx');

const body = document.querySelector('body');

const darkmodeBtn = document.querySelector('.darkmodeBtn');

signupBtn.onclick = () => {
    formBx.classList.add('active');
    body.classList.add('active');
};

signinBtn.onclick = () => {
    formBx.classList.remove('active');
    body.classList.remove('active');
};

darkmodeBtn.onclick = () => {
    body.classList.add('dark');
}