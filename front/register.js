const container = document.querySelector('.container');
const registerBtn = document.querySelector('.btn-reg');
const loginBtn = document.querySelector('.btn-log');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})