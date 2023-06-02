const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnGo = document.querySelector('#btnGo');
const btnTry = document.querySelector('#btnTry');


btnGo.addEventListener('click', toggleScreen);
btnTry.addEventListener('click', toggleScreen);

function toggleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}