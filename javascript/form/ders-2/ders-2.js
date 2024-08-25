// const pattern = /[a-z]{6, 10}/
/*Yontem-1(input icerisinde pattern arama)
pattern suanda 6, 10 uzunlugunda (ifadenin icinde) kucuk harfleri alirsa true alir.
/^[a-z]{6, 10}$/ olursa baslangic ve bitiste userName icerigi olmalidir.
let sonuc = pattern.test(testEdilecekInput);
*/

/*Yontem-2(pattern icerisinde input aramak) 
*/
// let sonuc = userName.search(pattern); //eger ifade varsa sıfır veya sıfırdamn buyuk, yoksa -1 degeri doner.

const formControl = document.querySelector('.signupForm');
const message = document.querySelector('.message');

formControl.addEventListener('submit', e=> {
    e.preventDefault();
    const  userName = formControl.userName.value;
    const userNamePattern = /^[a-z]{6,10}$/;

    if(userNamePattern.test(userName)) {
        message.textContent = 'Basarili';
    }else {
        message.textContent = 'Lutfen kullanici adinizi 6-10 karakter uzunlugunda kucuk harfler şeklinde giriniz'
    }
})
