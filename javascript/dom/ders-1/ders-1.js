//querySelector : Ilgili HTML taginin ilk olani secmeyi saglar.
const hata = document.querySelector('p'); //ilk p etiketini secer.
console.log(hata);

//class error olani secelim
const deneme = document.querySelector('.error');
console.log(deneme);

//surekli kosula uyan ilk elementi getirir.
//index.html class = error olan div icerisindeki dikkat eti getir.

const a = document.querySelector('div.error')
console.log(a);

//querySelectorAll ile kosula uyan elemetleri verir
const tumPetiketi = document.querySelectorAll('p');
console.log(tumPetiketi);
console.log(tumPetiketi[0]);
console.log(tumPetiketi[2]);

tumPetiketi.forEach(item => {
    console.log(item);
})