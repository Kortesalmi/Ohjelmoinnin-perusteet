// 1. Ensimmäinen ehtolause
// Luo muuttuja age ja anna sille arvoksi 5.
let age = 5;
// Kirjoita ehtolause, jossa testataan age-muuttujan arvon perusteella onko käyttäjä täysi-ikäinen.
if (age < 18) {
    // Tulosta alla olevaan laatikkoon "Olet alaikäinen", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age').innerHTML = 'Olet alaikäinen'
}

// 2. Ensimmäisen ehtolauseen tarkastus
// Muuta age-muuttujan arvoksi 20 ja varmista, että ehtolauseesi toimii.
let age2 = 20;
if (age2 < 18) {
    document.getElementById('age2').innerHTML = 'Olet alaikäinen'
} else {
    document.getElementById('age2').innerHTML = 'Olet täysi-ikäinen'
}

// 4. Ensimmäinen else-if-lause
//Lisää ehtolauseeseesi elseif-haara, jolla tulostetaan "Olet juuri saavuttanut täysi-ikäisyyden", jos age-muuttujan perusteella käyttäjä on tasan 18.
let age4 = 18;
if (age4 < 18 ) {
    document.getElementById('age4').innerHTML = 'Olet alaikäinen'
} else if (age4 == 18) {
    document.getElementById('age4').innerHTML = 'Olet juuri saavuttanut täysi-ikäisyyden'
} else {
    document.getElementById('age4').innerHTML = 'Olet täysi-ikäinen'
}

// 5. Vuorokauden ajan mukainen tervehdys
// Hae tämänhetken päiväys ja kellonaika
let currentDate = new Date();
let currentHour = currentDate.getHours();
// Kirjoita ehtolause, joka katsoo kellonajan perusteella tulostetaanko "Huomenta", "Päivää", "Iltaa" vai "Hyvää yötä".
if (currentHour < 12) {
    document.getElementById('greeting').innerHTML = 'Huomenta'
} else if (currentHour > 12 < 20) {
    document.getElementById('greeting').innerHTML = 'Päivää'
} else {
    document.getElementById('greeting').innerHTML = 'Iltaa'
}
// Kellonajan saat esimerkiksi käyttämällä Date()-konstruktoria ja getHours()-metodia.

// 6. Lomakkeen tarkastus
// Kirjoita alla olevalle lomakkeelle yksinkertainen tarkastus. Kun käyttäjä painaa Lähetä-painiketta, tarkista, että kaikissa kentissä on tietoa. Jos kaikissa kentissä on tietoa, näytä alert-box, jossa on viesti "Lomake lähetetty onnistuneesti", jos ei näytä viesti "Lomakkeella virhe! Täytä kaikki kentät".
// Huom! Miten estetään se, että lomaketta ei virhetilanteessa lähetetä?
document.getElementById('userForm').onsubmit = function() {

if(document.getElementById('firstname').value.length > 0 && document.getElementById('lastname').value.length > 0 && document.getElementById('ageInput').value.length > 0) {
    alert('Lomake lähetetty onnistuneesti');
    return true;
} else {
    alert('Lomakkeella virhe! Täytä kaikki kentät');
    return false;
}
}