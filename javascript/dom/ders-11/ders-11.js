const button = document.querySelector('button');
const mainPopUp = document.querySelector('.main-popup');
const close = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    mainPopUp.style.display = 'block';
});

close.addEventListener('click', () => {
    mainPopUp.style.display = 'none';
});

mainPopUp.addEventListener('click', e => {
    if(e.target.className === 'main-popup') {
        mainPopUp.style.display = 'none';
    }
})
