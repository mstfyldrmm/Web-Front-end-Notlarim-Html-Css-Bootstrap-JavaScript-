//javascripte degisken tanimlama ---> let degiskenAdi = degiskenDegeri

let getFirstName = "mustafa";
let adi = "mustafa",
  soyadi = "yildirim";
console.log(getFirstName);

//sabit degiskenler const ile olusturulur.
const PI = 3.14;

/*       primitive data types : numbers, string, booleans, null and undefined
primitive olan veriler karsilastirilirken degerlere gore karsilastirilir.
primitive tipler degerleri sabittir,  degistirilemezler.

example
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) ---> true

*/
/*non-primitive data types: objects, functions and arrays
non-primitive tiplerde ise nesnelerin adreslerinin eşit olup olmadıgına bakılır.
*/


/*0-10 arasinda random sayi uretme
let randomNumber = Math.floor(Math.random() * 11)
*/

let fullName = "${adi}  ${soyadi}"  //mustafa yildirim


//split metodu : stringi diziye cevirir.
let string = '30 Days Of JavaScript'
console.log(string.split()) //["30 days of JavaScript"]
console.log(string.split(' ')) //["30", "days", .....]

let city = 'kocaeli, izmir, istanbul, erzurum'
console.log(city.split(','))


//trim metodu  :  stringler icerisindeki  bastaki ve sondaki bosluklari alir
let trimMethod = '   trim metodu   asdef'
console.log(trimMethod.trim())

//includes : string icerisinde verilen string ifadenin olup olmadigini kontrol eder
console.log(trimMethod.includes('im'))

//indexOf : verilen ifadenin string icerinde arar ve geriye ilk buldugu  ifadenin indexini doner. Bulamaz ise - 1 doner.
//lastIndexOf : Farkli olarak som buldugu indexi doner

console.log(string.indexOf('D')) //3
console.log(string.indexOf('Days')) //3
console.log(string.indexOf('of')) // -1 
console.log(string.indexOf('Of'))
console.log(string.indexOf('Script'))

console.log(string.indexOf('a')) //4
console.log(string.lastIndexOf('a')) //


//Casting işlemleri

//String top Int
let num = '10'
console.log(parseInt(num))
console.log(+num)
console.log(Number(num))

//String to Float
let sayi = '9.85'
console.log(parseFloat(sayi))
console.log(+sayi)
console.log(Number(sayi))

//!!javascriptte 0 haric tum sayilar true, bos string harici tum stringler dogru
//false values : 0, "", '', null, undefined, NaN

// === veri tiplerinin esitligini kontrol eder
let x = 5
let y = 25
console.log('x === y : ' + x === y)


// //                                                             Window methods
// //1-alert metodu : Ekrana mesaj vermeyi saglar.
// alert('alert metodu ekrana mesaj vermeyi saglar')

// //2-confirm metodu : tamam ya da iptal secenekleri olan   diyalog box . Tamama basilirsa true doner.
// confirm('Göndermek istediğinize emin misiniz?')


//date type
const date = new Date()
console.log(date)
console.log(date.getMonth()) //bugunki tarihin ayini verir
console.log(date.getFullYear())
console.log(date.getDate()) //pazar-0, pazartesi-1, sali-2, carsamba-3

let a = getSelection

``


