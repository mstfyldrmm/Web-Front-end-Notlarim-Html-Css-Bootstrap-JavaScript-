//Dizinin her degeri icin belirlenen işlevi yurutur sonuc olarak bir deger doner.
let notlar = [56, 65, 42, 54, 32, 12];
let sonuc = notlar.reduce((value, point) => {
    if (point > 50) {
        value++;
        //notlar elemanlarinin herbirine bakar. 50 den buyukler icin value degerini 1 artirir.
    }

    return value;
}, 0);
console.log(sonuc);

let students = [
    { name: 'can', point: 40},
    { name: 'emre', point: 60},
    { name: 'tugba', point: 30},
    { name: 'elif', point: 24},
    { name: 'can', point: 44}
];

let canTotalPoint = students.reduce((value, point) => {
    if(point.name == 'can') {
        value += point.point;
    }

    return value;
}, 0);

console.log(`Can adli ogrencinin total puani : ${canTotalPoint}`)