let names = ['Erica Mustermann', 'John Doe'];
let phoneNumbers = ['015712345678', '015798765432']
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += `
    <div>
        <input  type="text" id="name" placeholder="Name">
        <input type="text" id="phone" placeholder="Telefon">
        <button onclick="addContact()">Hinzufügen</button>
    </div>`;

    // input felder nicht leer abschicken mit if unf else if abfrage 

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i]
        //gibt var/constante einen bestimmten indexplatz

        content.innerHTML += `
            <div class="card"> 
                <b>Name:</b> ${name} <br>
                <b>Telefon:</b> ${phoneNumber} <br>
                <button onclick="deleteContact(${i})">Löschen</button>
            </div>
        `;// bestimmter platz wird als kontakt zur karte hinzugefügt
    }
}
function addContact() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    // == vergeleicht ob im feld was drin steht, ob beide leer sind
    if (document.getElementById('name').value == "") {
// wenn feld leer ist dann alarm
        alert('Bitte Name eingeben')
    } else if (document.getElementById('phone').value == ""){
// wenn das feld auch leer dann alarm
        alert('Bitte Nummer eingeben')
    } else {
// ansonsten ausführen
        names.push(name.value);
        phoneNumbers.push(phone.value);
        // fügt neuen kontakt zu Array
        render();
        save();
    }
}
function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    // löscht ausgewählten/angesprochen index

    render();
    save();
}
function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);
    let phoneNumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);
} // Arrays werden local gespeichert
function load() {
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');
    if (namesAsText && phoneNumbersAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    }
}