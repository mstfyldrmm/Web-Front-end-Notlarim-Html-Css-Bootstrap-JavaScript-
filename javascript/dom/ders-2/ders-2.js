//getsElementByID --> id sahip elementi ceker.
const baslik = document.getElementById('mstf');
console.log(baslik);

//getsElementClassName --> class adina sahip tum elementleri getirir
const hatalar = document.getElementsByClassName('error');
console.log(hatalar);
console.log(hatalar[0]); //hatalar dizisini forEach ile kullanilamaz.

//getsElementTagName --> istenilen taglerin hepsini getirir.
const p = document.getElementsByTagName('p');
console.log(p);
console.log(p[0]); //forEach ile kullanilamaz