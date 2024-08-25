//class ekleme veya cikarma
const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('sinif');
icerik.classList.remove('error');

//icerisinde error success gecenlere sınıf atama uygulamasi
const divler = document.querySelectorAll('p');

divler.forEach(element => {
    if(element.textContent.includes('error')) {
        element.classList.add('error');
    }
    else if(element.textContent.includes('success')) {
        element.classList.add('success');
    }
});

console.log(divler);