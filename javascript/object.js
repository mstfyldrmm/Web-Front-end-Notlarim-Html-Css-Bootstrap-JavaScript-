let ogrenci = {
    ad : 'mustafa',
    soyad : 'yildirim',
    yas : '22',
    email : 'mstffgfg',
    dersler : ['matematik', 'fizik', 'kimya'],
    login : function() {
        console.log('ogrenci giris yapti');
    },
    //function anahtar kelimesi cikarilabilir.
    logout () {
        console.log('ogrenci cikis yapti');
    },
    
    printLessons() {
        console.log(this);
        //console.log(dersler) --> dersler not defined hatasi aliriz
        console.log(this.dersler);
        this.dersler.forEach(item => {
            console.log(item);
        });
    }
}
ogrenci.login();
ogrenci.logout();
ogrenci.printLessons();

//math objesi
console.log(Math.PI);

let x = 3.4154;
console.log(Math.round(x)); //sayiyi yakin degere yuvarlar.
console.log(Math.ceil(x)); //sayiyi 1 uste yuvarlar.
console.log(Math.floor(x)); //sayiyi 1 alta yuvarlar.
console.log(Math.trunc(x)); //sayinin virgüllü kısmını atar.


const rastgele =  Math.random(); //0-1 arasi
console.log(rastgele);
console.log(rastgele * 100); //0-100 arasi