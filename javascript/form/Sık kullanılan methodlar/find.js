//Verilen kosul icin dogru olan ilk value return eder.
let puanlar = [10, 23, 43, 54, 43, 45, 21 -1];

let gecerliIlkNot = puanlar.find(value => {
        return value > 50;
});
console.log(gecerliIlkNot);