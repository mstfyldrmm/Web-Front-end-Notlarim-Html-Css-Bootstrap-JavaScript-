let names = new Set();
let meyveler = new Set('elma', 'armut');

names.add('mustafa');
names.add('ali')
//Set : elemanlar unique
names.add('mustafa');
console.log(names);

//diziye cevirme --> [...setAdi]
console.log([...names]);

//map --> elemanlar key-value olarak tutulur.
let users = new Map();
users.set('car', 'araba');
users.set('language', 'dil');
users.set(1, 'one') //1 tipi number
console.log(users);
console.log(users.size)

//!object tipinde  tum key degerleri stringe cevrilir. Map tipinde oldugu gibi olma imkani sunar

let x = {name : 'adad'};
users.set(x, 123);
console.log(users);

const obj = {
    id : 1,
    name : 'mustafa',
    surName : 'Yildirim'
};

//objeyi map e donusturme
let user = new Map(Object.entries(obj));
console.log(obj);
console.log(user);

//map i objeye cevirme

const a = [
    ['car', 'araba'],
    ['pencil', 'kalem']
];

const eng = Object.fromEntries(a);
console.log(eng);