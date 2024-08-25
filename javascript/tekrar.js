function merhabaDe() {
    console.log("merhaba");
}
merhabaDe();

//argüman sayısı hakkında net bilgi yoksa ya da argüman sayısı değişken sayıda ise
function sum() {
    let top = 0;
    for(let i = 0; i <= arguments.length; i++) {
        console.log(arguments[i]);
        top += arguments[i];
    }
}

sum(12, 23, 43, 54, 2);

//arrow function
function A() {
    //....
    console.log("hello");
}

const B = () => {
    console.log("hello");
}

A();
B();

//tek parametre aliyor ise
const tek = isim => console.log(`Merhaba ${isim}`);
tek('mustafa');

const carp = (a, b) => console.log(a*b);
//return kullanımı için {} gereklidir.

//birden fazla parametre için
const topla = (...num) => {
    let a = 0;
    for(let i = 0; i <= arguments.length; i++) {
        a += num[i];
        console.log(num[i]);
    }
    console.log(a);
}

topla(1, 2, 3, 4, 5);

{
    var xy = 25;
}

console.log(xy);

const user = {
    name: "mustafa",
    surname: "yıldırım",
    skills: ["HTML", "CSS", "FLUTTER"],
    property: {
      a: 1,
      b: 2,
      sayilar: {
        x: 25,
        y: 41,
        z: 36,
      },
    },

    getFullName: function() {
        console.log(`${this.name} ${this.surname}`)
    },
    getFullName2: () => `${this.name} ${this.surname}`,


}

let user2 = Object.assign({}, user);
user2.name = "Ahmet";


user2.getFullName();
user.getFullName();

function listUser(user) {
    for(let [key, value] of Object.entries(user)) {
        console.log(key, value);
    }
}

//High Order Functions: Bir fonksiyonu parametre olarak alabilen ya da bir fonksiyonu değer olarak döndürebilen fonksiyonlardır.

//Callback functions: Bir başka fonksiyona parametre olarak verilebilen fonksiyonlara denir.


function sayMerhaba() {
    console.log('Merhaba!!!');
}

//setInterval(function vb, ms) --> Parametre olarak aldigi islemi verilem ms araliginda surekli yapr 
const interval = setInterval(sayMerhaba, 1000);
clearInterval(interval);

//Number tipinde sort metodu
let sayilar = [12, 3, 4, 23, 354, -53, 12 , -23]
sayilar.sort((a, b) => a - b);
console.log(sayilar)

let toplam = 0;
sayilar.forEach(item => toplam += item);
console.log(toplam);

let toplam2 = sayilar.reduce((acc, item) => acc + item, 0);
console.log(toplam2);

//Ayni isimden kac defa tekrar ettigini bulma
let isimler = ['ahmet', 'mehmet', 'ahmet', 'ali', 'ali', 'ali'];

let countedNames = isimler.reduce((allNames, name) => {
    if(name in allNames) {
        allNames[name]++;
    }else {
        allNames[name] = 1;
    }

    return allNames;
}, {})

console.log(countedNames);
