//eventListener
const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('Tiklandi');    
// });

const liElement = document.querySelectorAll('li');

liElement.forEach(element => {
    element.addEventListener('click', e => {
        console.log('li etiketine tiklandi');
        console.log(e.target);
        e.target.style.color = 'red';

    })
})


const ul = document.querySelector('ul');

liElement.forEach(element => {
    element.addEventListener('click', e => {
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