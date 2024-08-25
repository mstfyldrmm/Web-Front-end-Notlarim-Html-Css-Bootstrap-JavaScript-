const form = document.querySelector('.questions-form');
const answers = ['61', '5', '50', '5'];
const button = document.querySelector('.button');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;

    userAnswers.forEach((answer, index) => {
        if(answers[index] === answer) {
            score += 25;
        }
    });

    const sonuc = document.querySelector('.icerik');
    const puan = document.querySelector('.puan');
    sonuc.classList.remove('d-none');

    let i = 0;
    const x =  setInterval(() => {
        puan.textContent = `${i}%`;

        if(i === score) {
            puan.textContent = `${score}%`
            clearInterval(x);

            if(score == 100) {
                button.setAttribute('disabled', '')
            }
        }else {
            console.log('a')
            i++;
        }
    }, 10);

})