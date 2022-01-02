/*
T2: Joker -function 02()
Luo paikallinen taulukko jokerinumeroille käyttäen lausetta let jokers = new Array();
Käytä satunnaislukugeneraattorifunktiota ja luo 7 numeroa taulukkoon väliltä 0 ... 9 (for-toisto).
Tämän jälkeen kirjoita toinen for-toisto, jossa käyt läpi jokers-taulukon ensimmäisestä viimeiseen.
Tulostat jokaisen taulukkoalkion ja välilyönnin numeroiden väliin.
*/

// Tehdään satunnaislukugeneraattori
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

// Luo paikallinen taulukko jokerinumeroille käyttäen lausetta let jokers = new Array();
let jokers = new Array();
// luo 7 numeroa taulukkoon
for (let i = 0; i < 7; i++) {
    // väliltä 0 ... 9 (for-toisto).
    jokers.push(getRandomNumber(0, 9));
}
// Tämän jälkeen kirjoita toinen for-toisto, jossa käyt läpi jokers-taulukon ensimmäisestä viimeiseen.
for (let i = 0; i < jokers.length; i++) {
    // Tulostat jokaisen taulukkoalkion ja välilyönnin numeroiden väliin.
    document.getElementById('printHere').innerHTML += jokers[i] + ' ';
}
