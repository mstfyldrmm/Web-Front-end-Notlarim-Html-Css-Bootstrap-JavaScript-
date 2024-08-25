//RegExp : Duzenli ifadeler bizim istedigimiz ifadeyi bulmamizi saglar. Ornegin text iceriginde tarih bilgisini almak vs, ya da istedigimiz ifadeye uygun mu testini yapmak
//ornegin, user-login sisteminde kullanıcı adinin uygun olup olmadigini regExp ile bakabiliriz.

//1-RegExp constructor yardimiyla tanimlanabilir.
let pattern = 'love';
let flag = 'gi';
let regEx = new RegExp(pattern, flag);


let regex = /love/gi; //tanimlama yapilabilir.

//regex metodlari
//test method
const str = 'Bilader salak misin';
const regExpOne = /salak/; // /salak/i koyarsam buyuk kucuk harfe duyarsizlik kalkar yani SALAK sALAK vs true doner
const resultOne = regExpOne.test(str);
console.log(resultOne);

//match method
const strTwo = 'I lOve JavaScript and I love Flutter';
const resultTwo = strTwo.match(/love/ig);
//eger sadece love olursa ilk esleseni bulur. i flagi buyuk-kucuk harf, g flagi konursa stringteki tum eslesenleri getirir.
console.log(resultTwo);

//replace metodu
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';
//pyhton kelimelerini js degistirelim
const changedTxt = txt.replace(/python/gi, 'JavaScript');
console.log(changedTxt);

//Karakter setleri : [] icerisine yazılır.
//[a-c] : a, b ve c olabilir.
//[a-z] : a dan z ye kucuk harfler.
//\d : sadece 0-9 sayilari getirir. --> \d = [0-9]
//\D : icinde sayi olmayan stringle eslesir.

const me = 'Merhaba ben Mustafa Yıldırım. 18/10/2000 tarihinde Erzurumda dogdum. 23 yasindayim';
console.log(me.match(/\d/g));
console.log(me.match(/\D/g));

//^ ifade ile baslayan demek
const name = "1mustafa";
console.log(/^[a-z]+$/.test(name)) //harf ile baslayip harf ile biten. + koyma sebebimiz hepsi icin bakar(tum string icin)

//ornek
console.log(me.match(/\d+/)); //+ operatoru burada eger sayi kullanilmis ise sayinin tamamini getirir.
//+ olmasa cikti 1 olur. + oldugu icin cikti 18 dir.

console.log(me.match(/\d{2}/g)) //2 harflik, 2 basamaklik sayilari alir. Bu sekilde 2000 20 ve 10 olarak boler.Sinirlamak icin boundry olayi


console.log(me.match(/\b\d{2}\b/g)) //2 harflik, 2 basamaklik sayilari alir. 2000 ini 20 ve 00 olarak bolmez


console.log(me.match(/\b\d{2,4}\b/g)) //2-4 basamakli sayilar

//fa ile biten isimler
const isim = "mustafa";
console.log(/fa$/.test(isim));

//za ve fa ile biten isimler 
console.log(/[f|z]a$/.test("murtaza"));

//fa ile bitsin ama f olmayabilir.
console.log(/f?a$/.test(isim)); //true
console.log(/f?a$/.test("murtaza")); //true

//Buyuk harfle baslasin kucuk harfle biten 3, 12 harflik kelimeler
console.log(/^[A-Z][a-z]{3,12}$/.test(isim)); //false
console.log(/^[A-Z][a-z]{3,12}$/.test("Usim"));//true

//ilk 3 harf Buyuk harfle baslasin kucuk harfle biten 3, 12 harflik kelimeler
console.log(/^[A-Z]{3}[a-z]{3,12}$/.test('USAmah')) //true
console.log(/^[A-Z]{3}[a-z]{3,12}$/.test('UsAmah')) //false