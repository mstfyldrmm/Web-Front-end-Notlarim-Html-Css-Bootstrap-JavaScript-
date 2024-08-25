//Element icerigini degistirme
const firstP = document.querySelector('p');
firstP.innerText = 'Mustafa';//p etiketi icerisindeki text degistirildi.

//Tum p etiketlerinin icerigine kelime textini ekleme
const tumP = document.querySelectorAll('p');
tumP.forEach(item => {
    item.innerText += ' kelime';
})

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);//html kodu verir.
//cikti <p>icerik kelime</p>;

icerik.innerHTML = '<h1>Yeni HTML kismi</h1>'

//js tanimlanan diziyi sayfada gosterme
let ogrenciler = ['ahmet', 'Muhammed', 'Ayse'];
ogrenciler.forEach(ogrenci => {
    icerik.innerHTML += `<p>${ogrenci}</p>`;
})
