//Bir onceki ornekte sonradan eklenen li tiklanildiginda silinemiyor.
const button = document.querySelector('button');
const liElement = document.querySelectorAll('li');

liElement.forEach(element => {
    element.addEventListener('click', e => {
        console.log('li etiketine tiklandi');
        e.target.style.color = 'red';

    })
})


const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    if(e.target.tagName == 'LI') {
        console.log(e.target);
        e.target.remove();//eklenilen javaScript kaldirilabilir durumda
    }
})

liElement.forEach(element => {
    element.addEventListener('click', e => {
        e.stopPropagation();
        console.log(e.target); //li elementi tiklandiginda parenti olan ul etiketide tetiklenir. Bunun önüne stop propagation ile gecebiliriz.
        e.target.remove();
    })
})

//Li ekleme
button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'JavaScript';

    //ul.append(newLi);//sona ekler
    ul.prepend(newLi); //basa eklenir
}); 