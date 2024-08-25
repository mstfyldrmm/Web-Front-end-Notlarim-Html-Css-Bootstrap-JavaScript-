//JSON : Programlama dilleri arasında  veri depolama, veri iletmeyi sağlayan veri formatidir.
//key ler kesinlikle string olmalidir.

let sampleJSON = `[
    {
        "name": "Mustafa",
        "surname": "Yildirim"
    },
    {
        "name": "Gonul",
        "surname": "Yildirim"
    },
    {
        "name": "Mustafa",
        "surname": "Yazici"
    }
]`

//JSON to Object

let users = JSON.parse(sampleJSON);
console.table(users);

//object to json
let urunler = [
    {
        name: 'elma',
        price: '10TL'
    },
    {
        name: 'armut',
        price: '15TL'
    }

]

let urunlerJSON = JSON.stringify(urunler)
console.log(urunlerJSON)

//json verisinde tum keyler ya da value mudahale etme
let newEditedUsers = JSON.parse(sampleJSON, (key, value) => {
    return key == "name" ? value.toUpperCase() : value
});

console.log(newEditedUsers)

//JSON verisini filtrelemek
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
}

let edited = JSON.stringify(user, ['firstName', 'lastName', 'age', 10]) //istedigimiz key leri sectik. 10 ise bosluk ayarlamaya yarar
console.table(edited)