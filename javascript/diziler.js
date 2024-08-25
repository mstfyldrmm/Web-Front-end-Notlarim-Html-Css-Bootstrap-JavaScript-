const dizi = [1, 2, 3, 4, "dsdsd", [32, 222]]; //dizilerde farkli tipler tutulabilir.
const x = Array(1, 2, 3);

const y = Array(5) //5 elemanli, elemanlari empty olan dizi olusturur.
console.log(y.lenght)


let toString = dizi.toString();
console.log(toString)

//join metodu : Dizideki elemanlari verilen parametreye gore birlestirir.(varsayilan virgul)
let adSoyad = ['Mustafa', 'Yildirim']
console.log(adSoyad.join())
console.log(adSoyad.join(','))
console.log(adSoyad.join(''))
console.log(adSoyad.join(' '))

//slice metodu : 1.parametre ile verilen indexe gore elemandan baslar. Biten indexe kadarki elemanlari alir. Son elemani almaz
console.log(dizi.slice(1, 4)) //indexi 1 olandan basla indexi 4 olana kadar al.(4 alma)

//splice metodu(baslangic indexi, eleman adedi) : verilen indexten baslayarak eleman adedi kadar diziden eleman cikarir.
const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2);
console.log(numbers);

//istenirse cikarilan elemanlarin yerine eleman eklenebilir.
const sayilar = [9, 8, 7, 6, 5, 4, 3];
sayilar.splice(1, 2, 25, 41); //8-7 yerine 25-41 ekledi.
console.log(sayilar);

//push ile sona, unshift ile basa eleman ekleriz. pop ile sondan, shift ile bastan eleman cikaririz
sayilar.push(-99);
console.log(sayilar);
console.log(sayilar.pop());
console.log(sayilar.shift());

sayilar.sort();
console.log(`Sort metodu kullanimi : ${sayilar}`)
