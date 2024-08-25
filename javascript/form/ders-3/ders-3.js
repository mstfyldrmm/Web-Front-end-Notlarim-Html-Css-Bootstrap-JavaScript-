//Key-up eventi : Klavyeden elimizi cektigimizde tetiklenen key-up eventi
const formControl = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const userNamePattern = /^[a-z]{6,10}$/;

formControl.addEventListener('submit', e=> {
    const  userName = formControl.userName.value;
    e.preventDefault();
    if(userNamePattern.test(userName)) {
        message.textContent = 'Basarili';
    }else {
        message.textContent = 'Lutfen kullanici adinizi 6-10 karakter uzunlugunda kucuk harfler şeklinde giriniz'
    }
})


//eger patterne uygunsa border ozelligi yesil, degilse kirmizi olan kod
formControl.userName.addEventListener('keyup', e => {
    if(userNamePattern.test(e.target.value)) {
        formControl.userName.setAttribute('class', 'success');
        console.log(e.target.value);
    }else {
        formControl.userName.setAttribute('class', 'error');
    }
})