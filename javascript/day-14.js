let fullName

try {
    let name = "Mustafa";
    let surName = "Yildirim"
    fullName = name + surname
} catch (error) {
    console.log(error.name); //hata adi
    console.log(error.message); //hata detayli mesaj
}

let age = prompt('Yasinizi giriniz: ?');

try {
    if(age < 18) throw new Error('Yasal uyari geregince 18 yasindan kucukler kullanamaz!!!');
} catch (error) {
    alert(error.message);
}
