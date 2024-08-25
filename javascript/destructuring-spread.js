// //destructuring --> seklini bozma
// //spread --> dagilma, yayma
// // rest --> kalanin tamami

// //destructuring array --> diziden secilen elemanlari alir ve degiskene atar
// //let, const [degiskenAdi] = secilen dizi
// const sayilar = [1, 2, 3];
// const [number1, number2] = sayilar; // sayilar dizisinin ilk elamanini alir ve number1 adinda degisken olusturup atar. 
// console.log(number1);
// console.log(number2);

// //Deger es gecme
// const [x, ,y] = sayilar;
// console.log(x, y)

// //Kalan degerleri dizi olarak atama
// const numbers = [2, 3, 5, 5, 6, 7, 7, 56, 34]
// const [a, b, ...kalanSayilar] = numbers;

// //
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Turkey', 'Ankara'],
//     ['Germany', 'Berlin'],
//     ['England', 'Londra']
// ]

// for( item of countries) {
//     console.log(`Baskent: ${item[0]}, Ulke: ${item[1]}`)
// }

// //ikinci yol
// for([baskent, ulke] of countries) {
//     console.log(`Baskent: ${baskent}, Ulke: ${ulke}`);
// }

// //Objeleri destruct etme
// const user = {
//     ad: 'mustafa',
//     soyad: 'yildirim',
//     yas: 23,
//     kanGrubu: '0Rh+'
// }

// const {soyad} = user; //verilen degisken adlari ayni olmak zorunda
// // const {surname} = user hatali kullanim

// //dilersek cikartirken farkli isim kullanabiliriz.
// const {ad: name} = user;
// //console.log(ad); artik ad name olarak degistirdim
// console.log(name);

// //var olmayan properti icin undefined tanimlamasi verir.
// const {dogumTarihi = 'tanimlanmadi'} = user;
// console.log(dogumTarihi); //undefined

// //Obje ve dizi klonlama
// const dizi1 = [1, 2, 3, 4, 5]
// //const dizi2 = dizi1 --> Ayni adres alanina ortak ettigim icin dizi2 degisiminden dizi1 etkilenir.
// const dizi2 = [...dizi1]
// dizi1.push(111);

// console.log(dizi1);
// console.log(dizi2);

//EXERCISE
const constants = [2.72, 3.14, 9.81, 37, 100];
const countriess = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];

//egzersiz 1
// const [ e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// const [fin, est, sw, den, nor] = countriess;
// const [name, scores, skills, age] = users;

//egzersiz 2

//1.soru
// const newUsers = [...users];

// for({name, scores, skills, age} of newUsers) {
//     console.log(`User:
//         ${name} ${age} ${scores} ${skills}
//     `)
// }

// //2.soru
// console.log('Find the persons who have less than two skills')
// for({name, scores, skills, age} of newUsers) {
//     if(skills.length < 2) {
//         console.log(`User:
//         ${name} ${age} ${scores} ${skills}
//     `)
//     }
// }

//egzersiz 3
//David (4) ["HTM", "CSS", "JS", "React"] 90 95
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
// const [name, skills, scores] = student;

// console.log(name, skills.length, skills, scores[2], scores[3]);


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

//convertArrayToObject fonksiyonunu yaz
// console.log(convertArrayToObject(students))
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]

// function convertArrayToObject([[name, skills, scores]]) {
//     return {
//         name: name,
//         skills: skills,
//         scores: scores
//     }
// }
// console.log(convertArrayToObject(students));

const newStudents = {...students, 
    skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
}

console.log(newStudents)