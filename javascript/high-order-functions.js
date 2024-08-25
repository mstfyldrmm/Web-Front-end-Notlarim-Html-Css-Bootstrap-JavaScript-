// //Parametere olarak fonksiyon alan ya da geriye fonksiyon donduren fonksiyonlardir.
// //callback : parametre olarak fonksiyon olan fonksiyonlara callback denir.

// const fonksiyon = function(number) {
//     return number**2;
// }

// function cube(cb, sayi) {
//     return cb(sayi) * sayi;
// }

// console.log(cube(fonksiyon, 4));

// const a = sayi1 => {
//     const b = sayi2 => {
//         const c = sayi3 => {
//             return sayi1 + sayi2 + sayi3;
//         }
//         return c; 
//     }
//     return b;
// }

// console.log(a(25)(41)(55));

// //zaman icerisinde islem yaptirmak --> setInterval(islem, milisaniye) her milisaniyede verilen islemi yapar

// function sayHello() {
//     console.log('Hello bro');
// }

// //setInterval(sayHello, 1000); //1 saniyede 1 sayHello calisir.


// //setTimeout ile verilen sure beklenir ve verilen islem gerceklestirilir.
// setTimeout(sayHello, 2000); //2 saniye sonra fonksiyon 1 kere calisir.
// //iptali icin clearTimeout ve clearInterval 

// const interval = setInterval(sayHello,  1000);

// setTimeout(()=> {
//     clearInterval(interval);
//     console.log('Interval islemi iptal edildi');
// }, 5000);


// //map
// let sayilar = [1, 2, 3, 4, 5];

// const sayilar2 = sayilar.map(number => number * 2);
// console.log(sayilar2);


let users = [
    {
        id : 1, 
        name : 'Mustafa',
        age : 22,
        gender: 1,
    },
    {
        id : 2,
        name : 'Ali',
        age : 21,
        gender : 1,
    },
    {
        id : 3,
        name : 'Burak',
        age : 18,
        gender : 1,
    },
    {
        id : 4,
        name : 'Ayse',
        age : 25,
        gender : 0,
    },
]

users = users.map(user => {
    if(user.id == 2) {
         user.name = 'Mehmet'
    }

    return user;
})
// console.log(users);

// //filter
// const women = users.filter(user => user.gender == 0);
// const men = users.filter(user => user.gender == 1);

// console.log(men);
// console.log(women);

//every --> Tum elemanlar ilgili kosulu saglar ise true saglamaz ise false doner.
console.log(users.every(user => user.gender == 1));

//some --> Herhangi bir eleman .....
console.log(users.some(user => user.gender == 1));

//find --> Kosula ilk uyan elemani dondurur.
let enKucuk = users.find(user => user.id == 1);
console.log(enKucuk);

//findIndex --> find elemani dondururken bu metod indexi dondurur
let id1 = users.findIndex(user => user.id == 1);
console.log(id1);

//sort metodu

//number tipinde sort metodu
let sayilar = [-1, 10, 2.3, -5.3, 0, 22, 12, 0.3];
sayilar.sort((a, b) => a - b); //kucukten buyuge siralandi
console.log(sayilar);

let sayilar2 = [-2, 32, 54, -32, 6.5, 3.3, 0.34343];
sayilar2.sort((a, b) => b - a);
console.log(sayilar2); //buyukten kucuge siralandi

//string icin A-Z ye veya Z-A ya siralama.
let isimler = ['Cenk', 'Fatih', 'Behlul', 'Muhammed', 'Mustafa', 'Ali'];
//isimler.sort() --> A-Z ye siralar.

isimler.sort((a, b) => a.localeCompare(b)); //A-Z
console.log(isimler);

isimler.sort((a, b) => b.localeCompare(a)); //Z-A
console.log(isimler);



// //reduce metodu

// const numbers = [1, 2 , 4, 6];
// let total = 0;

// numbers.forEach(number => total += number);
// console.log(total);

// //acc parametresi yukaridaki total degerini tutan parametre, 0 ise baslangic degeridir.
// let total2 = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total2);

// const basket = [
//     {
//         name : 'Monster Abra A7 v12.1',
//         price : 12999
//     },
//     {
//         name : 'Apple Macbook Pro',
//         price : 20999
//     },
//     {
//         name : 'Nvidia GTX 1650',
//         price : 6999
//     }
// ]

// let sum = basket.reduce((acc, item) => acc + item.price, 0);
// console.log(sum);

// //ayni isimden kac defa gectigini bulma
// let names = ['ali', 'ahmet', 'Ayse', 'ali', 'ali', 'ali'];

// let countedNames = names.reduce((allNames, name) => {
//     if(name in allNames) {
//         allNames[name]++; 
//     } else {
//         allNames[name] = 1
//     }

//     return allNames;
// }, {});

// console.log(countedNames);

// const product = [
//     {
//         name : 'Samsung Galaxy A50',
//         brand : 'Samsung'
//     },

//     {
//         name : 'Iphone XS',
//         brand : 'Apple'
//     },

//     {
//         name : 'Samsung Galaxy A10s',
//         brand : 'Samsung'
//     },

//     {
//         name : 'Huawei Mate 20 Pro',
//         brand : 'Huawei'
//     },

//     {
//         name : 'Iphone 14 Pro',
//         brand : 'Apple'
//     },

//     {
//         name : 'Iphone 11',
//         brand : 'Apple'
//     },
// ];

// let group = 'brand';

// let groupedProduct = product.reduce((acc, product) => {
//     let key = product[group];

//     if(!acc[key]) {
//         acc[key] = [];
//     }

//     acc[key].push(product);
//     return acc;
// }, {})

// console.log(groupedProduct);

// //

// const posts = [
//     {
//         title : 'post1',
//         tags : ['php', 'CSS', 'HTML5'],
//     },
//     {
//         title : 'post2',
//         tags : ['HTML5', 'Ruby']
//     },
//     {
//         title : 'post3',
//         tags : ['C', 'C++', 'Java']
//     }
// ];

// const allTags = posts.reduce((acc, post) => [...acc, ...post.tags], []);
// console.log(allTags);

// //dizide tekrarlayan elemanları teke indirme
// console.log([...new Set(allTags)]);