//attribute leri degistirme
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'http://www.youtube.com');
link.textContent = 'Youtube';

const sinif = document.querySelector('div');
console.log(sinif.getAttribute('class'));
sinif.setAttribute('class', 'yeniClass');
sinif.textContent = 'Yeni icerik';
console.log(sinif.getAttribute('class'));

//suan attribute larda style yok. Bunu setAttribute ile yapabiliriz.
sinif.setAttribute('style', 'color:blue');  