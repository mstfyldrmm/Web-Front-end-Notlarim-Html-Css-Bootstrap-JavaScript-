//Filter metodu : Diziyi verilen kosula gore filtreleyip yeni bir dizi olusturur.
const points = [50, 60, 55, 32, 45, 77];
let studentPassed = points.filter(point => {
    return point > 50;
})
//dizide 50 den buyuk olan elemanlari alir ve bu elemanlardan olusan diziyi return eder.
console.log(studentPassed);

let students = [
    { name: 'Ahmet', passed: true },
    { name: 'Ayse', passed: false },
    { name: 'Musa', passed: true },
    { name: 'Mustafa', passed: false }
];

// let gecenOgrenciler = students.filter(ogrenci => {
//     return ogrenci.passed;
// })

//kisayolu
let gecenOgrenciler = students.filter(ogrenci =>  ogrenci.passed);
console.log(gecenOgrenciler)