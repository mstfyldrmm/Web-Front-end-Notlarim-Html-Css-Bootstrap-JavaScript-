for (let i = 0; i < 5; i++) {
  console.log(i);
}

//for of dongusu ile dizini elemanlarina tek tek erişirilir
let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const x of sayilar) {
  console.log(x);
}

function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

//arguments ile parametre sayisini bilmiyoruz ise  tum argumanlara ulasabiliriz
function printNumbers() {
  for (let i = 0; i <= arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printNumbers(1, 2, 3, 4, 5, 7, 8);

//arrow function
function topla(x, y) {
  return x + y;
} //normal fonksiyon tanımı

// const hello = () => {
//  seklinde tanimlanir
// };

//tek bir  parametre aliyor ise

// const hello = name => {
//     return `Hello ${name}`;
// }

const hello = (name) => `Hello ${name}`;
console.log(hello("dfsdfs"));

const carp = (a, b) => a * b;
console.log(`4 x 5 = ${carp(4, 5)}`);

//birden fazla parametre için
const toplam = (...numbers) => {
  console.log(numbers);
};

toplam(34, 65, 75, 23, 65, 22);
//default value '=' ile veriyoruz.

//scope kavrami

//let, var veya const ile tanimlanmayan degiskenler window nesnesi olurlar.
//global tanim için let ya da const . const tanimlandiktan sonra deger degistirilemez. let degistirilerbilir.

{
  var xy = 25;
  //var ile tanimlanınca scope disindada erisilebilir.
}

console.log(xy);

//Object tipi : key-value ciftinden olusan tiptir. mutable(yani tanımlandıktan sonra degistirilebilir)
const city = {
  kocaeli: 41,
  istanbul: 34,
  erzurum: 25,
};

console.log(city);

//!!! userGetInfo

const formatter = new Intl.ListFormat("tr", {
  style: "long",
  type: "conjunction",
});

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

  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },

  //error-function kullanımında this kullanılmaz
  getFullName2: () => `${user.name} ${user.surname}`,

  userGetInfo: function () {
    let skills = formatter.format(this.skills);
    let fullName = this.getFullName();

    return `${fullName} is .....!\n
    ${skills}
    `;
  },
};

console.log(`User name : ${user.name} 
User surname :${user.surname.toLowerCase()}   
`);
console.log(user.skills[1]);
console.log(user.property.sayilar.x);
console.log(user.getFullName());
console.log(user.userGetInfo());

//object methods

let newUser1 = user; //user referansini userName aldi. Yani userName yapilan degisiklikler user etkiler. Onune gecmek icin Object.assign metodu kullanilir yada nesne = {...copy nesne}
let newUser2 = Object.assign({}, user);

newUser1.name = "Ahmet";
newUser2.name = "Muhammed";
console.log(`user name : ${user.name}`);
console.log(`newUser name : ${newUser1.name}`);
console.log(`newUser name : ${newUser2.name}`);

//Object.keys(nesne) --> Keyler erisilir
//Object.values(nesne) --> value erisilir
console.log(Object.keys(user));
console.log(Object.values(user));

//objectin tumune erisme : Object.entries(user) array olarak dondurur
console.clear();
console.log(Object.entries(user));
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

//object mutable immutable yapmak icin Object.freeze(ilgili nesne)
//Object.seal(ilgili obje) : Nesneye yeni key-value eklenmiyor veya silinemiyor ama var olan degerleri degistirebilmeyi saglar

//EXERCISE 1
let dog = {
  name: "şila",
  legs: 4,
  age: 1,
  bark: function () {
    return "woof woof";
  },
  getDogInfo: function () {
    return `It's name ${this.name} . It's ${this.age} It's has ${this.legs} legs.`;
  },
};

console.log(dog.getDogInfo());

//Exersize 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1
for(let [key, value] of Object.entries(users)) {
    if(value.skills.length > 1) {
        console.log(`${key} is has ${value.skills.length} skills`)
    }
}

//2
for(let [key, value] of Object.entries(users)) {
    if(value.isLoggedIn = true) {
        if(value.points >= 50) {
            console.log(`${key} is online. He has ${value.points} points`)
        }
    }
}
