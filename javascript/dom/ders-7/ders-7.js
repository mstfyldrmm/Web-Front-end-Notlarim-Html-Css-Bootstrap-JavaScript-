//Parent element child element
const section = document.querySelector('section');
console.log(section.children); //section children HTMLCollection doner. Bunu array e cevirmek gerekir.
console.log(Array.from(section.children));

//section cocuklarina section-element sinifini ekleyelelim
Array.from(section.children).forEach(child => {
    child.classList.add('section-element');
})

const baslik = document.querySelector('h1');
console.log(baslik.parentElement);//section elementi
console.log(baslik.parentElement.parentElement);//body elementi
console.log(baslik.nextElementSibling);//sonraki elementi verir.
console.log(baslik.previousElementSibling);//ayni hizadaki bir onceki elementi verir
