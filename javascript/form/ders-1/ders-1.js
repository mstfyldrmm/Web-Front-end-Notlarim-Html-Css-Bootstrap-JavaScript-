const form = document.querySelector('.signupForm');
const userName = document.querySelector('#userName')

form.addEventListener('submit', e => {
    //form icerisindeki degere ulasma(inputtan)
    e.preventDefault(); //sayfanin surekli yenilenmesini engeller
    // console.log(userName.value);

    //formdan ulasma
    console.log(form.userName.value); //enter tusu basildiginda submit olur.
})