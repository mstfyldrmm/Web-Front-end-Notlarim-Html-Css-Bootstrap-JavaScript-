//MAP metodu: Dizilerin elemanlarini belirlenen duruma gore guncelleyip yeni dizi olarak doner.
let points = [50, 42, 32, 56, 65, 34];

let newPoinst = points.map(x => {
    return x += 10;    
})
console.log(newPoinst);

let students = [
    { name: 'Ahmet', point: 40 },
    { name: 'Ayse', point: 60 },
    { name: 'Musa', point: 30 },
    { name: 'Mustafa', point: 100 }
];

//50 altinda nota sahiplerin notlarini 10 puan artir. Digerlerine elleme
let newStudentsPoint = students.map(student =>{
    if(student.point < 50) {
        //return {name: student.name, point: student.point += 10} --> Uzun yol
        
        //dogru yol
        student.point += +10; //sadece degistirmek istedigimiz property guncelleriz.
    }else {
        return student;
    }
})
console.log(newStudentsPoint);
















//Elimizde, işçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 2500 TL'nin üzerinde olanlarınkine %5, altında olanlarınkine de %10 zam yapan bir array map oluşturalım.