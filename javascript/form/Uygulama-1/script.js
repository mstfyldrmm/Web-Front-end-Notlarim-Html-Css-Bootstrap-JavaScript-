const answers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.questions-form');
const sonuc = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;

    userAnswers.forEach((item, index) => {
        if (answers[index] === item) {
            score += 25;
        }
    });

    sonuc.classList.remove('d-none');
    let i = 0;
    
    const puan = setInterval(() => {
        sonuc.querySelector('span').textContent = `${i}%`;

        if(i === score) {
            sonuc.querySelector('span').textContent = `${score}%`;
            clearInterval(puan);
        }
        i++;
    }, 10)
    
});


//animasyonlu yazi

// setTimeout(() => {
//     yapilacak isler
// }, süre);


// setTimeout(() => {
//     console.log('mustafa') //sayfa acildiginda ya da yenilendiginde 1 saniye sonra mustafa yazar
// }, 1000);


// setInterval(() => {
//     yapilacak isler
//     sayfa acildiginda ya da yenilendikten sonra verilen surede bir islemleri tekrar yapar.
//     Bunu durdurmak icin clearInterval(durdurulacak interval) ile durdururuz.
// }, sure)

// setInterval(() => {
//    console.log('mustafa') //Her 1s bir mustafa yazar.
// }, 1000)

// let i = 0;

// const sayac = setInterval(() => {
//     console.log('mustafa');
//     i++;

//     if(i >= 4) {
//         clearInterval(sayac);
//     }

// }, 1000)
//i = 4 olunca 4 kez calisir ve clearInterval metodu calisir.

