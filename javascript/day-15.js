// class Person {
//     constructor(firstName, lastName, country = 'Turkey', age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.country = country;
//         this.skills = [];
//         this.age = age;
//         this.score = 0;
//     }

//     getFullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     get getScore() {
//         return this.score;
//     }

//     set setSkills(skill) {
//         this.skills.push(skill);
//     }

//     getPersonelInfo() {
//         let fullName = this.getFullName();
//         let skills = this.skills.length > 0 ? `My ability: ${this.skills.join(',')}` : ''
//         return `My name is ${fullName}. I am ${this.age}. ${skills}`

//     }
//     static getDate() {
//         let date = new Date();
//         return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
//     }
// }

// const person1 = new Person('Mustafa', 'Yildirim', '', 22); //new ile yeni objeler olusturulur. person1 obje tipindedir.
// console.log(person1.getFullName());
// person1.setSkills = 'play the guitar'
// console.log(person1.getPersonelInfo())

// //static methodlar, sınıftan obje olusturmadan kullanılır
// console.log(Person.getDate())

// //kalitim(inheritance) : extend anahtar kelimesi ile yapılır. Extend edilen sınıf, ata sınıfın tüm ozelliklerini alir.(fonksiyon)

class Car {
    constructor(marka, model, km) {
        this.marka = marka;
        this.model = model;
        this.km = km;
    }

    carInfo() {
        return `${this.model} ${this.marka} ${this.km} km`
    }
}

let carOne = new Car('Skoda Superb', '2016', '102000');
console.log(carOne.carInfo())

class Hybrid extends Car {
    constructor(marka, model, km, motorTipi) {
        super(marka, model, km);
        //super anahtar kelimesini ust sınıfa ait fonksiyon ya da degiskene erisim icin kullamilir.
        this.motorTipi = 'Hybrid'; 
    }

    detailedCarInfo() {
        return `${this.model} ${this.marka}  ${this.km} km ve ${this.motorTipi} motor tipine sahip`
    } 
}

let carTwo = new Hybrid('Toyota', 'Corolla 2022', '23000');
console.log(carTwo.carInfo()) //kalitim ile ata sinifin fonksiyonuna sahip.
console.log(carTwo.detailedCarInfo())

class Benzinli extends Car {
    constructor(marka, model, km, motorTipi) {
        super(marka, model, km);
        //this.marka = marka, this.model = model, this.km = km yazmak yerine super anahtar kelimesi ile ata sinifa ait constructor cagirdik.
        this.motorTipi = 'Benzinli';
    }

    aracTemelBilgi() {
        return super.carInfo();
    }
}

let carThree = new Benzinli('Renault', 'Clio 2016', '38232')
console.log('Temel Bilgi: ' + ' ' + carThree.aracTemelBilgi())